def membro_schema(membro) -> dict:
	return {
			"id": str(membro["_id"]),
            "name": membro["name"],
            "curso": membro["curso"],
            "semestre": membro["semestre"],
            "phone": membro["phone"],
            "email": membro["email"],
            "linkdin": membro["linkdin"],
            "datecreate": membro["datecreate"],
            "iduser": membro["iduser"],
            "idgrupo": membro["idgrupo"],
		}

def membros_schema(membros) -> list:
    return [membro_schema(membro) for membro in membros]