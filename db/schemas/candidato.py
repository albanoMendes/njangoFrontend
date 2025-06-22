def candidato_schema(candidato) -> dict:
	return {
			"id": str(candidato["_id"]),
            "name": candidato["name"],
            "phone": candidato["phone"],
            "email": candidato["email"],
            "cv": candidato["cv"],
            "idvaga": candidato["idvaga"],
		}

def candidatos_schema(candidatos) -> list:
    return [candidato_schema(candidato) for candidato in candidatos]