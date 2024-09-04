import {useState, useRef, forwardRef, useEffect} from 'react';
import {Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";



function Formbanco({ setValue, opcao, setOpcao, setOpenModel, primery, secudary}) {

	const [banco, setBanco] = useState({
        id: 0,
        nome: '',
        email: '',
        bank: '',
        agencia: '',
        nconta: '',
        tipoConta: '',
        nIdentidade: '',
        cell: '',  
        idTitular: 0

    });

    const [message, setMessage] = useState('');
    //const [cor, setCor] = useState('#00809b');

    const handleChannge=(e)=>{
        setBanco({...banco,[e.target.name]: e.target.value})
    };

	return(
		<Paper 
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: 'rgba(0, 0, 0, 0.0)', borderRadius: 0}}
		>

			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				
				<Grid item xs={12}>
					
					<Grid container justifyContent="space-between" spacing={2}>
						
						<Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="fname" style={{}}>NOME COMPLETO</label>
  								<input 
  									type="text" 
  									id="fname" 
  									name="nome" 
  									value={banco.nome}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="femail" style={{}}>EMAIL</label>
  								<input 
  									type="email" 
  									id="femail" 
  									name="email" 
  									value={banco.email}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="fbank" style={{}}>BANCO</label>
  								<input 
  									type="text" 
  									id="fbank" 
  									name="bank" 
  									value={banco.bank}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="fagencia" style={{}}>AGÊNCIA</label>
  								<input 
  									type="text" 
  									id="fagencia" 
  									name="agencia" 
  									value={banco.agencia}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="fconta" style={{}}>Nº DE CONTA OU IBAN</label>
  								<input 
  									type="text" 
  									id="fconta" 
  									name="agencia" 
  									value={banco.agencia}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                             <div className={classes.input_box} >                            	
  								<label for="tipo" style={{}}>TIPO DE CONTA</label>
							    <select 
							    	id="tipo" 
							    	name="tipoConta"
							    	onChange={handleChannge}
									value={banco.tipoConta}
							    	
							    >
								    <option 
								      	value="VENDA" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	CORRENTE
								    </option>
								    <option 
								      	value="SERVIÇO" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	POUPANÇA
								    </option>
								    						      
							    </select>
                            </div>
                        </Grid>

                         <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >                            	
  								<input 
  									type="text" 
  									//id="fID" 
  									placeholder="Nº DE IDENTIDADE"
  									name="nIdentidade" 
  									value={banco.nIdentidade}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<div className={classes.search}>
									<span className={classes.form_element} >

										<span className={classes.fa_search}>
											<LocalPhone
												sx={{
													fontSize: '1.8rem', 
													color: `${secudary}`,
													'@media (max-width: 982px)': { 
								            			fontSize: '1.5rem', 
								            		},
								            	}}
											/>
										</span>

										<input 
											type="text" 
											placeholder="INFORME TELEFONE"
											name="cell"
											value={banco.cell}
  											onChange={handleChannge}
										/>
									</span>
								</div>  
                        </Grid>


					</Grid>

				</Grid>

			</Grid>


			<Grid align="center" sx={{ mt: 1 }}>
                <Typography
                    component="p"
                        sx={{
                                //color: `${cor}`,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold', 
                                fontSize: '10px',
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 600px)': { fontSize: '8px' },
                            }}
                        >
                            {message}
                    </Typography>
            </Grid>


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

export default Formbanco;
