from pydantic import BaseModel
from typing import Optional

# Entidade Institucao
class Instituicao(BaseModel):
    id: Optional[str]
    nome: str
    area: str
    semestre: str
    monitor: str
    logo: str
    descricao: str
    datacreate: str
    iduser: str
    iduserlast: str
