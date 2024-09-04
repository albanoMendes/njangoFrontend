import parse from 'html-react-parser';
import {
	Box, 
	Divider,
	 Grid, 
	 Card, 
	 CardMedia, 
	 CardActions, 
	 IconButton, 
	 CardContent, 
	 Typography, 
	 Button,
	 ListItemText,
	List,
	ListItem,
	Paper
} from '@mui/material';
import { 
	ChevronRight, 
	//WhatsApp, 
	Telegram,
	Mail,
	MailOutline,
	X, 
	Facebook,
	Instagram,
	LinkedIn,
	Event,
	Sell,
}  from '@mui/icons-material';

function Read(props) {

	const { primery, secudary, blog } = props;

	return(
		<Paper 
			elevation={0}  
			//className={classes.paperStyle} 
			style={{background: 'rgba(0, 0, 0, 0.0)', borderRadius: 0}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					p: 5,
					'@media (max-width: 900px)': { 
            			//fontSize: '10px',
            			//display: 'flex', 
            			//justifyContent: 'center',
						//alignItems: 'center',
						//textAlign: 'center',							
						p: 2,
            		},

					//mt: -40,
					//alignItems: 'center',
					//textAlign: 'center',
					//background: '#D3D3DB',
					//m: 6,
					//p: 5,

				}}
			>

				<Typography					
					sx={{							
						fontSize: '2rem',
						fontWeight: 700,
						//color: '#1D1D1D',
						fontFamily: 'Oswald, serif',
						'@media (max-width: 800px)': { fontSize: '1.5rem', mt: 1 },
						'@media (max-width: 400px)': { fontSize: '1rem' },
						
					}}

				>

					{blog.title}
			       
			    </Typography>

			    <Typography					
					sx={{							
						fontSize: '1.2rem',
						fontWeight: 100,
						color: `${secudary}`,
						fontFamily: 'Wix Madefor Display, sans-serif',
						'@media (max-width: 800px)': { fontSize: '1rem', mt: 1 },
						'@media (max-width: 400px)': { fontSize: '.8rem' },
						
					}}

				>

					{blog.subtitle}
			       
			    </Typography>

		    	<Box
					sx={{
						mt: 1,
						display: 'flex',
						//justifyContent: 'space-between'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							
						}}
					>
						<Event sx={{color: `${secudary}`, fontSize: 18}} />
						<Typography
							sx={{ 
			                	//display: 'inline'
			                	ml: .5, 
			                	color: '#B8B8B8',
			                	fontSize: 14,
			                	//fontWeight: 700,
			                	fontFamily: 'Wix Madefor Display, sans-serif',
			              	}}
						>
							{blog.data}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							ml: 2
							
						}}
					>
						<Sell sx={{color: `${secudary}`, fontSize: 18}} />
						<Typography
							sx={{ 
			                	//display: 'inline' 
			                	ml: .5,
			                	color: '#B8B8B8',
			                	fontSize: 14,
			                	//fontWeight: 700,
			                	fontFamily: 'Wix Madefor Display, sans-serif',
			              	}}
						>
							{blog.tipo}
						</Typography>
					</Box>
					
				</Box>

				<Box
					sx={{mt: 5}}
				>
					<Typography
						sx={{ 
		                	//display: 'inline' 
		                	ml: .5,
		                	color: `${primery}`,
		                	fontSize: 15,
		                	fontWeight: 200,
		                	fontFamily: 'Wix Madefor Display, sans-serif',
		              	}}
					>
						{parse(blog.conteudo1)}
					</Typography>
					<Typography
						component={'div'}
						sx={{
							display: 'flex', 
	            			justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							mt: 2,
							'@media (max-width: 900px)': { 
		            			//fontSize: '10px',
		            			width: '98%',
		            			display: 'flex', 
		            			justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								
	            			},

							
						}}
					>
						<img src={new URL(`../../assets/blog/${blog.image1}`, import.meta.url)} width={'90%'} height={'80%'}/>
					</Typography>
				</Box>

				<Box
					sx={{mt: 5}}
				>
					<Typography
						sx={{ 
		                	//display: 'inline' 
		                	ml: .5,
		                	color: `${primery}`,
		                	fontSize: 15,
		                	fontWeight: 200,
		                	fontFamily: 'Wix Madefor Display, sans-serif',
		              	}}
					>
						{parse(blog.conteudo2)}
					</Typography>
					<Typography
						component={'div'}
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							mt: 2,
							'@media (max-width: 900px)': { 
		            			//fontSize: '10px',
		            			width: '98%',
		            			display: 'flex', 
		            			justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								
	            			},
						}}
					>
						<img src={new URL(`../../assets/blog/${blog.image2}`, import.meta.url)} width={'90%'} height={'80%'}/>
					</Typography>
				</Box>

				<Box
					sx={{mt: 5, mr: .5}}
				>

					<Typography
						sx={{ 
		                	//display: 'inline' 
		                	ml: .5,
		                	color: `${primery}`,
		                	fontSize: 15,
		                	fontWeight: 200,
		                	fontFamily: 'Wix Madefor Display, sans-serif',
		              	}}
					>
						{parse(blog.conteudo3)}
					</Typography>

				</Box>

				<Box
					sx={{
						mt: 5,
						display: 'flex',

					}}
				>
					<Typography
						sx={{ 
		                	//display: 'inline'

		                	ml: .5,
		                	color: `${primery}`,
		                	fontSize: 15,
		                	fontWeight: 200,
		                	fontFamily: 'Wix Madefor Display, sans-serif',
		              	}}
					>
						Partilhar este post!
					</Typography>
						<Box
								sx={{
									//m: 2,
									display: 'flex',
									//flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>

								<Facebook  
									sx={{
										fontSize: 20,
										ml: 5,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#4267B2',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							         	},
										'@media (max-width: 425px)': { 
					        			fontSize: 25, 
					        			//p:'20px 20px 20px 20px',
					        			// mt: 5,
										
						        		},	
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},	
									}}
								/>

								<Instagram  
									sx={{
										fontSize: 20,
										ml: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#F25C05',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
						        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<X  
									sx={{
										fontSize: 20,
										ml: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: 'black',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
						        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<LinkedIn  
									sx={{
										fontSize: 20,
										ml: 1,
										color: '#B8B8C8',
										'&:hover': {
							              	color: '#0442BF',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							            },
										'@media (max-width: 425px)': { 
					        			fontSize: 25, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,													
						        		},
						        		'@media (max-width: 325px)': { 
						        			fontSize: 20, 
						        			//p:'20px 20px 20px 20px',
						        			// mt: 5,
											
						        		},		
									}}
								/>

								<Telegram  
									sx={{
										fontSize: 20,
										ml: 1,
										color: '#B8B8C8',
										'&:hover': {
						              		color: '#05AFF2',
							                cursor: 'pointer',
							                //color: 'white',
							                transition: 'all 400ms',
							             },
										'@media (max-width: 425px)': { 
					        				fontSize: 25, 
					        				//p:'20px 20px 20px 20px',
					        				// mt: 5,
										
					        			},
					        			'@media (max-width: 325px)': { 
					        				fontSize: 20, 
					        				//p:'20px 20px 20px 20px',
					        				// mt: 5,
										
					        			},		
									}}
								/>

						
					</Box>

				
				</Box>




			</Box>
		</Paper>

	)

}
export default Read;