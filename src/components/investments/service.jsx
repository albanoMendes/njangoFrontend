
const service = {
	getData: ({from, to, rows}) => {
		return new Promise((resolve, reject) => {
			
			const data = rows.slice(from, to);
			
			resolve({
				count: rows.length,
				data: data
			})
			
		})
	}
}
export default service;