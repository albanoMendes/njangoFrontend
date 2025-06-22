def vaga_schema(vaga) -> dict:
	return {
			"id": str(vaga["_id"]),
            "dep": vaga["dep"],
            "nvagas": vaga["nvagas"],
            "perfil": vaga["perfil"],
            "descricao": vaga["descricao"],
            "status": vaga["status"],
            "datelimite": vaga["datelimite"],
            "datecreate": vaga["datecreate"],
            "iduser": vaga["iduser"],
            "iduserupdate": vaga["iduserupdate"],
		}

def vagas_schema(vagas) -> list:
    return [vaga_schema(vaga) for vaga in vagas]