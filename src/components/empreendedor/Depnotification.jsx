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

function Depnotification(props) {

	const { primery, secudary, debito } = props;

	return(
		<Box 
			//levation={0} 
			sx={{ 
				m: .1, 
				borderRadius: 0, 
				//bgcolor: `rgba(255, 255, 255, 0.08)`, 
			}}
		>
	 		<CardContent>
	    		
		        <Typography 
		        	sx={{
		        		fontSize: 12,
				 		fontWeight: 500,									 		
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
						fontSize: '.6rem',
						fontWeight: 700,
						color: `${secudary}`,
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
	  
		</Box>
	)

}
export default Depnotification;