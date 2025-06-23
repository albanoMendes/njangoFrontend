from pydantic import BaseModel
from typing import Optional

# Entidade Pedidopdf
class Pedidopdf(BaseModel):
    id: Optional[str]
    grupo: str
    semestre: str
    name: str
    email: str
    phone: str
    img: str
    datacreate: str
    status: bool
    iduser: str
    idgrupo: str
