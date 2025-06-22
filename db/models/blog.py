from pydantic import BaseModel
from typing import Optional

# Entidade Blog
class Blog(BaseModel):
    id: Optional[str]
    tilte: str
    subtitle: str
    area: str
    autor: str
    introducao: str
    desenv: str
    conclusao: str
    imgOne: str
    imgTwo: str
    datacreate: str
    stuacao: str
    idgrupo: str
