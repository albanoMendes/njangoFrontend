from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
#from db.models.interesse import Aviso
from db.schemas.interesse import interesse_schema, interesses_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

from backend.db.models.interesse import Interesse

router = APIRouter(prefix="/interessedb", tags=["interessedb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Interesse])
async def interesses():
    return interesses_schema(db_client.interesses.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_interesse(name: str = Form(...), email: str = Form(...), phone: str = Form(...), valor: float = Form(...), perfil: str = Form(), iduser: str = Form(),
    idplano: str = Form(),  descricao: str = Form(), tipo: str = Form(), busca: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    interesse = {
        "id": "--",
        "name": name,
        "email": email,
        "phone": phone,
        "valor": valor,
        "descricao": descricao,
        "perfil": perfil,
        "tipo": tipo,
        "busca": busca,
        "datacreate": data_hora_minuto,
        "iduser": iduser,
        "idplano": idplano,
    }
    interesse_dict = dict(interesse)
    del interesse_dict["id"]

    id = db_client.interesses.insert_one(interesse_dict).inserted_id

    new_interesse = interesse_schema(db_client.interesses.find_one({"_id": id}))

    return Interesse(**new_interesse)

@router.put("/", response_model=Interesse)
async def update_interesse(id: str = Form(...), name: str = Form(...), email: str = Form(...), phone: str = Form(...),
                       valor: float = Form(...), perfil: str = Form(), descricao: str = Form(), tipo: str = Form(), busca: str = Form(),
                       idplano: str = Form()):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    avis = search_interesse(id)
    interesse = {
        "id": "--",
        "name": name,
        "email": email,
        "phone": phone,
        "valor": valor,
        "descricao": descricao,
        "perfil": perfil,
        "tipo": tipo,
        "busca": busca,
        "datacreate": avis["datacreate"],
        "iduser": avis["iduser"],
        "idDest":  avis["idplano"],
    }
    interesse_dict = dict(interesse)
    del interesse_dict["id"]

    try:
        db_client.interesses.find_one_and_replace(
            {"_id": ObjectId(id)}, interesse_dict)
    except:
        return {"error": "Erro ao atualizar o interesse"}

    return search_interesse("_id", id)

def search_interesse(id: str):
    #print(id)
    try:
        interesse = db_client.interesses.find_one({"_id": ObjectId(id)})
        return interesse_schema(interesse)
    except:
        return {"error": "Interesse Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_interesse(id: str):
    found = db_client.interesses.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Interesse not deleted")


# Path
@router.get("/{id}")
async def interesse(id: str):
    return search_interesse(id)


@router.get("/forme/{idDest}", response_model=list[Interesse])
async def allinteresses(idplano: str):
    try:
        interesses = db_client.interesses.find({"idplano": idplano})
        return interesses_schema(interesses)
    except Exception as e:
        return {"error": f"Erro ao buscar todos interesse deste plano: {str(e)}"}