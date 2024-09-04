import { useCallback, useEffect, useRef, useState } from "react";
//import { makeStyles } from "@mui/styles";
import { Button, Typography, Box} from "@mui/material";
import classes from "./Publicidades.module.css";
import {useNavigate} from 'react-router-dom';

function Publish(props) {

	const { primery, secudary, submit, slide } = props;
	let navigate = useNavigate();
	
	return(
		<>
			<img src={new URL(`../assets/publicidades/${slide.image}`, import.meta.url)}  alt="Slide"/>
			<div className={classes.sombra}>
				<div className={classes.content}>
				<h2>{slide.empresa}</h2>
				<h4>{slide.segment}</h4>
				<span>{slide.descricao}</span>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						p: 1,
					}}
				>
					<Box sx={{mt: 1}}>
						<Typography 
							sx={{
								fontSize: '15px', 
								fontWeight: 'bold', 
								fontFamily: 'Wix Madefor Display, sans-serif', 
								color: `${secudary}`,
								'@media (max-width: 850px)': { 
			            			fontSize: '10px', 
									
			            		},
			            		'@media (max-width: 450px)': { 
					            	fontSize: '8px', 
											
				            	},
							}}
						>
							CAPITAL DA EMPRESA
						</Typography>
						<Typography 
							sx={{
								fontSize: '55px', 
								fontWeight: 500, 
								fontFamily: 'Six Caps, sans-serif',
								'@media (max-width: 982px)': { 
					            	fontSize: '45px', 
											
				            	},
				            	'@media (max-width: 450px)': { 
					            	fontSize: '35px', 
											
				            	},
							}}
						>
							{(slide.capital).toLocaleString("en-US", {style:"currency", currency:"USD"})}
						</Typography>
					</Box>

					<Box sx={{mt: 1}}>
						<Typography 
							sx={{
								fontSize: '15px', 
								fontWeight: 'bold', 
								fontFamily: 'Wix Madefor Display, sans-serif', 
								color: `${secudary}`,
								'@media (max-width: 850px)': { 
			            			fontSize: '10px', 
									
			            		},
			            		'@media (max-width: 450px)': { 
					            	fontSize: '8px', 
											
				            	},
							}}
						>
							VALOR DO INVESTIMENTO
						</Typography>
						<Typography 
							sx={{
								fontSize: '55px', 
								fontWeight: 500, 
								fontFamily: 'Six Caps, sans-serif',
								'@media (max-width: 982px)': { 
					            	fontSize: '45px', 
											
				            	},
				            	'@media (max-width: 600px)': { 
					            	fontSize: '45px', 
											
				            	},
				            	'@media (max-width: 450px)': { 
					            	fontSize: '35px', 
											
				            	},
							}}
						>
					
							{(slide.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
						</Typography>
					</Box>

					<Box sx={{mt: 1}}>
						<Typography 
							sx={{
								fontSize: '15px', 
								fontWeight: 'bold', 
								fontFamily: 'Wix Madefor Display, sans-serif', 
								color: `${secudary}`,
								'@media (max-width: 850px)': { 
			            			fontSize: '10px', 
									
			            		},
			            		'@media (max-width: 450px)': { 
					            	fontSize: '8px', 
											
				            	},
							}}
						>
							SEU LUCRO
						</Typography>
						<Typography 
							sx={{
								fontSize: '55px', 
								fontWeight: 500, 
								fontFamily: 'Six Caps, sans-serif',
								'@media (max-width: 982px)': { 
					            	fontSize: '45px', 
											
				            	},
				            	'@media (max-width: 450px)': { 
					            	fontSize: '35px', 
											
				            	},
							}}
						>
						
							{slide.lucro}%
						</Typography>
					</Box>
					</div>
					<Button
						//onClick={submit}
						onClick={() => navigate(`/Investir/${slide.id}`)} 
						sx={{
		                    mt: 1,
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
		                    '@media (max-width: 982px)': { 
		            			fontSize: '.7rem', 
		            			p:'10px 30px 10px 30px',
								
		            		},
		                }}			
					>
						INVESTIR AGORA
					</Button>
				</div>
			</div>
			
		</>
		
	)

}
export default Publish;