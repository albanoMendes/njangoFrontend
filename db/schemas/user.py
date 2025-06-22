def user_schema(user) -> dict:
	return {
			"id": str(user["_id"]),
            "name": user["name"],
            "lastname": user["lastname"],
            "img": user["img"],
            "phone": user["phone"],
            "email": user["email"],
            "password": user["password"],
            "idcountry": user["idcountry"],
            "tipo": user["tipo"],
            "desabled": user["desabled"],
            "cod": user["cod"],
			}

def users_schema(users) -> list:
    return [user_schema(user) for user in users]