
import { useState } from 'react';
import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {MonetizationOn, HomeRepairService,Engineering, ReceiptLong, PriceChange, Receipt, ShoppingCart } from '@mui/icons-material';
//import { BarChart } from '@mui/x-charts/BarChart';
import Chart from '../empreendedor/Chart';
import Notifications from '../empreendedor/Notifications';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top as const',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const diacoffe = [
	{
		sub: '1/02/2024',
		sem: 2000,
	},

	{
		sub: '2/02/2024',
		sem: 6000,
	},
	{
		sub: '3/02/2024',
		sem: 1000,
	},
	{
		sub: '4/02/2024',
		sem: 1600,
	},

	{
		sub: '5/02/2024',
		sem: 7000,
	},
	{
		sub: '6/02/2024',
		sem: 3000,
	},
	{
		sub: '7/02/2024',
		sem: 2000,
	},

	{
		sub: '8/01/2024',
		sem: 3000,
	},
	{
		sub: '9/02/2024',
		sem: 5000,
	},
	{
		sub: '10/02/2024',
		sem: 1000,
	},

	{
		sub: '11/02/2024',
		sem: 7000,
	},
	{
		sub: '12/02/2024',
		sem: 4500,
	}

]

function Homepainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;

	const [fun, setFun] = useState(2)
	const [cor1, setCor1] = useState('rgba(255, 99, 132, 0.5)');
	const [total, setTotal] = useState(100000)

	///const labels = data.map(emp=>emp.sub)
	//const dataVal = data.map(val=>val.sem)

	
	//const dataValsegment = diasegment.map(val=>val.sem)

	const labelsdias =  diacoffe.map(emp=>emp.sub)
	const dataValscoffe = diacoffe.map(val=>val.sem)
	const d = new Date();

	const newMonths = monthNames.slice(0, d.getMonth());
	const diarias = `Vendas Diarias de ${monthNames[d.getMonth()]} De ${d.getFullYear()}`
	//const labels1 = data1.map(emp=>emp.sub)
	//const dataVal1 = data2.map(val=>val.sem)

	//const [cor2, setCor2] = useState('rgba(255, 99, 132, 0.5)');
	

	const grafico = `Vendas Mensais De ${d.getFullYear()}`

	//const diarias = `Vendas Diarias de ${monthNames[d.getMonth()]} De ${d.getFullYear()}`

	

	const [datasetsdias, setDatasetsdias] = useState([
		{
			label: `${'COFFE HOUSE LDA'}`,
			backgroundColor: `${'rgba(89, 63, 47, 0.5)'}`,
			borderColor: 'rgba(0, 0, 0, 1)',
			borderWidth: 1,
			data : dataValscoffe,
			
		}
	])

	return(
		<Grid container spacing={2}>

			<Grid item xs={12} md={12} sm={12}>

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
							width: 40, 
							height: 40,
							'@media (max-width: 800px)': { 
		            			width: 18, 
								height: 18, 
		        			},
						}}
					>
						<img src={new URL(`../../assets/Logos/${empresa.logo}`, import.meta.url)} width={'100%'} height={'100%'}/>
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
					            fontSize: '1.7rem',
					            fontFamily: 'Oswald, sans-serif',
			              		//color: `${secudary}`,
			              		ml: .5,
			              		'@media (max-width: 800px)': { 
			            			fontSize: '.8rem',	
			            			mt: .2,	 
		            			},
		              		}}

		            	>
		              
		                  {empresa.name}
		              	</Typography>  
			     	</Box>									
				</Box>

			</Grid>

			<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' } }}>
			
				<Grid container justifyContent="center" spacing={2}>
					
					<Grid item xs={12} md={6} sm={12}>					
			              <Paper elevation={1} sx={{ p: 1,  maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
			                 <Box
			             		sx={{
			             			display: 'flex',
			             			flexDirection: 'column',
			             			p: 1,
								///justifyContent: 'center',
								//alignItems: 'center',

			             		}}
			                 >
			                 		<Typography
			                    sx={{
			                        fontWeight: 700,
			                        fontSize: '12px',                   
			                        fontFamily: 'Wix Madefor Display, serif',
			                        '@media (max-width: 800px)': { fontSize: '15px' },
			                    }}
			                >
			                    {empresa.segment} DE HOJE
			                </Typography>
			                <Box
			                	sx={{
			                		display: 'flex',
			                		justifyContent: 'space-between',
			                	}}
			                >
			                	{empresa.segment == 'VENDA' ?

			                		<ShoppingCart 
				                		sx={{
				                			mt: 3,
				                			fontSize: '20px',
				                			color: `${secudary}`, 
				                		}}
				                	/>

			                		:
			                		<HomeRepairService 
				                		sx={{
				                			mt: 3,
				                			fontSize: '20px',
				                			color: `${secudary}`,
				                		}}
				                	/>
			                	}
			                	
			                	<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 800px)': { fontSize: '25px' },
										
									}}
								>
									{fun}
								</Typography>
			                </Box>
			                 	
			                 </Box>
			              </Paper>
			          </Grid>

			          <Grid item xs={12} md={6} sm={12}>
			            <Paper elevation={1} sx={{ p: 1, maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
			               <Box
			               		sx={{
			               			display: 'flex',
			               			flexDirection: 'column',
			               			p: 1,
				  					//justifyContent: 'center',
				  					//alignItems: 'center',
			               		}}
			               >
			               		<Typography
					                  sx={{
					                      fontWeight: 700,
					                      fontSize: '12px',                   
					                      fontFamily: 'Wix Madefor Display, serif',
					                      '@media (max-width: 800px)': { fontSize: '15px' },
					                  }}
					              >
					                   VALOR {empresa.segment}S DE HOJE
					              </Typography>
					              <Box
					              	sx={{
					              		display: 'flex',
					              		justifyContent: 'space-between',
					              	}}
					              >
					              	<MonetizationOn 
					              		sx={{
					              			mt: 3,
					              			fontSize: '20px',
					              			color: `${secudary}`,
					              		}}
					              	/>
					              	<Typography 
										sx={{
											fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },
											
										}}
									>
										{(total).toLocaleString("en-US", {style:"currency", currency:"USD"})}
									</Typography>
					              </Box>
			               	
			               </Box> 
			            </Paper>
			        </Grid>

			        <Grid item xs={12} md={12} sm={12}>
		            	<Box>
		            		<Chart primery={primery} secudary={secudary} datasets={datasetsdias} labels={labelsdias} titulo={diarias}/>
		            	</Box>
		            </Grid>

				</Grid>


			</Grid>

			<Grid item xs={12} sm={4}>
				<div>
					<Typography
			              sx={{
			                fontWeight: 500,
					            fontSize: '20px',                   
					            fontFamily: 'Oswald, sans-serif', 
			                '@media (max-width: 800px)': { fontSize: '15px' },
			              }}
			          >
			              NOTIFICAÇÕES
			          </Typography>
			          <Typography
			              sx={{                    
			                  fontSize: '12px',                                       
			                  fontFamily: 'Wix Madefor Display, serif',
			                  '@media (max-width: 800px)': { fontSize: '10px' },
			              }}
			          >
			              Novas atualizações da empresa
			          </Typography>     
			 	</div>
			 	<Notifications user={user} />
			</Grid>

	                	
			
		</Grid>
	)
}
export default Homepainel;