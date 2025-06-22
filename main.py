from fastapi import FastAPI
from routers import users, user_db,  auth_users
from fastapi.middleware.cors import CORSMiddleware
from  fastapi.staticfiles import StaticFiles
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Routers
app.include_router(user_db.router)
app.include_router(auth_users.router)
app.mount("/assets", StaticFiles(directory="assets"), name="assets")

@app.get("/")
def read_root():
    return {"Hello": "World"}

# uvicorn main:app --reload