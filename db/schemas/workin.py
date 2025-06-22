def workin_schema(workin) -> dict:
	return {
			"id": str(workin["_id"]),
            "name": workin["name"],
            "empresa": workin["empresa"],
            "datecreate": workin["datecreate"],
            "iduser": workin["iduser"],
            "idempresa": workin["idempresa"],
		}

def workins_schema(workins) -> list:
    return [workin_schema(workin) for workin in workins]