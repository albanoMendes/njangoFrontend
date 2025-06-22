def interesse_schema(interesse) -> dict:
	return {
			"id": str(interesse["_id"]),
            "name": interesse["name"],
            "phone": interesse["phone"],
            "email": interesse["email"],
            "valor": interesse["valor"],
            "perfil": interesse["perfil"],
            "descricao": interesse["descricao"],
            "datecreate": interesse["datecreate"],
            "status": interesse["status"],
            "idplano": interesse["idplano"],
            "iduser": interesse["iduser"],
		}

def interesses_schema(interesses) -> list:
    return [interesse_schema(interesse) for interesse in interesses]