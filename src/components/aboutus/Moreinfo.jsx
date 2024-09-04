import { useState } from 'react';
import {Box, Paper, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import blogimage from '../../assets/Aboutus.jpg';
import teamimage from '../../assets/PngItem_496846.png';
import logo from '../../assets/—Pngtree—3d.png';
import classes from "./Moreinfo.module.css";
import { ChevronRight }  from '@mui/icons-material';
import UserTestemunhos from './UserTestemunhos';
import Footerblog from '../blog/Footerblog';

function Moreinfo(props) {

	const { primery, secudary } = props;

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
		                /> PAGES
					       
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

						Sobre Nós
					       
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

							Pages
						       
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

							Sobre Nós
						       
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
					
					<Box
						sx={{
							width: '100%',					
							display: 'flex',
							p: 1,
							justifyContent: 'space-evenly',
							//mt: 8,
							//mb: 2,
							'@media (max-width: 900px)': { 
			        			display: 'flex',
								flexDirection: 'column',
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
						
						<Box
							sx={{					
								maxWidth:550,
								height:300,
								'@media (max-width: 1115px)': { 
									maxWidth: '550px', 
									height: '200px',
								},
								'@media (max-width: 1065px)': { 
									maxWidth: '500px', 
									height: '200px',
								},
								'@media (max-width: 1000px)': { 
									maxWidth: '450px', 
									height: '200px',
								},
								'@media (max-width: 900px)': { 
									maxWidth: '470px', 
									height: '250px',
								},
							}}
						>
							
							<Typography
								variant="p"
								sx={{
									fontSize: '1.8rem',
									fontWeight: 200,
									fontFamily: 'Wix Madefor Display, serif',
									'@media (max-width: 1115px)': { fontSize: '1.5rem' },
									'@media (max-width: 375px)': { 
										fontSize: '1rem',	
				            			fontWeight: 400,
									},
									
								}}
							>
								Nossa Equipa
							</Typography>
							<Typography			                 
				                variant="p" 
				                component={'div'}
				                sx={{
				              		fontWeight: 300,
				              		//mt: -.1,
						            fontSize: '.8rem',
						            fontFamily: 'Wix Madefor Display, sans-serif',
				              		color: 'background: rgba(0, 0, 0, .5)',
				              		//ml: .5,
				              		'@media (max-width: 1115px)': { 
				            			fontSize: '.6rem',	
				            			fontWeight: 700,
				            			//mt: -2,	 
				        			},
				        			'@media (max-width: 900px)': { 
										fontSize: '.7rem',	
				            			fontWeight: 700,
									},
									'@media (max-width: 460px)': { 
										fontSize: '.6rem',	
				            			fontWeight: 400,
									},
				          		}}

				        	>
				              Njango investiment plataforma para acessória de investimentos, para empreendedores 
				              com projetos funcionando ou não que precisa de investimento, e para investidores com 
				              recursos para financiar. 
				              <br/><br/>
				              Monitiramos o investimentos garantido o funcionamento do investiimento
				              e a entrega do lucro ao investidor e acompanhamento do seu investimento.
				              Garatimos os a campanha de markting para atrair o maximo de interessados ao serviço ou 
				              aos produtos oferecidos a empresa após o investimento. 
				          	</Typography> 
				          	<Box
				          		sx={{
				          			display: 'flex',
				          		}}
				          	>

				          		<Button 
						        	//size="small"
						        	//onClick={submit}
						        	sx={{
						                mt: 2,
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
						        			 mt: 5,
											
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
						        	CONTATE - NOS
						        </Button>

						        <Button 
						        	//size="small"
						        	//onClick={submit}
						        	sx={{
						                mt: 2,
						                ml: 1,
						                p:'10px 25px 10px 25px',
						                color: `${secudary}`,
						                //border: 'none',
						                cursor: 'pointer',		
						                textDecoration: 'none',
						                //fontWeight: 'bold',
						                borderRadius: 0,
						                fontSize: '12px',
						                //borderRadius: 0,
										border: `2px solid ${secudary}`,
										backgroudColor: 'white',								                   
						               
						                fontFamily: 'Wix Madefor Display, sans-serif',
						                '&:hover': {
							              	bgcolor: `${secudary}`,
							                cursor: 'pointer',
							                color: 'white',
							                transition: 'all 400ms',
							             },
						                '@media (max-width: 1115px)': { 
						        			fontSize: '10px', 
						        			p:'10px 30px 10px 30px',
						        			 mt: 5,
											
						        		},
						        		/*'@media (max-width: 1060px)': { 
						        			fontSize: '10px', 
						        			p:'10px 30px 10px 30px',
						        			 mt: 5,
											
						        		},*/
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
						        			 //mt: 2,
											
						        		},
						            }}			
						        >
						        	jUNTAR SE A EQUIPA
						        </Button> 
				          	
					
				          	</Box>			          	

						</Box>

						<Typography
							component={'div'}
							sx={{
								maxWidth: '550px', 
								height: '250px',
								//mb: 1,
								'@media (max-width: 1115px)': { 
									maxWidth: '550px', 
									height: '200px',
									//mb: 1,
								},
								'@media (max-width: 1065px)': { 
									maxWidth: '500px', 
									height: '200px',
									//mb: 1,
								},
								'@media (max-width: 1000px)': { 
									maxWidth: '450px', 
									height: '200px',
									//mb: 1,
								},
								'@media (max-width: 900px)': { 
									maxWidth: '550px', 
									height: '250px',
								},
							}}

						>
							<img src={teamimage}  width={'100%'} height={'100%'}/>
						</Typography>
					</Box>
				</Box>
				<Paper
					elevation={1}
					sx={{					
		         		//p: 8,
		         		m: 1,
		        		borderRadius: 0,
					}}
				>
        		<UserTestemunhos primery={primery} secudary={secudary}/>
        	</Paper>
        	<Box
        		sx={{
        			display: 'flex',
        			justifyContent: 'center',
					justifyItems: 'center',
					alignItems: 'center',
					p: 5,
					'@media (max-width: 600px)': { 
	        			display: 'flex',
						flexDirection: 'column-reverse',
						justifyContent: 'center',
						alignItems: 'center',

	        		},
	        		'@media (max-width: 1115px)': { 
						//maxWidth: '550px', 
						//height: '200px',
						mt: 4,
						mb: 4
					},
        		}}
        	>
        		<Typography
					component={'div'}
					sx={{
						maxWidth: '225px', 
						height: '225px',
						//mb: 1,
						'@media (max-width: 1115px)': { 
							maxWidth: '250px', 
							height: '200px',
							//mb: 1,
						},
						'@media (max-width: 1065px)': { 
							maxWidth: '200px', 
							height: '200px',
							//mb: 1,
						},
						'@media (max-width: 1000px)': { 
							maxWidth: '250px', 
							height: '200px',
							//mb: 1,
						},
						'@media (max-width: 900px)': { 
							maxWidth: '250px', 
							height: '250px',
						},
					}}

				>
					<img src={logo}  width={'100%'} height={'100%'}/>
				</Typography>
				<Typography			                 
		                variant="p" 
		                component={'div'}
		                sx={{
		                	maxWidth: '350px',
		              		fontWeight: 700,
		              		mt: 2,
				            fontSize: '.8rem',
				            fontFamily: 'Wix Madefor Display, sans-serif',
		              		color: 'background: rgba(0, 0, 0, .5)',
		              		//ml: .5,
		              		'@media (max-width: 1115px)': { 
		            			fontSize: '.6rem',	
		            			fontWeight: 700,
		            			//mt: -2,	 
		        			},
		        			'@media (max-width: 900px)': { 
								fontSize: '.7rem',	
		            			fontWeight: 700,
							},
							/*'@media (max-width: 460px)': { 
								fontSize: '.6rem',	
		            			fontWeight: 400,
							},
							*/
		          		}}

		        	>
		              Njango investiment plataforma para acessória de investimentos, para empreendedores 
		              com projetos funcionando ou não que precisa de investimento, e para investidores com 
		              recursos para financiar. 
		              <br/><br/>
		              COMECE USAR AGORA MESMO!
		          	</Typography> 


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

export default Moreinfo;