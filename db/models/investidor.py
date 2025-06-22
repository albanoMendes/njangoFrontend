from pydantic import BaseModel
from typing import Optional

# Entidade Investidor
class Investidor(BaseModel):
    id: Optional[str]
    name: str
    img: str
    vinvestido: float
    lucro: int
    iduser: str
    idplano: str
    idempresa: str
    datacreate: str
    status: bool
    cod: str
