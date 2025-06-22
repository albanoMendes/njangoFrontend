from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.user import User
from db.schemas.user import user_schema, users_schema
from db.client import db_client
import os
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange
# Import smtplib for the actual sending function
import smtplib
from email.mime.multipart import MIMEMultipart
# from email.MIMEMultipart import MIMEMultipart
from email.mime.text import MIMEText
from random import randrange
from datetime import datetime
import uuid
from bson import ObjectId
from passlib.apps import custom_app_context as pwd_context
from passlib.context import CryptContext
from random import randrange

router = APIRouter(prefix="/usersdb", tags=["usersdb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

# router = APIRouter()
# app = FastAPI()
# user: andremiranda12@gmail.com senha: 1212aaa, INVESTIDOR
# andreprj@gmail.com senha: 12ooo72, FINANCE
# josebastooos@gmail.com senha: 12ooo72, EMPREENDEDOR
# humalokut@gmail.com senha: kut00122,
# dembopedro@gmail.com senha: de23888bo
# mirapanzo@gmail.com senha: merida123,
# jacintohumaloo11@gmail.com senha: 12panzo12
# pedrosurt@gmail.com, albanomendes33@gmail.com senha: 570110
# mellanebritto@gmail.com senha: melaneAA12 EDITOR
# miltonebritto@gmail.com senha: melaneAA12 FMANEGER
# marinzola@gmail.com, senha: 12aamari234 RESEARCH
# neurethpedro@gmail.com senha: 12aam142 RH
# claudiamira2@gmail.com senha: toptopto
users_list = []


@router.get("/", response_model=list[User])
async def users():
    return users_schema(db_client.users.find())


@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_user(name: str = Form(...), lastname: str = Form(...), email: str = Form(...), phone: str = Form(...), password: str = Form(), idcountry: str = Form(),
    tipo: str = Form(), img: UploadFile = File(...)):
    # return user
    if not userExist(email):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Existed")


    # Verificação se o tipo de arquivo é permitido
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if img.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Geração de um nome único para a imagem
    now = datetime.now()
    img.filename = f"{uuid.uuid4()}.jpg"
    contents = await img.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/usuarios/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    #dt_string = {now.strftime("%d/%m/%Y %H:%M:%S")}+"_"+{img.name}
    # print("date and time =", dt_string)
    user = {
        "id": "string",
        "name": name,
        "lastname": lastname,
        "img": img.filename,
        "email": email,
        "phone": phone,
        "password": password,
        "idcountry": idcountry,
        "tipo": tipo,
        "desabled": False,
        "cod": "------"
    }

    with open(f"assets/usuarios/{img.filename}", "wb") as f:
        f.write(contents)

    #password = str(randrange(100000, 1000000, 2))
    #print(password)

    # Create a text/plain message
    # msg = EmailMessage()
    # msg = MIMEMultipart()
    # you == the recipient's email address
    # message = f'Perfil Criado \nUsuario: {user.email} \nSenha: {password} \n\nOvertime&NL'
    # msg['Subject'] = 'Senha de Acesso'
    # msg['From'] = 'overtimenl47@gmail.com'
    # msg['To'] = user.email

    # msg.attach(MIMEText(message))

    # Send the message via our own SMTP server.
    # mailserver = smtplib.SMTP('smtp.gmail.com', 587)
    # mailserver.ehlo()
    # mailserver.starttls()
    # mailserver.ehlo()
    # mailserver.login('overtimenl47@gmail.com', 'lslg wfph uouj kswo')

    # mailserver.sendmail('overtimenl47@gmail.com', user.email, msg.as_string())

    # mailserver.quit()
    # s = smtplib.SMTP('localhost')
    # s.send_message(msg)
    # s.quit()
    # define hashing parameters
    hasher = CryptContext(schemes=["sha256_crypt"])

    # hash the user password
    hash1 = hasher.hash(password)

    user_dict = dict(user)
    del user_dict["id"]
    user_dict["password"] = hash1
    user_dict["desabled"] = False

    id = db_client.users.insert_one(user_dict).inserted_id

    new_user = user_schema(db_client.users.find_one({"_id": id}))

    return User(**new_user)


def userExist(email: str):
    try:
        user = db_client.users.find_one({"email": email})
        return True
    except:
        return False


@router.put("/", response_model=User)
async def update_user(id: str = Form(...), name: str = Form(...), lastname: str = Form(...), email: str = Form(...), phone: str = Form(...), idcountry: str = Form(),
    img: UploadFile = File(...), desable: str = Form()):
    # found = False
    user = search_user(id);
    # print(publicidade)

    # Verificação se o tipo de arquivo é permitido
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if img.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    if (user["img"] != img.filename):
        img.filename = f"{uuid.uuid4()}.jpg"
        contents = await img.read()

        with open(f"assets/usuarios/{img.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/usuarios/')
            os.remove(user["img"])
            os.getcwd()
    #if (user["tipo"] == "Inve")
    user = {
        "id": id,
        "name": name,
        "lastname": lastname,
        "img": img.filename,
        "email": email,
        "phone": phone,
        "idcountry": idcountry,
        "desabled": desable,
        "cod": "------"
    }
    user_dict = dict(user)
    del user_dict["id"]

    try:
        db_client.users.find_one_and_replace(
            {"_id": ObjectId(id)}, user_dict)
    except:
        return {"error": "No se ha actualizado el usuario"}

    return search_user("_id", id)

    # for index, saved_user in enumerate(users_list):
    #    if saved_user.id == user.id:
    #        users_list[index] = user
    #        found = True

    # if not found:
    #    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    # else:
    #    return user


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(id: str):
    found = db_client.users.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not deleted")


# Path
@router.get("/{id}")
async def user(id: str):
    return search_user(id)


# Query ?id= Numero
@router.get("/userquery/")
async def user(id: str):
    return search_user(id)


def userExist(email: str):
    try:
        user = db_client.users.find_one({"email": email})
        return True
    except:
        return False


def search_user(id: str):
    print(id)
    try:
        user = db_client.users.find_one({"_id": ObjectId(id)})
        return user_schema(user)
    except:
        return {"error": "User Not Found"}


# defult busca
def search_user_default(field: str, key):
    try:
        user = db_client.users.find_one({field: key})
        return User(**user_schema(user))
    except:
        return {"error": "No se ha encontrado el usuario"}


@router.put("/changepassword", status_code=status.HTTP_201_CREATED)
async def update_password(email: str = Form(...), password: str = Form(...)):

    hasher = CryptContext(schemes=["sha256_crypt"])

    # hash the user password
    hash1 = hasher.hash(password)

    user_dict = dict(user)
    del user_dict["id"]
    user_dict["password"] = hash1


@router.put("/updatepassword", status_code=status.HTTP_201_CREATED)
async def update_password(email: str = Form(...)):
    if not userExist(email):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Existed")
    # password = str(randrange(100000, 1000000, 2))
    # print(password)

    # Create a text/plain message
    # msg = EmailMessage()
    # msg = MIMEMultipart()
    # you == the recipient's email address
    # message = f'Perfil Criado \nUsuario: {user.email} \nSenha: {password} \n\nOvertime&NL'
    # msg['Subject'] = 'Senha de Acesso'
    # msg['From'] = 'overtimenl47@gmail.com'
    # msg['To'] = user.email

    # msg.attach(MIMEText(message))

    # Send the message via our own SMTP server.
    # mailserver = smtplib.SMTP('smtp.gmail.com', 587)
    # mailserver.ehlo()
    # mailserver.starttls()
    # mailserver.ehlo()
    # mailserver.login('overtimenl47@gmail.com', 'lslg wfph uouj kswo')

    # mailserver.sendmail('overtimenl47@gmail.com', user.email, msg.as_string())

    # mailserver.quit()
    # s = smtplib.SMTP('localhost')
    # s.send_message(msg)
    # s.quit()
    # define hashing parameters
