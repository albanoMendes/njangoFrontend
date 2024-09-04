import { ArrowUpward, ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
//import axios from 'axios';
//import Moedas from './Moedas';

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
		valor: 200000,
		tipo: 'INVESTIMENTO',
		empresa: 'PAULO TEC LDA',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 2,
		valor: 150000,
		tipo: 'INVESTIMENTO',
		empresa: 'BAR ARDENTE LDA',
		mes: 'FEVEREIRO',
		data: '10/02/2024'
	},
	


];  

function Investidopainel(props) {

	const { primery, secudary, user, setText, total, setTotal } = props;
	const classes = useStyles()
	const [depositos, setDepositos] = useState(recibos);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
	    setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
	    setRowsPerPage(+event.target.value);
	    setPage(0);
	};

	useEffect(() => {
	    let tot = 0;
	    setText('Total Investido')

	    depositos.forEach((deposito) => {
	        tot += parseFloat(deposito.valor)
	        //console.log(tot)
	    })
	    setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
	    /*axios({
	        method: 'GET',
	        url: 'http://localhost:8080/criptoapp/src/api/saques/getclientdepositos.php',
	        params: {
	            id: user.id,
	        },
	      config: { headers: {'Content-Type': 'multipart/form-data' }}
	    })
	    .then(function (response) {
	      //handle success
	      //console.log(response.data)
	      let tot = 0;       
	      response.data.forEach((deposito) => {
	        tot += parseFloat(deposito.valor)
	              //console.log(tot)
	      })
	      setTotal(tot.toFixed(8).toLocaleString("en-US", {style:"currency", currency:"USD"}));
	      setDepositos(response.data)
	        
	    })
	    .catch(function () {
	      
	    }); **/
	  // eslint-disable-next-line no-undef
	  }, [])

	return(
		<>
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
		                          VALOR
		                      </TableCell>
		                      
		                      <TableCell                       
		                          align={'center'}
		                          style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                      >
		                          EMPRESA
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
		                            <ArrowDropUp sx={{  color: `${secudary}`, fontWeight: 800, fontSize: '1.5rem', '@media (max-width: 800px)': { fontSize: '1rem' }, }} />
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
		                             {row.empresa}
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

export default Investidopainel;
