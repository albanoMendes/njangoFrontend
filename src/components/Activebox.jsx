import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
import classes from "./Investative.module.css";

function Activebox(props) {

	const { primery, secudary, activo } = props;

	return(
		<>	
			<Card   elevation={1} sx={{ maxWidth: 400, m: 1, p: 1, borderRadius: 0 }}>

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
						<img src={new URL(`../assets/Logos/${activo.logo}`, import.meta.url)} width={35} height={35}/>
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
			              		//mt: 1,
					            fontSize: '1.4rem',
					            fontFamily: 'Oswald, sans-serif',
			              		color: `${primery}`,
			              		ml: .5,
			              		'@media (max-width: 500px)': { 
			            			//fontSize: '2.5rem',	
			            			//mt: -2,	 
		            			},
		              		}}

		            	>
		              
		                  {activo.empresa}
		              	</Typography>  
			     	</Box>									
				</Box>
				<CardContent>
					<Typography
		                sx={{
		                    //justifyContent: 'center',
		                    //alignItems: 'center',
		                    fontWeight: 'bold',
		                    fontFamily: 'Wix Madefor Display, sans-serif',	
		                    fontSize: '10px',                       
		                    //fontFamily: 'Arvo, serif',
		                    '@media (max-width: 600px)': { fontSize: '6px' },
		                }}  
		            >
		               TIPO DE TRABALHO:
		            </Typography>
			        <Typography 
						sx={{
					 		fontSize: 12,
					 		 fontWeight: 'bold',
					 		fontFamily: 'Oswald, sans-serif',										 
					 		mb: .5,								 											 		
					 	}} 
					 >
		          	 {activo.segment}
		        	</Typography>

		        	 <Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
		        	 	 <Grid item xs={12}>
		        	 	 	 <Grid container justifyContent="space-between" spacing={2}>
		        	 	 	 	
		        	 	 	 	<Grid item>
		        	 	 	 		<Box sx={{mt: 1}}>
										<Typography 
											sx={{
												fontSize: '10px', 
												fontWeight: 'bold', 
												fontFamily: 'Wix Madefor Display, sans-serif', 
												color: `${secudary}`,
												'@media (max-width: 800px)': { fontSize: '7px' },
												
											}}
										>
											VALOR INVESTIDO
										</Typography>
										<Typography 
											sx={{
												fontSize: '35px', 
												fontWeight: 300, 
												fontFamily: 'Six Caps, sans-serif',
												'@media (max-width: 800px)': { fontSize: '25px' },
												
											}}
										>
											{(activo.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
										</Typography>
									</Box>
		        	 	 	 	</Grid>

		        	 	 	 	<Grid item>
		        	 	 	 		<Box sx={{mt: 1}}>
										<Typography 
											sx={{
												fontSize: '10px', 
												fontWeight: 'bold', 
												fontFamily: 'Wix Madefor Display, sans-serif', 
												color: `${secudary}`,
												'@media (max-width: 800px)': { fontSize: '7px' },
												
											}}
										>
											RECEITA
										</Typography>
										<Typography 
											sx={{
												fontSize: '35px', 
												fontWeight: 300, 
												fontFamily: 'Six Caps, sans-serif',
												'@media (max-width: 800px)': { fontSize: '25px' },
												
											}}
										>
									
											{(activo.entrada).toLocaleString("en-US", {style:"currency", currency:"USD"})}
										</Typography>
									</Box>
		        	 	 	 	</Grid>

		        	 	 	 	<Grid item>
		        	 	 	 		<Box sx={{mt: 1}}>
										<Typography 
											sx={{
												fontSize: '10px', 
												fontWeight: 'bold', 
												fontFamily: 'Wix Madefor Display, sans-serif', 
												color: `${secudary}`,
												'@media (max-width: 800px)': { fontSize: '7px' },
												
											}}
										>
											LUCRO
										</Typography>
										<Typography 
											sx={{
												fontSize: '35px', 
												fontWeight: 300, 
												fontFamily: 'Six Caps, sans-serif',
												'@media (max-width: 800px)': { fontSize: '25px' },
												
											}}
										>
										
											{(activo.lucro).toLocaleString("en-US", {style:"currency", currency:"USD"})}
										</Typography>
									</Box>
		        	 	 	 	</Grid>

		        	 	 	 </Grid>
		        	 	 </Grid>
							

							
							
						</Grid>
				</CardContent>

			</Card>
			
		</>
	)

}
export default Activebox;