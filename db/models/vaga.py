from pydantic import BaseModel
from typing import Optional

# Entidade Vagas
class Vagas(BaseModel):
    id: Optional[str]
    dep: str
    nvagas: int
    perfil: str
    descricao: str
    datelimite: str
    datacreate: str
    status: bool
    iduser: str
    iduserupdate: str
