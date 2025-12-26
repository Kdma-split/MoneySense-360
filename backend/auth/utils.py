from passlib.context import CryptContext
from datetime import datetime, timedelta
from backend.config import Config
import jwt
import logging
import uuid

passwd_context = CryptContext(
    # schemes=['bcrypt']
    schemes=['argon2']
)

def generate_passwd_hash(password):
    hash = passwd_context.hash(password)
    return hash

def verify_passwd(passwd, passwd_hash):
    return passwd_context.verify(passwd, passwd_hash)

# import hashlib
# from passlib.context import CryptContext

# passwd_context = CryptContext(
#     schemes=["bcrypt"],
#     deprecated="auto"
# )

# def _prehash(password: str) -> str:
#     return hashlib.sha256(password.encode("utf-8")).hexdigest()

# def generate_passwd_hash(password: str) -> str:
#     return passwd_context.hash(_prehash(password))

# def verify_passwd(password: str, hashed_password: str) -> bool:
#     return passwd_context.verify(_prehash(password), hashed_password)
