import { useState } from 'react';
import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {MonetizationOn, HomeRepairService,Engineering, ReceiptLong, PriceChange, Receipt, ShoppingCart, People, Article } from '@mui/icons-material';
import Published from './Published'

function Homepainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;

	return(
		<Grid container spacing={2}>

			<Grid item xs={12} md={12} sm={12}>

				<Box
					sx={{
						display: 'flex',	
						//mt: 3,
						//ml: .5,
					}}
				>
					<Typography
						component={'div'}
						sx={{
							width: 60, 
							height: 40,
							'@media (max-width: 800px)': { 
		            			width: 25, 
								height: 15, 
		        			},
						}}
					>
						<img src={new URL(`../../assets/university/${empresa.logo}`, import.meta.url)} width={'100%'} height={'100%'}/>
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
			              		fontWeight: 500,
			              		//mt: 1,
					            fontSize: '1.7rem',
					            fontFamily: 'Oswald, sans-serif',
			              		//color: `${secudary}`,
			              		ml: .5,
			              		'@media (max-width: 800px)': { 
			            			fontSize: '.8rem',	
			            			mt: .2,	 
		            			},
		              		}}

		            	>
		              
		                  {empresa.name}
		              	</Typography>  
			     	</Box>									
				</Box>

			</Grid>

			<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>

				<Grid container justifyContent="center" spacing={2}>

					<Grid item xs={12} md={6} sm={12}>
						<Paper elevation={1} sx={{ p: 1,  maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
			                <Box
			             		sx={{
			             			display: 'flex',
			             			flexDirection: 'column',
			             			p: 1,
									///justifyContent: 'center',
									//alignItems: 'center',

			             		}}
			                 >
			                 		<Typography
				                    sx={{
				                        fontWeight: 700,
				                        fontSize: '12px',                   
				                        fontFamily: 'Wix Madefor Display, serif',
				                        '@media (max-width: 800px)': { fontSize: '15px' },
				                    }}
				                >
				                    Nº DE MEMBROS DO PROJETO
				                </Typography>
				                <Box
				                	sx={{
				                		display: 'flex',
				                		justifyContent: 'space-between',
				                	}}
				                >
				                	
			                		<People 
				                		sx={{
				                			mt: 3,
				                			fontSize: '20px',
				                			color: `${secudary}`,
				                		}}
				                	/>
				               
				                	
				                	<Typography 
										sx={{
											fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
										{0}
									</Typography>
				                </Box>
			                 	
			                </Box>
			            </Paper>
					</Grid>

					<Grid item xs={12} md={6} sm={12}>

						<Paper elevation={1} sx={{ p: 1, maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
			               <Box
			               		sx={{
			               			display: 'flex',
			               			flexDirection: 'column',
			               			p: 1,
				  					//justifyContent: 'center',
				  					//alignItems: 'center',
			               		}}
			               >
			               		<Typography
					                  sx={{
					                      fontWeight: 700,
					                      fontSize: '12px',                   
					                      fontFamily: 'Wix Madefor Display, serif',
					                      '@media (max-width: 800px)': { fontSize: '15px' },
					                  }}
					              >
					                   Nº DE ARTIGOS
					              </Typography>
					              <Box
					              	sx={{
					              		display: 'flex',
					              		justifyContent: 'space-between',
					              	}}
					              >
					              	<Article 
					              		sx={{
					              			mt: 3,
					              			fontSize: '20px',
					              			color: `${secudary}`,
					              		}}
					              	/>
					              	<Typography 
										sx={{
											fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
										{0}
									</Typography>
					              </Box>
			               	
			               </Box> 
			            </Paper>
					
					</Grid>
					<Grid item xs={12} md={12} sm={12}>
						<Paper elevation={0} sx={{ p: 0,  maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
							<Published primery={primery} secudary={secudary} />
						</Paper>
					</Grid>



				</Grid>

			</Grid>

			<Grid item xs={12} sm={4}>
				<div>
					<Typography
			              sx={{
			                fontWeight: 500,
					            fontSize: '20px',                   
					            fontFamily: 'Oswald, sans-serif', 
			                '@media (max-width: 800px)': { fontSize: '15px' },
			              }}
			          >
			              NOTIFICAÇÕES
			          </Typography>
			          <Typography
			              sx={{                    
			                  fontSize: '12px',                                       
			                  fontFamily: 'Wix Madefor Display, serif',
			                  '@media (max-width: 800px)': { fontSize: '10px' },
			              }}
			          >
			              Novas atualizações da empresa
			          </Typography>     
			 	</div>

			</Grid>
			
		</Grid>
		
	)
}
export default Homepainel;