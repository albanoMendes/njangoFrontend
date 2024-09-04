import { List, Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Parceirosbox from './Parceirosbox';
import Investbox from './Investbox';
import Depnotification from './Depnotification';


const parteners = [
	{
		id: 1,
		nome: 'August Monther',
		empresa: 'SEGMENT S.A',
		entrada: 200000,
		lucro: 20,
		data: '10/02/2024',
	},
	{
		id: 2,
		nome: 'Ana Luther Nzimbo',
		empresa: 'COFFE HOUSE LDA',
		entrada: 150000,
		lucro: 15,
		data: '15/04/2024',
	}

]

const inv = [
	{
		id: 1,
		empresa: 'PAULO TEC LDA',
		segment: 'SERVIÇO',
		entrada: 200000,
		credito: 25000,
		lucro: 25000,
		data: '10/02/2024',
		logo: 'utilizavel100.png',
		iduser: '24682463248',
	},
	{
		id: 2,
		empresa: 'BAR ARDENTE LDA',
		segment: 'VENDA',
		entrada: 150000,
		credito: 20000,
		lucro: 15000,
		data: '15/04/2024',
		logo: 'drinks100.png',
		iduser: '24682463248',
	}

]

const recibos = [
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		//mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		//mes: 'FEVEREIRO',
		data: '10/02/2024'
	},

];  


function Parceirospainel(props) {

	const { primery, secudary } = props;
	const [showPassword, setShowPassword] = useState(false);
	const [parceiros, setParceiros] = useState(parteners)
	const [investments, setInvestments] = useState(inv)
	const [depositos, setDepositos] = useState(recibos)
	const [lucros, setLucros] = useState(0)

	const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
    	//let totd = 0;
    	let totl = 0;
    	investments.forEach((empresa) => {
            //totd += parseFloat(empresa.despesa)
            totl += parseFloat(empresa.lucro)
            //console.log(tot)
        })
        setLucros(totl)
        //setDespesas(totd)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    }, [])



	return(
		<>
		    <Grid container justifyContent="space-between">
                <Grid item xs={12} sm={12} md={7}>
                   <div style={{marginBottom: 50}}>
				        <Typography
				            sx={{
				                fontWeight: 500,
				                fontSize: '25px',                   
				                fontFamily: 'Oswald, sans-serif',
				                '@media (max-width: 800px)': { fontSize: '15px' },
				            }}
				        >
				            PARCEIROS DE NEGÓCIOS
				        </Typography>
				        <Typography
				            sx={{                    
				                fontSize: '15px',                                       
				                fontFamily: 'Wix Madefor Display, serif',
				                '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				            Consulte aqui os seus parceiros de negócios, e investimentos.
				        </Typography>     
		    		</div>


                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                	<Paper                    	
                    	elevation={1} 
                        sx={{
                            p: 1,
                            //bgcolor: '#F2F2F2',
                            mb: 1,
                            ml: .5,
                            minWidth: 100,
                            borderRadius: 0,
                            '@media (max-width: 900px)': {ml: 0},     

                        }}
                    >
	                        <Typography
	                            sx={{
	                                fontWeight: 'bold',               
	                                fontSize: '12px',
	                                pl: 1,
	                                pt: 1,
	                                fontFamily: 'Wix Madefor Display, sans-serif',
	                                '@media (max-width: 800px)': { fontSize: '8px' },
	                            }}
	                        >
	                            {'LUCROS DE INVESTIMENTOS'}
	                        </Typography>
	                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
	                                <Typography
	                                    sx={{
	                                        pl: 1,
	                                        fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },                          
	                                        
	                                        
	                                    }}
	                                >
	                                    {showPassword ? ` ${lucros.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
	                                </Typography>
	                                <IconButton
	                                    size="small"
	                                    aria-label="toggle password visibility"
	                                    onClick={handleClickShowPassword}
	                                    onMouseDown={handleMouseDownPassword}
	                                    sx={{borderRadius: 0, height: 40, width: 40}}                           
	                                    >
	                                    {showPassword ? <VisibilityOff sx={{ color: `${secudary}`, fontSize: '20px'}} /> : <Visibility  sx={{ color: `${secudary}`, fontSize: '20px'}} />}
	                                </IconButton>
	                            </div>              
	                    </Paper>
                    
                </Grid>
            </Grid>

            <Grid container spacing={2}>
            	<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' }, flexDirection: 'column', }}>
	            	<Typography
		            	sx={{
			            	m: 1,
			                fontWeight: 500,
			                fontSize: '20px',                   
			                fontFamily: 'Oswald, sans-serif',
			                '@media (max-width: 800px)': { fontSize: '15px' },
			            }}
			        >
		             	PARCEIROS
		          	</Typography>

		          	<Grid container justifyContent="center" spacing={2}>
						{
							parceiros.map((parceiro, index) =>{
								return(
									<Grid key={index} item xs={12} md={6} sm={12}>
										<Parceirosbox primery={primery} secudary={secudary} parceiro={parceiro} />
									</Grid>
								)
							})
						}

					</Grid>

					<Typography
		            	sx={{
			            	m: 1,
			                fontWeight: 500,
			                fontSize: '20px',                   
			                fontFamily: 'Oswald, sans-serif',
			                '@media (max-width: 800px)': { fontSize: '15px' },
			            }}
			        >
		             	MEUS INVESTIMENTOS
		          	</Typography>

		          	<Grid container justifyContent="center" spacing={2}>
						{
							investments.map((investment, index) =>{
								return(
									<Grid key={index} item xs={12} md={6} sm={12}>
										<Investbox primery={primery} secudary={secudary} investment={investment} />
									</Grid>
								)
							})
						}

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
				              DEPOSITOS
				        </Typography>
				        <Typography
				            sx={{                    
				                  fontSize: '12px',                                       
				                  fontFamily: 'Wix Madefor Display, serif',
				                  '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				              Notificação de depositos referente a Lucros e outros pagamentos mensais
				        </Typography>     
				 	</div>

				 	<Box>
			 		 <List sx={{ width: '100%' }}>
			 		 	{
			 		 		depositos.length == 0 ? <Typography>Não Tem Depositos</Typography> 
			 		 		:
				            depositos.map((debito, index) => {
				              	return(		                    	
				              		<Box key={index}>
				              			<Depnotification primery={primery} secudary={secudary} debito={debito}  />
				              		</Box>
				              	)
				                  
				            })     
			 		 	}

			 		 </List>
			 	</Box>

	            </Grid>
            </Grid>
            
		</>
	)

}
export default Parceirospainel;
