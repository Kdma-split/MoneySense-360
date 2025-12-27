from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, JSON
from sqlalchemy.dialects.postgresql import UUID, JSONB, ARRAY
from typing import List, TYPE_CHECKING
from datetime import datetime
import uuid

if TYPE_CHECKING:
    from backend.auth.models import User


class RiskForm(SQLModel, table=True):
    __tablename__ = "risk_form"

    uid: uuid.UUID = Field(
        default_factory=uuid.uuid4,
        sa_column=Column(
            UUID(as_uuid=True),
            # Foreign_key(users.uid),
            primary_key=True,
            # Foreign_key=True
        )
    )

# foreign key
    user_id: uuid.UUID = Field(
        foreign_key="users.uid",
        nullable=False,
        sa_type=UUID(as_uuid=True)
    )

    age: int
    income: int
    # emergency_months: List[str]      #     raise ValueError(f"{type_} has no matching SQLAlchemy type")  ---  ValueError: <class 'list'> has no matching SQLAlchemy type
    # emergency_months: str
    # emergency_months: list[str] = Field(
    #     # sa_column=Column(JSONB, nullable=False)
    #     sa_column=Column(ARRAY(String), nullable=False)
    # )    # Supported only in postgres dialect...
    emergency_months: list[str] = Field(
        sa_column=Column(JSON, nullable=False)
    )
    growth: str
    emi: int
    volatility: str
    job_type: str
    horizon: int
    dependants: int

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    user: "User" = Relationship(back_populates="risk_forms")

    def __repr__(self):
        return f"<Form {self.uid}>"