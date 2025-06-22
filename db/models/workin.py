from pydantic import BaseModel
from typing import Optional

# Entidade Workin
class Workin(BaseModel):
    id: Optional[str]
    nome: str
    empresa: str
    datacreate: str
    idempresa: str
    iduser: str
