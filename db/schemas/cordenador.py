def cordenador_schema(cordenador) -> dict:
	return {
			"id": str(cordenador["_id"]),
            "grupo": cordenador["grupo"],
            "semestre": cordenador["semestre"],
            "name": cordenador["name"],
            "email": cordenador["email"],
            "phone": cordenador["phone"],
            "img": cordenador["img"],
            "status": cordenador["status"],
            "datecreate": cordenador["datecreate"],
            "iduser": cordenador["iduser"],
            "idgrupo": cordenador["idgrupo"],
		}

def cordenadors_schema(cordenadors) -> list:
    return [cordenador_schema(cordenador) for cordenador in cordenadors]