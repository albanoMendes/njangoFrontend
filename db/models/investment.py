from pydantic import BaseModel
from typing import Optional

# Entidade User
class Investment(BaseModel):
    id: Optional[str]
    empresa: str
    operacao: str
    segment: str
    receita: float
    valorinvestido: float
    poupanca: float
    despesas: float
    lucro: float
    resumo: str
    descricao: str
    acordo: str
    logo: str
    local: str
    status: bool
    datacreate: str
    idplano: Optional[str]
    idemp: Optional[str]
