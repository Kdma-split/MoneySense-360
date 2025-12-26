from fastapi import APIRouter, Depends, status
from sqlmodel.ext.asyncio.session import AsyncSession
from backend.db.main import get_session
from .schemas import UserCreateModel, UserLoginModel, UserResponse
from .services import UserService
from fastapi.exceptions import HTTPException

auth_router = APIRouter()
user_service = UserService()

@auth_router.post("/signup", response_model=UserResponse)
async def signup(
    user_data: UserCreateModel,
    session: AsyncSession = Depends(get_session)
):
    if await user_service.user_exists(user_data.email, session):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User already exists"
        )
    return await user_service.create_user(user_data, session)

@auth_router.post("/login", response_model=UserResponse)
async def login(
    login_data: UserLoginModel,
    session: AsyncSession = Depends(get_session)
):
    return await user_service.login_user(login_data, session)

# @auth_router.post('/logout')
# async def logout():