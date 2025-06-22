from pydantic import BaseModel
from typing import Optional

# Entidade Despesa
class Despesa(BaseModel):
    id: Optional[str]
    empresa: str
    valor: float
    descricao: str
    status: bool
    iduser: str
    idinvest: str
    iduserlast: str
    datecreate: str
