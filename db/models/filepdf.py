from pydantic import BaseModel
from typing import Optional

# Entidade Filepdf
class Filepdf(BaseModel):
    id: Optional[str]
    para: str
    descricao: str
    tipo: str
    arquivo: str
    datacreate: str
    iduser: str
    idpara: str
