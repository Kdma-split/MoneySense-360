from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from fastapi import HTTPException, status
from .models import User
from .schemas import UserCreateModel, UserLoginModel
from .utils import generate_passwd_hash, verify_passwd
from datetime import timedelta

class UserService:
    @staticmethod
    async def get_user_by_email(email: str, session: AsyncSession):
        statement = select(User).where(User.email == email)
        # res = await session.exec(statement)
        res = await session.execute(statement)
        # us = res
        # print("\n\n")
        # print(res.first())
        # print("\n\n")
        # print(us.scalars().first())
        return res.scalars().first()
    
    async def user_exists(self, email: str, session:AsyncSession):
        user = await self.get_user_by_email(email, session)
        # return user is None
        return user if user is not None else None
    
    # async def create_user(self, user_data: UserCreateModel, session: AsyncSession):
    #     user_data_dict = user_data.model_dump()
    #     pswd = generate_passwd_hash(user_data_dict['password'])
    #     user = User(**user_data_dict)
    #     # user.password = generate_passwd_hash(user_data_dict['password'])
    #     user.password = pswd
    #     # await session.add(new_user)
    #     session.add(user)
    #     await session.commit()
    #     await session.refresh(user)
    #     return user

    async def create_user(self, user_data: UserCreateModel, session: AsyncSession):
        user = User(
            username=user_data.username,
            email=user_data.email,
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            password=generate_passwd_hash(user_data.password)
        )
        session.add(user)
        await session.commit()
        await session.refresh(user)
        return user
    
    async def login_user(self, login_data: UserLoginModel, session: AsyncSession):
        user = await self.get_user_by_email(login_data.email, session)
        # if user and verify_passwd(login_data.password, user.password_hash):
        if user and verify_passwd(login_data.password, user.password):
            return user
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Wrong email or password"
        )
        # if user is not None:
        #     passwd_valid = verify_passwd(login_data.password, user.password_hash)
        #     if passwd_valid:
        #         return user

    # async def logout(self):
    