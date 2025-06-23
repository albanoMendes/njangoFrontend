from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.investment import Investment
from db.schemas.investment import investment_schema, investments_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/investmentdb", tags=["investmentdb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Investment])
async def investments():
    return investments_schema(db_client.investments.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_investment(empresa: str = Form(...), operacao: str = Form(...), segment: str = Form(...), valorinvestido: float = Form(...), receita: float = Form(), idplano: str = Form(),
                            resumo: str = Form(...), descricao: str = Form(...), acordo: str = Form(...), logo: str = Form(...), local: str = Form(...)):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    investment = {
        "id": "--",
        "empresa": empresa,
        "operacao": operacao,
        "segment": segment,
        "receita": 0,
        "valorinvestido": valorinvestido,
        "poupanca": 0,
        "despesas": 0,
        "lucro": 0,
        "resumo": resumo,
        "descricao": descricao,
        "acordo": acordo,
        "logo": logo,
        "local": local,
        "status": False,
        "datacreate": data_hora_minuto,
        "idplano": idplano,
    }
    investment_dict = dict(investment)
    del investment_dict["id"]

    id = db_client.investments.insert_one(investment_dict).inserted_id

    new_investment = investment_schema(db_client.investments.find_one({"_id": id}))

    return Investment(**new_investment)

@router.put("/", response_model=Investment)
async def update_investment(id: str = Form(...), empresa: str = Form(...), operacao: str = Form(...), segment: str = Form(...), valorinvestido: float = Form(...), receita: float = Form(), status: bool = Form(),
                            poupanca: float = Form(), despesa: float = Form(), lucro: float = Form(), resumo: str = Form(...), descricao: str = Form(...), acordo: str = Form(...), logo: str = Form(...), local: str = Form(...)):
    #agora = datetime.now()
    #data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")
    com = search_investment(id)
    investment = {
        "id": "--",
        "empresa": empresa,
        "operacao": operacao,
        "segment": segment,
        "receita": receita,
        "valorinvestido": valorinvestido,
        "poupanca": poupanca,
        "despesas": despesa,
        "lucro": lucro,
        "resumo": resumo,
        "descricao": descricao,
        "acordo": acordo,
        "logo": logo,
        "local": local,
        "status": status,
        "datacreate": com["datacreate"],
        "idplano": com["idplano"],
        "idemp": com["idemp"],
    }
    investment_dict = dict(investment)
    del investment_dict["id"]

    try:
        db_client.investments.find_one_and_replace(
            {"_id": ObjectId(id)}, investment_dict)
    except:
        return {"error": "Erro ao atualizar o comentario"}

    return search_investment("_id", id)

def search_investment(id: str):
    #print(id)
    try:
        investment = db_client.investments.find_one({"_id": ObjectId(id)})
        return investment_schema(investment)
    except:
        return {"error": "Comentario Not Found"}

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_investment(id: str):
    found = db_client.investments.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Comentario not deleted")


# Path
@router.get("/{id}")
async def investment(id: str):
    return search_investment(id)


@router.get("/allcomments/{idemp}", response_model=list[Investment])
async def allinvestments(idemp: str):
    try:
        investments = db_client.investments.find({"idemp": idemp})
        return investments_schema(investments)
    except Exception as e:
        return {"error": f"Erro ao buscar todos os investments desse blog: {str(e)}"}