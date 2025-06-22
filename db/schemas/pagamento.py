def pagamento_schema(pagamento) -> dict:
	return {
			"id": str(pagamento["_id"]),
            "empresa": pagamento["empresa"],
            "valor": pagamento["valor"],
            "categoria": pagamento["categoria"],
            "descricao": pagamento["descricao"],
            "compravante": pagamento["compravante"],
            "datecreate": pagamento["datecreate"],
            "iduser": pagamento["iduser"],
            "idinvest": pagamento["idinvest"],
            "iduserlast": pagamento["iduserlast"],
		}

def pagamentos_schema(pagamentos) -> list:
    return [pagamento_schema(pagamento) for pagamento in pagamentos]