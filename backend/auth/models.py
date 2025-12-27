# from sqlModel import SQLModel, Field, Column
# import sqlalchemy.dialects.postgresql as pg
# from datetime import datetime
# from typing import Optional
# import uuid

# class User(SQLModel, table=True):
#     __tablename__ = 'users'
#     uid: uuid.UUID = Field(
#         sa_column=Column(
#             pg.uuid
#             nullable=False
#             primary_key=True
#             default=uuid.uuid4
#         )
#     )
#     username: str
#     email: str
#     first_name: str
#     last_name: str
#     password_hash: str = Field(exclude=True)
#     user_uid: Optional[uuid.UUID] = Field(default=None, foreign_key='users.uid')
#     created_at: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.now))
#     updated_at: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.now))


# def __repr__(self):
#     return f"User  ---  {self.usernamme}"






from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from typing import List, TYPE_CHECKING
import uuid

if TYPE_CHECKING:
    from backend.forms.models import RiskForm
    from backend.uploads.models import Upload

class User(SQLModel, table=True):
    __tablename__ = "users"

    uid: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        sa_column=Column(
            UUID(as_uuid=True),
            primary_key=True
        )
    )

    username: str = Field(index=True, unique=True)
    email: str = Field(index=True, unique=True, primary_key=True)
    first_name: str
    last_name: str
    password: str

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    risk_forms: List["RiskForm"] = Relationship(back_populates="user")
    uploads: List['Upload'] = Relationship(back_populates="user")
    
    def __repr__(self):
        return f"<User {self.email}>"
