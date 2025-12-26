from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import Optional
import uuid

class UserResponse(BaseModel):
    uid: uuid.UUID
    username: str
    email: EmailStr
    first_name: str
    last_name: str
    created_at: datetime

    class Config:
        from_attributes = True

class UserCreateModel(BaseModel):
    username: str = Field(max_length=30)
    email: EmailStr
    # password_hash: str = Field(min_length=8)
    password: str = Field(min_length=8)
    first_name: str
    last_name: str

class UserLoginModel(BaseModel):
    email: str
    password: str
