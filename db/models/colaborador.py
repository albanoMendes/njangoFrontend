from pydantic import BaseModel
from typing import Optional

# Entidade User
class Colaborador(BaseModel):
    id: Optional[str]
    name: str
    salario: float
    empresa: str
    img: str
    bi: str
    phone: str
    email: str
    profissao: str
    endereco: str
    datacreate: str
    desabled: bool
    idinv: str
