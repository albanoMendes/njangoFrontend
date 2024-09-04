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
import {
	MonetizationOn, 
	Engineering, 
	VisibilityOff, 
	Visibility,
	ReceiptLong,
	Edit,
	DeleteForever,
	DownloadForOffline
} from '@mui/icons-material';
import Model from "../Model";
import Depositpainel from './Depositpainel';



function Investbox(props) {

	const { primery, secudary, investment } = props;

	const [openModel, setOpenModel] = useState(false);
  	const [title, setTitle] = useState('');
  	const [opcao, setOpcao] = useState('');

  	const [partner, setPartner] = useState({
			id: '',
			name: 'Paulo Miranda',
			empresa: investment.empresa,
			entrada: '',
			lucro: '',
			data: '',
	})

  	
  	const handlepPay = () => {
      setOpcao('PAYMENT');
      setTitle('DEPOSITOS');
      setOpenModel(true);
      //console.log(partner)

    };

	return(
		<>
			<Card 
			elevation={1} 
			sx={{
				m: .5, 
				p:1, 
				//border: `1px solid ${secudary}`, 
				borderRadius: 0,
			}}
		>
			<Box
				sx={{
					display: 'flex',	
					//mt: 3,
					//ml: .5,
				}}
			>
				<Typography
					component={'div'}
					sx={{
						width: 20, 
						height: 20,
						'@media (max-width: 800px)': { 
	            			width: 18, 
							height: 18, 
	        			},
					}}
				>
					<img src={new URL(`../../assets/Logos/${investment.logo}`, import.meta.url)} width={'100%'} height={'100%'}/>
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
		                variant="p" 
		                component={'div'}
		                sx={{
		              		fontWeight: 500,
		              		//mt: 1,
				            fontSize: '.8rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${secudary}`,
		              		ml: .5,
		              		'@media (max-width: 800px)': { 
		            			fontSize: '.8rem',	
		            			mt: .2,	 
	            			},
	              		}}

	            	>
	              
	                  {investment.empresa}
	              	</Typography>  
		     	</Box>									
			</Box>

			
			<Grid sx={{ flexGrow: .5, mt: -.4 }} container spacing={2}>
	    	 	
	    	 	<Grid item xs={12}>
	    	 		
	    	 		<Grid container justifyContent="space-between" spacing={2}>
	    	 			
	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									ENTRADA MENSAL
								</Typography>
								<Typography 
									sx={{
										fontSize: '15px', 
										fontWeight: 200, 
										fontFamily: 'Oswald, sans-serif',
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
									{(investment.entrada).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>
	    	 			</Grid>

	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									SEU INVESTIMENTO
								</Typography>
								<Typography 
									sx={{
										fontSize: '15px', 
										fontWeight: 200, 
										fontFamily: 'Oswald, sans-serif',
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
							
									{(investment.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>
	    	 			</Grid>

	    	 			<Grid item>
	    	 				<Box sx={{}}>
								<Typography 
									sx={{
										fontSize: '7px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 800px)': { fontSize: '6.5px' },
										
									}}
								>
									SEU LUCRO
								</Typography>
								<Typography 
									sx={{
										fontSize: '15px', 
										fontWeight: 200, 
										fontFamily: 'Oswald, sans-serif',
										'@media (max-width: 800px)': { fontSize: '8px' },
										
									}}
								>
								
									{(investment.lucro).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>
	    	 			</Grid>

	    	 		</Grid>

	    	 	</Grid>

	         </Grid>			

	        	<IconButton
					onClick={handlepPay}
		       		size="small"                
		        	color="inherit"
					sx={{borderRadius: 0, height: 30, width: 30, m: .2}}                           
		      	>
		          <DownloadForOffline sx={{ color: `${secudary}`, fontSize: '15px',}} />  
		      </IconButton>
		     	     
			</Card>

			<Model
	            title={title}
	            openModel = {openModel}
	            setOpenModel = {setOpenModel}
	        >
	          <Depositpainel primery={primery} secudary={secudary} funcionario={partner}/>
	      </Model>     

		</>
		

	)

}
export default Investbox;