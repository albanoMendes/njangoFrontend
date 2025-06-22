def instituicao_schema(instituicao) -> dict:
	return {
			"id": str(instituicao["_id"]),
            "name": instituicao["name"],
            "area": instituicao["area"],
            "semestre": instituicao["semestre"],
            "monitor": instituicao["monitor"],
            "logo": instituicao["logo"],
            "descricao": instituicao["descricao"],
            "datecreate": instituicao["datecreate"],
            "iduser": instituicao["iduser"],
            "iduserlast": instituicao["iduserlast"],
		}

def instituicaos_schema(instituicaos) -> list:
    return [instituicao_schema(instituicao) for instituicao in instituicaos]