from pydantic import BaseModel
from typing import Optional

# Entidade Candidato
class Candidato(BaseModel):
    id: Optional[str]
    name: str
    phone: str
    email: str
    cv: str
    datacreate: str
    idvaga: str
