# from fastapi import FastAPI, File, UploadFile
# from sqlmodel import select
# from sqlmodel.ext.asyncio.session import AsyncSession
# import shutil
# from typing import List
# from .models import Upload
# import os
# from datetime import datetime

# UPLOAD_DIR = os.getcwd().parent + f"/uploaded_files/{datetime.date()}"

# async def create_upload_file(session: AsyncSession, file: UploadFile = File(...)):
#     print(f"Uploading: {file.filename}, Type: {file.content_type}")
    
#     safe_name = os.path.basename(file.filename)
#     file_path = os.path.join(UPLOAD_DIR, safe_name)

#     # Save the file to disk
#     with open(file_path, "wb") as buffer:
#         # Use a threadpool for blocking I/O operations like shutil.copyfileobj
#         shutil.copyfileobj(file.file, buffer)
    
#     upload = Upload(
#         file_loc = file_path,
#         file_name = file.filename
#     )
#     session.add(upload)
#     await session.commit()
#     session.refresh(upload)

#     return upload

# async def create_upload_files(session: AsyncSession, files: List[UploadFile] = File(...)):
#     uploads = []

#     for file in files:
#         print(f"Uploading: {file.filename}, Type: {file.content_type}")
    
#         safe_name = os.path.basename(file.filename)
#         file_path = os.path.join(UPLOAD_DIR, safe_name)

#         # Save the file to disk
#         with open(file_path, "wb") as buffer:
#             # Use a threadpool for blocking I/O operations like shutil.copyfileobj
#             shutil.copyfileobj(file.file, buffer)

#         upload = Upload(
#             file_loc = file_path,
#             file_name = file.filename
#         )
#         session.add(upload)
#         await session.commit()
#         session.refresh(upload)

#         db_upload = await session.get(Upload, upload.id)
#         res = session.get(Upload, upload.id)

#         if res is None: 
#             uploads.clear()
#             break

#         uploads.append(upload)

        
#     return uploads







from fastapi import UploadFile, HTTPException, status
from sqlmodel.ext.asyncio.session import AsyncSession
from .models import Upload
from typing import List
from datetime import datetime
from pathlib import Path
import os
from starlette.concurrency import run_in_threadpool
import uuid

ALLOWED_MIME_TYPES = {
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}

ALLOWED_EXTENSIONS = {".csv", ".xlsx"}


def get_upload_dir() -> Path:
    path = Path("uploaded_files") / datetime.utcnow().strftime("%Y-%m-%d")
    path.mkdir(parents=True, exist_ok=True)
    return path


async def save_file_to_disk(file: UploadFile, destination: Path):
    await run_in_threadpool(
        lambda: destination.write_bytes(file.file.read())
    )


def validate_file(file: UploadFile):
    ext = Path(file.filename).suffix.lower()

    if file.content_type not in ALLOWED_MIME_TYPES or ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Only .csv and .xlsx files are allowed"
        )
    
async def create_upload_file(
    user_id: uuid.UUID,
    session: AsyncSession,
    file: UploadFile
):
    validate_file(file)

    upload_dir = get_upload_dir()
    safe_name = os.path.basename(file.filename)
    file_path = upload_dir / safe_name

    await save_file_to_disk(file, file_path)

    upload = Upload(
        file_name=safe_name,
        file_loc=str(file_path),
        user_id=user_id
    )

    session.add(upload)
    await session.commit()
    await session.refresh(upload)

    return upload

async def create_upload_files(
    user_id: uuid.UUID,
    session: AsyncSession,
    files: List[UploadFile]
):
    uploads: List[Upload] = []
    upload_dir = get_upload_dir()

    async with session.begin():
        for file in files:
            validate_file(file)

            safe_name = os.path.basename(file.filename)
            file_path = upload_dir / safe_name

            await save_file_to_disk(file, file_path)

            upload = Upload(
                file_name=safe_name,
                file_loc=str(file_path),
                user_id=user_id
            )

            session.add(upload)
            uploads.append(upload)

    # refresh AFTER transaction
    for upload in uploads:
        await session.refresh(upload)

    return uploads
