from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.comentario import Comentario
from db.schemas.comentario import comentario_schema, comentarios_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/comentariodb", tags=["comentariodb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Comentario])
async def comentarios():
    return comentarios_schema(db_client.comentarios.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_comentario(name: str = Form(...), lastname: str = Form(...), email: str = Form(...), conteudo: str = Form(...), phone: str = Form(), idblog: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    comentario = {
        "id": "--",
        "name": name,
        "lastname": lastname,
        "email": email,
        "phone": phone,
        "conteudo": conteudo,
        "datacreate": data_hora_minuto,
        "idblog": idblog,
    }
    comentario_dict = dict(comentario)
    del comentario_dict["id"]

    id = db_client.comentarios.insert_one(comentario_dict).inserted_id

    new_comentario = comentario_schema(db_client.comentarios.find_one({"_id": id}))

    return Comentario(**new_comentario)

@router.put("/", response_model=Comentario)
async def update_comentario(id: str = Form(...), name: str = Form(...), lastname: str = Form(...), email: str = Form(...), conteudo: str = Form(...), phone: str = Form()):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    com = search_comentario(id)
    comentario = {
        "id": "--",
        "name": name,
        "lastname": lastname,
        "email": email,
        "phone": phone,
        "conteudo": conteudo,
        "datacreate": com["datacreate"],
        "idblog": com["idblog"],
    }
    comentario_dict = dict(comentario)
    del comentario_dict["id"]

    try:
        db_client.comentarios.find_one_and_replace(
            {"_id": ObjectId(id)}, comentario_dict)
    except:
        return {"error": "Erro ao atualizar o comentario"}

    return search_comentario("_id", id)

def search_comentario(id: str):
    #print(id)
    try:
        comentario = db_client.comentarios.find_one({"_id": ObjectId(id)})
        return comentario_schema(comentario)
    except:
        return {"error": "Comentario Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_comentario(id: str):
    found = db_client.comentarios.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Comentario not deleted")


# Path
@router.get("/{id}")
async def comentario(id: str):
    return search_comentario(id)


@router.get("/allcomments/{idblog}", response_model=list[Comentario])
async def allcomentarios(idblog: str):
    try:
        comentarios = db_client.comentarios.find({"idblog": idblog})
        return comentarios_schema(comentarios)
    except Exception as e:
        return {"error": f"Erro ao buscar todos os comentarios desse blog: {str(e)}"}