import {useState, useRef, forwardRef, useEffect} from 'react';
import {
	Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";

const useStyles = makeStyles(() =>({
    root: {
    '& .MuiFormControl-root': {
            width: '90%',
            margin: useTheme().spacing(1),
        }
    },
    button:{
       
    },
    btn:{
        marginLeft: useTheme().spacing(1),
    }
}));

const rows = [
	{
		id: '934ru32',
		name: 'SEGMENT S.A',
		segment: 'VENDA',
		status: 'FUNCIONANDO',
		logo: 'Logo_s.png',
		nFun: 5,
		despesa: 120000,
		entrada: 150000,
		lucro: 30000,
		iduser: '24682463248',
	},
	{
		id: '9fe1g44ru32',
		name: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		status: 'PROCESSADO',
		logo: 'Logo_c.png',
		nFun: 5,
		despesa: 100000,
		entrada: 140000,
		lucro: 40000,
		iduser: '24682463248',
	},
	{
		id: '9fe1g44ru32',
		name: 'DJANGO INVESTMENT LDA',
		segment: '',
		status: 'ATIVO',
		logo: 'Logo_c.png',
		nFun: 5,
		despesa: 100000,
		entrada: 140000,
		lucro: 40000,
		iduser: '',
	},
	

];

export default function Formemployees(props) {

	const {primery, secudary, employees, opcao, foto, setOpenModel, tipoUser } = props;
	const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');
    const [novo, setNovo] = useState(false);
    const [empresas, setempresas] = useState(rows)
    const [novocolor, setNovocolor] = useState('');
    const [img, setImg] = useState(foto)
	const [selectedImage, setSelectedImage] = useState();
	//let navigate = useNavigate();
	//const classe = useStyles();
	const selectFile = useRef();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [funcionaro, setFuncionaro] = useState({
	    id: '',
	    name: '',
	    salario: 0, 
	    empresa: '',
	    bi: '',
	    cell: '',
	    email: '',
      	endereco: '',
      	profissao: '',
      	data_create: '', 
      	image: '',
	 });

    const styles = {
          preview: {
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
          },
          image: { maxWidth: "20%", maxHeight: 100 },
          paperStyle:{
          	backgroundColor: 'rgba(0, 0, 0, .0)',
						padding: '30px 10px 20px 30px', 
						width:'100%',
					},
		btnstyle:{margin:'2px 0'},
	};

    const handleChannge=(e)=>{
        setFuncionaro({...funcionaro,[e.target.name]: e.target.value})
    };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
	};

    useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
			setFuncionaro({
		        id: employees.id,
		        name: employees.name,
		        salario: employees.salario, 
		        empresa: employees.empresa,
		        bi: employees.bi,
		        cell: employees.cell,
		        email: employees.email,
		        endereco: employees.endereco,
		        profissao: employees.profissao,
		        data_create: employees.data_create,
		        image: employees.image
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
			              	ml: 1,
			               '@media (max-width: 800px)': { 
				                 width: '100%',
				                 ml: 0,

			              },
			            }}
		        	>
		        		<div className={classes.input_box} >
			        		<label for="fname" style={{}}>NOME COMPLETO</label>
							<input 
								type="text" 
								id="fname" 
								name="name" 
								value={funcionaro.name}
								onChange={handleChannge}
								//style={styles.input}
							/>


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
			        		<label for="fbi" style={{}}>Nº DO BI</label>
							<input 
								type="text" 
								id="fbi" 
								name="bi" 
								value={funcionaro.bi}
								onChange={handleChannge}
								//style={styles.input}
							/>

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
			              	ml: 1,
			               '@media (max-width: 800px)': { 
				                 width: '100%',
				                 ml: 0,

			              },
			            }}
		        	>
		        		<div className={classes.input_box} >
			        		<label for="femail" style={{}}>EMAIL</label>
							<input 
								type="email" 
								id="femail" 
								name="email" 
								value={funcionaro.email}
								onChange={handleChannge}
								//style={styles.input}
							/>


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
			        		<label for="fcell" style={{}}>TELEFONE</label>
							<input 
								type="text" 
								id="fcell" 
								name="cell" 
								value={funcionaro.cell}
								onChange={handleChannge}
								//style={styles.input}
							/>


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
			              	ml: 1,
			               '@media (max-width: 800px)': { 
				                 width: '100%',
				                 ml: 0,

			              },
			            }}
		        	>	


		        		<div className={classes.input_box} >                            	
							<label for="fempresa" style={{}}>EMPRESA</label>
						    <select 
						    	id="fempresa" 
						    	name="empresa"
						    	onChange={handleChannge}
								value={funcionaro.empresa}
						    	
						    >
						    	{
						    		empresas.map((empresa, index) => {
										return (
											<option 
												key={index}
										      	value={empresa.name} 
										      	style={{
										      		fontSize: '14px',                                       
													fontFamily: 'Oswald, sans-serif',
													color: `${secudary}`,
										      	}} 
										    >
										      	{empresa.name}
										    </option>				
										)
					                })


						    	}
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
			        		<label for="fendereco" style={{}}>ENDEREÇO</label>
							<input 
								type="text" 
								id="fendereco" 
								name="endereco" 
								value={funcionaro.endereco}
								onChange={handleChannge}
								//style={styles.input}
							/>


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
			              	ml: 1,
			               '@media (max-width: 800px)': { 
				                 width: '100%',
				                 ml: 0,

			              },
			            }}
		        	>
		        		<div className={classes.input_box} >
                        	<label for="fprofissao" style={{}}>PROFISSÃO</label>
								<input 
									type="text" 
									id="fprofissao" 
									name="profissao" 
									value={funcionaro.profissao}
									onChange={handleChannge}
									//style={styles.input}
								/>
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

		        		<div className={classes.input_box} style={{marginLeft: 5}} >
			        		<label for="fsalario" style={{}}>SALÁRIO</label>
							<input 
								type="number" 
								id="fsalario" 
								name="salario" 
								value={funcionaro.salario}
								onChange={handleChannge}
								//style={styles.input}
							/>
			        	</div>

		        	</Box>

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
					<IconButton size="small" sx={{borderRadius: 0, color: '#F9CC19'}} aria-label="upload picture" component="label">
					<input 
						hidden
						accept="image/*" 
						type="file" 
						ref={selectFile}  
						onChange={imageChange}                          
						required 
					/>
					<PhotoCamera />
					<Typography variant="overline" display="block" gutterBottom margin={1}>
						ADD UMA FOTO
					</Typography>	                       	
					</IconButton>  
					<Box style={styles.preview}>
						<img						
							src={(selectedImage === undefined) ? new URL(`../../assets/funcionarios/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
							style={styles.image}
							alt="Thumb"
						/>
					</Box>
				</Box>

				<Divider />

				<Box 
					sx={{
		              	width: '100%',
		              	mt: 1,
		              	ml: 1,
		               '@media (max-width: 800px)': { 
			                 width: '100%',
			                 ml: 0,

		              },
		            }}
				>
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
	                 <Button 
	                        type="submit" 
	                        sx={{
	                            ml: 1,
	                            borderRadius: 0,
	                            color: 'white',
				                fontSize: '12px',
				                fontWeight: 200,
				                backgroundColor: 'red',				                   
				                fontFamily: 'Wix Madefor Display, sans-serif',
				                '&:hover': {
				                    color: 'red',
				                    fontSize: '10px',
				                    //fontWeight: 100,
				                    backgroundColor: `black`,
				                    cursor: 'pointer',
				                    transition: '0.3s ease-in',
				                },
	                            
	                        }}
	                        //onClick={handleFinishAfter}
	                        
	                    > 
	                        FECHAR
	                    </Button>   
	            </Box>				

			</Box>
		</Paper>
	)
} 