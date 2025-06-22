def investidor_schema(investidor) -> dict:
	return {
			"id": str(investidor["_id"]),
            "name": investidor["name"],
            "vinvestido": investidor["vinvestido"],
            "img": investidor["img"],
            "lucro": investidor["lucro"],
            "iduser": investidor["iduser"],
            "idplano": investidor["idplano"],
            "idempresa": investidor["idempresa"],
            "datecreate": investidor["datecreate"],
            "status": investidor["status"],
		}

def investidors_schema(investidors) -> list:
    return [investidor_schema(investidor) for investidor in investidors]