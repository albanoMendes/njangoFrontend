import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";


function Bankaccount(props) {

	const { setValue, banco, setBanco, opcao, setOpenModel, primery, secudary } = props;

	return(
		<>
			<Box
	            sx={{
	               // display: 'flex', 
	                alignItems: 'center',
	                justifyContent: 'center',
	            }}
	        >
		        <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 300,	
	                    fontSize: '15px',                       
	                    fontFamily: 'Oswald, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	                TITULAR.  {banco.name}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 300,	
	                    fontSize: '15px',                       
	                    fontFamily: 'Oswald, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	              BANCO. {banco.bank}
	            </Typography>
	        	<Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 300,	
	                    fontSize: '15px',                       
	                    fontFamily: 'Oswald, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	              AGENCIA. {banco.agencia}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 300,	
	                    fontSize: '15px',                       
	                    fontFamily: 'Oswald, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	               CONTA. {banco.conta}
	            </Typography>
	            <Typography
	                sx={{
	                    justifyContent: 'center',
	                    alignItems: 'center',
	                    fontWeight: 300,	
	                    fontSize: '15px',                       
	                    fontFamily: 'Oswald, sans-serif',
	                    '@media (max-width: 600px)': { fontSize: '10px' },
	                }}  
	            >
	              IBAM.  {banco.ibam}
	            </Typography>
	            <Button 
		            type="submit"                   
		            onClick={() => setValue(1)}
		            size="small"
		            sx={{
		                margin: '8px 0',
		                color: 'white',
		                //border: 'none',
		                cursor: 'pointer',
		                //mt: 1,
		                //height: '25px'
		                //minWidth: 100,
		               	borderRadius: 0,
		                textDecoration: 'none',
		                fontSize: '12px',
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                //borderRadius: '5px 5px 5px 5px',
		                backgroundColor: `${secudary}`,
		                '&:hover': {
			                color: `${primery}`,                       
			                cursor: 'pointer',
			                transition: '0.3s ease-in',
		                },
		            }}	
		            fullWidth		                        
		           
		        > 
		            {'PROXIMO'}
		        </Button>

	        </Box>
		</>
	)
}
export default Bankaccount;