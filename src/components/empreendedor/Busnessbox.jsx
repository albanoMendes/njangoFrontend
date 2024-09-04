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



function Busnessbox(props) {

	const { primery, secudary, empresa, handleEditar, handleDelete } = props;

	const [cor, setCor] = useState('white');
	const [message, setMessage] = useState('');


	useEffect(() => { 
        switch (empresa.status) { 
            case 'PROCESSADO':
                setCor('red');
                setMessage('AGUARDANDO FINALIZAR');
                break;
            case 'ATIVO':
                setCor('#3DA13A');
                setMessage('AGUARDANDO FINANCIAMENTO');
                break;
            case 'CONFIRMAR':
                setCor(`${secudary}`);
                setMessage('ESTA EM ANALISE');
                break;
            case 'FUNCIONANDO':
                setCor(`#3DA8ED`);
                setMessage('TRABALHAR E GANHAR');
                break;
            default:                
                setMessage('AGUARDANDO CONFIRMAÇÃO!');
                break;
        }

    }, [])

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
						width: 20, 
						height: 20,
						'@media (max-width: 600px)': { 
	            			width: 16, 
							height: 16, 
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
				            fontSize: '1rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${secudary}`,
		              		ml: .5,
		              		'@media (max-width: 600px)': { 
		            			fontSize: '.8rem',	
		            			mt: .2,	 
	            			},
	              		}}

	            	>
	              
	                  {empresa.name}
	              	</Typography>  
		     	</Box>									
			</Box>

			

			<CardContent>
				<Typography
	                sx={{
	                    //justifyContent: 'center',
	                    //alignItems: 'center',
	                    fontWeight: 'bold',
	                    fontFamily: 'Oswald, sans-serif',	
	                    fontSize: '7px',                       
	                    //fontFamily: 'Arvo, serif',
	                    '@media (max-width: 600px)': { fontSize: '6px' },
	                }}  
	            >
	               TIPO DE TRABALHO:
	            </Typography>
		        <Typography 
					sx={{
				 		fontSize: 7,
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
						
						<Typography
							sx={{
								//ml: .5,
								fontWeight: 700,
								fontSize: '.6rem',
								color: `${cor}`,
								fontFamily: 'Wix Madefor Display, sans-serif',
							}}
						>
							{message}
						</Typography>
					</Box>

	        		<Grid sx={{ flexGrow: 1, mt: -.1 }} container spacing={2}>
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
										CAPITAL
									</Typography>
									<Typography 
										sx={{
											fontSize: '20px', 
											fontWeight: 200, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
										{(empresa.capital).toLocaleString("en-US", {style:"currency", currency:"USD"})}
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
										VALOR DE INVESTIMENTO
									</Typography>
									<Typography 
										sx={{
											fontSize: '20px', 
											fontWeight: 200, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
								
										{(empresa.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
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
										LUCRO
									</Typography>
									<Typography 
										sx={{
											fontSize: '20px', 
											fontWeight: 200, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
									
										{empresa.lucro}
									</Typography>
								</Box>
	        	 	 	 	</Grid>

	        	 	 	 </Grid>
	        	 	 </Grid>
						

						
						
					</Grid>
	        	 
			</CardContent>

			<Box
				sx={{
					display: 'flex',
				}}
			>

				<IconButton
                    size="small"
                    
                    color="inherit"
					sx={{borderRadius: 0, height: 30, width: 30, m: .2}}                           
                  >
                      <ReceiptLong sx={{ color: `${secudary}`, fontSize: '15px',}} />  
                  </IconButton>

                  <IconButton
                      size="small"
                      onClick={() => handleEditar(empresa)}
                      color="inherit"
						sx={{borderRadius: 0, height: 30, width: 30, m: .2}}                           
                  >
                      <Edit sx={{ color: `${secudary}`, fontSize: '15px',}} />  
                  </IconButton>

                  <IconButton
                      size="small"
                      onClick={() => handleDelete(empresa)}
                      color="inherit"
						sx={{borderRadius: 0, height: 30, width: 30, m: .2}}                           
                  >
                      <DeleteForever sx={{ color: `red`, fontSize: '15px',}} />  
                  </IconButton>
				
			</Box>

		</Card>
	)

}
export default Busnessbox;