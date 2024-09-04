const rows = [
	{
		id: 1,
		empresa: 'INFRATEC S.A',
		segment: 'SERVIÇO',		
		credito: 50000,
		entrada: 10000,
		lucro: 5000,
		logo: 'construir.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'NILDE COOCK LDA',
		segment: 'VENDA',		
		credito: 10000,
		entrada: 150000,
		lucro: 20000,		
		logo: 'cozinhar.png',
		more: 'saber mais'
	},
	{
		id: 3,
		empresa: 'INFRATEC S.A',
		segment: 'SERVIÇO',		
		credito: 50000,
		entrada: 10000,
		lucro: 5000,
		logo: 'construir.png',
		more: 'saber mais'
	},
	{
		id: 4,
		empresa: 'NILDE COOCK LDA',
		segment: 'VENDA',		
		credito: 10000,
		entrada: 150000,
		lucro: 20000,		
		logo: 'cozinhar.png',
		more: 'saber mais'
	},
	{
		id: 5,
		empresa: 'INFRATEC S.A',
		segment: 'SERVIÇO',		
		credito: 50000,
		entrada: 10000,
		lucro: 5000,
		logo: 'construir.png',
		more: 'saber mais'
	},
	{
		id: 6,
		empresa: 'NILDE COOCK LDA',
		segment: 'VENDA',		
		credito: 10000,
		entrada: 150000,
		lucro: 20000,		
		logo: 'cozinhar.png',
		more: 'saber mais'
	},
		
];


const serviceactive = {
	getData: ({from, to}) => {
		return new Promise((resolve, reject) => {
			
			const data = rows.slice(from, to);
			
			resolve({
				count: rows.length,
				data: data
			})
			
		})
	}
}
export default serviceactive;