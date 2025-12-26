from pydantic_settings import BaseSettings,SettingsConfigDict

class Settings(BaseSettings):
    DATABASE_URL: str
    JWT_SECRET: str
    JWT_ALGORITHM: str

    model_config = SettingsConfigDict(
        # env_file='.env',   # ERROR: Pydantic does NOT search recursively.
# It looks for .env relative to the current working directory (CWD)
# → which is where uvicorn is launched from.
# You are launching from:
# ~/Desktop/moneysense360
# But your backend package is:
# ~/Desktop/moneysense360/backend
        env_file="backend/.env",
        extra='ignore',
        case_sensitive=False
    )

Config = Settings()