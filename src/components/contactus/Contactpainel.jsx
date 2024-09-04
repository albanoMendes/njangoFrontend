import { useState } from 'react';
import { Paper, Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import { ChevronRight, WhatsApp, Facebook, Instagram, X, Telegram, Mail, LocalPhone, LocationOn, LinkedIn }  from '@mui/icons-material';
import blogimage from '../../assets/contactus.jpg';
import contactImage from '../../assets/contactLeft.jpg';
import classes from "./Contate.module.css";
import Footerblog from '../blog/Footerblog';

function Contactpainel(props) {

	const { primery, secudary } = props;

	const  [message, setMessage] = useState({
		id: '',
		first: '',
		lastname: '',
		email: '',
		cell: '',
		conteudo: '',

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
		                /> CONTACT
					       
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

						Contate Nos
					       
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

							Contact
						       
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

							Contate Nos
						       
						    </Typography>
					    </Box>

					</div>
					
				</div>
				<Paper
					elevation={1}
	        		sx={{
	        			//p: 1,
	        			mt: 5, 
	        			background: 'rgba(0, 0, 0, .0)',
	        		}}
	        	>
					<Grid container >
					<Grid item xs={12} sm={12} md={7} sx={{ display: { xs: 'flex', md: 'grid' },}}>
						 


					    <Box className={classes.formContact}>
					    	<Typography					
								sx={{							
									fontSize: '2.8rem',
									fontWeight: 200,
									color: 'white',
									fontFamily: 'Oswald, serif',
									'@media (max-width: 900px)': { fontSize: '2rem', mt: 1 },
									'@media (max-width: 400px)': { fontSize: '1.5rem' },
									
								}}

							>

							Contacte - nos
						       
						    </Typography>

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

								<div >
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

								<div >
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
								<textarea 
									//cols={20}
									rows={10}								
									placeholder="Mensagem"
									name="conteudo"
									onChange={handleChannge}	                        	
								>
									{message.conteudo} 
								</textarea>
								
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
							        	ENVIAR EMAIL
							        </Button>
							        					       
							        <Button 
							        	//size="small"
							        	//onClick={submit}
							        	sx={{
							                mt: 2,
							                ml: 1,
							                p:'10px 25px 10px 25px',
							                color: 'green',
							                //border: 'none',
							                cursor: 'pointer',		
							                textDecoration: 'none',
							                fontWeight: 600,
							                borderRadius: 0,
							                fontSize: '12px',
							                //borderRadius: 0,
											border: `2px solid green`,
											backgroudColor: 'white',								                   
							               
							                fontFamily: 'Wix Madefor Display, sans-serif',
							                '&:hover': {
								              	bgcolor: `green`,
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
							        	Whatsaap 
							        	<WhatsApp 
							        		sx={{
							        			//color: 'green', 
							        			ml: 1,
							        			fontSize: '12px',
							        			'&:hover': {								              	
									                ///color: 'white',
									                transition: 'all 400ms',
									             },
							        		}}
							        	/>
							        </Button> 
					          	
						
					          	</Box>
							</Box>

					    </Box>

					    

						
					</Grid>
					<Grid item xs={12} sm={12} md={5}>
						<img src={contactImage} width={'100%'} height={'100%'}/>
					</Grid>
			 	</Grid>
			</Paper>
			<Box 
				sx={{
					mt: 2,
					mb: 2,
					p: 5,
					display: 'flex',
					justifyContent: 'center',
					justifyItems: 'center',
					alignItems: 'center',
				}}
			>

				<Button
					sx={{
					  p: '30px 30px 30px 30px',
					  color: '#4267B2',
					  //border: 'none',
					  cursor: 'pointer',		
					  textDecoration: 'none',
					  textAlign: 'center',
					  borderRadius: '0',
					  fontSize: '12px',	
					  border: `2px solid #4267B2`,
					  '&:hover': {
		                    color: 'white',
		                    backgroundColor: '#4267B2',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },	
		              '@media (max-width: 425px)': { 
		        			fontSize: '9px', 
		        			p:'20px 20px 20px 20px',
		        			// mt: 5,
							
		        		},	
		        		'@media (max-width: 325px)': { 
		        			fontSize: '9px', 
		        			p:'10px 1px 10px 1px',
		        			// mt: 5,
							
		        		},						                   
					  //bgcolor: '#F9CC19', 
					}}
				>

					<Facebook  
						sx={{
							fontSize: 35,
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
				</Button>

				<Button
					sx={{
						ml: 1,
					  	p: '30px 30px 30px 30px',
					  	color: '#F25C05',
					  	//border: 'none',
					  	cursor: 'pointer',		
					  	textDecoration: 'none',
					  	textAlign: 'center',
					  	borderRadius: '0',
					  	fontSize: '12px',	
					  	border: `2px solid #F25C05`,
					  	'&:hover': {
		                    color: 'white',
		                    backgroundColor: '#F25C05',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
		               '@media (max-width: 425px)': { 
		        			fontSize: '9px', 
		        			p:'20px 20px 20px 20px',
		        			// mt: 5,
							
		        		},
		        		'@media (max-width: 325px)': { 
		        			fontSize: '9px', 
		        			p:'10px 1px 10px 1px',
		        			// mt: 5,
							
		        		},									                   
					  //bgcolor: '#F9CC19', 
					}}
				>

					<Instagram  
						sx={{
							fontSize: 35,
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
				</Button>

				<Button
					sx={{
						ml: 1,
					  p: '30px 30px 30px 30px',
					  color: 'black',
					  //border: 'none',
					  cursor: 'pointer',		
					  textDecoration: 'none',
					  textAlign: 'center',
					  borderRadius: '0',
					  fontSize: '12px',	
					  border: `2px solid black`,
					  '&:hover': {
		                    color: 'white',
		                    backgroundColor: 'black',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
		               '@media (max-width: 425px)': { 
		        			fontSize: '9px', 
		        			p:'20px 20px 20px 20px',
		        			// mt: 5,
							
		        		},
		        		'@media (max-width: 325px)': { 
		        			fontSize: '9px', 
		        			p:'10px 5px 10px 5px',
		        			// mt: 5,
							
		        		},									                   
					  //bgcolor: '#F9CC19', 
					}}
				>

					<X  
						sx={{
							fontSize: 35,
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
				</Button>

				<Button
					sx={{
						ml: 1,
					  p: '30px 30px 30px 30px',
					  color: '#0442BF',
					  //border: 'none',
					  cursor: 'pointer',		
					  textDecoration: 'none',
					  textAlign: 'center',
					  borderRadius: '0',
					  fontSize: '12px',	
					  border: `2px solid #0442BF`,
					  '&:hover': {
		                    color: 'white',
		                    backgroundColor: '#0442BF',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
		               '@media (max-width: 425px)': { 
		        			fontSize: '9px', 
		        			p:'20px 20px 20px 20px',
		        			// mt: 5,
							
		        		},
		        		'@media (max-width: 325px)': { 
		        			fontSize: '9px', 
		        			p:'10px 5px 10px 5px',
		        			// mt: 5,
							
		        		},									                   
					  //bgcolor: '#F9CC19', 
					}}
				>

					<LinkedIn  
						sx={{
							fontSize: 35,
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
				</Button>


				
			</Box>

			  	<Box
	        		sx={{
	        			display: { xs: 'none', md: 'flex', sm:  'flex'},
	        			justifyContent: 'center',
	        			alignItems: 'center',
  						textAlign: 'center',
  						//backgroundColor: '#CFCFCF',
	        			p: 2,

	        		}}
	        	>
	        		<Divider 
	        			orientation="vertical" 
	        			variant="middle" 
	        			flexItem 
	        			sx={{
    						fontWeight: 700,  
    						mt: 7,
    						mr: 2,
    						fontSize: 15,
		        			//width: 120,
		        			height: 80,
		        			border: `1px solid #BDC1C9`,
		        			'@media (max-width: 982px)': {
		        					mt: 7,
			    								mr: 0,
		        			},

		    			}}

	        		/>
	        		<Box
	        			sx={{
	        				display: 'flex',
	        				justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							p: 6,
							'@media (max-width: 982px)': {
								 p: 0,
							},

	        			}}
	        		>
	        			<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
				            	textAlign: 'center',							
								//borderRadius: '50%',
								border: 0,
								width: 48,
								height: 48,
								'@media (max-width: 982px)': { 
					            	width: 38,
									height: 38,
						          },
							}}
						>
							<LocalPhone 
								sx={{
									fontSize: '1.8rem', 
									color: `${secudary}`,
									'@media (max-width: 982px)': { 
				            			fontSize: '1.5rem', 
				            			ml: 2.5,
									},

								}} 
							/>
						</Box>
					<Box
						sx={{
							ml: 3,

							'@media (max-width: 982px)': {
									width: '100%', 
		    			///fontSize: '1.1rem',	
		    			ml: 4,	 
		    		},

						}}
					>
						<Typography
							sx={{
								fontSize: '.8rem',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 900px)': { 
		        			fontSize: '.7rem', 
		        		},
								'&:hover': {
			              	color: `${secudary}`,
			                cursor: 'pointer',
			                //color: 'white',
			                transition: 'all 400ms',
			             },
							}}
						>
							+244 946 463 288
						</Typography>						
						<Typography
							sx={{
								fontSize: '.8rem',
								//color: '#D3D3DB',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 982px)': { 
			            			fontSize: '.7rem', 
									
			            		},
								'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',
					                //color: 'white',
					                transition: 'all 400ms',
					             },
							}}
						>
							+244 926 333 223
						</Typography>
					</Box>
					
				</Box>
				<Divider 
			 		orientation="vertical" 
			 		variant="middle" 
			 		flexItem 
			 		sx={{
						fontWeight: 700,  
						mt: 7,
						ml: 5,
						fontSize: 15,
						//width: 120,
		    			height: 80,
		    			border: `1px solid #BDC1C9`
					}}	
				 />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						p: 6,
						ml: 3,
						'@media (max-width: 982px)': { 
			            	p: 0,
							ml: 2,
			          	},

					}}
				>
				
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',							
						//borderRadius: '50%',
						border: 0,
						width: 48,
						height: 48,
						'@media (max-width: 982px)': { 
		        			width: 38,
							height: 38,
			          	},
					}}
				>
							<Mail 
								sx={{
									fontSize: '1.8rem', 
									color: `${secudary}`,
									'@media (max-width: 900px)': { 
			            			fontSize: '1.5rem', 
									
			            		},

								}} 
							/>
						</Box>
						<Box
							sx={{
								mt: .5,
								//ml: 3,
								'@media (max-width: 982px)': { 
		        			///fontSize: '1.1rem',	
		        			//ml: 1,	 
		        		},

							}}
						>
							<Typography

								sx={{
									fontSize: '.8rem',
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
		            			fontSize: '.8rem', 
		            		},
									'&:hover': {
				              	color: `${secudary}`,
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
				             },
								}}
							>
								njangoinvestiment@gmail.com
							</Typography>						
				
						</Box>
						
			</Box>
				 <Divider 
				 		orientation="vertical" 
				 		variant="middle" 
				 		flexItem 
				 		sx={{
							fontWeight: 700,  
							mt: 7,
							ml: 5,
							fontSize: 15,
		        			//width: .1,
		        			height: 80,
		        			border: `1px solid #BDC1C9`
						}}	
				 	/>
				 	<Box
		    			sx={{
		    				display: 'flex',
		    				justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							p: 6,
							'@media (max-width: 982px)': { 
					            p: 0,
					         },


		    			}}
		    		>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
		    				textAlign: 'center',							
							//borderRadius: '50%',
							border: 0,
							width: 48,
							height: 48,
							'@media (max-width: 982px)': { 
			            		width: 38,
								height: 38,
				           },
							}}
						>
							<LocationOn 
								sx={{
									fontSize: '1.8rem', 
									color: `${secudary}`,
									'@media (max-width: 982px)': { 
						            	fontSize: '1.5rem',
						           },
								}} 
							/>
						</Box>
						<Box
							sx={{
								ml: 3,
								'@media (max-width: 982px)': { 
		        				///fontSize: '1.1rem',	
			            		ml: 5,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '.8rem',
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
			            			fontSize: '.7rem',							
			            		},
								'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',
					                //color: 'white',
					                transition: 'all 400ms',
			             			},
								}}
							>
								Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
							</Typography>						
							
						</Box>

				
		        		</Box>
		        		<Divider 
					 		orientation="vertical" 
					 		variant="middle" 
					 		flexItem 
					 		sx={{
								fontWeight: 700,  
								mt: 7,
								ml: 5,
								fontSize: 15,
		            			//width: 120,
		            			height: 80,
		            			border: `1px solid #BDC1C9`
		        			}}	
						/>
				
			</Box>

			<Box
	    		sx={{
	    			display: { xs: 'flex', md: 'none', sm:  'none'},
	    			justifyContent: 'center',
	    			flexDirection: 'column',
	    			alignItems: 'center',
						textAlign: 'center',
	    			p: 5,

	    		}}
	    	>

	    	<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							//p: 6,
							'@media (max-width: 982px)': {
								 //p: 0,
							},

				}}
			>
				<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
		            	textAlign: 'center',							
									//borderRadius: '50%',
									border: 0,
									width: 48,
									height: 48,
									'@media (max-width: 982px)': { 
				            	width: 38,
											height: 38,
				          },
								}}
							>
								<LocalPhone 
									sx={{
										fontSize: '1.8rem', 
										color: `${secudary}`,
										'@media (max-width: 982px)': { 
				            			//fontSize: '1.5rem', 
				            			//ml: 2.5,
											},

									}} 
								/>
							</Box>
							<Box
								sx={{
									//ml: 3,

									'@media (max-width: 982px)': {
											//width: '100%', 
		            			///fontSize: '1.1rem',	
		            			//ml: 4,	 
		            		},

								}}
							>
								<Typography
									sx={{
										fontSize: '1rem',
										fontFamily: 'Wix Madefor Display, sans-serif',
									
										'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',
					                //color: 'white',
					                transition: 'all 400ms',
					             },
									}}
								>
									+244 946 463 288
								</Typography>						
								<Typography
									sx={{
										fontSize: '1rem',
										//color: '#D3D3DB',
										fontFamily: 'Wix Madefor Display, sans-serif',
										
										'&:hover': {
							              	color: `${secudary}`,
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
									}}
								>
									+244 926 333 223
								</Typography>
							</Box>
							
						</Box>
						<Divider 
						 		
						 		sx={{
	    						fontWeight: 700,  
	    						mt: 4,
	    						//ml: 5,
	    						fontSize: 15,
	    			width: 250,
	    			//height: 80,
	    			border: `1px solid #BDC1C9`
					}}	
						 	/>

						 	<Box
	        			sx={{
	        				display: 'flex',
	        				justifyContent: 'center',
									flexDirection: 'column',
									alignItems: 'center',
									mt: 4,
									'@media (max-width: 982px)': {
										 //p: 0,
									},

	        			}}
	        		>
	        			<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
				            	textAlign: 'center',							
											//borderRadius: '50%',
											border: 0,
											width: 48,
											height: 48,
											'@media (max-width: 982px)': { 
						            	width: 38,
													height: 38,
						          },
										}}
									>
										<Mail 
											sx={{
												fontSize: '1.8rem', 
												color: `${secudary}`,
												'@media (max-width: 982px)': { 
						            			//fontSize: '1.5rem', 
						            			//ml: 2.5,
													},

											}} 
										/>
									</Box>
									<Box
										sx={{
											//ml: 3,

											'@media (max-width: 982px)': {
													//width: '100%', 
				            			///fontSize: '1.1rem',	
				            			//ml: 4,	 
				            		},

										}}
									>
										<Typography
											sx={{
												fontSize: '1rem',
												fontFamily: 'Wix Madefor Display, sans-serif',
											
												'&:hover': {
							              	color: `${secudary}`,
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
											}}
										>
											njangoinvestiment@gmail.com
										</Typography>						
										
									</Box>
		        	</Box>
	    		<Divider										 		
					 		sx={{
							fontWeight: 700,  
							mt: 4,
							//ml: 5,
							fontSize: 15,
				width: 250,
				//height: 80,
				border: `1px solid #BDC1C9`
				}}	
					 	/>

					 	<Box
	    			sx={{
	    				display: 'flex',
	    				justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
								mt: 4,
								mb: 4,
								'@media (max-width: 982px)': {
									 //p: 0,
								},

	    			}}
	    		>
	    			<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
			            	textAlign: 'center',							
										//borderRadius: '50%',
										border: 0,
										width: 48,
										height: 48,
										'@media (max-width: 982px)': { 
					            	width: 38,
												height: 38,
					          },
									}}
								>
									<LocationOn 
										sx={{
											fontSize: '1.8rem', 
											color: `${secudary}`,
											'@media (max-width: 982px)': { 
					            			//fontSize: '1.5rem', 
					            			//ml: 2.5,
												},

										}} 
									/>
								</Box>
								<Box
									sx={{
										//ml: 3,

										'@media (max-width: 982px)': {
												//width: '100%', 
			            			///fontSize: '1.1rem',	
			            			//ml: 4,	 
			            		},

									}}
								>
									<Typography
										sx={{
											fontSize: '1rem',
											fontFamily: 'Wix Madefor Display, sans-serif',
											textAlign: 'center',
											'&:hover': {
						              	color: `${secudary}`,
						                cursor: 'pointer',
						                //color: 'white',
						                transition: 'all 400ms',
						             },
										}}
									>
										Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
									</Typography>						
									
								</Box>

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
				<Footerblog primery={''} secudary={secudary} />
			</Paper>


		</>
	)

}


export default Contactpainel;