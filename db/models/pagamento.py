from pydantic import BaseModel
from typing import Optional

# Entidade Comentario
class Comentario(BaseModel):
    id: Optional[str]
    empresa: str
    valor: float
    categoria: str
    descricao: str
    comprovante: str
    datacreate: str
    iduser: str
    idinvest: str
    iduserlast: str
