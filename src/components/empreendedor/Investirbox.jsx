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
	Card,
	CardContent,
	List,
	CardActions
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


function Investirbox(props) {

	const { primery, secudary, investment } = props;

	return(
		<Card 
			elevation={0} 
			sx={{
				m: .5, 
				p:1, 
				//border: `1px solid ${secudary}`, 
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
						width: 25, 
						height: 25,
						'@media (max-width: 800px)': { 
	            			width: 20, 
							height: 20, 
	        			},
					}}
				>
					<img src={new URL(`../../assets/Logos/${investment.logo}`, import.meta.url)} width={'100%'} height={'100%'}/>
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
		              		fontWeight: 600,
		              		//mt: 1,
				            fontSize: '1.2rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${secudary}`,
		              		ml: .5,
		              		'@media (max-width: 800px)': { 
		            			fontSize: '.8rem',	
		            			mt: .2,	 
	            			},
	              		}}

	            	>
	              
	                  {investment.empresa}
	              	</Typography>  
		     	</Box>									
			</Box>

			
			<Grid sx={{ flexGrow: .5, mt: -.4 }} container spacing={2}>
	    	 	
	    	 	<Grid item xs={12}>
	    	 		
	    	 		<Grid container justifyContent="space-between" spacing={2}>
	    	 			
	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									CAPITAL DA EMPRESA
								</Typography>
								<Typography 
									sx={{
										fontSize: '20px', 
										fontWeight: 200, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
									{(investment.capital).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>
	    	 			</Grid>

	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									VALOR DO INVESTIMENTO
								</Typography>
								<Typography 
									sx={{
										fontSize: '20px', 
										fontWeight: 200, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
							
									{(investment.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>
	    	 			</Grid>

	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									SEU LUCRO
								</Typography>
								<Typography 
									sx={{
										fontSize: '20px', 
										fontWeight: 200, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
								
									{investment.lucro}%
								</Typography>
							</Box>
	    	 			</Grid>

	    	 		</Grid>

	    	 	</Grid>

	         </Grid>

			

	        <Button 
	        	//size="small"
	        	//onClick={submit}
	        	sx={{
	                mt: 1,
	                p:'5px 15px 5px 15px',
	                color: 'white',
	                border: 'none',
	                cursor: 'pointer',		
	                textDecoration: 'none',
	                //fontWeight: 'bold',
	                borderRadius: 0,
	                fontSize: '10px',								                   
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
	        			p:'5px 5px 5px 5px',
						
	        		},
	            }}			
	        >
	        	INVESTIR AGORA
	        </Button>  
	   
	     	     
		</Card>
	)


}
export default Investirbox;