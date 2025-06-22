def investment_schema(investment) -> dict:
	return {
            "id": str(investment["_id"]),
            "empresa":  investment["empresa"],
            "operacao": investment["operacao"],
            "situacao": investment["situacao"],
            "valorinvestido": investment["valorinvestido"],
            "receita": investment["receita"],
            "segment": investment["segment"],
            "poupanca": investment["poupanca"],
            "despesa": investment["despesa"],
            "lucro": investment["lucro"],
            "resumo": investment["resumo"],
            "descricao": investment["descricao"],
            "acordo": investment["acordo"],
            "logo": investment["logo"],
            "local": investment["local"],
            "idplano": str(investment["idplano"]),
            "datacreate": investment["datacreate"],
            "idemp": str(investment["idemp"]),

			}

def investments_schema(investments) -> list:
    return [investment_schema(investment) for investment in investments]