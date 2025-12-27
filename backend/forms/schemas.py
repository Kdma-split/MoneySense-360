from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import List, Optional
import uuid

class RiskProfileResponse(BaseModel):
    risk_score: int
    risk_band: str
    # portfolio_allocation: Optional["str"] 


class RiskFormResponse(BaseModel):
    uid: uuid.UUID 
    age: int 
    income: int 
    emergency_months: List[str]
    growth: str
    emi: int
    volatility: str
    job_type: str
    horizon: int
    dependants: int
    created_at: datetime = Field(default_factory=datetime.now())

    class Config:
        from_attributes = True

class RiskFormWithProfileResponse(BaseModel):
    form: RiskFormResponse
    profile: RiskProfileResponse
    
    class Config:
        from_attributes = True

class RiskFormCreateModel(BaseModel):
    age: int 
    income: int 
    emergency_months: List[str]
    growth: str
    emi: int
    volatility: str
    job_type: str
    horizon: int
    dependants: int
    user_id: uuid.UUID
    
