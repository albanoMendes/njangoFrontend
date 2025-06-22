def service_schema(service) -> dict:
	return {
			"id": str(service["_id"]),
            "servico": service["servico"],
            "cliente": service["cliente"],
            "pagamento": service["pagamento"],
            "empresa": service["empresa"],
            "mes": service["mes"],
            "ano": service["ano"],
            "datecreate": service["datecreate"],
            "iduser": service["iduser"],
            "idinvest": service["idinvest"],
            "idempresa": service["idempresa"],
		}

def services_schema(services) -> list:
    return [service_schema(service) for service in services]