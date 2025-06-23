from pydantic import BaseModel
from typing import Optional

# Entidade Interesse
class Interesse(BaseModel):
    id: Optional[str]
    nome: str
    phone: str
    email: str
    valor: float
    perfil: str
    tipo: str
    busca: str
    descricao: str
    status: str
    idplano: str
    datecreate: str
    iduser: str
