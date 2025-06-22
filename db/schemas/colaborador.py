def colaborador_schema(colaborador) -> dict:
	return {
			"id": str(colaborador["_id"]),
            "name": colaborador["name"],
            "salario": colaborador["salario"],
            "img": colaborador["img"],
            "phone": colaborador["phone"],
            "email": colaborador["email"],
            "empresa": colaborador["empresa"],
            "profissao": colaborador["profissao"],
            "endereco": colaborador["endereco"],
            "desabled": colaborador["desabled"],
            "datacreate": colaborador["datacreate"],
            "idinv": colaborador["idinv"],
			}

def colaboradors_schema(colaboradors) -> list:
    return [colaborador_schema(colaborador) for colaborador in colaboradors]