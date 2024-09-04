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
	Payments,
	DownloadForOffline
} from '@mui/icons-material';
import Model from "../Model";
import Depositpainel from './Depositpainel';


function Parceirosbox(props) {

	const { primery, secudary, parceiro } = props;

	const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState('');
  const [opcao, setOpcao] = useState('');

	const [partner, setPartner] = useState({
			id: parceiro.id,
			name: parceiro.nome,
			empresa: parceiro.empresa,
			entrada: parceiro.entrada,
			lucro: parceiro.lucro,
			data: parceiro.data,
	})

	const handlepPay = () => {
      setOpcao('PAYMENT');
      setTitle('DEPOSITOS');
      setOpenModel(true);
      console.log(partner)

    };


	return(
		<>
			<Card
				elevation={1} 
				sx={{
					p: 1,
					m: 1, 
					maxWidth: 400, 
					borderRadius: 0,  
				}}
			>
				<Typography
					sx={{
						fontSize: '20px',                                       
					    fontFamily: 'Wix Madefor Display, serif',
					    '@media (max-width: 800px)': { fontSize: '10px' },
					}}
				>
					{parceiro.nome}
				</Typography>
				<Typography
					sx={{
						fontSize: '15px',                                       
					    fontFamily: 'Wix Madefor Display, serif',
					    '@media (max-width: 800px)': { fontSize: '10px' },
					}}
				>
					{parceiro.empresa}
				</Typography>
				<Box
					sx={{
						display: 'flex',
					}}
				>

					<Payments 
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
		          	 {(parceiro.entrada).toLocaleString("en-US", {style:"currency", currency:"USD"})}
		        	</Typography>
					
				</Box>
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
					{parceiro.lucro}%
				</Typography>
				<Typography
					sx={{
						fontSize: '15px',                                       
					    fontFamily: 'Wix Madefor Display, serif',
					    '@media (max-width: 800px)': { fontSize: '10px' },
					}}
				>
					{parceiro.data}
				</Typography>

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
export default Parceirosbox;