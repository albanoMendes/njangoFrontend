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

function Deposit(props) {

	const { primery, secudary, debito } = props;

	return(
		<Card elevation={1} sx={{ m: .5, borderRadius: 0, bgcolor: `rgba(255, 255, 255, 0.08)`, }}>
	 		<CardContent>
	    		
		        <Typography 
		        	sx={{
		        		mb: .1, 
			        	fontSize: '.7rem',
						fontWeight: 700,
						fontFamily: 'Wix Madefor Display, serif',
						mt: 1
			        }} 
			       >
		          {debito.mes}
		        </Typography>
		        <Typography 
		        	sx={{
		        		fontSize: 15,
				 		fontWeight: 200,									 		
				 		fontFamily: 'Oswald, sans-serif',										 
				 		'@media (max-width: 600px)': { 
	            			fontSize: 12,
	        			},		
		        	}} 
		        >
		          {(debito.valor).toLocaleString("en-US", {style:"currency", currency:"USD"})}
		        </Typography>
		        <Typography 
		        	sx={{
						fontSize: '.7rem',
						fontWeight: 700,
						fontFamily: 'Wix Madefor Display, serif',
						//textAlign: 'center',
						//width: 225,
					}}
		        >		          
		          {debito.tipo}
		        </Typography>
		        <Typography 
		        	sx={{
						fontSize: '.7rem',
						//fontWeight: 700,
						fontFamily: 'Wix Madefor Display, serif',
						//textAlign: 'center',
						//width: 225,
					}}
		        >		           
		          {debito.data}
		        </Typography>
			</CardContent>
	  
		</Card>
	)

}
export default Deposit;