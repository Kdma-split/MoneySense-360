# from sqlmodel import create_engine, text, SQLModel
# from sqlalchemy.ext.asyncio import AsyncSession
# from sqlalchemy.orm import sessionMaker
# from backend.config import Config

# async_engine = AsyncEngine(
#     create_engine(
#         url=Config.DATABASE_urll,
#         echo=True
#     )
# )

# async def init_db():
#     async with async_engine.begin() as conn:
#         from backend.auth.models import User
#         await conn.run_sync(SQLModel.metadate.create_all)

# async def get_session() -> AsyncSession:
#     Session = sessionMaker(
#         bind=async_engine,
#         class_=AsyncSession,
#         expire_on_commit=False
#     )
#     async with Session as session:
#         yield session







from sqlmodel import SQLModel
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from backend.config import Config

async_engine = create_async_engine(
    Config.DATABASE_URL,
    echo=True,
    future=True
)

async_session = sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False
)

async def init_db():
    async with async_engine.begin() as conn:
        from backend.auth.models import User
        await conn.run_sync(SQLModel.metadata.create_all)

async def get_session():
    async with async_session() as session:
        yield session
