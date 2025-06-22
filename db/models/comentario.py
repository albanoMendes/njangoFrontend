from pydantic import BaseModel
from typing import Optional

# Entidade Comentario
class Comentario(BaseModel):
    id: Optional[str]
    nome: str
    lastname: str
    email: str
    phone: str
    conteudo: str
    datacreate: str
    idblog: str
