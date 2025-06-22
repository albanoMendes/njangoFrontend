from pydantic import BaseModel
from typing import Optional

# Entidade Service
class Service(BaseModel):
    id: Optional[str]
    servico: str
    cliente: str
    pagamento: float
    empresa: str
    mes: str
    ano: int
    iduser: str
    idinvest: str
    datecreate: str
