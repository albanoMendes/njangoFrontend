from pydantic import BaseModel
from typing import Optional

# Entidade Venda
class Venda(BaseModel):
    id: Optional[str]
    name: str
    preco: float
    qtd: int
    total: float
    empresa: str
    mes: str
    ano: int
    iduser: str
    datecreate: str
    idempresa: str
