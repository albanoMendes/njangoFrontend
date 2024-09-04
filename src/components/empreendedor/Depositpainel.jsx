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
	Card,
	CardActions,
	Divider
} from '@mui/material';
import {
	MonetizationOn, 
	Engineering, 
	VisibilityOff, 
	Visibility,
	ReceiptLong,
	Edit,
	DeleteForever,
	Payment
} from '@mui/icons-material';
import Deposit from './Deposit';


const recibos = [
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		mes: 'FEVEREIRO',
		data: '10/02/2024'
	},

];  


function Depositpainel(props) {

	const { primery, secudary, funcionario } = props;
	const [payments, setPayments] = useState(recibos)
	const [total, setTotal] = useState(0);


	useEffect(() => { 
    let tot = 0; 
     payments.forEach((deposito) => {

        tot += parseFloat(deposito.valor)
        //console.log(tot)
        
    })
    setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));

  }, [])



	return(
		<>
			<Box
		        sx={{ 
		        mt: 1,                               
		        //color: 'black',
		        display: 'flex',
		        flexDirection: 'column',
		        justifyContent: 'center', 
		        justifyItems: 'center',
		        }}
		    >
		        <Typography
		            component={'div'}
		            sx={{  
		                fontWeight: 400,
		                //color: 'green',                        
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                fontSize: '.9rem',  
		                
		            }}
		            >
		            {`${funcionario.name}`}                    
		        </Typography>
		         <Typography
		            component={'div'}
		            sx={{  
		                fontWeight: 700,
		                color: `${secudary}`,                        
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                fontSize: '.6rem',  
		                
		            }}
		            >
		            {`${funcionario.empresa}`}                    
		        </Typography>
		    </Box>
		    <Divider />
		    <List 
		    	sx={{ 
		    		width: '100%', 
		    		minWidth: 250,
		    		'@media (max-width: 800px)': { minWidth: 190, }, 
		    	}}

		    >
          		{payments.length == 0 ?
		              <Typography
		                  sx={{ 
		                          textAlign: 'center',
		                          fontSize: '15px',                                                                     
		                          fontFamily: 'Wix Madefor Display, serif',
		                          '@media (max-width: 800px)': { fontSize: '10px' },
		                      }}
		                  >
		                  NENHUM DEPOSITO NO MOMENTO
		              </Typography>
		              :
		              payments.map((payment, index) => {

		              	return(
		              		<Box key={index}>
						  		<Deposit primery={primery} secudary={secudary} debito={payment} />
							</Box>

		              	)
		                  
		              })        
		          }        
		      </List>
		      <Divider />
		      <Paper elevation={0} sx={{borderRadius: 0}}>
		          <Typography 
		              component={'h1'}    
		              sx={{                            
		                  ml: 1,
		                  textAlign: 'center',                            
		                  display: 'flex',
		                  alignItems: 'center',                      

		              }}
		          >
		              <Typography sx={{ mt: 2, mr: 1, fontSize: 12, fontWeight: 500,   }}>{'TOTAL:'}</Typography>
		              <Typography sx={{                                                                            
		                      fontSize: '1.5rem',
		                       fontWeight: 200,
		                      fontFamily: 'Oswald, serif',
		                      '@media (max-width: 800px)': { 
		                      	fontSize: '1rem',
		                      	mt: 1 
		                      },
		                  }}
		              >
		                 {total}
		              </Typography> 
		        </Typography>
	      	</Paper>
			
		</>
	)

}
export default Depositpainel;