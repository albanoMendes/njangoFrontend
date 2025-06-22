def despesa_schema(despesa) -> dict:
	return {
			"id": str(despesa["_id"]),
            "empresa": despesa["empresa"],
            "valor": despesa["valor"],
            "descricao": despesa["descricao"],
            "iduser": despesa["iduser"],
            "idinvest": despesa["idinvest"],
            "iduserlast": despesa["iduserlast"],
            "datecreate": despesa["datecreate"],
            "status": despesa["status"],
		}

def despesas_schema(despesas) -> list:
    return [despesa_schema(despesa) for despesa in despesas]