import { useState } from 'react';
import {Box, Typography, Divider, Grid} from '@mui/material';
import {Watch} from '@mui/icons-material';
//import logo from '../assets/OverLogo.png';

function Footer(props) {

	const { primery, secudary, logo, empresa } = props;

	return(
		<>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					bgcolor: `${secudary}`,
					mt: -1,					
					p: 1

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
					>
						<img src={new URL(`../assets/Logos/${logo}`, import.meta.url)} width={40} height={40}/>
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
			              		fontWeight: 700,
			              		mt: -.1,
					            fontSize: '1.8rem',
					            fontFamily: 'Oswald, sans-serif',
			              		color: 'white',
			              		ml: .5,
			              		'@media (max-width: 500px)': { 
			            			//fontSize: '2.5rem',	
			            			//mt: -2,	 
		            			},
		              		}}

		            	>
		              
		                  {empresa}
		              	</Typography>  
			     	</Box>									
				</Box>				
			</Box>
		</>
	)
}
export default Footer;