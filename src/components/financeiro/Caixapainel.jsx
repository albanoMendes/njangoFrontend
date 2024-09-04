import { ArrowUpward, ArrowDropDown } from '@mui/icons-material';
import { List, Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#F9CC19"
        },
    }
});

const recibos = [
	{
		id: 1,
		valor: 250000,
		tipo: 'SERVIÇO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 2,
		valor: 250000,
		tipo: 'SERVIÇO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'FEVEREIRO',
		data: '10/02/2024'
	},
	{
		id: 3,
		valor: 150000,
		tipo: 'SERVIÇO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 4,
		valor: 450000,
		tipo: 'SERVIÇO',
		empresa: 'COFFE HOUSE LDA',
		mes: 'DEZEMBRO',
		data: '05/01/2024'
	}


];  

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Caixapainel(props) {

	const classes = useStyles()
	const { primery, secudary, funcionario } = props;
	const [payments, setPayments] = useState(recibos)
	const [total, setTotal] = useState(0);
	const [showPassword, setShowPassword] = useState(false);
	//const [depositos, setDepositos] = useState(recibos)
	//const [lucros, setLucros] = useState(0)
	//const [total, setTotal] = useState(82);
	const [value, setValue] = useState(0);
	//const [text, setText] = useState('Total De Depositos');

	const d = new Date();

	const newMonths = monthNames.slice(0, d.getMonth());
	const diarias = `Fluxo de ${monthNames[d.getMonth()]} de ${d.getFullYear()}`

	const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
	    setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
	    setRowsPerPage(+event.target.value);
	    setPage(0);
	};


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


	useEffect(() => { 
	    let tot = 0; 
	     payments.forEach((deposito) => {

	        tot += parseFloat(deposito.valor)
	        //console.log(tot)
	        
	    })
	    setTotal(tot);

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
				            FLUXO DE CAIXA
				        </Typography>
				        <Typography
				            sx={{                    
				                fontSize: '15px',                                       
				                fontFamily: 'Wix Madefor Display, serif',
				                '@media (max-width: 800px)': { fontSize: '10px' },
				            }}
				        >
				            Depositos referente ao fechamento de caixa diarias
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
	                            {diarias}
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

            {payments.length == 0 ?
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
		                          VALOR
		                      </TableCell>

		                       <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          TIPO
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
		                  </TableRow>  
		                  </TableHead>        
		              <TableBody>
		                {payments
		                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		                  .map((row) => {
		                    return (
		                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
		                         <TableCell align={'center'}>
		                            <div
		                              style={{                        
		                                  display: 'flex',
		                                  alignItems: 'center',
		                                  justifyContent: 'center',
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
		                             {row.valor.toLocaleString("en-US", {style:"currency", currency:"USD"})}
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
		                             {row.tipo}
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
		                      </TableRow>
		                    );
		                  })}
		              </TableBody>
		            </Table>
		          </TableContainer>
		          <TablePagination
		            rowsPerPageOptions={[10, 25, 100]}
		            component="div"
		            count={payments.length}
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

export default Caixapainel;