from pydantic import BaseModel
from typing import Optional

# Entidade User
class User(BaseModel):
    id: Optional[str]
    empresa: str
    operacao: str
    situacao: str
    organizacao: str
    segment: str
    capital: float
    credito: float
    lucro: int
    resumo: str
    descricao: str
    objetivos: str
    missao: str
    analise: str
    produto: str
    entrega: str
    logo: str
    banner: str
    local: str
    publicado: bool
    datacreate: str
    idemp: Optional[str]
