from pydantic import BaseModel
from typing import Optional

# Entidade User
class User(BaseModel):
    id: Optional[str]
    name: str
    lastname: str
    img: str
    phone: str
    email: str
    password: str
    idcountry: str
    tipo: str
    desabled: bool
    cod: str
