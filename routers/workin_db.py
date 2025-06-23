from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.aviso import Aviso
from db.schemas.aviso import aviso_schema, avisos_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/avisodb", tags=["avisodb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Aviso])
async def avisos():
    return avisos_schema(db_client.avisos.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_aviso(name: str = Form(...), email: str = Form(...), assunto: str = Form(...), conteudo: str = Form(...), destinatario: str = Form(), iduser: str = Form(),
    idDest: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    aviso = {
        "id": "--",
        "name": name,
        "email": email,
        "assunto": assunto,
        "conteudo": conteudo,
        "datacreate": data_hora_minuto,
        "destinatario": destinatario,
        "iduser": iduser,
        "idDest": idDest,
    }
    aviso_dict = dict(aviso)
    del aviso_dict["id"]

    id = db_client.avisos.insert_one(aviso_dict).inserted_id

    new_aviso = aviso_schema(db_client.avisos.find_one({"_id": id}))

    return Aviso(**new_aviso)

@router.put("/", response_model=Aviso)
async def update_aviso(id: str = Form(...), name: str = Form(...), email: str = Form(...), assunto: str = Form(...),
                       conteudo: str = Form(...), destinatario: str = Form(),
                       idDest: str = Form()):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    avis = search_aviso(id)
    aviso = {
        "id": "--",
        "name": name,
        "email": email,
        "assunto": assunto,
        "conteudo": conteudo,
        "datacreate": avis["datacreate"],
        "destinatario": destinatario,
        "iduser": avis["iduser"],
        "idDest": idDest,
    }
    aviso_dict = dict(aviso)
    del aviso_dict["id"]

    try:
        db_client.avisos.find_one_and_replace(
            {"_id": ObjectId(id)}, aviso_dict)
    except:
        return {"error": "Erro ao atualizar o aviso"}

    return search_aviso("_id", id)

def search_aviso(id: str):
    #print(id)
    try:
        aviso = db_client.avisos.find_one({"_id": ObjectId(id)})
        return aviso_schema(aviso)
    except:
        return {"error": "Aviso Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_aviso(id: str):
    found = db_client.avisos.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Aviso not deleted")


# Path
@router.get("/{id}")
async def aviso(id: str):
    return search_aviso(id)

@router.get("/forme/{idDest}", response_model=list[Aviso])
async def avisosforme(idDest: str):
    try:
        avisos = db_client.avisos.find({"idDest": idDest})
        return avisos_schema(avisos)
    except Exception as e:
        return {"error": f"Erro ao buscar todos aviso deste usuario: {str(e)}"}

@router.get("/forme/{idDest}", response_model=list[Aviso])
async def allavisos(destinatario: str):
    try:
        avisos = db_client.avisos.find({"destinatario": destinatario})
        return avisos_schema(avisos)
    except Exception as e:
        return {"error": f"Erro ao buscar todos aviso deste usuario: {str(e)}"}