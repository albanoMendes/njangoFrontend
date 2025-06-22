def comentario_schema(comentario) -> dict:
	return {
			"id": str(comentario["_id"]),
            "name": comentario["name"],
            "lastname": comentario["lastname"],
            "email": comentario["email"],
            "phone": comentario["phone"],
            "conteudo": comentario["conteudo"],
            "datecreate": comentario["datecreate"],
            "idblog": comentario["idblog"],
		}

def comentarios_schema(comentarios) -> list:
    return [comentario_schema(comentario) for comentario in comentarios]