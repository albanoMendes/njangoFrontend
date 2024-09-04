import { List, Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit, ArrowUpward, ArrowDropDown } from "@mui/icons-material";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
//import Depositobanco from './Depositobanco';
//import Investidopainel from './Investidopainel';
import Model from "../Model";

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#F9CC19"
        },
    }
});

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
		total: 250000,
		membro: 4,
		pagamento: 65000,
		mes: 'JANEIRO',
		data: '10/02/2024',
		semestre: '2024.1'
	},
	{
		id: 1,
		total: 250000,
		membro: 4,
		pagamento: 65000,
		mes: 'FEVEREIRO',
		data: '10/02/2024',
		semestre: '2024.1'
	},
	{
		id: 1,
		total: 150000,
		membro: 4,
		pagamento: 35000,
		mes: 'JANEIRO',
		data: '10/02/2024',
		semestre: '2024.1'
	},
	{
		id: 1,
		total: 405000,
		membro: 4,
		pagamento: 100000,
		mes: 'DEZEMBRO',
		data: '05/01/2024',
		semestre: '2024.1'
	}


];


function Paymentpainel(props) {

	const { primery, secudary } = props;
	const [showPassword, setShowPassword] = useState(false);
	const [depositos, setDepositos] = useState(recibos)
	const [lucros, setLucros] = useState(0)
	const [total, setTotal] = useState(82);
	const [value, setValue] = useState(0);
	const [text, setText] = useState('PAGAMENTOS');

	const classes = useStyles()
	//const [depositos, setDepositos] = useState(recibos);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	//const [openModel, setOpen] = useState(false);
    //const [opcao, setOpcao] = useState('');
    //const [title, setTitle] = useState('');

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

    const handleChangePage = (event, newPage) => {
	    setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
	    setRowsPerPage(+event.target.value);
	    setPage(0);
	};


	useEffect(() => {
    	//let totd = 0;
    	let totl = 0;
    	depositos.forEach((empresa) => {
            //totd += parseFloat(empresa.despesa)
            totl += parseFloat(empresa.total)
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
				            PAGAMENTOS
				        </Typography>
				        <Typography
				            sx={{                    
				                fontSize: '15px',                                       
				                fontFamily: 'Wix Madefor Display, serif',
				                '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				            Consulte aqui o pagamentos pelos artigos
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
		                                    //onClick={handleRede}
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

            {depositos.length == 0 ?
        		<Typography>Não há depósitos</Typography>
        	:
        		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
		          <TableContainer sx={{ maxHeight: 440 }}>
		            <Table stickyHeader aria-label="sticky table">         
		                <TableHead >
		                  <TableRow  className={classes.root}>
		                    <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          TOTAL
		                      </TableCell>
		                      
		                      <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          MEMBROS
		                      </TableCell>

		                       <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          PAGAMENTO
		                      </TableCell>
		                      
		                      <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          MÊS
		                      </TableCell>

		                      <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          DATA
		                      </TableCell>
		                      <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          SEMESNTRE
		                      </TableCell>
		                  </TableRow>  
		                  </TableHead>        
		              <TableBody>
		                {depositos
		                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		                  .map((row) => {
		                    return (
		                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
		                         <TableCell align={'center'}>
		                            <div
		                              style={{                        
		                                  display: 'flex',
		                                  alignItems: 'center',
		                              }}
		                            >
		                            <ArrowDropDown sx={{  color: `${secudary}`, fontWeight: 800, fontSize: '1.5rem', '@media (max-width: 800px)': { fontSize: '1rem' }, }} />
		                             <Typography 
		                                sx={{
		                                    ml: .5,                                          
		                                    fontSize: '14px',                                
		                                    fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                    '@media (max-width: 800px)': { fontSize: '.6rem' },

		                                }}
		                            >
		                             {row.total.toLocaleString("en-US", {style:"currency", currency:"USD"})}
		                            </Typography>   
		                        </div>
		                        </TableCell>

		                        <TableCell align={'center'}>
		                            <Typography 
		                              sx={{
		                                ml: .5,                                          
		                                fontSize: '14px',                                
		                                fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                '@media (max-width: 800px)': { fontSize: '.6rem' },

		                              }}
		                            >
		                             {row.membro}
		                            </Typography>  
		                        </TableCell> 

		                        <TableCell align={'center'}>
		                            <Typography 
		                              sx={{
		                                ml: .5,                                          
		                                fontSize: '14px',                                
		                                fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                '@media (max-width: 800px)': { fontSize: '.6rem' },

		                              }}
		                            >
		                             {row.pagamento}
		                            </Typography>  
		                        </TableCell> 

		                        <TableCell align={'center'}>
		                            <Typography 
		                              sx={{
		                                ml: .5,                                          
		                                fontSize: '14px',                                
		                                fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                '@media (max-width: 800px)': { fontSize: '.6rem' },

		                              }}
		                            >
		                             {row.mes}
		                            </Typography>  
		                        </TableCell> 

		                        <TableCell align={'center'}>
		                          <Typography 
		                              sx={{
		                                ml: .5,                                          
		                                fontSize: '14px',                                
		                                fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                '@media (max-width: 800px)': { fontSize: '.6rem' },

		                              }}
		                            >
		                             {row.data}
		                            </Typography>  
		                        </TableCell> 

		                        <TableCell align={'center'}>
		                          <Typography 
		                              sx={{
		                                ml: .5,                                          
		                                fontSize: '14px',                                
		                                fontFamily: 'Wix Madefor Display,  sans-serif',                               
		                                '@media (max-width: 800px)': { fontSize: '.6rem' },

		                              }}
		                            >
		                             {row.semestre}
		                            </Typography>  
		                        </TableCell> 

		                      </TableRow>
		                    );
		                  })}
		              </TableBody>
		            </Table>
		          </TableContainer>
		          <TablePagination
		            rowsPerPageOptions={[10, 25, 100]}
		            component="div"
		            count={depositos.length}
		            rowsPerPage={rowsPerPage}
		            page={page}
		            onPageChange={handleChangePage}
		            onRowsPerPageChange={handleChangeRowsPerPage}
		          />
		        </Paper>
        	}
		</>
	)

}
export default Paymentpainel;