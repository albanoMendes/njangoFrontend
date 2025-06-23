def pedidopdf_schema(pedidopdf) -> dict:
	return {
			"id": str(pedidopdf["_id"]),
            "para": pedidopdf["para"],
            "title": pedidopdf["title"],
            "name": pedidopdf["name"],
            "email": pedidopdf["email"],
            "phone": pedidopdf["phone"],
            "datecreate": pedidopdf["datecreate"],
            "status": pedidopdf["status"],
            "idpara": pedidopdf["idpara"],
		}

def pedidopdfs_schema(pedidopdfs) -> list:
    return [pedidopdf_schema(pedidopdf) for pedidopdf in pedidopdfs]