import { useState } from 'react';
import {Box, Typography, Divider, Grid} from '@mui/material';
import {Watch, Mail, LocationOn, LocalPhone, MailOutline} from '@mui/icons-material';
import logo from '../../assets/LogoIn13.png';
import classes from "./Footer.module.css";

function Footerblog(props) {

	const { primery, secudary } = props;

	return(
		<Box
			sx={{
				bgcolor: `${primery}`,
          		//textAlign: 'center',
          		p: 5,
			}}

		>
		<Box
			sx={{
				//bgcolor: `${primery}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
          		//textAlign: 'center',

			}}
		>
			<Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={2}>
						
						<Grid item sm={6} md={4} xs={12}>
							<Box>
								<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 300,
					              		///mt: -.1,
							            fontSize: '1.5rem',
							            fontFamily: 'Wix Madefor Display, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
					            			//fontSize: '2.5rem',	
					            			//mt: -2,	 
				            			},
				              		}}

				            	>
				                  Sobre Nós
				              	</Typography>  
				              	<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 300,
					              		//mt: -.1,
							            fontSize: '.7rem',
							            fontFamily: 'Wix Madefor Display, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
					            			//fontSize: '2.5rem',	
					            			//mt: -2,	 
				            			},
				              		}}

				            	>
				                  Njango investiment plataforma para acessória de investimentos, para empreendedores 
				                  com projetos funcionando ou não que precisa de investimento, e para investidores com 
				                  recursos para financiar. Monitiramos o investimentos garantido o funcionamento do investiimento
				                  e a entrega do lucro ao investidor e acompanhamento do seu investimento.
				              	</Typography> 
							</Box>
							
						</Grid>

						<Grid item sm={6} md={4} xs={12}>
							<Box>
								<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 300,
					              		///mt: -.1,
							            fontSize: '1.5rem',
							            fontFamily: 'Wix Madefor Display, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
					            			//fontSize: '2.5rem',	
					            			//mt: -2,	 
				            			},
				              		}}

				            	>
				                  Contact - nos
				              	</Typography>
				              	<Box
									sx={{
										display: 'flex',
										//justifyContent: 'space-between',
									}}
								>

									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
				            				textAlign: 'center',							
											borderRadius: '50%',
											//border: '1px solid #ddd',
											width: 30,
											height: 30,
											/*'@media (max-width: 982px)': { 
						            			width: 28,
												height: 28,
						            		},*/
										}}
									>
										<LocationOn sx={{fontSize: '1.2rem', color: `${secudary}`,}} />
									</Box>
									<Box
										sx={{
											mt: .8,
											//ml: .1,
											'@media (max-width: 982px)': { 
						            			///fontSize: '1.1rem',	
						            			//ml: 1,	 
						            		},

										}}
									>
										<Typography
											sx={{
												fontSize: '.7rem',
												color: 'white',
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
											Viana, zango 4, Rua Pedro Arlindo Cruz casa nº 45, Luanda, Angola
										</Typography>						
										
									</Box>
									
								</Box> 

								<Box
									sx={{
										display: 'flex',
										//justifyContent: 'space-between',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
				            				textAlign: 'center',							
											borderRadius: '50%',
											//border: '1px solid #ddd',
											width: 30,
											height: 30,
											/*'@media (max-width: 982px)': { 
						            			width: 28,
												height: 28,
						          			},*/
										}}
									>
										<LocalPhone 
											sx={{
												fontSize: '1rem', 
												color: `${secudary}`,
												'@media (max-width: 982px)': { 
							            			fontSize: '1.5rem', 
													
							            		},

											}} 
										/>
									</Box>
									<Box
										sx={{
											mt: 1,
											//ml: -6,
											'@media (max-width: 982px)': { 
						            			///fontSize: '1.1rem',	
						            			//ml: 1,	 
						            		},

										}}
									>
										<Typography
											sx={{
												fontSize: '.7rem',
												color: 'white',
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
											+244 946 463 288
										</Typography>						
							
									</Box>
									
								</Box> 

								<Box
									sx={{
										display: 'flex',
										//justifyContent: 'space-between',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
				            				textAlign: 'center',							
											borderRadius: '50%',
											//border: '1px solid #ddd',
											width: 30,
											height: 30,
											/*'@media (max-width: 982px)': { 
							            		width: 28,
												height: 28,
							          		},*/
										}}
									>
										<Mail 
											sx={{
												fontSize: '1.2rem', 
												color: `${secudary}`,
												'@media (max-width: 982px)': { 
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
												fontSize: '.7rem',
												color: 'white',
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
											njangoinvestiment@gmail.com
										</Typography>						
							
									</Box>
									
								</Box> 


							</Box>
						</Grid>

						<Grid item sm={6} md={4} xs={12}>
							<Box>
								<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 300,
					              		///mt: -.1,
							            fontSize: '1.5rem',
							            fontFamily: 'Wix Madefor Display, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
					            			//fontSize: '2.5rem',	
					            			//mt: -2,	 
				            			},
				              		}}

				            	>
				                  Agendar Reunião
				              	</Typography>  

				              	<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 300,
					              		mt: 1,
							            fontSize: '.7rem',
							            fontFamily: 'Wix Madefor Display, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
					            			//fontSize: '2.5rem',	
					            			//mt: -2,	 
				            			},
				              		}}

				            	>
				                  Agenda reunião para conselho de melhores investimentos para o valor expecificos,
				                  e outros assuntos relacionados a investimentos.
				              	</Typography>

				              	<div className={classes.search}>
									<span className={classes.form_element} >

										<span className={classes.fa_search}>
											<MailOutline
												sx={{
													fontSize: '1.8rem', 
													color: `${secudary}`,
													'@media (max-width: 982px)': { 
								            			fontSize: '1.5rem', 
								            		},
								            	}}
											/>
										</span>

										<input type="email" placeholder="Informe o seu email"/>
									</span>
								</div>  
								
							</Box>
						</Grid>
								
						
					</Grid>
				</Grid>
			</Grid>
		</Box>
			
		<Box

			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				mt: 5,
			}}
		>
			
			<Box
				className={classes.logo_footer}
			>
				<Typography
					component={'div'}
				>
					<img src={logo}/>
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
			          		fontWeight: 800,
			          		mt: -.05,
		            		fontSize: '1.4rem',
		            		fontFamily: 'Wix Madefor Display, sans-serif',
			          		color: `white`,
			          		textShadow: `2px 2px 4px #ddd`,
			          		ml: -1,
			          		'@media (max-width: 500px)': { 
			        			fontSize: '.8rem',	
			        			//mt: -2,	 
			        		},
			          }}

			        >
			          Njango 
			          
			      	</Typography>
			      	<Typography			                 
			          variant="p" 
			          component={'div'}
			          sx={{
			      		//fontWeight: 700,
			      		mt: -1,
	            		fontSize: '.9rem',
	            		fontFamily: 'Wix Madefor Display, sans-serif',
		      			color: `white`,
			      		ml: -1,
			      		'@media (max-width: 500px)': { 
			    			fontSize: '.6rem',	
			    			mt: -.5,	 
			    		},
			          }}

			        >
			          
			          Investment
			      	</Typography>
				</Box>
				
			</Box>

			<Box>
				<Typography			                 
	                variant="p" 
	                component={'div'}
	                sx={{
	              		fontWeight: 200,
	              		mt: 2,
			            fontSize: '.9rem',
			            fontFamily: 'Oswald, sans-serif',
	              		color: 'white',
	              		//ml: .5,
	              		'@media (max-width: 500px)': { 
	            			fontSize: '.4rem',	
	            			//mt: -2,	 
            			},
              		}}

            	>
                  @ 2024 termos de funcionameno legal, garantado pela leis nº23.
              	</Typography>
			</Box>
		</Box>
		
	</Box>
	)
}
export default Footerblog;