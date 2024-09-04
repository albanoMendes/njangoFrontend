import { useState, Fragment } from 'react'; 
import blogimage from '../../assets/Readblog.jpg';
import {
	Box, 
	Divider,
	 Grid, 
	 Card, 
	 CardMedia, 
	 CardActions, 
	 IconButton, 
	 CardContent, 
	 Typography, 
	 Button,
	 ListItemText,
	List,
	ListItem,
	Paper
} from '@mui/material';
import { 
	ChevronRight, 
	//WhatsApp, 
	Telegram,
	Mail,
	MailOutline,
	X, 
	Facebook,
	Instagram,
	LinkedIn,
	Event,
	Sell,
}  from '@mui/icons-material';
import classes from "./Read.module.css";
import Footerblog from './Footerblog';

const comments = [
	{
		id: '1',
		name: 'Paulo Padro',
		conteudo: 'Obrigado pelo artigo maravilhoso me ofereceu uma nova prespectiva de vista sobre o assunto.',
		data: 'Apr 21, 2023 at 12:05 pm',
	},
	{
		id: '2',
		name: 'Miranda Afonso',
		conteudo: 'Obrigado pelo artigo maravilhoso me ofereceu uma nova prespectiva de vista sobre o assunto.',
		data: 'Apr 21, 2023 at 12:05 pm',
	}

]

function Readblog(props) {

	const { primery, secudary } = props;

	const  [message, setMessage] = useState({
		id: '',
		first: '',
		lastname: '',
		email: '',
		cell: '',
		conteudo: '',

	})

	const [blog, setBlog] = useState({
			id: 2,
			title: '5 Tipos De Investimentos Que Todo Empreendedor Deve Conhecer',
			subtitle: 'Onde começar a investir?',
			tipo: 'ECONÓNIA',
			autor: '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
			data: 'Apr 21, 2023 at 12:05 pm',		
			conteudo1: `O que é investimento?
			O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
			Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
			Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.
			`,

			conteudo2: `Afinal, a principal característica do investimento é fazer o dinheiro investido render.
			Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
			Investimentos de renda fixa
			São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
			Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.
			`,

			conteudo3: `Investimentos de renda variável
			Já os investimentos de renda variável não possuem uma rentabilidade previsível. A aplicação sofre interferências diversas, como o momento do mercado, a saúde da empresa investida e até mesmo fatores como o internacional – guerras, catástrofes, pandemias…
			Portanto, oferece muito risco e a participação de um consultor especializado em mercado é mais do que necessária aqui.

			`,		
			image1: 'fundos_investimentos.jpg',
			image2: 'renda.jpeg',
			more: 'saber mais'
	})

	const [universidade, setUniversidade] = useState({
		id: 1,
		name: '(UTA) universidade Utanga de Angola',
		faculdade: 'Econômia',
		descricao: 'Somos ECOA grupo de pesquisa de Econômia da universidade (UTA), o nosso principal objetivo é mostrar empacto da economia no dia dia do angolano.',
		semestre: '2024.1',
		monitor: 'Dr. André Pedro',
		logo: 'utanga.png'
	})


	const handleChannge =(e)=>{
        setMessage({...message,[e.target.name]: e.target.value})
    };

	const submitForm = (e)=>{
        e.preventDefault();
    };



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

					Lêr Blog
				       
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

						Lêr Blog
					       
					    </Typography>
				    </Box>

				</div>
				
			</div>

			<Grid container >
				<Grid item xs={12} sm={12} md={8} sx={{ display: { xs: 'flex', md: 'grid' },}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							p: 10,
							'@media (max-width: 900px)': { 
		            			//fontSize: '10px',
		            			//display: 'flex', 
		            			//justifyContent: 'center',
								//alignItems: 'center',
								//textAlign: 'center',							
								p: 2,
		            		},

							//mt: -40,
							//alignItems: 'center',
							//textAlign: 'center',
							//background: '#D3D3DB',
							//m: 6,
							//p: 5,

						}}
					>

						<Typography					
							sx={{							
								fontSize: '2rem',
								fontWeight: 700,
								//color: '#1D1D1D',
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '1.5rem', mt: 1 },
								'@media (max-width: 400px)': { fontSize: '1rem' },
								
							}}

						>

							{blog.title}
					       
					    </Typography>

					    <Typography					
							sx={{							
								fontSize: '1.2rem',
								fontWeight: 100,
								color: `${secudary}`,
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 800px)': { fontSize: '1rem', mt: 1 },
								'@media (max-width: 400px)': { fontSize: '.8rem' },
								
							}}

						>

							{blog.subtitle}
					       
					    </Typography>

						<Box
							sx={{
								mt: 1,
								display: 'flex',
								//justifyContent: 'space-between'
							}}
						>
							<Box
								sx={{
									display: 'flex',
									
								}}
							>
								<Event sx={{color: `${secudary}`, fontSize: 18}} />
								<Typography
									sx={{ 
					                	//display: 'inline'
					                	ml: .5, 
					                	color: '#B8B8B8',
					                	fontSize: 14,
					                	//fontWeight: 700,
					                	fontFamily: 'Wix Madefor Display, sans-serif',
					              	}}
								>
									{blog.data}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									ml: 2
									
								}}
							>
								<Sell sx={{color: `${secudary}`, fontSize: 18}} />
								<Typography
									sx={{ 
					                	//display: 'inline' 
					                	ml: .5,
					                	color: '#B8B8B8',
					                	fontSize: 14,
					                	//fontWeight: 700,
					                	fontFamily: 'Wix Madefor Display, sans-serif',
					              	}}
								>
									{blog.tipo}
								</Typography>
							</Box>
							
						</Box>
						<Box
							sx={{mt: 5}}
						>
							<Typography
								sx={{ 
				                	//display: 'inline' 
				                	ml: .5,
				                	color: `${primery}`,
				                	fontSize: 15,
				                	fontWeight: 200,
				                	fontFamily: 'Wix Madefor Display, sans-serif',
				              	}}
							>
								{blog.conteudo1}
							</Typography>
							<Typography
								component={'div'}
								sx={{
									//maxWidth: '600px', 
									//height: '300px',
									mt: 5,
									'@media (max-width: 900px)': { 
				            			//fontSize: '10px',
				            			width: '98%',
				            			display: 'flex', 
				            			justifyContent: 'center',
										alignItems: 'center',
										textAlign: 'center',
										
			            			},

									
								}}
							>
								<img src={new URL(`../../assets/blog/${blog.image1}`, import.meta.url)} width={'100%'} height={'100%'}/>
							</Typography>
						</Box>

						<Box
							sx={{mt: 5}}
						>
							<Typography
								sx={{ 
				                	//display: 'inline' 
				                	ml: .5,
				                	color: `${primery}`,
				                	fontSize: 15,
				                	fontWeight: 200,
				                	fontFamily: 'Wix Madefor Display, sans-serif',
				              	}}
							>
								{blog.conteudo2}
							</Typography>
							<Typography
								component={'div'}
								sx={{
									//maxWidth: '600px', 
									//height: '300px',
									mt: 5,
									'@media (max-width: 900px)': { 
				            			//fontSize: '10px',
				            			width: '98%',
				            			display: 'flex', 
				            			justifyContent: 'center',
										alignItems: 'center',
										textAlign: 'center',
										
			            			},
								}}
							>
								<img src={new URL(`../../assets/blog/${blog.image2}`, import.meta.url)} width={'100%'} height={'100%'}/>
							</Typography>
						</Box>

						<Box
							sx={{mt: 5, mr: .5}}
						>

							<Typography
								sx={{ 
				                	//display: 'inline' 
				                	ml: .5,
				                	color: `${primery}`,
				                	fontSize: 15,
				                	fontWeight: 200,
				                	fontFamily: 'Wix Madefor Display, sans-serif',
				              	}}
							>
								{blog.conteudo3}
							</Typography>

						</Box>

						
						<Box
							sx={{
								mt: 5,
								display: 'flex',

							}}
						>
							<Typography
								sx={{ 
				                	//display: 'inline'

				                	ml: .5,
				                	color: `${primery}`,
				                	fontSize: 15,
				                	fontWeight: 200,
				                	fontFamily: 'Wix Madefor Display, sans-serif',
				              	}}
							>
								Partilhar este post!
							</Typography>
								<Box
										sx={{
											//m: 2,
											display: 'flex',
											//flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>

										<Facebook  
											sx={{
												fontSize: 20,
												ml: 5,
												color: '#B8B8C8',
												'&:hover': {
									              	color: '#4267B2',
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									         	},
												'@media (max-width: 425px)': { 
							        			fontSize: 25, 
							        			//p:'20px 20px 20px 20px',
							        			// mt: 5,
												
								        		},	
								        		'@media (max-width: 325px)': { 
								        			fontSize: 20, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},	
											}}
										/>

										<Instagram  
											sx={{
												fontSize: 20,
												ml: 1,
												color: '#B8B8C8',
												'&:hover': {
									              	color: '#F25C05',
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
												'@media (max-width: 425px)': { 
								        			fontSize: 25, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},
								        		'@media (max-width: 325px)': { 
								        			fontSize: 20, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},		
											}}
										/>

										<X  
											sx={{
												fontSize: 20,
												ml: 1,
												color: '#B8B8C8',
												'&:hover': {
									              	color: 'black',
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
												'@media (max-width: 425px)': { 
								        			fontSize: 25, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},
								        		'@media (max-width: 325px)': { 
								        			fontSize: 20, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},		
											}}
										/>

										<LinkedIn  
											sx={{
												fontSize: 20,
												ml: 1,
												color: '#B8B8C8',
												'&:hover': {
									              	color: '#0442BF',
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									            },
												'@media (max-width: 425px)': { 
							        			fontSize: 25, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,													
								        		},
								        		'@media (max-width: 325px)': { 
								        			fontSize: 20, 
								        			//p:'20px 20px 20px 20px',
								        			// mt: 5,
													
								        		},		
											}}
										/>

										<Telegram  
											sx={{
												fontSize: 20,
												ml: 1,
												color: '#B8B8C8',
												'&:hover': {
								              		color: '#05AFF2',
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
												'@media (max-width: 425px)': { 
							        				fontSize: 25, 
							        				//p:'20px 20px 20px 20px',
							        				// mt: 5,
												
							        			},
							        			'@media (max-width: 325px)': { 
							        				fontSize: 20, 
							        				//p:'20px 20px 20px 20px',
							        				// mt: 5,
												
							        			},		
											}}
										/>

								
							</Box>

						
						</Box>

						<Box
							sx={{mt: 5}}
						>
							<Typography					
								sx={{							
									fontSize: '2.8rem',
									fontWeight: 200,
									//color: '#1D1D1D',
									fontFamily: 'Oswald, serif',
									'@media (max-width: 800px)': { fontSize: '2.5rem', mt: 1 },
									'@media (max-width: 400px)': { fontSize: '1.5rem' },
									
								}}

							>

								Comentários						       
						    </Typography>

						    <List sx={{ width: '100%'}}>

		              			{comments.map((slide, index) => {
									return(
										<ListItem alignItems="flex-start">
				        
									        <ListItemText
									          primary={
									          	 <Typography
									                sx={{ 
									                	//display: 'inline'
									                	mt: -2, 
									                	color: `${secudary}`,
									                	fontSize: 15,
									                	fontWeight: 200,
									                	fontFamily: 'Wix Madefor Display, sans-serif',
									                	'&:hover': {
											              	//bgcolor: `${secudary}`,
											                cursor: 'pointer',
											                color: '#B8B8C8',
											                transition: 'all 400ms',
											             },
									              	}}
									                //component="span"
									                //variant="body2"
									                //color="text.primary"
									              >
									                {slide.name}
									              </Typography>

									          }
									          secondary={
									            <Fragment
									            	sx={{ 
									                	//display: 'inline' 
									                	//color: 'B8B8B8',

									              	}}
									            >
									            	<Box
									            		sx={{
									            			display: 'flex',
									            			justifyContent: 'space-between',
									            			flexDirection: 'column',

									            		}}
									            	>
									            		
									            		<Typography
											                sx={{ 
											                	//display: 'inline' 
											                	color: `${primery}`,
											                	fontSize: 15,
											                	fontFamily: 'Wix Madefor Display, sans-serif',
											              	}}
											                
											              >
											                {slide.conteudo}
											              </Typography>
											              <Typography
											                sx={{ 
											                	//display: 'inline' 
											                	color: `${primery}`,
											                	//mt: .1,
											                	fontSize: 12,
											                	fontFamily: 'Wix Madefor Display, sans-serif',
											              	}}
											                
											              >
											                {slide.data}
											              </Typography>

									            	</Box>
									              
									              
									            </Fragment>
									          }
									        />
									      </ListItem>
										)})
		              				}								              	
		              		</List>


						</Box>
						<Box
							sx={{mt: 5}}
						>					
							<Typography					
								sx={{							
									fontSize: '2.8rem',
									fontWeight: 200,
									//color: '#1D1D1D',
									fontFamily: 'Oswald, serif',
									'@media (max-width: 800px)': { fontSize: '2.5rem', mt: 1 },
									'@media (max-width: 400px)': { fontSize: '1.5rem' },
									
								}}

							>

								Enviar	comentário						       
						    </Typography>


						    <Box className={classes.formContact}>
						    	<Box
									sx={{
										width: '100%',					
										display: 'flex',
										justifyContent: 'space-evenly',
										//mt: 8,
										//mb: 2,
										'@media (max-width: 400px)': { 
						        			display: 'flex',
											flexDirection: 'column-reverse',
											justifyContent: 'center',
											alignItems: 'center',

						        		},
						        		'@media (max-width: 1115px)': { 
											//maxWidth: '550px', 
											//height: '200px',
											//mt: 4,
											//mb: 4
										},

									}}
								>

									<div 
										//className={classes.input_box}
									>
										<input 
											type="text" 
											placeholder="Primeiro Nome"
											name="first"
											onChange={handleChannge}
				                        	value={message.first} 
										/>
									</div>

									<div className={classes.input_box}>
										<input 
											type="text" 
											placeholder="Ultimo Nome"
											name="second"
											onChange={handleChannge}
				                        	value={message.second} 
										/>
									</div>

									
								</Box>

								<Box
									sx={{
										width: '100%',					
										display: 'flex',
										justifyContent: 'space-evenly',
										//mt: 8,
										//mb: 2,
										'@media (max-width: 400px)': { 
						        			display: 'flex',
											flexDirection: 'column-reverse',
											justifyContent: 'center',
											alignItems: 'center',

						        		},
						        		'@media (max-width: 1115px)': { 
											//maxWidth: '550px', 
											//height: '200px',
											//mt: 4,
											//mb: 4
										},

									}}
								>

									<div 
										//className={classes.input_box}
									>
										<input 
											type="email" 
											placeholder="Email"
											name="email"
											onChange={handleChannge}
				                        	value={message.email} 
										/>
									</div>

									<div className={classes.input_box}>
										<input 
											type="text" 
											placeholder="Telefone"
											name="cell"
											onChange={handleChannge}
				                        	value={message.cell} 
										/>
									</div>
									
								</Box>

								<Box
									sx={{
										m: '5px auto',
										//p: 1
										//width: '100%',
										//ml: 2,
										'@media (max-width: 425px)': { 
						        			p: .5,
											
						        		},
										'@media (max-width: 415px)': { 
						        			p: .5,
											
						        		},
									}}
								>	

								<div 
								 //className={classes.input_box}
								>
									<textarea 
										//cols={20}
										rows={10}								
										placeholder="Mensagem"
										name="conteudo"
										onChange={handleChannge}	                        	
									>
										{message.conteudo} 
									</textarea>
								</div>				
									
									
								</Box>

								<Box>
									<Box
						          		sx={{
						          			display: 'flex',
						          		}}
						          	>

						          		<Button 
								        	//size="small"
								        	//onClick={submit}
								        	sx={{
								                mt: 1,
								                p:'10px 25px 10px 25px',
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
								                '@media (max-width: 1115px)': { 
								        			fontSize: '10px', 
								        			p:'10px 30px 10px 30px',
								        			 mt: 2,
													
								        		},						        		
								        		'@media (max-width: 1060px)': { 
								        			fontSize: '10px', 
								        			p:'10px 30px 10px 30px',
								        			 mt: 1.5,
													
								        		},
								        		'@media (max-width: 1024px)': { 
								        			//fontSize: '10px', 
								        			//p:'10px 30px 10px 30px',
								        			 mt: 2,
													
								        		},
								        		'@media (max-width: 425px)': { 
								        			fontSize: '9px', 
								        			p:'10px 20px 10px 20px',
								        			// mt: 5,
													
								        		},
								        		'@media (max-width: 375px)': { 
								        			fontSize: '8px', 
								        			p:'10px 20px 10px 20px',
								        			 mt: 2,
													
								        		},
								            }}			
								        >
								        	ENVIAR
								        </Button>   
						          	
							
						          	</Box>
								</Box>

						    </Box>


						</Box>

					</Box>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<Box

						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							background: '#D3D3DB',
							m: 6,
							p: 5,
							'@media (max-width: 900px)': { 
		            			//fontSize: '10px',
		            			display: 'flex', 
		            			justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								m: 1,
								p: 1,
		            		},


						}}
					>
						
						<img src={new URL(`../../assets/${universidade.logo}`, import.meta.url)}  width={160} height={150}/>
						<Box>


							<Typography 
								sx={{
									fontSize: '13px', 
									fontWeight: 700, 
									fontFamily: 'Wix Madefor Display, sans-serif', 
									color: `black`,
									'@media (max-width: 850px)': { 
				            			fontSize: '10px', 
										
				            		},
				            		'@media (max-width: 450px)': { 
						            	fontSize: '8px', 
												
					            	},
								}}
							>
								{universidade.name}
							</Typography>
							<Typography 
								sx={{
									fontSize: '11px', 
									fontWeight: 700, 
									fontFamily: 'Wix Madefor Display, sans-serif', 
									color: `black`,
									'@media (max-width: 850px)': { 
				            			fontSize: '9px', 
										
				            		},
				            		'@media (max-width: 450px)': { 
						            	fontSize: '7px', 
												
					            	},
								}}
							>
								{universidade.faculdade}
							</Typography>

							<Typography 
								sx={{
									mt: 1,
									fontSize: '13px', 
									fontWeight: 200, 
									fontFamily: 'Wix Madefor Display, sans-serif', 
									color: `black`,
									'@media (max-width: 850px)': { 
				            			fontSize: '10px', 
										
				            		},
				            		'@media (max-width: 450px)': { 
						            	fontSize: '8px', 
												
					            	},
								}}
							>
								{universidade.descricao}
							</Typography>

							<Box
								sx={{
									m: 2,
									display: 'flex',
									//flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>

								<Facebook  
									sx={{
										fontSize: 24,
										m: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#4267B2',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							         	},
										'@media (max-width: 425px)': { 
					        			fontSize: 25, 
					        			//p:'20px 20px 20px 20px',
					        			// mt: 5,
										
						        		},	
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},	
									}}
								/>

								<Instagram  
									sx={{
										fontSize: 24,
										m: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#F25C05',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
						        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<X  
									sx={{
										fontSize: 24,
										m: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: 'black',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
						        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<LinkedIn  
									sx={{
										fontSize: 24,
										m: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#0442BF',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
								        },
										'@media (max-width: 425px)': { 
					        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,													
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<Telegram  
									sx={{
										fontSize: 24,
										m: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#05AFF2',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
				        			fontSize: 25, 
				        			//p:'20px 20px 20px 20px',
				        			// mt: 5,
									
				        		},
				        		'@media (max-width: 325px)': { 
				        			fontSize: 20, 
				        			//p:'20px 20px 20px 20px',
				        			// mt: 5,
									
				        		},		
									}}
								/>

								
							</Box>
							
						</Box>



					</Box>
				</Grid>

			</Grid>	
			<Paper
	      		elevation={1} 
		          sx={{
		             	//p: 1,
		              //bgcolor: '#F2F2F2',
		              m: 1,
		              //minWidth: 200,
		              borderRadius: 0,     

		          }}
		    >
	      		<Footerblog primery={''} secudary={secudary}/>
	     	</Paper> 
		</>
	)

}

export default Readblog;