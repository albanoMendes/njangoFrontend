def blog_schema(blog) -> dict:
	return {
			"id": str(blog["_id"]),
            "title": blog["title"],
            "subtitle": blog["subtitle"],
            "area": blog["area"],
            "autor": blog["autor"],
            "introducao": blog["introducao"],
            "desenv": blog["desenv"],
            "conclusao": blog["conclusao"],
            "imgOne": blog["imgOne"],
            "imgTwo": blog["imgTwo"],
            "situacao": blog["situacao"],
            "datacreate": blog["datacreate"],
            "idinv": blog["idinv"],
			}

def blogs_schema(blogs) -> list:
    return [blog_schema(blog) for blog in blogs]