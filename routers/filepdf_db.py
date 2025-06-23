from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
#from db.models.candidato import Pedidopdf
#from backend.db.schemas.pedidopdf import filepdf_schema, filepdfs_schema
from backend.db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

from backend.db.models.filepdf import Filepdf
#from backend.db.models.pedidopdf import Pedidopdf
from backend.db.schemas.filepdf import filepdf_schema, filepdfs_schema

router = APIRouter(prefix="/filepdfdb", tags=["filepdfdb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Filepdf])
async def filepdfs():
    return filepdfs_schema(db_client.filepdfs.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_filepdf(para: str = Form(...), descricao: str = Form(...), tipo: str = Form(...), iduser: str = Form(), idpara: str = Form(), arquivo: UploadFile = File(...)):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    # Verificação se o tipo de arquivo é permitido
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}
    if arquivo.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

        # Geração de um nome único para a imagem
    now = datetime.now()
    arquivo.filename = f"{uuid.uuid4()}.pdf"
    contents = await arquivo.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/pdfs/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    filepdf = {
        "id": "---",
        "para": para,
        "tipo": tipo,
        "descricao": descricao,
        "cv": arquivo.filename,
        "datacreate": data_hora_minuto,
        "idpara": idpara,
        "iduser": iduser
    }

    with open(f"assets/pdfs/{arquivo.filename}", "wb") as f:
        f.write(contents)

    filepdf_dict = dict(filepdf)
    del filepdf_dict["id"]

    id = db_client.filepdfs.insert_one(filepdf_dict).inserted_id

    new_filepdf = filepdf_schema(db_client.filepdfs.find_one({"_id": id}))

    return Filepdf(**new_filepdf)

def search_filepdf(id: str):
    #print(id)
    try:
        filepdf = db_client.filepdfs.find_one({"_id": ObjectId(id)})
        return filepdf_schema(filepdf)
    except:
        return {"error": "PDF Not Found"}

@router.put("/", response_model=Filepdf)
async def update_filepdf(id: str = Form(...), para: str = Form(...), descricao: str = Form(...), tipo: str = Form(...),  iduser: str = Form(), idpara: str = Form(), arquivo: UploadFile = File(...)):
    filepdf = search_filepdf(id);

    if (filepdf["arquivo"] != arquivo.filename):
        arquivo.filename = f"{uuid.uuid4()}.pdf"
        contents = await arquivo.read()

        with open(f"assets/pdfs/{arquivo.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/pdfs/')
            os.remove(filepdf["arquivo"])
            os.getcwd()

    cand = {
        "id": filepdf["id"],
        "para": para,
        "tipo": tipo,
        "descricao": descricao,
        "cv": arquivo.filename,
        "datacreate": filepdf["datacreate"],
        "idpara": idpara,
        "iduser": iduser
    }
    filepdf_dict = dict(cand)
    del filepdf_dict["id"]

    try:
        db_client.filepdfs.find_one_and_replace(
            {"_id": ObjectId(id)}, filepdf_dict)
    except:
        return {"error": "Erro ao atualizar o arquivo PDF"}

    return search_filepdf("_id", id)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_filepdf(id: str):
    found = db_client.filepdfs.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Arquivo PDF not deleted")


# Path
@router.get("/{id}")
async def filepdf(id: str):
    return search_filepdf(id)

@router.get("/allpara/{idpara}", response_model=list[Filepdf])
async def allfilepdfs(idpara: str):
    try:
        filepdfs = db_client.filepdfs.find({"idpara": idpara})
        return filepdfs_schema(filepdfs)
    except Exception as e:
        return {"error": f"Erro ao buscar na busca do arquivo PDF: {str(e)}"}
