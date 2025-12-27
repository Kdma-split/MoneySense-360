from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.auth.routes import auth_router
from backend.forms.routes import riskForm_router
from backend.uploads.routes import upload_router
from contextlib import asynccontextmanager
from backend.db.main import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("SERVER IS STARTING...")
    await init_db()
    print("SERVER IS RUNNING... DB CONNECTED")
    yield
    print("SERVER TERMINATING...")

app = FastAPI(
    title="MoneySense 360",
    description="Authentication Service",
    version="v1",
    lifespan=lifespan
)

# CORS middleware is applied before routing, as required.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=[
        "Authorization",
        "Content-Type"
    ],
)

@app.get("/")
def read_root():
    return {"message": "Moneysense 360 server is runnibg..."}

app.include_router(auth_router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(riskForm_router, prefix="/api/v1/risk-form", tags=["Risk-From"])
app.include_router(upload_router, prefix="/api/v1/uploads", tags=["Uploads"])
