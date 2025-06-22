from fastapi import  FastAPI, APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
#from jose
import jwt
from jwt.exceptions import InvalidTokenError, PyJWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

ALGORITHM = "HS256"
ACCESS_TOKEN_DURATION = 1
SECRET = "28d5dcd180103ec22d6ed7c3e5a0b34dae97647dc5ada2abdb38fb1b733b097e"

app = FastAPI()



oauth2 = OAuth2PasswordBearer(tokenUrl="login")

crypt = CryptContext(schemes=["bcrypt"])

class User(BaseModel):
    name: str
    lastname: str
    img: str
    phone: str
    email: str
    password: str
    idcountry: str
    tipo: str
    desabled: bool



class UserDB(User):
    password: str

users_db = {
    "mouredev": {
        "name": "mouredev",
        "lastname": "Brais Moure",
        "phone": "",
        "img": "",
        "email": "braismoure@mourede.com",
        "idcountry": "2",
        "tipo": "EMPREENDEDOR",
        "disabled": False,
        "password": "$2a$04$mJoi3HDOZzRAV9ChgPb9UObWRXhl8mQUaoXvAmFMtUslKqs8V7rQi" #123456
    },
    "mouredev2": {
        "name": "mouredev2",
        "lasname": "Brais Moure 2",
        "phone": "",
        "img": "",
        "email": "braismoure2@mourede.com",
        "idcountry": "1",
        "tipo": "INVESTIDOR",
        "disabled": True,
        "password": "$2a$04$xOdYRkHEXYMxP.tqQuv8FumY6Pk1r8W0iDfT7Yf06z7jX./TAVNZW" #654321
    }
}
def search_user_db(email: str):
    if email in users_db:
        return UserDB(**users_db[email])

@app.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends()):
    #print(users_db[form.username])
    #print(users_db.get(form.username))
    #print(users_db)
    user_db = None
    for usuario, dados in users_db.items():
        print(dados["email"])
        if dados['email'] == form.username:
            user_db = dados

    if not user_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="[ERRO] Usuário não existe. Cria uma conta!")

    #user = search_user_db(form.username)

    #print(user)

    #crypt.verify(form.password, user['password'])

    if not crypt.verify(form.password, user_db['password']):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="[ERRO] Senha Incorreta!")

    access_token = {"sub": user_db['name'],
                    "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_DURATION)}

    return {"access_token": jwt.encode(access_token, SECRET, algorithm=ALGORITHM), "token_type": "bearer"}


async def auth_user(token: str = Depends(oauth2)):

    exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciales de autenticación inválidas",
        headers={"WWW-Authenticate": "Bearer"})

    try:
        username = jwt.decode(token, SECRET, algorithms=[ALGORITHM]).get("sub")
        if username is None:
            raise exception

    except PyJWTError:
        raise exception

    return search_user(username)

def search_user(username: str):
    if username in users_db:
        return User(**users_db[username])

async def current_user(user: User = Depends(auth_user)):
    if user.disabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Usuario inactivo")

    return user

@app.get("/users/me")
async def me(user: User = Depends(current_user)):
    return user


