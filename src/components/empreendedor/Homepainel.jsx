
import { useState } from 'react';
import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {MonetizationOn, Engineering, ReceiptLong } from '@mui/icons-material';
//import { BarChart } from '@mui/x-charts/BarChart';
import Chart from './Chart'
import Notifications from './Notifications';

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

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//const empresa1 = [2000, 18000, 33012, 34353, 12344, 4342, 4242, 3404]
//const empresa2 = [2020, 5000, 3012, 40053, 1344, 6442, 4342, 3004]

const data = [
	{
		sub: 'January',
		sem: 2000,
	},

	{
		sub: 'February',
		sem: 18000,
	},
	{
		sub: 'March',
		sem: 12000,
	}

]

const data2 = [
	{
		sub: 'January',
		sem: 1000,
	},

	{
		sub: 'February',
		sem: 12000,
	},
	{
		sub: 'March',
		sem: 15000,
	}

]

const diasegment = [
	{
		sub: '1/02/2024',
		sem: 4000,
	},

	{
		sub: '2/02/2024',
		sem: 8000,
	},
	{
		sub: '3/02/2024',
		sem: 6000,
	},
	{
		sub: '4/02/2024',
		sem: 4000,
	},

	{
		sub: '5/02/2024',
		sem: 8000,
	},
	{
		sub: '6/02/2024',
		sem: 2000,
	},
	{
		sub: '7/02/2024',
		sem: 4000,
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
		sem: 4000,
	},

	{
		sub: '11/02/2024',
		sem: 10000,
	},
	{
		sub: '12/02/2024',
		sem: 9000,
	}

]

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

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus } = props;
	const [fun, setFun] = useState(10)
	const [cor1, setCor1] = useState('rgba(255, 99, 132, 0.5)');
	const [total, setTotal] = useState(100000)

	const labels = data.map(emp=>emp.sub)
	const dataVal = data.map(val=>val.sem)

	const labelsdias = diasegment.map(emp=>emp.sub)
	const dataValsegment = diasegment.map(val=>val.sem)

	const dataValscoffe = diacoffe.map(val=>val.sem)


	//const labels1 = data1.map(emp=>emp.sub)
	const dataVal1 = data2.map(val=>val.sem)

	//const [cor2, setCor2] = useState('rgba(255, 99, 132, 0.5)');
	const d = new Date();

	const grafico = `Vendas Mensais De ${d.getFullYear()}`

	const diarias = `Vendas Diarias de ${monthNames[d.getMonth()]} De ${d.getFullYear()}`

	const newMonths = monthNames.slice(0, d.getMonth());

	const [datasets, setDatasets] = useState([
		{
			label: `${'SEGMENT S.A'}`,
			backgroundColor: `${cor1}`,
			borderColor: 'rgba(0, 0, 0, 1)',
			borderWidth: 1,
			data : dataVal,
			
		},
		{
				label: `${'COFFE HOUSE LDA'}`,
				backgroundColor: `${'rgba(89, 63, 47, 0.5)'}`,
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 1,
				data : dataVal1,
				
			}
	])

	const [datasetsdias, setDatasetsdias] = useState([
		{
			label: `${'SEGMENT S.A'}`,
			backgroundColor: `${cor1}`,
			borderColor: 'rgba(0, 0, 0, 1)',
			borderWidth: 1,
			data : dataValsegment,
			
		},
		{
				label: `${'COFFE HOUSE LDA'}`,
				backgroundColor: `${'rgba(89, 63, 47, 0.5)'}`,
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 1,
				data : dataValscoffe,
				
			}
	])
	//document.write("The current month is " + monthNames[d.getMonth()]);
	//onsole.log(data);



	return(
		<Grid container spacing={2}>
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
				                    FUNCIONÁRIOS
				                </Typography>
				                <Box
				                	sx={{
				                		display: 'flex',
				                		justifyContent: 'space-between',
				                	}}
				                >
				                	<Engineering 
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
				                    LUCROS
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

	                <Grid item xs={12} md={12} sm={12}>
	                	<Box>
	                		<Chart primery={primery} secudary={secudary} datasets={datasets} labels={labels} titulo={grafico}/>
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