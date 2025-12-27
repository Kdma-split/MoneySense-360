from fastapi import APIRouter, File, UploadFile, HTTPException, status, Depends, Header
from .services import create_upload_file, create_upload_files 
from sqlmodel.ext.asyncio.session import AsyncSession
from backend.db.main import  get_session
from .schemas import SingleFileCreationModel, MultipleFilesCreationModel
from typing import List
import uuid

upload_router = APIRouter()

@upload_router.post("/file/", response_model=SingleFileCreationModel)
async def upload_file(
    user_id: uuid.UUID = Header(...),
    session: AsyncSession=Depends(get_session),
    file: UploadFile=File(...)
):
    res = await create_upload_file(user_id, session, file)
    if not res:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Failed to upload document in db"
        )
    return res

@upload_router.post("/files/", response_model=MultipleFilesCreationModel)
async def upload_files(
    user_id: uuid.UUID = Header(...),
    session: AsyncSession=Depends(get_session),
    file: List[UploadFile]=File(...)
):
    res = await create_upload_files(user_id, session, file)
    
    if not res:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Failed to upload document in db"
        )
    # return res 
    return {"files_list": res}
