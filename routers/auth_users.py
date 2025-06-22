from fastapi import FastAPI, Depends, HTTPException, status, APIRouter
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt
from jwt.exceptions import InvalidTokenError, PyJWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

from db.schemas.user import user_schema, users_schema
from db.client import db_client
from db.models.user import User

ALGORITHM = "HS256"
ACCESS_TOKEN_DURATION = 50
SECRET = "28d5dcd180103ec22d6ed7c3e5a0b34dae97647dc5ada2abdb38fb1b733b097e"

router = APIRouter(prefix="/jwtauth", tags=["jwtauth"],
                   responses={402: {"message": "Not Found"}})

oauth2 = OAuth2PasswordBearer(tokenUrl="login")

crypt = CryptContext(schemes=["sha256_crypt"])


# Entidade User

class UserDB(User):
    password: str


# 1 password 123456, 2 password 12bb56
# users_db = users_schema(db_client.users.find())


async def auth_user(token: str = Depends(oauth2)):
    exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                              detail="Authetication invalid!",
                              headers={"WWW-Authenticate": "bearer"})
    try:
        email = jwt.decode(token, SECRET, algorithms=[ALGORITHM]).get("sub")
        if email is None:
            raise exception

    except PyJWTError:
        raise exception

    user = db_client.users.find_one({"email": email})
    return user_schema(user)


async def current_user(user: User = Depends(auth_user)):
    if user["desabled"]:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="User Inativo!")

    return user


@router.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends()):
    user_db = db_client.users.find_one({"email": form.username})
    if user_db is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username incorrect, Try again!")

    user = db_client.users.find_one({"email": form.username})

    if not crypt.verify(form.password, user["password"]):
        print(f'{crypt.verify(form.password, user["password"])}')
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Password incorrect, Try again!")

    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_DURATION)
    print(expire)
    access_token = {
        "sub": user["email"],
        "exp": expire
    }

    return {"access_token": jwt.encode(access_token, SECRET, algorithm=ALGORITHM), "token_type": "bearar",
            "type_user": user["tipo"]}


@router.get("/users/me")
async def me(user: User = Depends(current_user)):
    return user

# uvicorn main:app --reload