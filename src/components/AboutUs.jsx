import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
//import logo from '../assets/Pngtree3d.png';
import logo from '../assets/Investment_scaled.jpg';

function AboutUs(props) {

	const { primery, secudary } = props; 

	return(
		<Box
			sx={{
				width: '100%',					
				display: 'flex',
				justifyContent: 'space-evenly',
				mt: 8,
				//mb: 2,
				'@media (max-width: 900px)': { 
        			display: 'flex',
					flexDirection: 'column-reverse',
					justifyContent: 'center',
					alignItems: 'center',

        		},
        		'@media (max-width: 1115px)': { 
					//maxWidth: '550px', 
					//height: '200px',
					mt: 4,
					mb: 4
				},

			}}
		>
			<Typography
				component={'div'}
				sx={{
					maxWidth: '550px', 
					height: '250px',
					//mb: 1,
					'@media (max-width: 1115px)': { 
						maxWidth: '550px', 
						height: '200px',
						//mb: 1,
					},
					'@media (max-width: 1065px)': { 
						maxWidth: '500px', 
						height: '200px',
						//mb: 1,
					},
					'@media (max-width: 1000px)': { 
						maxWidth: '450px', 
						height: '200px',
						//mb: 1,
					},
					'@media (max-width: 900px)': { 
						maxWidth: '400px', 
						height: '250px',
					},
					'@media (max-width: 375px)': { 
						maxWidth: '350px', 
						height: '250px',
					},
				}}

			>
				<img src={logo}  width={'100%'} height={'100%'}/>
			</Typography>
			<Box
				sx={{					
					maxWidth:550,
					height:300,
					'@media (max-width: 1115px)': { 
						maxWidth: '550px', 
						height: '200px',
					},
					'@media (max-width: 1065px)': { 
						maxWidth: '500px', 
						height: '200px',
					},
					'@media (max-width: 1000px)': { 
						maxWidth: '450px', 
						height: '200px',
					},
					'@media (max-width: 900px)': { 
						maxWidth: '400px', 
						height: '250px',
					},
					'@media (max-width: 375px)': { 
						maxWidth: '350px', 
						height: '250px',
					},
				}}
			>
				<Typography
					variant="p"
					sx={{
						fontSize: '1.8rem',
						fontWeight: 200,
						fontFamily: 'Wix Madefor Display, serif',
						'@media (max-width: 1115px)': { fontSize: '1.5rem' },
						'@media (max-width: 375px)': { 
							fontSize: '1rem',	
	            			fontWeight: 400,
						},
						
					}}
				>
					Poucas palavras sobre nós
				</Typography>
				<Typography			                 
	                variant="p" 
	                component={'div'}
	                sx={{
	              		fontWeight: 300,
	              		//mt: -.1,
			            fontSize: '.8rem',
			            fontFamily: 'Wix Madefor Display, sans-serif',
	              		color: 'background: rgba(0, 0, 0, .5)',
	              		//ml: .5,
	              		'@media (max-width: 1115px)': { 
	            			fontSize: '.6rem',	
	            			fontWeight: 700,
	            			//mt: -2,	 
	        			},
	        			'@media (max-width: 900px)': { 
							fontSize: '.7rem',	
	            			fontWeight: 700,
						},
						'@media (max-width: 460px)': { 
							fontSize: '.6rem',	
	            			fontWeight: 400,
						},
	          		}}

	        	>
	              Njango investiment plataforma para acessória de investimentos, para empreendedores 
	              com projetos funcionando ou não que precisa de investimento, e para investidores com 
	              recursos para financiar. 
	              <br/><br/>
	              Monitiramos o investimentos garantido o funcionamento do investiimento
	              e a entrega do lucro ao investidor e acompanhamento do seu investimento.
	              Garatimos os a campanha de markting para atrair o maximo de interessados ao serviço ou 
	              aos produtos oferecidos a empresa após o investimento. 
	          	</Typography> 

	          	<Button 
		        	//size="small"
		        	//onClick={submit}
		        	sx={{
		                mt: 2,
		                p:'10px 35px 10px 35px',
		                color: 'white',
		                border: 'none',
		                cursor: 'pointer',		
		                textDecoration: 'none',
		                //fontWeight: 'bold',
		                borderRadius: 0,
		                fontSize: '12px',								                   
		                backgroundColor: `${secudary}`,
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                '&:hover': {
		                    color: '#171010',
		                    backgroundColor: '#AD8500',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
		                '@media (max-width: 1115px)': { 
		        			fontSize: '10px', 
		        			p:'10px 30px 10px 30px',
		        			 mt: 5,
							
		        		},
		        		/*'@media (max-width: 1060px)': { 
		        			fontSize: '10px', 
		        			p:'10px 30px 10px 30px',
		        			 mt: 5,
							
		        		},*/
		        		'@media (max-width: 1060px)': { 
		        			fontSize: '10px', 
		        			p:'10px 30px 10px 30px',
		        			 mt: 1.5,
							
		        		},
		        		'@media (max-width: 1024px)': { 
		        			//fontSize: '10px', 
		        			//p:'10px 30px 10px 30px',
		        			 mt: 2,
							
		        		},
		            }}			
		        >
		        	SABER MAIS
		        </Button>  
			</Box>

			
		</Box>
	)

}
export default AboutUs;