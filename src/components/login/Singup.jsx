import {useState, useRef, forwardRef, useEffect} from 'react';
import {Box, FormLabel, Typography, Grid, Paper, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { Login, PhotoCamera } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
//import {useNavigate} from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';

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

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 0000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const countries = [
  {
    id: '1', 
    acronimo: 'AN',
		code: '+244',    
    name: 'ANGOLA',    
  },
  {
    id: '2',
    acronimo: 'BR',
		code: '+55',    
    name: 'BRASIL',  
  },
];


export default function Singup(props){
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

	//let history = useNavigate();
	// eslint-disable-next-line react/prop-types
	let pais = '';
	const [currencies, setCurrencies] = useState(countries)
	const { foto, handleChange, setTitle, setOpenModel, opcao, user, setUser } = props;
	const [message, setMessage] = useState('');
	const [cor, setCor] = useState('#00809b');
	const [id, setId] = useState(0);
	const [img, setImg] = useState(foto)
	const [selectedImage, setSelectedImage] = useState();
	//let navigate = useNavigate();
	const selectFile = useRef();
	const classes = useStyles();
	const [data, setData] = useState({
		id: 0,
		nome: "",
		lastname: "",
		email: "",
		idcountry: "",
		cell: "",
		password: "",
		repassword: "",
		foto: [],
		tipoUser: "CLIENT"
	});
	const handleChannge=(e)=>{
		setData({...data,[e.target.name]: e.target.value})
	};
	const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
	};

	useEffect(() => { 
		///setId(Number(id))		
		if (opcao === "EDITAR") {
			//console.log(id)
			 axios({
          method: 'GET',
          url: 'http://localhost:8080/criptoapp/src/api/useres/getUser.php',
          params: {
              _id: user.id,
          },
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response.data.idCountry)
          setData({
            id: response.data.id,
						nome: response.data.name,
						lastname: response.data.lastname,
						email: response.data.email,
						img: response.data.img,
						idcountry: response.data.idCountry,
						cell: response.data.phone,
						password: "",
						repassword: "",
						foto: [],
						tipoUser: response.data.typeUser,
          })
          
      })
      .catch(function () {
        //handleLogout()
      })
			//console.log(Number(getId))

			pais = Number(user.idCountry);
			console.log(user.idCountry)
			//setId(parseInt(user.idCountry))
			console.log(foto)
			console.log(pais)
		}	
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
    }, [])

	/*fetch("http://localhost:8080/criptoapp/src/api/countries/")
	.then((response)=>response.json())
	.then((responseJson)=>{
		setCurrencies(responseJson)
	})*/
	const submitForm = async (e)=>{
		e.preventDefault();
		/*if(opcao === "EDITAR"){
			if(data.email != '' && data.nome != '' && data.lastname != '' && data.cell != ''){
				const formData = new FormData();
				formData.append("id", data.id);
				formData.append("nome", data.nome);
				formData.append("email", data.email);
				formData.append("lastname", data.lastname);
				formData.append("password", data.password);
				formData.append("foto", selectFile.current.files[0]);
				formData.append("typeUser", data.tipoUser);
				formData.append("phone", data.cell);
				formData.append("idCountry", data.idcountry);
				axios({
					method: 'post',
					url: 'http://localhost:8080/criptoapp/src/api/useres/update.php',
					data: formData,
					config: { headers: {'Content-Type': 'multipart/form-data' }}
				})
				.then(function (response) {
					//handle success
					console.log(response)
					setCor('#00809b')
					setMessage('Usuario atulizado com sucesso!');
					setData({
						nome: "",
						lastname: "",
						email: "",
						idcountry: 0,
						cell: "",
						password: "",
						repassword: "",
						foto: [],
						tipoUser: ""
					});		
					setSelectedImage()
					setImg('sem-foto.jpg');
					console.log(user)
					
					//console.log(Number(user.idcountry))
					
				})
				.catch(function (response) {
					//handle error
					//console.log(response)
					//setCor('red');
					//setMessage('O email corresponde a um usuario já cadastrado');
				});
				axios({
          method: 'GET',
          url: 'http://localhost:8080/criptoapp/src/api/useres/getUser.php',
          params: {
              _id: user.id,
          },
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response.data)
          setUser({
            id: response.data.id,
						name: response.data.name,
						lastname: response.data.lastname,
						img: response.data.img,
						typeUser: response.data.typeUser,
						email: response.data.email,
						phone: response.data.phone,
						idcountry: response.data.idcountry
          })
          setOpenModel(false)
      })
      .catch(function () {
        //handleLogout()
      });

			} else {
				setCor('red');
				setMessage("Tem algum campo vazio. VERIFICA!")
				//console.log(data.repassword);
				//console.log(data.password)
			}
		} else {
			if(data.email != '' && data.nome != '' && data.lastname != '' && data.cell != '' && data.repassword != "" && data.password != ""){
				if(data.repassword === data.password){
					const formData = new FormData();
					formData.append("nome", data.nome);
					formData.append("email", data.email);
					formData.append("lastname", data.lastname);
					formData.append("password", data.password);
					formData.append("foto", selectFile.current.files[0]);
					formData.append("typeUser", data.tipoUser);
					formData.append("phone", data.cell);
					formData.append("idCountry", data.idcountry);
					axios({
						method: 'post',
						url: 'http://localhost:8080/criptoapp/src/api/useres/inserir.php',
						data: formData,
						config: { headers: {'Content-Type': 'multipart/form-data' }}
					})
					.then(function () {
						//handle success
						//console.log(response)
						setCor('#00809b')
						setMessage('Usuario Cadastrado com sucesso. Faça login!');
						setData({
							nome: "",
							lastname: "",
							email: "",
							idcountry: id,
							cell: "",
							password: "",
							repassword: "",
							foto: [],
							tipoUser: "CLIENT"
						});		
						setSelectedImage()
						setTitle('')  
					})
					.catch(function () {
						//handle error
						//console.log(response)
						//setCor('red');
						//setMessage('O email corresponde a um usuario já cadastrado');
					});

				} else {
					setCor('red');
					setMessage("Password diferentes. Escreve novamente!")
					console.log(data.repassword);
					console.log(data.password)
				}
					} else {
						setCor('red');
						setMessage("Tem algum campo vazio. VERIFICA!")
						//console.log(data.repassword);
						//console.log(data.password)
					}
				}
		//console.log(selectFile.current.files[0]);
		*/
	};

	return(
		<Paper elevation={0}  style={styles.paperStyle}>
			<form  className={classes.root}>

			<Grid 
				container
			>
				<Grid item xs={12} sm={6}

				>
						<TextField 
							size="small"						
							label="Nome" 
							placeholder="Insere o seu nome"
							name="nome"
							onChange={handleChannge}
							value={data.nome}  
							fullWidth 
							required
						/>
						<TextField	
							size="small"					
							label="Email"						
							type="email"
							name="email"
							onChange={handleChannge}
							value={data.email}  
							fullWidth 
							required
						/>
						<TextField 
							//variant="standard"
							size="small"
							label="Telefone"		
							
							name="cell"
							onChange={handleChannge}
							value={data.cell}  
							fullWidth 
							required
						/>				

						<FormControl>						
							<InputLabel 
								id="menu"
								sx={{
									ml: 1,
									mr: 1,								
									fontSize: '12px',
									fontFamily: 'Wix Madefor Displa, sans-serif',
								}}
							>
							SELECIONE SEU PAIS
							</InputLabel>
								<Select
								size="small"
								labelId="menu" id="menu-list"
								label="SELECIONE SEU PAIS"	
								name="idcountry"		
								defaultValue={data.idcountry}				
								onChange={handleChannge}
								>
								{currencies.map((option) => (
								<MenuItem            
									key={option.id} value={option.id}
								>							
								<Typography 
									sx={{
										//ml: 1,                                           
										fontSize: '15px',                    
										fontFamily: 'Wix Madefor Displa, sans-serif',
									}}>
									{option.name}
									</Typography>          
								
								</MenuItem>
							))}

							</Select>
						</FormControl> 

						<FormControl
							sx={{
									//ml: 1,                                           
									fontSize: '10px',                    
									fontFamily: 'Wix Madefor Displa, sans-serif',
								}}
						>
				      <FormLabel 
				      	id="demo-radio-buttons-group-label"
				      	sx={{
									//ml: 1,                                           
									fontSize: '12px',
									fontWeight: 800,                    
									fontFamily: 'Wix Madefor Displa, sans-serif',
								}}
				      >
				      	Tipo de Conta
				      </FormLabel>
				      <RadioGroup
				      	sx={{
				      		display:'initial',
				      		fontSize: '10px',                    
									fontFamily: 'Wix Madefor Displa, sans-serif',
				      	}}
				        aria-labelledby="demo-radio-buttons-group-label"
				        defaultValue="EMPREENDEDOR"
				        name="tipoUser"
				        onChange={handleChannge}  
				        
				      >
				        <FormControlLabel 
				        	value="EMPREENDEDOR" 
				        	control={<Radio fontSize="small"/>} 
				        	label={
					        	<Typography 
											sx={{
												//ml: 1,
												fontWeight: 700,                                            
												fontSize: '12px',                    
												fontFamily: 'Wix Madefor Displa, sans-serif',
											}}
										>
											EMPREENDEDOR
										</Typography>		        		
				        	} 
				        />
				        <FormControlLabel 
				        	value="INVESTIDOR" 
				        	control={<Radio />} 
				        	label={
				        		<Typography 
											sx={{
												//ml: 1,
												fontWeight: 700,                                            
												fontSize: '12px',                    
												fontFamily: 'Wix Madefor Displa, sans-serif',
											}}
										>
											INVESTIDOR
										</Typography>	
				        	}
				        />
				       
				      </RadioGroup>
				    </FormControl>
						
						
						</Grid>
						<Grid item xs={12} sm={6}

						>
						{opcao === "EDITAR"?
								''
							:
								<Box>
									<TextField 	
										size="small"					
										label="Senha" 
										placeholder="Senha" 
										type="password"
										name="password"
										onChange={handleChannge}
										value={data.password}  
										fullWidth 
										required
									/>
									<TextField 	
										size="small"					
										label="Confirma a senha" 
										placeholder="Confirma a senha" 
										type="password"
										name="repassword"
										onChange={handleChannge}
										value={data.repassword}  
										fullWidth 
										required
									/>	
								</Box>
						}  

						<Box>
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
								src={(selectedImage === undefined) ? new URL(`../../assets/usuarios/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
								style={styles.image}
								alt="Thumb"
							/>
							</Box>
						</Box>					
						</Grid>
					</Grid>
					<Grid align="center" sx={{ mt: 1 }}>
						<Typography
							component="p"
								sx={{
										color: `${cor}`,
										justifyContent: 'center',
										alignItems: 'center',
										fontWeight: 'bold',	
										fontSize: '10px',
										fontFamily: 'Wix Madefor Displa, sans-serif',
										'@media (max-width: 600px)': { fontSize: '8px' },
									}}
								>
									{message}
							</Typography>
					</Grid>
				
				<Box sx={{p: 1}}>		
						<Button 
							type="submit" 
							size="small"							
							sx={{
								m: '2px 0',
								color: 'white',
								border: 'none',
								cursor: 'pointer',		
								textDecoration: 'none',
								fontSize: '12px',
								fontFamily: 'Wix Madefor Displa, sans-serif',
								backgroundColor: '#F9CC19',
								borderRadius: 0,
								'&:hover': {
									backgroundColor: '#AD8500',
									color: '#171010',
									cursor: 'pointer',
									transition: '0.3s ease-in',
								},
							}}			
							onClick={submitForm}
						> 
							{opcao}
						</Button>
						<Button 
							size="small"
							type="submit" 
							onClick={() => setOpenModel(false)}
							sx={{
								ml: 0.5,
								color: '#F9CC19',
								fontFamily: 'Wix Madefor Displa, sans-serif',
								fontSize: '12px',
								borderRadius: 0,
								'&:hover': {
									color: 'white',
									backgroundColor: '#FF0000',
									transition: 'all 400ms',
								},
							}}
						> 
						FECHAR
					</Button> 
					{opcao === "EDITAR"?
							''
						:
							<Button
							size="small"
							sx={{
								float: 'right',				
								color: '#F9CC19',			
								fontFamily: 'Wix Madefor Displa, sans-serif',
								fontSize: '8px',
								'&:hover': {
									color: '#171010',
									backgroundColor: 'white',
									transition: 'all 400ms',
								},							
							}}
									onClick={() => { handleChange("event", 0), setTitle('') }}
						>
							<Login sx={{}} />
						</Button>
					}  
					
				</Box>
			</form>
		</Paper>
	)
}
