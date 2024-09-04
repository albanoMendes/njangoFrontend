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
	CardActions
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


function Funcionariomore(props) {

	const { primery, secudary, funcionario } = props;


	return(
		<Paper
			elevation={0}
			sx={{
				p: 4,
				display: 'flex',
				borderRadius: 0,
				bgcolor: `rgba(255, 255, 255, 0.08)`,
				'@media (max-width: 600px)': { 
        			p: 3,
    			},	
			}}
		>
			<Typography
				component={'div'}
				sx={{
					width: 120, 
					height: 120,
					'@media (max-width: 600px)': { 
            			width: 90, 
						height: 90, 
        			},
				}}
			>
				<img src={new URL(`../../assets/funcionarios/${funcionario.image}`, import.meta.url)} width={'100%'} height={'100%'}/>
			</Typography>
			<Box
            	sx={{
            		display: 'flex', 
            		flexDirection: 'column',
            		justifyContent: 'start',
            		alignItems: 'start',
    				textAlign: 'start',
            	}}
            >	
            	<Typography 
					sx={{
				 		fontSize: 16,
				 		fontWeight: 500,
				 		ml: 1,
				 		fontFamily: 'Wix Madefor Display, sans-serif',										 
				 		mb: .1,	
				 		'@media (max-width: 600px)': { 
	            			fontSize: 14,
	        			},							 											 		
				 	}} 
				 >
	          	 {funcionario.name}
	        	</Typography>
	        	<Typography 
					sx={{
				 		fontSize: 10,
				 		 fontWeight: 500,
				 		 ml: 1,
				 		fontFamily: 'Wix Madefor Display, sans-serif',										 
				 		mb: .1,	
				 		'@media (max-width: 600px)': { 
	            			fontSize: 8,
	        			},									 											 		
				 	}} 
				 >
	          	 {funcionario.profissao}
	        	</Typography>
	        	<Box
	        		sx={{
	        			display: 'flex',
	        		}}
	        	>
	        		<Payment 
	        			sx={{
	        				ml: 1, 
		        			mt: 1, 
		        			fontSize: 12, 
		        			color: `${secudary}`,
		        			'@media (max-width: 600px)': { 
		            			fontSize: 10,
		            			mt: .8,
		        			},		
		        		}}
	        		/>
	        		<Typography 
						sx={{
					 		fontSize: 15,
					 		fontWeight: 200,
					 		ml: .5,
					 		fontFamily: 'Oswald, sans-serif',										 
					 		'@media (max-width: 600px)': { 
		            			fontSize: 12,
		        			},										 											 		
					 	}} 
					 >
		          	 {(funcionario.salario).toLocaleString("en-US", {style:"currency", currency:"USD"})}
		        	</Typography>

	        	</Box>
	        	<Typography 
					sx={{
				 		fontSize: 10,
				 		fontWeight: 500,
				 		ml: 1,
				 		fontFamily: 'Wix Madefor Display, sans-serif',										 
				 		mb: .1,
				 		'@media (max-width: 600px)': { 
	            			fontSize: 8,
	        			},	

				 	}} 
				 >
	          	 {funcionario.empresa}
	        	</Typography>
	        	<Typography 
					sx={{
				 		fontSize: 10,
				 		fontWeight: 500,
				 		ml: 1,
				 		fontFamily: 'Wix Madefor Display, sans-serif',										 
				 		mb: .1,
				 		'@media (max-width: 600px)': { 
	            			fontSize: 8,
	        			},									 											 		
				 	}} 
				 >
	          	 {funcionario.email}
	        	</Typography>
	        	<Typography 
					sx={{
				 		fontSize: 10,
				 		fontWeight: 500,
				 		ml: 1,
				 		fontFamily: 'Wix Madefor Display, sans-serif',										 
				 		mb: .1,
				 		'@media (max-width: 600px)': { 
	            			fontSize: 8,
	        			},	

				 	}} 
				 >
	          	 {funcionario.data_create}
	        	</Typography>


            </Box>
			
		</Paper>

	)

}
export default Funcionariomore;