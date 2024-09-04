import blogimage from '../../assets/blogimage.jpg';
import {Box, Paper, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import { ChevronRight }  from '@mui/icons-material';
import classes from "./More.module.css";
import Blogbox from './Blogbox';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import Footerblog from './Footerblog';
import ReactPaginate from 'react-paginate';
import serviceblog from './serviceblog';
//import qs from 'qs';

const rows = [
	{
		id: 1,
		title: 'SOFTWARE DE GERENCIAMENTO DE PRODUÇÃO',
		subtitle: '',
		tipo: 'TECNOLÓGIA',
		autor: '(UP) UNIVESIADE PIAJET',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: 'A agricultura 4.0 é um conjunto de inovações voltadas para tecnologia avançada, a qual visa aprimorar, otimizar e rentabilizar a produtividade no campo. Com a demanda crescente de maior produtividade, mantendo a mesma área de plantio, a tecnologia é imprescindível para este processo. A partir do desenvolvimento de softwares e equipamentos que fazem a gestão do sistema de produção do produto e que consequentemente trará melhorias no desempenho das máquinas e diminuirá as chances de erro no processo. O Brasil lidera o ranking de produtividade agropecuária no mundo, porém, ainda é um país que não utiliza a tecnologia a seu favor, principalmente para ter total controle de sua safra para obter resultados positivos na redução de custo e aumento de lucratividade. No século XX iniciou-se a evolução da tecnologia na Agricultura, e no decorrer dos anos ela foi sendo aprimorada e estima-se que até 2022 a Agricultura 5.0 já estará disponível e com muito mais tecnologia. Atualmente o agricultor já tem ao seu dispor equipamentos de alta performance e tecnologia, que os auxiliam a produzir mais e melhor com menos tempo e recursos, porém para muitos agricultores pequenos, o acesso a esse tipo de equipamento e tecnologia ainda é um sonho um pouco distante. Apesar do Brasil ser um país com grande potencial de desenvolvimento agrícola, os custos de implementação para alguns tipos de agronegócio e mesmo a instabilidade do mercado causam incertezas nos empresários para investimentos no mesmo. Porém, com o aumento na procura e consumo de produtos produzidos em campo, essa realidade provavelmente irá melhorar no decorrer dos anos.',
		image: 'CAMPO_DIGITALIZADO.jpg',
		more: 'saber mais'
	},
	{
		id: 2,
		title: '5 tipos de investimentos que todo empreendedor deve conhecer',
		subtitle: '',
		tipo: 'ECONÓNIA',
		autor: '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: `O que é investimento?
		O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
		Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
		Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.

		Afinal, a principal característica do investimento é fazer o dinheiro investido render.
		Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
		Investimentos de renda fixa
		São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
		Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.

		Investimentos de renda variável
		Já os investimentos de renda variável não possuem uma rentabilidade previsível. A aplicação sofre interferências diversas, como o momento do mercado, a saúde da empresa investida e até mesmo fatores como o internacional – guerras, catástrofes, pandemias…
		Portanto, oferece muito risco e a participação de um consultor especializado em mercado é mais do que necessária aqui.

		`,		
		image: 'fundos_investimentos.jpg',
		more: 'saber mais'
	},
	{
		id: 3,
		title: 'SOFTWARE DE GERENCIAMENTO DE PRODUÇÃO',
		subtitle: '',
		tipo: 'TECNOLÓGIA',
		autor: '(UP) UNIVESIADE PIAJET',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: 'A agricultura 4.0 é um conjunto de inovações voltadas para tecnologia avançada, a qual visa aprimorar, otimizar e rentabilizar a produtividade no campo. Com a demanda crescente de maior produtividade, mantendo a mesma área de plantio, a tecnologia é imprescindível para este processo. A partir do desenvolvimento de softwares e equipamentos que fazem a gestão do sistema de produção do produto e que consequentemente trará melhorias no desempenho das máquinas e diminuirá as chances de erro no processo. O Brasil lidera o ranking de produtividade agropecuária no mundo, porém, ainda é um país que não utiliza a tecnologia a seu favor, principalmente para ter total controle de sua safra para obter resultados positivos na redução de custo e aumento de lucratividade. No século XX iniciou-se a evolução da tecnologia na Agricultura, e no decorrer dos anos ela foi sendo aprimorada e estima-se que até 2022 a Agricultura 5.0 já estará disponível e com muito mais tecnologia. Atualmente o agricultor já tem ao seu dispor equipamentos de alta performance e tecnologia, que os auxiliam a produzir mais e melhor com menos tempo e recursos, porém para muitos agricultores pequenos, o acesso a esse tipo de equipamento e tecnologia ainda é um sonho um pouco distante. Apesar do Brasil ser um país com grande potencial de desenvolvimento agrícola, os custos de implementação para alguns tipos de agronegócio e mesmo a instabilidade do mercado causam incertezas nos empresários para investimentos no mesmo. Porém, com o aumento na procura e consumo de produtos produzidos em campo, essa realidade provavelmente irá melhorar no decorrer dos anos.',
		image: 'CAMPO_DIGITALIZADO.jpg',
		more: 'saber mais'
	},
	{
		id: 4,
		title: '5 tipos de investimentos que todo empreendedor deve conhecer',
		subtitle: '',
		tipo: 'ECONÓNIA',
		autor: '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: `O que é investimento?
		O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
		Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
		Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.

		Afinal, a principal característica do investimento é fazer o dinheiro investido render.
		Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
		Investimentos de renda fixa
		São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
		Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.

		Investimentos de renda variável
		Já os investimentos de renda variável não possuem uma rentabilidade previsível. A aplicação sofre interferências diversas, como o momento do mercado, a saúde da empresa investida e até mesmo fatores como o internacional – guerras, catástrofes, pandemias…
		Portanto, oferece muito risco e a participação de um consultor especializado em mercado é mais do que necessária aqui.

		`,		
		image: 'fundos_investimentos.jpg',
		more: 'saber mais'
	},
	{
		id: 5,
		title: 'SOFTWARE DE GERENCIAMENTO DE PRODUÇÃO',
		subtitle: '',
		tipo: 'TECNOLÓGIA',
		autor: '(UP) UNIVESIADE PIAJET',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: 'A agricultura 4.0 é um conjunto de inovações voltadas para tecnologia avançada, a qual visa aprimorar, otimizar e rentabilizar a produtividade no campo. Com a demanda crescente de maior produtividade, mantendo a mesma área de plantio, a tecnologia é imprescindível para este processo. A partir do desenvolvimento de softwares e equipamentos que fazem a gestão do sistema de produção do produto e que consequentemente trará melhorias no desempenho das máquinas e diminuirá as chances de erro no processo. O Brasil lidera o ranking de produtividade agropecuária no mundo, porém, ainda é um país que não utiliza a tecnologia a seu favor, principalmente para ter total controle de sua safra para obter resultados positivos na redução de custo e aumento de lucratividade. No século XX iniciou-se a evolução da tecnologia na Agricultura, e no decorrer dos anos ela foi sendo aprimorada e estima-se que até 2022 a Agricultura 5.0 já estará disponível e com muito mais tecnologia. Atualmente o agricultor já tem ao seu dispor equipamentos de alta performance e tecnologia, que os auxiliam a produzir mais e melhor com menos tempo e recursos, porém para muitos agricultores pequenos, o acesso a esse tipo de equipamento e tecnologia ainda é um sonho um pouco distante. Apesar do Brasil ser um país com grande potencial de desenvolvimento agrícola, os custos de implementação para alguns tipos de agronegócio e mesmo a instabilidade do mercado causam incertezas nos empresários para investimentos no mesmo. Porém, com o aumento na procura e consumo de produtos produzidos em campo, essa realidade provavelmente irá melhorar no decorrer dos anos.',
		image: 'CAMPO_DIGITALIZADO.jpg',
		more: 'saber mais'
	},
	{
		id: 6,
		title: '5 tipos de investimentos que todo empreendedor deve conhecer',
		subtitle: '',
		tipo: 'ECONÓNIA',
		autor: '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: `O que é investimento?
		O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
		Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
		Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.

		Afinal, a principal característica do investimento é fazer o dinheiro investido render.
		Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
		Investimentos de renda fixa
		São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
		Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.

		Investimentos de renda variável
		Já os investimentos de renda variável não possuem uma rentabilidade previsível. A aplicação sofre interferências diversas, como o momento do mercado, a saúde da empresa investida e até mesmo fatores como o internacional – guerras, catástrofes, pandemias…
		Portanto, oferece muito risco e a participação de um consultor especializado em mercado é mais do que necessária aqui.

		`,		
		image: 'fundos_investimentos.jpg',
		more: 'saber mais'
	},
		
];

const LIMIT = 4;
const MAX_ITEMS = 4;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const pageSize = 4;

function Moreblogs(props) {

	const { primery, secudary } = props;
	const [blogs, setBlogs] = useState([]);
	const [offset, setOffset] = useState(0)
	const current = offset ? (offset / LIMIT) + 1 : 1;
	const pages = Math.ceil(blogs.length/LIMIT);
	const first = Math.max(current - MAX_LEFT, 1);

	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: pageSize
	})


	function onPageChange(page) {
	    
	}

	const handlePageClick = (data) =>{
		console.log(blogs.length)
		if(blogs.length > 0){
			const from = (data.selected - 1) * pageSize;
	    	const to = (data.selected - 1) * pageSize + pageSize;

	    	setPagination({...pagination, from: from, to: to})
		} else {
			setPagination({...pagination, from: 0, to: pageSize})
		}
		
	}

	useEffect(() => {
	    //setInfo({});
	    serviceblog.getData({from: pagination.from, to: pagination.to}).then(response => {
	    	
	    	setPagination({ ...pagination, count: response.count})
	    	if(response.count > 0 && response.data.length == 0){
	    		serviceblog.getData({from: 0, to: pageSize}).then(response => {
					setPagination({ 
						count: response.count,
						from: 0,
						to: pageSize
					})
					setBlogs(response.data)
	    			console.log(response)
	    		})
	    	}
	    	setBlogs(response.data)
	    	console.log(response)
	    })
	    
	 }, [pagination.from, pagination.to]);

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
		                /> BLOG
					       
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

						Todos Blogs
					       
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

							Blog
						       
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

							Todos Blogs
						       
						    </Typography>
					    </Box>

					</div>
					
				</div>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						//pl: 5,
						m: 4,
					}}
				>

					
					{blogs.length == 0 ?

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
										blogs.map((slide, index) => {
											return(
												<Grid key={index} item sm={6}>
													<Blogbox primery={primery} secudary={secudary} blog={slide}/>
												</Grid>
											)
											
										})
									}
									
								</Grid>
							</Grid>
						</Grid>
					}
					{blogs.length == 0 ?
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
								pageCount={pagination.count}
								marginPagesDisplayed={2}
								pageRageDisplayed={2}
								containerClassName={classes.pagination}
								activeClassName={`${classes.item} ${classes.active}`}
        						disabledClassName={classes.disabled_page}
								onPageChange={handlePageClick}

							/>
						</Box>
					}
					
					
				</Box>

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

export default Moreblogs;


/*

<Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
	<Grid item xs={12}>
		<Grid container justifyContent="center" spacing={2}>
			{
				rows.map((slide, index) => {
					return(
						<Grid key={index} item sm={6}>
							<Blogbox primery={primery} secudary={secudary} blog={slide}/>
						</Grid>
					)
					
				})
			}
			
		</Grid>
	</Grid>
</Grid>
<Pagination 
	limit={LIMIT} 
	total={blogs.length} 
	offset={offset}
	setOffset={setOffset}
	primery={primery} 
	secudary={secudary} 
/>
*/