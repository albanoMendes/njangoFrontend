import { useState, useEffect } from 'react';
import { 
	Grid, 
	Paper, 
	Button, 
	Box, 
	IconButton, 
	Typography, 
	Table, 
	TableBody, 
	TableCell, 
	TableContainer, 
	TableHead, 
	TablePagination, 
	TableRow,
 	CardContent,
	List,
	CardActions,
	Card
} from '@mui/material';
import {
	MonetizationOn, 
	Engineering, 
	VisibilityOff, 
	Visibility,
	ReceiptLong,
	Edit,
	DeleteForever
} from '@mui/icons-material';



function Empresabox(props) {

	const { primery, secudary, empresa, topico } = props;

	return(
		<Card 
			elevation={1} 
			sx={{ 
				maxWidth: 400, 
				m: 1, 
				p: 1,
				borderRadius: 0,  
			}}
		>
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
						width: 35, 
						height: 35,
						'@media (max-width: 600px)': { 
	            			width: 28, 
							height: 28, 
            			},
					}}
				>
					<img src={new URL(`../../assets/Logos/${empresa.logo}`, import.meta.url)} width={'100%'} height={'100%'}/>
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
	            fontSize: '1.4rem',
	            fontFamily: 'Oswald, sans-serif',
            		color: `${secudary}`,
            		ml: .5,
            		'@media (max-width: 600px)': { 
          			fontSize: '1rem',	
          			mt: .1,	 
        			},
          		}}

        	>
          
              {empresa.name}
          	</Typography>  
		     	</Box>									
			</Box>

			

			<Box sx={{m: 1}}>
				<Typography
	                sx={{
	                    //justifyContent: 'center',
	                    //alignItems: 'center',
	                    fontWeight: 500,
	                    fontFamily: 'Oswald, sans-serif',	
	                    fontSize: '9px',                       
	                    //fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '8px' },
	                }}  
	            >
	               TIPO DE TRABALHO:
	            </Typography>
		        <Typography 
							sx={{
						 		fontSize: 8,
						 		 fontWeight: 'bold',
						 		fontFamily: 'Wix Madefor Display, sans-serif',										 
						 		mb: .5,								 											 		
						 	}} 
						 >
	          	 {empresa.segment}
	        	</Typography>

	        		<Box
								sx={{
									display: 'flex',
								}}
							>
								
								<Engineering sx={{fontSize: '1rem', color: `${secudary}`}}/>
								<Typography
									sx={{
										ml: .5,
										fontWeight: 500,
										fontSize: '.7rem',
										fontFamily: 'Wix Madefor Display, sans-serif',
									}}
								>
									{empresa.nFun}
								</Typography>
							</Box>

	        		<Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
	        	 	 <Grid item xs={12}>
	        	 	 	 <Grid container justifyContent="space-between" spacing={2}>
	        	 	 	 	
	        	 	 	 	<Grid item>								        	 	 	 		
										<Box sx={{mt: .5}}>
											<Typography 
												sx={{
													fontSize: '7px', 
													fontWeight: 700, 
													fontFamily: 'Wix Madefor Display, sans-serif', 
													color: `${secudary}`,
													'@media (max-width: 800px)': { fontSize: '7px' },
													
												}}
											>
												{topico}
											</Typography>
											<Typography 
												sx={{
													fontSize: '30px', 
													fontWeight: 500, 
													fontFamily: 'Six Caps, sans-serif',
													'@media (max-width: 800px)': { fontSize: '25px' },
													
												}}
											>
												{(empresa.despesa).toLocaleString("en-US", {style:"currency", currency:"USD"})}
											</Typography>
										</Box>
	        	 	 	 	</Grid>

	        	 	 	 	<Grid item>
	        	 	 	 		<Box sx={{mt: .5}}>
									<Typography 
										sx={{
											fontSize: '7px', 
											fontWeight: 700, 
											fontFamily: 'Wix Madefor Display, sans-serif', 
											color: `${secudary}`,
											'@media (max-width: 800px)': { fontSize: '7px' },
											
										}}
									>
										ENTRADA
									</Typography>
									<Typography 
										sx={{
											fontSize: '30px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
								
										{(empresa.entrada).toLocaleString("en-US", {style:"currency", currency:"USD"})}
									</Typography>
								</Box>
	        	 	 	 	</Grid>

	        	 	 	 	<Grid item>
	        	 	 	 		<Box sx={{mt: .5}}>
									<Typography 
										sx={{
											fontSize: '7px', 
											fontWeight: 700, 
											fontFamily: 'Wix Madefor Display, sans-serif', 
											color: `${secudary}`,
											'@media (max-width: 800px)': { fontSize: '7px' },
											
										}}
									>
										SEU LUCRO
									</Typography>
									<Typography 
										sx={{
											fontSize: '30px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
									
										{(empresa.lucro).toLocaleString("en-US", {style:"currency", currency:"USD"})}
									</Typography>
								</Box>
	        	 	 	 	</Grid>

	        	 	 	 </Grid>
	        	 	 </Grid>
						

						
						
					</Grid>
	        	 
			</Box>

			<Box
				sx={{
					display: 'flex',
				}}
			>

				<IconButton
                      size="small"
                      //aria-label="toggle password visibility"
                      //onClick={handleClickShowPasswordesp}
                      //onMouseDown={handleMouseDownPasswordesp}
                      color="inherit"
						sx={{borderRadius: 0, height: 30, width: 30, m: .2}}                           
                  >
                      <ReceiptLong sx={{ color: `${secudary}`, fontSize: '20px',}} />  
                  </IconButton>


				
			</Box>

		</Card>
	)

}
export default Empresabox;