from pydantic import BaseModel
from typing import Optional

# Entidade Reuniao
class Reuniao(BaseModel):
    id: Optional[str]
    data: str
    horario: str
    descricao: str
    meio: str
    local: str
    datecreate: str
    idinteresse: str
    iduser: str
