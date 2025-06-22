def venda_schema(venda) -> dict:
	return {
			"id": str(venda["_id"]),
            "name": venda["name"],
            "preco": venda["preco"],
            "qtd": venda["qtd"],
            "total": venda["total"],
            "empresa": venda["empresa"],
            "mes": venda["mes"],
            "ano": venda["ano"],
            "datecreate": venda["datecreate"],
            "iduser": venda["iduser"],
            "idempresa": venda["idempresa"],
		}

def vendas_schema(vendas) -> list:
    return [venda_schema(venda) for venda in vendas]