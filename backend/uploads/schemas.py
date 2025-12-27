from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import List
import uuid

class SingleFileCreationModel(BaseModel):
    uid: uuid.UUID
    file_name: str
    file_loc: str
    created_at: datetime

    class Config:
        from_attributes = True

class MultipleFilesCreationModel(BaseModel):
    files_list: List[SingleFileCreationModel]
