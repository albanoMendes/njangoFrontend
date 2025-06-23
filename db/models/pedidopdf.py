from pydantic import BaseModel
from typing import Optional

# Entidade Pedidopdf
class Pedidopdf(BaseModel):
    id: Optional[str]
    para: str
    title: str
    name: str
    email: str
    phone: str
    datacreate: str
    status: bool
    idpara: str
