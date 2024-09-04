//import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Blogbox from './Blogbox';

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
	
];


function Bloghome(props) {

	const { primery, secudary} = props;

	return(
		<>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					color: `${primery}`,
					mt: 10

				}}
			>	
				
				<Typography					
					sx={{
						fontSize: '1.5rem',
						fontWeight: 200,
						fontFamily: 'Wix Madefor Display, serif',
						'@media (max-width: 800px)': { fontSize: '1.2rem' },
						'@media (max-width: 400px)': { fontSize: '1.4rem' },
						
					}}

				>

				Ultimos Blogs Postados
			       
			    </Typography>
			   
			</Box>
			<Box
				
			>

				<Grid sx={{ flexGrow: 1, p: 3 }} container spacing={2}>
					<Grid item xs={12}>
						<Grid container justifyContent="center" spacing={2}>
							{
								rows.map((slide, index) => {
									return(
										<Grid key={index} item md={6}>
											<Blogbox primery={primery} secudary={secudary} blog={slide}/>
										</Grid>
									)
									
								})
							}
							
						</Grid>
					</Grid>
				</Grid>
				
			</Box>
			
			<Box
				sx={{
					m: 5,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
    				textAlign: 'center',

				}}
			>

					<Button
						//onClick={submit}
						sx={{
							borderRadius: 0,
							border: `2px solid ${secudary}`,
							backgroudColor: 'white',
							fontWeight: 200,
							fontSize: '.9rem',
							fontFamily: 'Wix Madefor Display, sans-serif',
							color: `${secudary}`,
							p:'10px 35px 10px 35px',
							'@media (max-width: 982px)': { 
		            			fontSize: '.7rem', 
		            			p:'10px 30px 10px 30px',
								
		            		},
							'&:hover': {
				              	bgcolor: `${secudary}`,
				                cursor: 'pointer',
				                color: 'white',
				                transition: 'all 400ms',
				             },
							
						}}
					>
						TODOS BLOGS POSTADOS
					</Button>
					
				</Box>
		</>
	)

}

export default Bloghome;