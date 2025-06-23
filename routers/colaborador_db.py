from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.colaborador import Colaborador
from db.schemas.colaborador import colaborador_schema, colaboradors_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/colaboradordb", tags=["colaboradordb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Colaborador])
async def colaboradors():
    return colaboradors_schema(db_client.colaboradors.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_colaborador(name: str = Form(...), bi: str = Form(...), email: str = Form(...), phone: str = Form(...), empresa: str = Form(), salario: str = Form(),
    profissao: str = Form(), endereco: str = Form(), idinv: str = Form(), img: UploadFile = File(...)):
    # return user
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    if not colaboradorExist(email):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Colaborador Existed")

    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if img.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Geração de um nome único para a imagem
    now = datetime.now()
    img.filename = f"{uuid.uuid4()}.jpg"
    contents = await img.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/colaborador/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    colaborador = {
        "id": '---',
        "name": name,
        "salario": salario,
        "empresa": empresa,
        "img": img.filename,
        "bi": bi,
        "phone": phone,
        "email": email,
        "profissao": profissao,
        "endereco": endereco,
        "datacreate": data_hora_minuto,
        "desabled": False,
        "idinv": idinv
    }
    with open(f"assets/colaborador/{img.filename}", "wb") as f:
        f.write(contents)

    colaborador_dict = dict(colaborador)
    del colaborador_dict["id"]

    id = db_client.colaboradors.insert_one(colaborador_dict).inserted_id

    new_colaborador = colaborador_schema(db_client.colaboradors.find_one({"_id": id}))

    return Colaborador(**new_colaborador)


def colaboradorExist(email: str):
    try:
        colaborador = db_client.colaboradors.find_one({"email": email})
        return True
    except:
        return False

def search_colaborador(id: str):
    #print(id)
    try:
        colaborador = db_client.colaboradors.find_one({"_id": ObjectId(id)})
        return colaborador_schema(colaborador)
    except:
        return {"error": "Colaborador Not Found"}

@router.put("/", response_model=Colaborador)
async def update_colaborador(id: str = Form(...), name: str = Form(...), bi: str = Form(...), email: str = Form(...), phone: str = Form(...), empresa: str = Form(), salario: str = Form(),
    profissao: str = Form(), desable: str = Form(), endereco: str = Form(), idinv: str = Form(), img: UploadFile = File(...)):
    colaborador = search_colaborador(id);

    if (colaborador["img"] != img.filename):
        img.filename = f"{uuid.uuid4()}.jpg"
        contents = await img.read()

        with open(f"assets/colaborador/{img.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/colaborador/')
            os.remove(colaborador["img"])
            os.getcwd()
    colab = {
        "id": '---',
        "name": name,
        "salario": salario,
        "empresa": empresa,
        "img": img.filename,
        "bi": bi,
        "phone": phone,
        "email": email,
        "profissao": profissao,
        "endereco": endereco,
        "datacreate": colaborador["datacreate"],
        "desabled": desable,
        "idinv": idinv
    }
    colaborador_dict = dict(colab)
    del colaborador_dict["id"]

    try:
        db_client.colaboradors.find_one_and_replace(
            {"_id": ObjectId(id)}, colaborador_dict)
    except:
        return {"error": "Erro ao atualizar o colaborador"}

    return search_colaborador("_id", id)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_colaborador(id: str):
    found = db_client.colaboradors.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Candidato not deleted")


# Path
@router.get("/{id}")
async def colaborador(id: str):
    return search_colaborador(id)

@router.get("/allempresa/{idinv}", response_model=list[Colaborador])
async def allcolaboradors(idinv: str):
    try:
        colaboradors = db_client.colaboradors.find({"idinv": idinv})
        return colaboradors_schema(colaboradors)
    except Exception as e:
        return {"error": f"Erro ao buscar todos colaboradoress desse dessa empresa: {str(e)}"}
