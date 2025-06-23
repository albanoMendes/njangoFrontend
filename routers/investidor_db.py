from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.investidor import Investidor
from db.schemas.investidor import investidor_schema, investidors_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/investidordb", tags=["investidordb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Investidor])
async def investidors():
    return investidors_schema(db_client.investidors.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_investidor(name: str = Form(...), img: str = Form(...), vinvestido: str = Form(...), iduser: str = Form(...), lucro: str = Form(), idplano: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    investidor = {
        "id": "--",
        "name": name,
        "img": img,
        "vinvestido": vinvestido,
        "lucro": lucro,
        "iduser": iduser,
        "idempresa": "",
        "datacreate": data_hora_minuto,
        "idplano": idplano,
    }
    investidor_dict = dict(investidor)
    del investidor_dict["id"]

    id = db_client.investidors.insert_one(investidor_dict).inserted_id

    new_investidor = investidor_schema(db_client.investidors.find_one({"_id": id}))

    return Investidor(**new_investidor)

@router.put("/", response_model=Investidor)
async def update_investidor(id: str = Form(...), name: str = Form(...), img: str = Form(...), vinvestido: str = Form(...), iduser: str = Form(...), lucro: str = Form(),  idempresa: str = Form(...)):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    com = search_investidor(id)
    investidor = {
        "id": "--",
        "name": name,
        "img": img,
        "vinvestido": vinvestido,
        "lucro": lucro,
        "iduser": iduser,
        "idempresa": idempresa,
        "datacreate": com["datacreate"],
        "idplano": com["idplano"],
    }
    investidor_dict = dict(investidor)
    del investidor_dict["id"]

    try:
        db_client.investidors.find_one_and_replace(
            {"_id": ObjectId(id)}, investidor_dict)
    except:
        return {"error": "Erro ao atualizar o investidor"}

    return search_investidor("_id", id)

def search_investidor(id: str):
    #print(id)
    try:
        investidor = db_client.investidors.find_one({"_id": ObjectId(id)})
        return investidor_schema(investidor)
    except:
        return {"error": "Investidor Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_investidor(id: str):
    found = db_client.investidors.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Investidor not deleted")


# Path
@router.get("/{id}")
async def investidor(id: str):
    return search_investidor(id)


@router.get("/allinvestidor/{idplano}", response_model=list[Investidor])
async def allinvestidors(idplano: str):
    try:
        investidors = db_client.investidors.find({"idplano": idplano})
        return investidors_schema(investidors)
    except Exception as e:
        return {"error": f"Erro ao buscar todos os investidors desse blog: {str(e)}"}