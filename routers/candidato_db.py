from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.candidato import Candidato
from db.schemas.candidato import candidato_schema, candidatos_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/candidatodb", tags=["candidatodb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Candidato])
async def candidatos():
    return candidatos_schema(db_client.candidatos.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_candidato(name: str = Form(...), email: str = Form(...), phone: str = Form(...), idvaga: str = Form(), cv: UploadFile = File(...)):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    # Verificação se o tipo de arquivo é permitido
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}
    if cv.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

        # Geração de um nome único para a imagem
    now = datetime.now()
    cv.filename = f"{uuid.uuid4()}.pdf"
    contents = await cv.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/pdfs/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    candidato = {
        "id": "---",
        "name": name,
        "phone": phone,
        "email": email,
        "cv": cv.filename,
        "datacreate": data_hora_minuto,
        "idvaga": idvaga
    }

    with open(f"assets/pdfs/{cv.filename}", "wb") as f:
        f.write(contents)

    candidato_dict = dict(candidato)
    del candidato_dict["id"]

    id = db_client.candidatos.insert_one(candidato_dict).inserted_id

    new_candidato = candidato_schema(db_client.candidatos.find_one({"_id": id}))

    return Candidato(**new_candidato)

def search_candidato(id: str):
    #print(id)
    try:
        candidato = db_client.candidatos.find_one({"_id": ObjectId(id)})
        return candidato_schema(candidato)
    except:
        return {"error": "Candidato Not Found"}

@router.put("/", response_model=Candidato)
async def update_candidato(id: str = Form(...), name: str = Form(...), email: str = Form(...), phone: str = Form(...), idvaga: str = Form(), cv: UploadFile = File(...)):
    candidato = search_candidato(id);

    if (candidato["cv"] != cv.filename):
        cv.filename = f"{uuid.uuid4()}.pdf"
        contents = await cv.read()

        with open(f"assets/pdfs/{cv.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/pdfs/')
            os.remove(candidato["cv"])
            os.getcwd()

    cand = {
        "id": candidato["id"],
        "name": name,
        "phone": phone,
        "email": email,
        "cv": cv.filename,
        "datacreate": candidato["datacreate"],
        "idvaga": idvaga
    }
    candidato_dict = dict(cand)
    del candidato_dict["id"]

    try:
        db_client.candidatos.find_one_and_replace(
            {"_id": ObjectId(id)}, candidato_dict)
    except:
        return {"error": "Erro ao atualizar o candidato"}

    return search_candidato("_id", id)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_candidato(id: str):
    found = db_client.candidatos.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Candidato not deleted")


# Path
@router.get("/{id}")
async def candidato(id: str):
    return search_candidato(id)

@router.get("/allvaga/{idvaga}", response_model=list[Candidato])
async def allcandidatos(idvaga: str):
    try:
        candidatos = db_client.candidatos.find({"idvaga": idvaga})
        return candidatos_schema(candidatos)
    except Exception as e:
        return {"error": f"Erro ao buscar todos os candidatos dessa vaga: {str(e)}"}
