def plano_schema(plano) -> dict:
	return {
            "id": str(plano["_id"]),
            "empresa":  plano["empresa"],
            "operacao": plano["operacao"],
            "situacao": plano["situacao"],
            "organizacao": plano["organizacao"],
            "segment": plano["segment"],
            "capital": plano["capital"],
            "credito": plano["credito"],
            "lucro": plano["lucro"],
            "resumo": plano["resumo"],
            "descricao": plano["descricao"],
            "objetivos": plano["objetivo"],
            "missao": plano["missao"],
            "analise": plano["analise"],
            "produto": plano["produto"],
            "entrega": plano["entrega"],
            "logo": plano["logo"],
            "banner": plano["banner"],
            "local": plano["local"],
            "publicado": plano["publicado"],
            "datacreate": plano["datacreate"],
            "idemp": str(plano["idemp"]),

			}

def planos_schema(planos) -> list:
    return [plano_schema(plano) for plano in planos]