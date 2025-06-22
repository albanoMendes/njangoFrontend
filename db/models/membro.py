from pydantic import BaseModel
from typing import Optional

# Entidade Membro
class Membro(BaseModel):
    id: Optional[str]
    nome: str
    curso: int
    semestre: str
    phone: str
    email: str
    linkdin: str
    datecreate: str
    iduser: str
    idgrupo: str
