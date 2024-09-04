import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import classes from "./Investements.module.css";
import Model from './Model';
import SignInOutContainer from '../components/login/SignInOutContainer';
import {useNavigate} from 'react-router-dom';

function InvestmentBox(props) {

	const { primery, secudary, slide, logado, setUser, setStatus } = props;
	const [openModel, setOpenModel] = useState(false);
	const [title, setTitle] = useState('');
	const [opcao, setOpcao] = useState('');
	let navigate = useNavigate();

	const submit = ()=>{

		//;
		if(logado){

		} else {
			setOpenModel(true);
			setTitle('')
		}

	};
	return(
		<>
			<Card   elevation={1} sx={{ maxWidth: 400, m: 1, p: 1, borderRadius: 0, }}>
		      	<Box
					sx={{
						display: 'flex',	
						//mt: 3,
						//ml: .5,
					}}
				>
					<Typography
						component={'div'}
					>
						<img src={new URL(`../assets/Logos/${slide.logo}`, import.meta.url)} width={40} height={40}/>
					</Typography>

					<Box
		            	sx={{
		            		display: 'flex', 
		            		flexDirection: 'column',
		            		justifyContent: 'start',
		            		alignItems: 'start',
		    				textAlign: 'start',
		            	}}
		            >
		              	<Typography			                 
			                variant="p" 
			                component={'div'}
			                sx={{
			              		fontWeight: 700,
			              		//mt: 1,
					            fontSize: '1.7rem',
					            fontFamily: 'Oswald, sans-serif',
			              		color: `#ddd`,
			              		ml: .5,
			              		'@media (max-width: 500px)': { 
			            			//fontSize: '2.5rem',	
			            			//mt: -2,	 
		            			},
		              		}}

		            	>
		              
		                  {slide.empresa}
		              	</Typography>  
			     	</Box>									
				</Box>
		      	<CardContent>
			      	<Typography
		                sx={{
		                    //justifyContent: 'center',
		                    //alignItems: 'center',
		                    fontWeight: 300,
		                    fontFamily: 'Oswald, sans-serif',	
		                    fontSize: '10px',                       
		                    //fontFamily: 'Arvo, serif',
		                    '@media (max-width: 600px)': { fontSize: '6px' },
		                }}  
		            >
		               TIPO DE TRABALHO:
		            </Typography>
			        <Typography 
						sx={{
					 		fontSize: 10,
					 		 fontWeight: 'bold',
					 		fontFamily: 'Wix Madefor Display, sans-serif',										 
					 		mb: .5,								 											 		
					 	}} 
					 >
		          	 {slide.segment}
		        	</Typography>

		        	<Typography
		                sx={{
		                    //justifyContent: 'center',
		                    //alignItems: 'center',
		                    fontWeight: 300,
		                    fontFamily: 'Oswald, sans-serif',	
		                    fontSize: '10px',                       
		                    //fontFamily: 'Arvo, serif',
		                    //'@media (max-width: 600px)': { fontSize: '6px' },
		                }}  
		            >
		               DESCRIÇÃO DA EMPRESA
		            </Typography>
			        <Typography 
			        	sx={{
			        		mb: .5,
							fontSize: '12px',
							fontWeight: 700,
							fontFamily: 'Wix Madefor Display, serif',
							//textAlign: 'center',
							//width: 225,
							//'@media (min-width: 1025px)': { fontSize: '10px' },
						}}
			        >		          
			          {slide.descricao}
			        </Typography>


		        	<Typography
		                sx={{
		                    //justifyContent: 'center',
		                    //alignItems: 'center',
		                    fontWeight: 300,	
		                    fontSize: '10px',                       
		                    fontFamily: 'Oswald, serif',
		                    //'@media (max-width: 600px)': { fontSize: '6px' },
		                }}  
		            >
		               MISSÃO DA EMPRESA:
		            </Typography>

			        <Typography 
			        	sx={{								        		
			        		fontSize: '12px',
							fontWeight: 700,
							fontFamily: 'Wix Madefor Display, serif',	
							mb: .5,
							//'@media (min-width: 1025px)': { fontSize: '10px' },		
			        	}} 
			        >
			          {slide.missao}
			        </Typography>

			        <Typography
		                sx={{
		                    //justifyContent: 'center',
		                    //alignItems: 'center',
		                    fontWeight: 300,	
		                    fontSize: '10px',                       
		                    fontFamily: 'Oswald, serif',
		                    //'@media (max-width: 600px)': { fontSize: '6px' },
		                }}  
		            >
		               OBJETIVO PRINCIPAL:
		            </Typography>

			        <Typography 
			        	sx={{
			        		mb: .5, 
			        		fontSize: '12px',
							fontWeight: 700,
							fontFamily: 'Wix Madefor Display, serif',
							//'@media (min-width: 1025px)': { fontSize: '10px' },
							
			        	}} 
			        >
			          {slide.objetivos}
			        </Typography>

			        <div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							p: 1,
						}}
					>
							<Box sx={{mt: .5}}>
								<Typography 
									sx={{
										fontSize: '9px', 
										fontWeight: 500, 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
									CAPITAL DA EMPRESA
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight:  500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
									{(slide.capital).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>

							<Box sx={{mt: .5}}>
								<Typography 
									sx={{
										fontSize: '9px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
									VALOR DO INVESTIMENTO
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
							
									{(slide.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>

							<Box sx={{mt: .5}}>
								<Typography 
									sx={{
										fontSize: '9px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
									SEU LUCRO
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
								
									{slide.lucro}%
								</Typography>
							</Box>
						</div>
			        
		      </CardContent>
		      <CardActions>
		        <Button 
		        	//size="small"
		        	onClick={() => navigate(`/Investir/${slide.id}`)}
		        	sx={{
		                mt: -1,
		                p:'10px 35px 10px 35px',
		                color: 'white',
		                border: 'none',
		                cursor: 'pointer',		
		                textDecoration: 'none',
		                //fontWeight: 'bold',
		                borderRadius: 0,
		                fontSize: '12px',								                   
		                backgroundColor: `${secudary}`,
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                '&:hover': {
		                    color: '#171010',
		                    backgroundColor: '#AD8500',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
		                '@media (max-width: 982px)': { 
		        			fontSize: '.7rem', 
		        			p:'10px 30px 10px 30px',
							
		        		},
		            }}			
		        >
		        	INVESTIR AGORA
		        </Button>  
		   
		      	</CardActions>	     
		    </Card>

		    <Model
		        openModel = {openModel}
		        setOpenModel={setOpenModel}
		        title={title}
		    >
	        	<SignInOutContainer setTitle={setTitle} tab={0} setClose={setOpenModel} setUser={setUser} opcao={'CRIAR'} setOpcao={setOpcao}/>
	      	</Model>
			
		</>
		
	)

}

export default InvestmentBox;