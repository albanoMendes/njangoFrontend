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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Empresabox from '../empreendedor/Empresabox';
import Investirbox from '../empreendedor/Investirbox';


const rows = [
	{
		id: '934ru32',
		name: 'SEGMENT S.A',
		segment: 'VENDA',
		status: 'FUNCIONANDO',
		logo: 'Logo_s.png',
		nFun: 5,
		despesa: 120000,
		entrada: 150000,
		lucro: 30000,
		iduser: '24682463248',
	},
	{
		id: '9fe1g44ru32',
		name: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		status: 'PROCESSADO',
		logo: 'Logo_c.png',
		nFun: 5,
		despesa: 100000,
		entrada: 140000,
		lucro: 40000,
		iduser: '24682463248',
	},
	

];

const investir = [

	{
		id: '54fe1g44ru32',
		empresa: 'LEVEZA SPA S.A',
		segment: 'SERVIÇO',
		capital: 150000,
		credito: 60000,
		lucro: 25,
		logo: 'cuidadospa100.png',
		iduser: '24682463248',
	},
	{
		id: '9f2131g44ru32',
		empresa: 'LENA MANICURE LDA',
		segment: 'SERVIÇO',
		capital: 50000,
		credito: 50000,
		lucro: 50,
		logo: 'tratamentounhas100.png',
		iduser: '24682463248',
	},
	{
		id: '9fe1g44rD32u32',
		empresa: 'PAULO TEC LDA',
		segment: 'SERVIÇO',
		capital: 10000000,
		credito: 40000000,
		lucro: 30,
		logo: 'utilizavel100.png',
		iduser: '24682463248',
	},
	{
		id: '54fe1g44ru32',
		empresa: 'DINA AMBULANTE LDA',
		segment: 'VENDA',
		capital: 25000,
		credito: 50000,
		lucro: 60,
		logo: 'vendedora100.png',
		iduser: '24682463248',
	},
	{
		id: '9f2131g44ru32',
		empresa: 'FER BOLOS DOCES LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 70000,
		lucro: 40,
		logo: 'bolo100.png',
		iduser: '24682463248',
	},
	{
		id: '9fe1g44rD32u32',
		empresa: 'BAR ARDENTE LDA',
		segment: 'VENDA',
		capital: 100000,
		credito: 200000,
		lucro: 25,
		logo: 'drinks100.png',
		iduser: '24682463248',
	}

]



function Myinvestments(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus } = props;
	const [despesas, setDespesas] = useState(0)
	const [lucros, setLucros] = useState(0)

	const [empresas, setEmpresas] = useState(rows)
	//const [negocios, setNegocios] = useState(neg)
	const [investments, setInvestments] = useState(investir)
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordesp, setShowPasswordesp] = useState(false);
	const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');
    const [text, setText] = useState('Total Lucros');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleClickShowPasswordesp = () => setShowPasswordesp((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleMouseDownPasswordesp = (event) => {
        event.preventDefault();
    }


    useEffect(() => {
    	let totd = 0;
    	let totl = 0;
    	empresas.forEach((empresa) => {
            totd += parseFloat(empresa.despesa)
            totl += parseFloat(empresa.lucro)
            //console.log(tot)
        })
        setLucros(totl)
        setDespesas(totd)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    }, [])

	return(
		<>
			<Grid container>
                <Grid item xs={12} sm={12} md={7}>
                   <Typography
		                sx={{
		                    fontWeight: 400,
		                    fontSize: '25px',                   
		                    fontFamily: 'Oswald, sans-serif',
		                    '@media (max-width: 800px)': { fontSize: '15px' },
		                }}
		            >
		                MEUS NEGÓCIOS
		            </Typography>
		            <Typography
		                    sx={{                    
		                        fontSize: '15px',                                       
		                        fontFamily: 'Wix Madefor Display, sans-serif',
		                        '@media (max-width: 800px)': { fontSize: '10px' },
		                    }}
		                >
		                Consulte aqui os seus negócios e investimentos
		            </Typography>        
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                	<Box
                		sx={{
                			display: 'flex',
                			 '@media (max-width: 900px)': { 
                			 	display: 'flex',
								flexDirection: 'column',
								//justifyContent: 'center',
								//alignItems: 'center' 
                			 },
                		}}
                	>
                		<Paper                     	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            minWidth: 200,
	                            borderRadius: 0,     

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
	                            {'Total Investido'}
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
	                                    {showPasswordesp ? ` ${despesas.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
	                                </Typography>
	                                <IconButton
	                                    size="small"
	                                    //aria-label="toggle password visibility"
	                                    onClick={handleClickShowPasswordesp}
	                                    onMouseDown={handleMouseDownPasswordesp}
	                                    color="inherit"
            							sx={{borderRadius: 0, height: 40, width: 40}}                           
	                                >
	                                    {showPasswordesp ? <VisibilityOff sx={{ color: `${secudary}`, fontSize: '20px'}} /> : <Visibility  sx={{ color: `${secudary}`, fontSize: '20px'}} />}
	                                </IconButton>
	                            </div>              
	                    </Paper>
	                    <Paper                    	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            ml: .5,
	                            minWidth: 200,
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
	                            {text}
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

                	</Box>
                    
                </Grid>
            </Grid>

            <Grid container spacing={2}>
			
					<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' }, flexDirection: 'column', }}>

						<Grid container justifyContent="center" spacing={2}>
							{
								empresas.map((empresa, index) =>{
									return(
										<Grid key={index} item xs={12} md={6} sm={12}>
											<Empresabox primery={primery} secudary={secudary} empresa={empresa} topico={'VALOR INVESTIDO'}/>
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
				              EMPRESAS PARA INVESTIR
				          </Typography>
				          <Typography
				              sx={{                    
				                  fontSize: '12px',                                       
				                  fontFamily: 'Wix Madefor Display, serif',
				                  '@media (max-width: 800px)': { fontSize: '10px' },
				              }}
				          >
				              Não guarda o seu dinheiro, investe e aumenta os seus lucros!
				          </Typography>     
					 	</div>

					 	<Box>
					 		 <List sx={{ width: '100%' }}>
					 		 	{
					 		 		investments.length == 0 ? <Typography>Não tem Investmentos</Typography> 
					 		 		:
						              investments.map((investment, index) => {
						              	return(		                    	
						              		<Box key={index}>
						              			<Investirbox primery={primery} secudary={secudary} investment={investment}  />
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
export default Myinvestments;