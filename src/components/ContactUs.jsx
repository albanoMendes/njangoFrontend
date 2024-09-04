import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import {WhatsApp} from '@mui/icons-material';
import { useState } from "react";
import classes from "./Contact.module.css";
import blogimage from '../assets/contactLeft.jpg';
//contactLeft.jpg
function ContactUs(props) {

	const { primery, secudary } = props;

	const  [message, setMessage] = useState({
		id: '',
		first: '',
		lastname: '',
		email: '',
		cell: '',
		conteudo: '',

	})

	const handleChannge =(e)=>{
        setMessage({...message,[e.target.name]: e.target.value})
    };

	const submitForm = (e)=>{
        e.preventDefault();
    };


	return(
		<>
			<Grid container >
				<Grid item xs={12} sm={12} md={7} sx={{ display: { xs: 'flex', md: 'grid' },}}>
					 


				    <Box className={classes.formContact}>
				    	<Typography					
							sx={{							
								fontSize: '2.8rem',
								fontWeight: 200,
								//color: 'black',
								fontFamily: 'Oswald, serif',
								'@media (max-width: 900px)': { fontSize: '2rem', mt: 1 },
								'@media (max-width: 400px)': { fontSize: '1.5rem' },
								
							}}

						>

						Contacte - nos
					       
					    </Typography>

				    	<Box
							sx={{
								width: '100%',					
								display: 'flex',
								justifyContent: 'space-evenly',
								//mt: 8,
								//mb: 2,
								'@media (max-width: 400px)': { 
				        			display: 'flex',
									flexDirection: 'column-reverse',
									justifyContent: 'center',
									alignItems: 'center',

				        		},
				        		'@media (max-width: 1115px)': { 
									//maxWidth: '550px', 
									//height: '200px',
									//mt: 4,
									//mb: 4
								},

							}}
						>

							<div >
								<input 
									type="text" 
									placeholder="Primeiro Nome"
									name="first"
									onChange={handleChannge}
		                        	value={message.first} 
								/>
							</div>

							<div className={classes.input_box}>
								<input 
									type="text" 
									placeholder="Ultimo Nome"
									name="second"
									onChange={handleChannge}
		                        	value={message.second} 
								/>
							</div>

							
						</Box>

						<Box
							sx={{
								width: '100%',					
								display: 'flex',
								justifyContent: 'space-evenly',
								//mt: 8,
								//mb: 2,
								'@media (max-width: 400px)': { 
				        			display: 'flex',
									flexDirection: 'column-reverse',
									justifyContent: 'center',
									alignItems: 'center',

				        		},
				        		'@media (max-width: 1115px)': { 
									//maxWidth: '550px', 
									//height: '200px',
									//mt: 4,
									//mb: 4
								},

							}}
						>

							<div className="input-box">
								<input 
									type="email" 
									placeholder="Email"
									name="email"
									onChange={handleChannge}
		                        	value={message.email} 
								/>
							</div>

							<div className={classes.input_box}>
								<input 
									type="text" 
									placeholder="Telefone"
									name="cell"
									onChange={handleChannge}
		                        	value={message.cell} 
								/>
							</div>
							
						</Box>

						<Box
							sx={{
								m: '5px auto',
								//p: 1
								//width: '100%',
								//ml: 2,
								'@media (max-width: 425px)': { 
				        			p: .5,
									
				        		},
								'@media (max-width: 415px)': { 
				        			p: .5,
									
				        		},
							}}
						>						
							<textarea 
								//cols={20}
								rows={10}								
								placeholder="Mensagem"
								name="conteudo"
								onChange={handleChannge}	                        	
							>
								{message.conteudo} 
							</textarea>
							
						</Box>

						<Box>
							<Box
				          		sx={{
				          			display: 'flex',
				          		}}
				          	>

				          		<Button 
						        	//size="small"
						        	//onClick={submit}
						        	sx={{
						                mt: 2,
						                p:'10px 25px 10px 25px',
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
						        		'@media (max-width: 425px)': { 
						        			fontSize: '9px', 
						        			p:'10px 20px 10px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 375px)': { 
						        			fontSize: '8px', 
						        			p:'10px 20px 10px 20px',
						        			 mt: 2,
											
						        		},
						            }}			
						        >
						        	ENVIAR EMAIL
						        </Button>
						        					       
						        <Button 
						        	//size="small"
						        	//onClick={submit}
						        	sx={{
						                mt: 2,
						                ml: 1,
						                p:'10px 25px 10px 25px',
						                color: 'green',
						                //border: 'none',
						                cursor: 'pointer',		
						                textDecoration: 'none',
						                fontWeight: 600,
						                borderRadius: 0,
						                fontSize: '12px',
						                //borderRadius: 0,
										border: `2px solid green`,
										backgroudColor: 'white',								                   
						               
						                fontFamily: 'Wix Madefor Display, sans-serif',
						                '&:hover': {
							              	bgcolor: `green`,
							                cursor: 'pointer',
							                color: 'white',
							                transition: 'all 400ms',
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
						        		'@media (max-width: 425px)': { 
						        			fontSize: '9px', 
						        			p:'10px 20px 10px 20px',
						        			// mt: 5,
											
						        		},
						        		'@media (max-width: 375px)': { 
						        			fontSize: '8px', 
						        			p:'10px 20px 10px 20px',
						        			 //mt: 2,
											
						        		},
						            }}			
						        >
						        	Whatsaap 
						        	<WhatsApp 
						        		sx={{
						        			//olor: 'green', 
						        			ml: 1,
						        			fontSize: '16px',
						        			
						        		}}
						        	/>
						        </Button> 
				          	
					
				          	</Box>
						</Box>

				    </Box>

				    

					
				</Grid>
				<Grid item xs={12} sm={12} md={5}>
					<img src={blogimage} width={'100%'} height={'100%'}/>
				</Grid>
		 	</Grid>
			
		</>
	)

}
export default ContactUs;