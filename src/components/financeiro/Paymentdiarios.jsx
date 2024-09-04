import { Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Vendaspainel from './Vendaspainel';
import Servicospainel from './Servicospainel';


function createData(id, name, preco, qtd, total, empresa, mes, ano, data, datatime, iduser) {
  return {id, name, preco, qtd, total, empresa, mes, ano, data, datatime, iduser};
}

const rows = [
	createData(1, 'Croassa e caputchino', 4000, 3, 1200,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(2, 'Bolo café Preto', 2000, 3, 6000,'COFFE HOUSE LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(3, 'Chá preto e chadwiche', 1000, 3, 3000,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(4, 'Croassa e Chá preto', 5000, 3, 1500,'COFFE HOUSE LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(5, 'Chadwiche e caputchino', 4000, 3, 1200,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'), 
];

function Paymentdiarios(props) {

	const { primery, secudary, empresa } = props;
	const [showPassword, setShowPassword] = useState(false)
	//const classes = useStyles();

    //const [value, setValue] = useState(dayjs('02/10/2023'));
	//const [vendas, setVendas] = useState(rows)
	const [total, setTotal] = useState(0);

    const [text, setText] = useState(`VALOR DE ${empresa.segment}S DESTE MÊS`);
   

    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    

  

    useEffect(() => {
		let tot = 0;  
        /*fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                tot += parseFloat(anuncio.vcampanha)
                console.log(tot)
            })
            setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            setAnuncios(responseJson)

        }) */
        
        
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
				           CADASTRO DE {empresa.segment}S
				        </Typography>
				        <Typography
				            sx={{                    
				                fontSize: '15px',                                       
				                fontFamily: 'Wix Madefor Display, serif',
				                '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				            Cadastre aqui, {empresa.segment}S e consulta o total menstal
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
	                                fontWeight: 500,               
	                                fontSize: '10px',
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
	                                    {showPassword ? ` ${total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
	                                </Typography>
	                                <Box>		                                
		                                <IconButton
		                                    size="small"
		                                    aria-label="toggle password visibility"
		                                    onClick={handleClickShowPassword}
		                                    onMouseDown={handleMouseDownPassword}
		                                    sx={{borderRadius: 0, height: 40, width: 40}}                           
		                                    >
		                                    {showPassword ? <VisibilityOff sx={{ color: `${secudary}`, fontSize: '20px'}} /> : <Visibility  sx={{ color: `${secudary}`, fontSize: '20px'}} />}
		                                </IconButton>
	                                </Box>
	                               
	                            </div>              
	                    </Paper>
                    
                </Grid>
            </Grid>

		    {empresa.segment == 'VENDA'?
		    	<Vendaspainel primery={primery} secudary={secudary} empresa={empresa} setTotal={setTotal} />
		    	:
		    	<Servicospainel primery={primery} secudary={secudary} empresa={empresa} setTotal={setTotal} setText={setText} />
		    }
		</>
	)
}
export default Paymentdiarios;