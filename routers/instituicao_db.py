from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.instituicao import Instituicao
from db.schemas.instituicao import instituicao_schema, instituicaos_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/instituicaodb", tags=["instituicaodb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Instituicao])
async def instituicaos():
    return instituicaos_schema(db_client.instituicaos.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_instituicao(name: str = Form(...), area: str = Form(...), semestre: str = Form(...), monitor: str = Form(...), descricao: str = Form(),
     logo: UploadFile = File(...), iduser: str = Form(...)):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if logo.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Geração de um nome único para a imagem
    now = datetime.now()
    logo.filename = f"{uuid.uuid4()}.png"
    contents = await logo.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/logos/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    grupo = {
        "id": "--",
        "nome": name,
        "area": area,
        "semestre": semestre,
        "monitor": monitor,
        "logo": logo,
        "descricao": descricao,
        "datacreate": data_hora_minuto,
        "iduser": iduser,
        "iduserlast": iduser,
    }
    with open(f"assets/logos/{logo.filename}", "wb") as f:
        f.write(contents)

    instituicao_dict = dict(grupo)
    del instituicao_dict["id"]

    id = db_client.instituicaos.insert_one(instituicao_dict).inserted_id

    new_instituicao = instituicao_schema(db_client.instituicaos.find_one({"_id": id}))

    return Instituicao(**new_instituicao)

def search_instituicao(id: str):
    #print(id)
    try:
        instituicao = db_client.instituicaos.find_one({"_id": ObjectId(id)})
        return instituicao_schema(instituicao)
    except:
        return {"error": "Instituicao Not Found"}


@router.put("/", response_model=Instituicao)
async def update_instituicao(id: str = Form(...), name: str = Form(...), area: str = Form(...), semestre: str = Form(...), monitor: str = Form(...), descricao: str = Form(),
     logo: UploadFile = File(...), iduserlast: str = Form(...)):
    instituicao = search_instituicao(id);

    if (instituicao["logo"] != logo.filename):
        logo.filename = f"{uuid.uuid4()}.png"
        contents = await logo.read()

        with open(f"assets/logos/{logo.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/logos/')
            os.remove(instituicao["logo"])
            os.getcwd()

    grupo = {
        "id": "--",
        "nome": name,
        "area": area,
        "semestre": semestre,
        "monitor": monitor,
        "logo": logo,
        "descricao": descricao,
        "datacreate": instituicao["datacreate"],
        "iduser": instituicao["iduser"],
        "iduserlast": iduserlast,
    }

    instituicao_dict = dict(grupo)
    del instituicao_dict["id"]

    try:
        db_client.instituicaos.find_one_and_replace(
            {"_id": ObjectId(id)}, instituicao_dict)
    except:
        return {"error": "Erro ao atualizar o instituicao"}

    return search_instituicao("_id", id)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_instituicao(id: str):
    found = db_client.instituicaos.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Candidato not deleted")


# Path
@router.get("/{id}")
async def instituicao(id: str):
    return search_instituicao(id)