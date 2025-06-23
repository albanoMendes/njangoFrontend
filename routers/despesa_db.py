from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.schemas.despesa import despesa_schema, despesas_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

from db.models.despesa import Despesa

router = APIRouter(prefix="/despesadb", tags=["despesadb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Despesa])
async def despesas():
    return despesas_schema(db_client.despesas.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_despesa(empresa: str = Form(...), valor: float = Form(...), descricao: str = Form(...), iduser: str = Form(...), idinvest: str = Form(), iduserlast: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    despesa = {
        "id": "--",
        "empresa": empresa,
        "valor": valor,
        "descricao": descricao,
        "status": False,
        "iduser": iduser,
        "idinvest": idinvest,
        "datacreate": data_hora_minuto,
        "iduserlast": iduserlast,
    }
    despesa_dict = dict(despesa)
    del despesa_dict["id"]

    id = db_client.despesas.insert_one(despesa_dict).inserted_id

    new_despesa = despesa_schema(db_client.despesas.find_one({"_id": id}))

    return Despesa(**new_despesa)

@router.put("/", response_model=Despesa)
async def update_despesa(id: str = Form(...),empresa: str = Form(...), valor: float = Form(...), descricao: str = Form(...), iduser: str = Form(...), idinvest: str = Form(), iduserlast: str = Form(),
                         status: bool = Form()):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    com = search_despesa(id)
    despesa = {
        "id": "--",
        "empresa": empresa,
        "valor": valor,
        "descricao": descricao,
        "status": status,
        "iduser": iduser,
        "idinvest": idinvest,
        "datacreate": com["datacreate"],
        "iduserlast": iduserlast,
    }
    despesa_dict = dict(despesa)
    del despesa_dict["id"]

    try:
        db_client.despesas.find_one_and_replace(
            {"_id": ObjectId(id)}, despesa_dict)
    except:
        return {"error": "Erro ao atualizar o despesa"}

    return search_despesa("_id", id)

def search_despesa(id: str):
    #print(id)
    try:
        despesa = db_client.despesas.find_one({"_id": ObjectId(id)})
        return despesa_schema(despesa)
    except:
        return {"error": "Despesa Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_despesa(id: str):
    found = db_client.despesas.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Despesa not deleted")


# Path
@router.get("/{id}")
async def despesa(id: str):
    return search_despesa(id)


@router.get("/alldespesa/{idinvest}", response_model=list[Despesa])
async def alldespesas(idinvest: str):
    try:
        despesas = db_client.despesas.find({"idinvest": idinvest})
        return despesas_schema(despesas)
    except Exception as e:
        return {"error": f"Erro ao buscar todos os despesas desse blog: {str(e)}"}