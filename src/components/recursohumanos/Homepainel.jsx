
import { useState } from 'react';
import { Grid, Paper,Button, Box, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import {MonetizationOn, HomeRepairService,Engineering, ReceiptLong, PriceChange, Receipt, ShoppingCart, WorkHistory } from '@mui/icons-material';
//import { BarChart } from '@mui/x-charts/BarChart';
import Chart from '../empreendedor/Chart';
import Notifications from '../empreendedor/Notifications';
import Vagasativa from './Vagasativa';

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

function Homepainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;

	const [fun, setFun] = useState(2)
	const [total_v, settotal_v] = useState(2)
	const [cor1, setCor1] = useState('rgba(255, 99, 132, 0.5)');
	const [total, setTotal] = useState(100000)



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
			                        '@media (max-width: 320px)': { fontSize: '10px' },

			                    }}
			                >
			                    TOTAL DE VAGAS ABERTAS
			                </Typography>
			                <Box
			                	sx={{
			                		display: 'flex',
			                		justifyContent: 'space-between',
			                	}}
			                >
			                	<WorkHistory 
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
									{total_v}
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
					                      '@media (max-width: 320px)': { fontSize: '10px' },
					                  }}
					              >
					                   TOTAL DE COLABORADORES
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

			        <Grid item xs={12} md={12} sm={12}>
						<Paper elevation={0} sx={{ p: 0,  maxWidth: '100%', maxHeight: '100%', borderRadius: 0, }}>
							<Vagasativa primery={primery} secudary={secudary} />
						</Paper>
					</Grid>

			        
				</Grid>

			</Grid>

			<Grid item xs={12} sm={3}>
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