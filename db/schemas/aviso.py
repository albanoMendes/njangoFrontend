def aviso_schema(aviso) -> dict:
	return {
			"id": str(aviso["_id"]),
            "name": aviso["name"],
            "email": aviso["email"],
            "assunto": aviso["assunto"],
            "conteudo": aviso["conteudo"],
            "destinatario": aviso["destinatario"],
            "datecreate": aviso["datecreate"],
            "iduser": aviso["iduser"],
            "idDest": aviso["idDest"],
		}

def avisos_schema(avisos) -> list:
    return [aviso_schema(aviso) for aviso in avisos]