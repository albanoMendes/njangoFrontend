from fastapi import FastAPI, HTTPException, APIRouter, status, Form, UploadFile, File
from db.models.blog import Blog
from db.schemas.blog import blog_schema, blogs_schema
from db.client import db_client
import os
from datetime import datetime
import uuid
from bson import ObjectId

router = APIRouter(prefix="/blogdb", tags=["blogdb"],
                   responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}})

@router.get("/", response_model=list[Blog])
async def blogs():
    return blogs_schema(db_client.blogs.find())

@router.post("/",  status_code=status.HTTP_201_CREATED)
async def create_blog(title: str = Form(...), subtitle: str = Form(...), area: str = Form(...), autor: str = Form(...), introducao: str = Form(), desenv: str = Form(),
    conclusao: str = Form(), imgOne: UploadFile = File(...), imgTwo: UploadFile = File(...), idgrupo: str = Form()):
    agora = datetime.now()
    data_hora_minuto = agora.strftime("%Y-%m-%d %H:%M")

    # Verificação se o tipo de arquivo é permitido
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if imgOne.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    if imgTwo.filename.split('.')[-1] not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Geração de um nome único para a imagem
    now = datetime.now()
    imgOne.filename = f"{uuid.uuid4()}.jpg"
    contents = await imgOne.read()

    imgTwo.filename = f"{uuid.uuid4()}.jpg"
    contents2 = await imgTwo.read()

    # Diretório onde as imagens serão salvas (no backend)
    upload_dir = "assets/blogs/"
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    blog = {
        "id": "ssss",
        "tilte": title,
        "subtitle": subtitle,
        "area": area,
        "autor": autor,
        "introducao": introducao,
        "desenv": desenv,
        "conclusao": conclusao,
        "imgOne": imgOne.filename,
        "imgTwo": imgTwo.filename,
        "datacreate": data_hora_minuto,
        "stuacao": "WRITING",
        "idgrupo": idgrupo
    }

    with open(f"assets/blogs/{imgOne.filename}", "wb") as f:
        f.write(contents)

    with open(f"assets/blogs/{imgTwo.filename}", "wb") as f:
        f.write(contents2)

    blog_dict = dict(blog)
    del blog_dict["id"]

    id = db_client.blogs.insert_one(blog_dict).inserted_id

    new_blog = blog_schema(db_client.blogs.find_one({"_id": id}))

    return Blog(**new_blog)


def search_blog(id: str):
    #print(id)
    try:
        blog = db_client.blogs.find_one({"_id": ObjectId(id)})
        return blog_schema(blog)
    except:
        return {"error": "Blog Not Found"}

@router.put("/", response_model=Blog)
async def update_blog(id: str = Form(...), title: str = Form(...), subtitle: str = Form(...), area: str = Form(...), autor: str = Form(...), introducao: str = Form(), desenv: str = Form(),
    conclusao: str = Form(), imgOne: UploadFile = File(...), imgTwo: UploadFile = File(...), idgrupo: str = Form(), situacao: str = Form(...)):

    blog = search_blog(id);

    if (blog["imgOne"] != imgOne.filename):
        imgOne.filename = f"{uuid.uuid4()}.jpg"
        contents = await imgOne.read()

        with open(f"assets/blogs/{imgOne.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/blogs/')
            os.remove(blog["imgOne"])
            os.getcwd()

    if (blog["imgTwo"] != imgTwo.filename):
        imgTwo.filename = f"{uuid.uuid4()}.jpg"
        contents = await imgTwo.read()

        with open(f"assets/blogs/{imgTwo.filename}", "wb") as f:
            f.write(contents)

            os.chdir('assets/blogs/')
            os.remove(blog["imgTwo"])
            os.getcwd()

    bloge = {
        "id": "ssss",
        "tilte": title,
        "subtitle": subtitle,
        "area": area,
        "autor": autor,
        "introducao": introducao,
        "desenv": desenv,
        "conclusao": conclusao,
        "imgOne": imgOne.filename,
        "imgTwo": imgTwo.filename,
        "datacreate": blog["datacreate"],
        "stuacao": situacao,
        "idgrupo": blog["datacreate"]
    }
    blog_dict = dict(bloge)
    del blog_dict["id"]

    try:
        db_client.blogs.find_one_and_replace(
            {"_id": ObjectId(id)}, blog_dict)
    except:
        return {"error": "Erro ao atualizar o blog"}

    return search_blog("_id", id)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_blog(id: str):
    found = db_client.blogs.find_one_and_delete({"_id": ObjectId(id)})
    if not found:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not deleted")


# Path
@router.get("/{id}")
async def blog(id: str):
    return search_blog(id)

@router.get("/allgrupo/{idgrupo}", response_model=list[Blog])
async def allblogs(idgroup: str):
    try:
        blogs = db_client.blogs.find({"idgrupo": idgroup})
        return blogs_schema(blogs)
    except Exception as e:
        return {"error": f"Erro ao buscar todos blogs desse grupo de pesquisa: {str(e)}"}
