from pydantic import BaseModel
from typing import Optional

# Entidade Aviso
class Aviso(BaseModel):
    id: Optional[str]
    name: str
    email: str
    assunto: str
    conteudo: str
    datacreate: str
    destinatario: str
    iduser: str
    idDest: str
