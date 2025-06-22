def reuniao_schema(reuniao) -> dict:
	return {
			"id": str(reuniao["_id"]),
            "data": reuniao["data"],
            "horario": reuniao["horario"],
            "descricao": reuniao["descricao"],
            "meio": reuniao["meio"],
            "local": reuniao["local"],
            "datecreate": reuniao["datecreate"],
            "iduser": reuniao["iduser"],
            "idinteresse": reuniao["idinteresse"],
		}

def reuniaos_schema(reuniaos) -> list:
    return [reuniao_schema(reuniao) for reuniao in reuniaos]