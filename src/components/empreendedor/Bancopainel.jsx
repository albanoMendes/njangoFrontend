import { List, Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Depositobanco from './Depositobanco';
import Investidopainel from './Investidopainel';
import Model from "../Model";
import Bancontainer from './Bancontainer'
//import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
//import { Visibility, VisibilityOff } from "@mui/icons-material";
//import { IconButton, Paper, Grid } from "@mui/material";
//import { useState } from "react";
//import SaquesClient from './SaquesClient';
//import DepositoClient from './DepositoClient';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const recibos = [
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		empresa: 'SEGMENT S.A',
		mes: 'FEVEREIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 150000,
		tipo: 'LUCRO',
		empresa: 'SEGMENT S.A',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 450000,
		tipo: 'LUCRO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'DEZEMBRO',
		data: '05/01/2024'
	}


];  
function Bancopainel(props) {

	const { primery, secudary } = props;
	const [showPassword, setShowPassword] = useState(false);
	const [depositos, setDepositos] = useState(recibos)
	const [lucros, setLucros] = useState(0)
	const [total, setTotal] = useState(82);
	const [value, setValue] = useState(0);
	const [text, setText] = useState('Total De Depositos');

	const [openModel, setOpen] = useState(false);
    const [opcao, setOpcao] = useState('');
    const [title, setTitle] = useState('');

	const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

      const handleRede = () => {
        setOpcao('ADD');
        setTitle('CONTA BANCÁRIA')
        //setValue(0);
        setOpen(true)

    }

    useEffect(() => {
    	//let totd = 0;
    	let totl = 0;
    	depositos.forEach((empresa) => {
            //totd += parseFloat(empresa.despesa)
            totl += parseFloat(empresa.valor)
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
				            MINHAS OPERAÇÕES
				        </Typography>
				        <Typography
				            sx={{                    
				                fontSize: '15px',                                       
				                fontFamily: 'Wix Madefor Display, serif',
				                '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				            Consulte os depositos do seus lucros, e pagamentos.
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
	                                <Box>
		                                 <IconButton
		                                    size="small"
		                                    aria-label="toggle password visibility"
		                                    onClick={handleRede}
		                                    //onMouseDown={handleMouseDownPassword}
		                                    sx={{borderRadius: 0, height: 40, width: 40}}                           
		                                >
		                                     <AccountBalance sx={{ color: `${secudary}`, fontSize: '20px'}} />
		                                </IconButton>
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

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#F9CC19",
                                color: "#F9CC19"

                            }
                        }}
                    >
                    <Tab label={
                        <Typography
                            sx={{
                                fontWeight: 400,               
                                fontSize: '13px',                                                               
                                fontFamily: 'Oswald, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '8px' },
                            }}
                        >Depósitos</Typography>
                    } {...a11yProps(0)} />
                    <Tab label={
                        <Typography
                            sx={{
                                fontWeight: 400,               
                                fontSize: '13px',                                                               
                                fontFamily: 'Oswald, sans-serif',
                                '@media (max-width: 800px)': { fontSize: '8px' },
                            }}
                        >Investdo</Typography>
                    }  {...a11yProps(1)} />                    
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Depositobanco primery={primery} secudary={secudary} setText={setText} total={lucros} setTotal={setLucros} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Investidopainel primery={primery} secudary={secudary} setText={setText} total={lucros} setTotal={setLucros} />
                </CustomTabPanel>
            </Box>
            <Model
                title={title}
                openModel = {openModel}
                setOpenModel = {setOpen}
            >
              <Bancontainer  primery={primery} secudary={secudary} opcao={opcao} setOpcao={setOpcao} setOpenModel={setOpen} />
          </Model>      
    	</>
    )

}
export default Bancopainel;