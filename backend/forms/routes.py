# from fastapi import Request
from fastapi import APIRouter, Depends, status, Header
from sqlmodel.ext.asyncio.session import AsyncSession
from backend.db.main import get_session
from .schemas import RiskFormCreateModel, RiskFormResponse, RiskFormWithProfileResponse
# from .utils.RiskProfileService import RiskProfileService
from .services import RiskFormService
from fastapi.exceptions import HTTPException
from typing import List
import uuid

riskForm_router = APIRouter()
riskForm_service = RiskFormService()

# @riskForm_router.post("/risk-form/create", response_model=RiskProfileService)
@riskForm_router.post("/create", response_model=RiskFormWithProfileResponse)
async def create_form(
    form_data: RiskFormCreateModel,
    session: AsyncSession = Depends(get_session)
):
    return await riskForm_service.create_form(form_data, session)

# @riskForm_router.post("/risk-form/{user_id}", response_model=RiskFormResponse)
@riskForm_router.get("/", response_model=List[RiskFormResponse])
async def findForm(
    # user_id: uuid.UUID,
    # request: Request,
    user_id: uuid.UUID = Header(...),
    session: AsyncSession = Depends(get_session)
):
    # user_id = request._headers.get("user_uid")
    return await riskForm_service.get_all_forms(user_id, session)

# @riskForm_router.post("/risk-form/{user_id}/{form_id}", response_model=RiskFormResponse)
@riskForm_router.post("/{form_id}", response_model=RiskFormResponse)
async def findForm(
    form_id: uuid.UUID,
    user_id: uuid.UUID = Header(...),
    session: AsyncSession = Depends(get_session)
):
    return await riskForm_service.get_form(user_id, form_id, session)
