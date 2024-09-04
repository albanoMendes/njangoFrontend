import { useState,  useEffect} from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Paper} from '@mui/material';
import { ChevronRight }  from '@mui/icons-material';
import classes from "./More.module.css";
import blogimage from '../../assets/growthInvesting.jpg';
import ReactPaginate from 'react-paginate';
import service from './service';
import InvestmentBox from '../InvestmentBox';
import Footerblog from '../blog/Footerblog';

const rows = [
	{
		id: 1,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 100000,
		lucro: 20,		
		descricao: 'Empresa dedicada a fornecer café sustentável, apoiando agricultores locais e promovendo práticas ecológicas.',
		objetivos: 'Oferecer o melhor café e acompanhates do pais, e garatir a satisfação dos nossos clientes, em nossos os estabelecimentos!',
		missao: 'Missão de fornecer café de alta qualidade enquanto impacta positivamente as comunidades produtoras',
		oferta: 'Café e acompanhates',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Café de origem única, cultivado de forma sustentável e comércio justo',
		entrega: 'As entregas são feitas nas lojas e ao domicílio',
		local: 'Malanje, Katepa rua Nzinga nº 42',
		image: 'microsite_individual.jpg',
		logo: 'Logo_c.png',
		more: 'saber mais'
	},
	{
		id: 3,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 500000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	},
	{
		id: 4,
		empresa: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 100000,
		lucro: 20,		
		descricao: 'Empresa dedicada a fornecer café sustentável, apoiando agricultores locais e promovendo práticas ecológicas.',
		objetivos: 'Oferecer o melhor café e acompanhates do pais, e garatir a satisfação dos nossos clientes, em nossos os estabelecimentos!',
		missao: 'Missão de fornecer café de alta qualidade enquanto impacta positivamente as comunidades produtoras',
		oferta: 'Café e acompanhates',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Café de origem única, cultivado de forma sustentável e comércio justo',
		entrega: 'As entregas são feitas nas lojas e ao domicílio',
		local: 'Malanje, Katepa rua Nzinga nº 42',
		image: 'microsite_individual.jpg',
		logo: 'Logo_c.png',
		more: 'saber mais'
	},
	{
		id: 5,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	},
	{
		id: 6,
		empresa: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 120000,
		lucro: 20,		
		descricao: 'Empresa dedicada a fornecer café sustentável, apoiando agricultores locais e promovendo práticas ecológicas.',
		objetivos: 'Oferecer o melhor café e acompanhates do pais, e garatir a satisfação dos nossos clientes, em nossos os estabelecimentos!',
		missao: 'Missão de fornecer café de alta qualidade enquanto impacta positivamente as comunidades produtoras',
		oferta: 'Café e acompanhates',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Café de origem única, cultivado de forma sustentável e comércio justo',
		entrega: 'As entregas são feitas nas lojas e ao domicílio',
		local: 'Malanje, Katepa rua Nzinga nº 42',
		image: 'microsite_individual.jpg',
		logo: 'Logo_c.png',
		more: 'saber mais'
	},
	
	
];

const LIMIT = 4;
const MAX_ITEMS = 4;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const pageSize = 4;


function Investmentpainel(props) {

	const { primery, secudary,  logado, setUser, setStatus } = props;
	const [activos, setActivos] = useState([]);
	const [message, setMessage] = useState('Não existe investimentos')
	const [offset, setOffset] = useState(0)
	const current = offset ? (offset / LIMIT) + 1 : 1;
	const pages = Math.ceil(activos.length/LIMIT);
	const first = Math.max(current - MAX_LEFT, 1);
	const [filtro, setFiltro] = useState(0)

	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: pageSize
	})


	function onPageChange(page) {
	    
	}

	const handleChannge = async (e) => {
		e.preventDefault();
		setFiltro(e.target.value)		
		handleFiltrar(e.target.value)
		console.log(e.target.value, 0, pageSize);

		
	};
	const handleFiltrar = (value, from, to) =>{

		if(value == 0){
			service.getData({from: from, to: to, rows: rows}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: rows}).then(response => {
						if(response.data.length == 0){
							setMessage('Não existe investimentos')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
				
    			//console.log(response)
    		})
		} else if(value == 100000){
			//console.log(e.target.value)
			let novos = [];
			rows.forEach((investment) => {
            	if (investment.credito <= 100000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: novos}).then(response => {
						if(response.data.length == 0){
							setMessage('Não Existe investimentos nesse intervalo de valores!')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
				
				///console.log(response.data.length)
    		})
		} else if(value == 500000){
			let novos = [];
			rows.forEach((investment) => {
            	if (100000 < investment.credito <= 500000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: rows}).then(response => {
						if(response.data.length == 0){
							setMessage('Não existe investimentos')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
					//console.log(response)
    		})
		} else if(value == 1000000){
			let novos = [];
			rows.forEach((investment) => {
            	if (500000 < investment.credito <= 1000000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            //console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.count,
					from: from,
					to:to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: novos}).then(response => {
						if(response.data.length == 0){
							setMessage('Não Existe investimentos nesse intervalo de valores!')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
					//console.log(response)
    		})
		} else if(value == 5000000){
			let novos = [];
			rows.forEach((investment) => {
            	if (1000000 < investment.credito <= 5000000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: novos}).then(response => {
						if(response.data.length == 0){
							setMessage('Não Existe investimentos nesse intervalo de valores!')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
					//console.log(response)
    		})
		} else if(value == 10000000){
			let novos = [];
			rows.forEach((investment) => {
            	if (5000000 < investment.credito <= 10000000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: novos}).then(response => {
						if(response.data.length == 0){
							setMessage('Não Existe investimentos nesse intervalo de valores!')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
					//console.log(response)
    		})
		} else if(value == 50000000){
			let novos = [];
			rows.forEach((investment) => {
            	if (investment.credito < 50000000) {
                    novos.push(investment)
                    //console.log(novos)
                }
            })
            console.log(novos)
            service.getData({from: from, to: to, rows: novos}).then(response => {
				setPagination({ 
					count: response.data.length,
					from: from,
					to: to
				})
				setActivos(response.data)
				if(response.data.length == 0){
					service.getData({from: 0, to: pageSize, rows: novos}).then(response => {
						if(response.data.length == 0){
							setMessage('Não Existe investimentos nesse intervalo de valores!')
						} else {
							setPagination({ 
								count: response.data.length,
								from: 0,
								to: pageSize
							})
							setActivos(response.data)
						}
					})
				}
					//console.log(response)
    		})
		} 
	}

	const handlePageClick = (data) =>{
		console.log(data.selected)
		console.log(activos)
		if(activos.length > 0) {
			const from = (data.selected - 1) * pageSize;
	    	const to = (data.selected - 1) * pageSize + pageSize;
	    	handleFiltrar(filtro, from, to)
	    	setPagination({
	    			count: activos.length,
	    			from: from, 
	    			to: to
	    	})
		} else {
			handleFiltrar(filtro, 0, pageSize)
			setPagination({
				count: activos.length, 
				from: 0, 
				to: pageSize
			})
		}
		

	   
	}

	useEffect(() => {
	    //setInfo({});
	    handleFiltrar(filtro, pagination.from, pagination.to)

	 }, []);

	return(
		<>

			<img src={blogimage} width={'100%'} height={320}/>
		
			<div 
				className={classes.sombra}
			>
		
				<div 
					//className={classes.content}
					style={{
						//m: 10
					}}
				>
					<Typography					
						sx={{
							mt: 22,
							ml: 10,
							fontSize: '1.2rem',
							fontWeight: 500,
							color: ' #BDC1C9',
							fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: '1rem', mt: 28 },
							'@media (max-width: 400px)': { fontSize: '.7rem' },
							
						}}

					>

					<Divider  
				    	sx={{
				    		fontWeight: 700,  
				    		mt: 2,
				    		fontSize: 15,
	                		width: 50,
	                		border: `1px solid #BDC1C9`,
	                		fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: 12 },
							'@media (max-width: 400px)': { fontSize:  10 },
	            		}}
	                /> INVSTIMENTO
				       
				    </Typography>
				    <Typography					
						sx={{
							ml: 10,
							fontSize: '3.5rem',
							fontWeight: 200,
							color: 'white',
							fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: '2.5rem', mt: 1 },
							'@media (max-width: 400px)': { fontSize: '1.5rem' },
							
						}}

					>

					Investimentos
				       
				    </Typography>

				    <Box
				    	sx={{
				    		display: 'flex',
				    		mt: 5, 
				    		color: ' #BDC1C9',
				    	}}
				    >
				    	<Typography					
							sx={{
								//mt: 5,
								ml: 10,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.7rem' },
								
							}}

						>

						Início
					       
					    </Typography>
				    	<ChevronRight 
				    		sx={{
				    			ml: 3,
				    			mr: 3, 
				    			mt: .5, 
				    			fontSize: '1.1rem', 
				    			fontWeight: 700,
				    			'@media (max-width: 800px)': { mt: .1 },

				    		}}
				    	/>
				    	<Typography					
							sx={{
								//mt: 5,
								//ml: 5,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.6rem' },
								
							}}

						>

						Investimento
					       
					    </Typography>
					    <ChevronRight 
					    	sx={{
					    		ml: 3, 
					    		mr: 3, 
					    		mt: .5, 
					    		fontSize: '1.1rem', 
					    		fontWeight: 700,
					    		'@media (max-width: 800px)': { mt: .1 },
					    	}}
					    />
					    <Typography					
							sx={{
								//mt: 5,
								//ml: 5,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.6rem' },
								
							}}

						>

						Investimentos 
					       
					    </Typography>
				    </Box>

				</div>
			</div>


			<Grid container >

				<Grid item xs={12} sm={12} md={3}>
					<Box
						sx={{
		            		display: 'flex', 
		            		flexDirection: 'column',
		            		m: 4,
		            		//justifyContent: 'start',
		            		//alignItems: 'start',
		    				//textAlign: 'start',
		            	}}
					>

					    <FormControl
							sx={{
								//ml: 1,                                           
								fontSize: '10px',                    
								fontFamily: 'Wix Madefor Displa, sans-serif',
								}}
						>
						      <FormLabel 
						      	id="demo-radio-buttons-group-label"
						      	sx={{
									//mt: 5,
									//ml: 5,
									fontSize: '1.2rem',
									fontWeight: 200,
									fontFamily: 'Wix Madefor Display, serif',
									'@media (max-width: 800px)': { fontSize: '.8rem' },
									'@media (max-width: 400px)': { fontSize: '.6rem' },
									
								}}
						      >
						      	Buscar por:
						      </FormLabel>
						      <RadioGroup
						      	sx={{
						      		//display:'initial',
						      		display: 'flex', 
		            				flexDirection: 'column',
						      		fontSize: '10px',                    
									fontFamily: 'Wix Madefor Display, sans-serif',
						      	}}
						        aria-labelledby="demo-radio-buttons-group-label"
						        defaultValue={0}
						        name="nome"
						        onChange={handleChannge}  
						        
						      >
							        <FormControlLabel 
							        	value={0} 
							        	control={<Radio fontSize="small"/>} 
							        	label={
								        	<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
												TODOS
											</Typography>		        		
							        	} 
							        />
							        <FormControlLabel 
							        	value={100000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`MENOR QUE ${(100000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />

							        <FormControlLabel 
							        	value={500000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`${(100000).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${(500000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />

							        <FormControlLabel 
							        	value={1000000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`${(500000).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${(1000000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />

							        <FormControlLabel 
							        	value={5000000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`${(1000000).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${(5000000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />

							        <FormControlLabel 
							        	value={5000000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`${(5000000).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${(10000000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />

							        <FormControlLabel 
							        	value={10000000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`${(10000000).toLocaleString("en-US", {style:"currency", currency:"USD"})} - ${(50000000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />
							        <FormControlLabel 
							        	value={50000000} 
							        	control={<Radio fontSize="small" />} 
							        	label={
							        		<Typography 
												sx={{
													//ml: 1,
													fontWeight: 700,                                            
													fontSize: '12px',                    
													fontFamily: 'Wix Madefor Display, sans-serif',
												}}
											>
											   {`MAIOR QUE ${(50000000).toLocaleString("en-US", {style:"currency", currency:"USD"})}`} 	
											</Typography>	
							        	}
							        />
						       
						      </RadioGroup>

					    </FormControl>
					
					</Box>

				</Grid>

				<Grid item xs={12} sm={12} md={9} sx={{ display: { xs: 'flex', md: 'grid' },}}>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							//pl: 5,
							m: 2,
						}}
					>

							
						{activos.length == 0 ?

							<Typography					
								sx={{
									//mt: 5,
									//ml: 5,
									fontSize: '.9rem',
									fontWeight: 500,
									fontFamily: 'Oswald, serif',
									'@media (max-width: 800px)': { fontSize: '.8rem' },
									'@media (max-width: 400px)': { fontSize: '.6rem' },
									
								}}

							>

								Não têm blogs
						       
						    </Typography>
						 : 
							 <Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
								<Grid item xs={12}>
									<Grid container justifyContent="center" spacing={2}>
										{
											activos.map((slide, index) => {
												return(
													<Grid key={index} item sm={6} md={6} >
														<InvestmentBox primery={primery} secudary={secudary} slide={slide} logado={logado} setUser={setUser} setStatus={setStatus}/>
													</Grid>
												)
												
											})
										}
										
									</Grid>
								</Grid>
							</Grid>
						}
						{activos.length == 0 ?
							''
							:
							<Box
								className={classes.pagination}
				          		sx={{
									display: 'flex',
									justifyContent: 'start',	
									mt: 1,
									alignItems: 'start',
									ml: '-70%',
									'@media (max-width: 800px)': { ml: '-60%', },
									'@media (max-width: 500px)': { ml: 0, },
								}}
			          		>

								<ReactPaginate
									previousLabel={
										<button 
								        	//size="small"
								        	//onClick={submit}
								        	onClick={() => onPageChange(current - 1)}
								          	disabled={current === 1}
								        >
								        	{'<'}
								        </button>
									}
									nextLabel={
										<button 
							        	//size="small"
							        	//onClick={submit}
							        	onClick={() => onPageChange(current - 1)}
							          	disabled={current === 1}
								        	
								        >
								        	{'>'}
								        </button> 
									}
									breakLabel={'...'}
									pageCount={activos.length}
									marginPagesDisplayed={3}
									pageRageDisplayed={3}
									containerClassName={classes.pagination}
									activeClassName={`${classes.item} ${classes.active}`}
		    						disabledClassName={classes.disabled_page}
									onPageChange={handlePageClick}

								/>
							</Box>
						}
					</Box>


				</Grid>

			</Grid>

			<Paper
				elevation={1}
				sx={{					
	         		//p: 8,
	         		m: 1,
	        		borderRadius: 0,
				}}
			>
				<Footerblog primery={''} secudary={secudary} />
			</Paper>

			
		</>
	)


}

export default Investmentpainel;