import {useState, useRef, forwardRef, useEffect} from 'react';
import {
	Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";


export default function Formvagas(props) {

	const {primery, secudary, emprego, opcao, setOpenModel, tipoUser } = props;
	const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');
    const [novo, setNovo] = useState(false);
    //const [produtos, setProdutos] = useState(rows)
    const [novocolor, setNovocolor] = useState('');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	const d = new Date();
	let month = months[d.getMonth()];


    const [vaga, setVaga] = useState({
	   	id: 0,
	    dep: '',
	    nvagas: 0,
	    perfil: '',
	    descricao: '',
	    data: '',
	    status: '', 
	    ncaditados: 0,
	})

    const handleNew = () => {
    	if(opcao == 'EDITAR'){
    		setNovo(false)
    	} else {
    		setNovo(novo ? false : true );
    	}
    }
    const handleChannge=(e)=>{
        setVaga({...vaga,[e.target.name]: e.target.value})
    };

    useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
			setVaga({
				id: emprego.id,
			    dep: emprego.dep,
			    nvagas: emprego.nvagas,
			    perfil: emprego.perfil,
			    descricao: emprego.descricao,
			    data: emprego.data,
			    status: emprego.status, 
			    ncaditados: emprego. ncaditados,
			})
			//console.log(service)
		}




	}, [])


	return(
		<Paper 
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: 'rgba(0, 0, 0, 0.0)', borderRadius: 0}}
		>
			<Box

				sx={{
					display: 'flex',
					flexDirection: 'column',
					//justifyContent: 'center',
					alignItems: 'center',
					mb: .5,
				}}
			>


				<Box
		          sx={{
		            display: 'flex',
		            //justifyContent: 'space-between',
		            width: '100%',		            
		            '@media (max-width: 800px)': { 
		                flexDirection: 'column',
		                justifyContent: 'center',
		                alignItems: 'center',
		                 width: '100%',
		            },
		          }}
		        >


		        	<Box 
			            sx={{
			              width: '100%',
			               '@media (max-width: 800px)': { 
			                 width: '100%',

			              },
			            }}

			        >
			        	<div className={classes.input_box}>
                    		<label for="objetivos" style={{}}>DESCRIÇÃO</label>						
							<textarea 
								id="objetivos"
								//cols={20}
								rows={6}								
								placeholder={`Resumo ou Definição.\nIntrodução do assunto`}
								name="descricao"
								onChange={handleChannge}
								//style={classes.textarea}	                        	
							>
								{emprego.descricao} 
							</textarea>
							
						</div>

			        </Box>

			        <Box 
			            sx={{
			              	width: '100%',
			              	ml: 1,
			               '@media (max-width: 800px)': { 
			                 width: '100%',
			                 ml: 0,

			              },
			            }}

			        >
			        	<div className={classes.input_box}>
                    		<label for="objetivos" style={{}}>PERFIL DO CANDIDATO</label>						
							<textarea 
								id="objetivos"
								//cols={20}
								rows={6}								
								placeholder={`Resumo ou Definição.\nIntrodução do assunto`}
								name="descricao"
								onChange={handleChannge}
								//style={classes.textarea}	                        	
							>
								{emprego.perfil} 
							</textarea>
							
						</div>

			        </Box>

		        </Box>



		        <Box
		        	sx={{
			            display: 'flex',
			            //justifyContent: 'space-between',
			            width: '100%',		            
			            '@media (max-width: 800px)': { 
			                flexDirection: 'column',
			                justifyContent: 'center',
			                alignItems: 'center',
			                 width: '100%',
			            },
			        }}
		        >

		        	<Box 
			            sx={{
			              width: '100%',
			               '@media (max-width: 800px)': { 
			                 width: '100%',

			              },
			            }}

			        >

			        	<div className={classes.input_box} >                            	
							<label for="fproduto" style={{}}>DEPARTAMENTO</label>
						    <select 
						    	id="fproduto" 
						    	name="dep"
						    	onChange={handleChannge}
								value={vaga.dep}
						    	
						    >
						    	
						    	<option 
									//key={index}
							      	value="MARKETING" 
							      	style={{
							      		fontSize: '14px',                                       
										fontFamily: 'Oswald, sans-serif',
										color: `${secudary}`,
							      	}} 
							    >
							      	MARKETING
							    </option>

							    <option 
									//key={index}
							      	value="FINANCEIRO" 
							      	style={{
							      		fontSize: '14px',                                       
										fontFamily: 'Oswald, sans-serif',
										color: `${secudary}`,
							      	}} 
							    >
							      	FINANCEIRO
							    </option>1 

							    <option 
									//key={index}
							      	value="RH" 
							      	style={{
							      		fontSize: '14px',                                       
										fontFamily: 'Oswald, sans-serif',
										color: `${secudary}`,
							      	}} 
							    >
							      	RECURSOS HUMANOS
							    </option>

							    <option 
									//key={index}
							      	value="MIDIAS SOCIAS" 
							      	style={{
							      		fontSize: '14px',                                       
										fontFamily: 'Oswald, sans-serif',
										color: `${secudary}`,
							      	}} 
							    >
							      	MIDIAS SOCIAS
							    </option>

						    	
						    </select>
		                </div>

			        </Box>

			        <Box 
			            sx={{
			              	width: '100%',
			              	ml: 1,
			               '@media (max-width: 800px)': { 
			                 width: '100%',
			                 ml: 0,

			              },
			            }}

			        >
			        	<div className={classes.input_box} >
			        		<label for="fname" style={{}}>Nº DE VAGAS</label>
							<input 
								type="number" 
								id="fname" 
								name="nvagas" 
								value={vaga.nvagas}
								onChange={handleChannge}
								//style={styles.input}
							/>
			        	</div>


			        </Box>


		        	
		        </Box>
		        {opcao == 'EDITAR'?

		        	<Box
		            	sx={{
		            		display: 'flex',
		            		width: '100%',
		            		justifyContent: 'space-between',

		            	}}
		            >
		            	<Box>
		        			<Button 
		                        type="submit" 
		                        sx={{
		                           // ml: 1,
		                            borderRadius: 0,
		                            color: 'white',
					                fontSize: '10px',
					                fontWeight: 200,
					                backgroundColor: `${vaga.status == 'ATIVO'? 'green' : 'red'}`,				                   
					                fontFamily: 'Wix Madefor Display, sans-serif',
					                '&:hover': {
					                    //color: '',
					                    fontSize: '9px',
					                    //fontWeight: 100,
					                    backgroundColor: `${vaga.status == 'ATIVO'? 'green' : 'red'}`,
					                    cursor: 'pointer',
					                    transition: '0.3s ease-in',
					                },
		                            
		                        }}
		                        //onClick={handleFinishAfter}
			                        
			                    > 
			                        {vaga.status}
			                    </Button>   

			        	</Box>

			        	<Box
			        		sx={{
			            		display: 'flex',
			            		//width: '100%',
			            		justifyContent: 'space-between',

			            	}}
			        	>
			        		<Typography  
			        			sx={{
			        				fontFamily: 'Oswald, sans-serif', 
			        				fontWeight: 400, 
			        				fontSize: '12px', 
			        				mt: 1.2,
			        				'@media (max-width: 375px)': { 
						                 fontSize: '10px',
						            },
			        			}}
			        		>
		                       TOTAL DE CANDIDATURA: 
		                    </Typography>
		                    <Typography  
		                    	sx={{ 
		                    		ml: .5, 
		                    		fontFamily: 'Oswald, sans-serif', 
		                    		fontWeight: 500, 
		                    		fontSize: '20px', 
		                    		color: `${secudary}`,
		                    		'@media (max-width: 375px)': { 
		                    			mt: .5,
						                fontSize: '15px',
						            },
		                    	}}
		                    >
		                      	{vaga.ncaditados}
		                    </Typography>
			        	</Box>
		            </Box>
		        	:
		        	''
		        }

			</Box>
			<Divider />
            <Box sx={{ mt: 1, mb: .5 }}>
            	 <Button 
	                type="submit" 							
	                sx={{
	                    m: '2px 0',
	                    color: 'white',
	                    borderRadius: 0,
	                    cursor: 'pointer',		
	                    textDecoration: 'none',
	                    fontSize: '12px',
	                    fontWeight: 200,								                   
		                backgroundColor: `${secudary}`,
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                '&:hover': {
		                    color: '#171010',
		                    backgroundColor: '#AD8500',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
	                        
	                }}			
	                //onClick={handleSave}
	            > 
	                {opcao}
	            </Button>
            </Box>
		</Paper>
	)
}