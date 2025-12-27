from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from fastapi import HTTPException, status
from .models import RiskForm
from .schemas import RiskFormCreateModel
from .utils.RiskProfileService import RiskProfileService
import uuid
from sqlalchemy.exc import SQLAlchemyError


class RiskFormService:

    @staticmethod
    async def create_form(
        form_data: RiskFormCreateModel,
        session: AsyncSession
    ):
        try:
            async with session.begin():
                risk_form = RiskForm(**form_data.model_dump())
                # print("\n", risk_form, "\n")
                session.add(risk_form)

            # Refresh AFTER commit
            await session.refresh(risk_form)

        except SQLAlchemyError as e:
            await session.rollback()
            print("\n\nERROR OCCURED...\n\n", e)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to store risk form"
            ) from e

        # Profile generation OUTSIDE DB transaction
        risk_profile = RiskProfileService().generate_profile(
            form_data.model_dump()
        )

        return {
            "form": risk_form,
            "profile": risk_profile
        }

    @staticmethod
    async def get_form(
        user_id: uuid.UUID,
        form_id: uuid.UUID,
        session: AsyncSession
    ):
        stmt = (
            select(RiskForm)
            .where(
                RiskForm.uid == form_id,
                RiskForm.user_id == user_id
            )
        )

        res = await session.execute(stmt)
        form = res.scalars().first()

        if not form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Risk form not found"
            )

        return form

    @staticmethod
    async def get_all_forms(
        # user_id: str,
        user_id: uuid.UUID,
        session: AsyncSession
    ):
        stmt = select(RiskForm).where(RiskForm.user_id == user_id)

        res = await session.execute(stmt)
        return list(res.scalars().all())
