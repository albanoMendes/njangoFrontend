def filepdf_schema(filepdf) -> dict:
	return {
			"id": str(filepdf["_id"]),
            "para": filepdf["para"],
            "descricao": filepdf["descricao"],
            "tipo": filepdf["tipo"],
            "arquivo": filepdf["arquivo"],
            "datecreate": filepdf["datecreate"],
            "iduser": filepdf["iduser"],
            "idpara": filepdf["idpara"],
		}

def filepdfs_schema(filepdfs) -> list:
    return [filepdf_schema(filepdf) for filepdf in filepdfs]