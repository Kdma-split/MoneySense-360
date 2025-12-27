from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid
from typing import Optional
from backend.auth.models import User

class Upload(SQLModel, table=True):
    __tablename__ = "uploads"

    uid: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        primary_key=True,
        nullable=False
    )

# foreign_key
    user_id: uuid.UUID = Field(
        foreign_key="users.uid",
        nullable=False,
        sa_type=UUID(as_uuid=True)
    )

    file_name: str = Field(nullable=False)
    file_loc: str = Field(nullable=False)

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    user: User = Relationship(back_populates="uploads")

    def __repr__(self):
        return f"<file {self.file_loc}>"