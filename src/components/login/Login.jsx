import {useState} from 'react';
import {Grid, Paper, Button, Typography, TextField, Link, InputAdornment, IconButton, Box} from '@mui/material';
//import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Mail, Visibility, VisibilityOff } from '@mui/icons-material';
///import logo from '../../images/Criptomoeda.png';
import logo from '../../assets/LogoIn13.png';
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Login({ handleChange, setClose, setPainel, setTitle, setUser, setOpcao, setLogado, setStatus}){

	const paperStyle ={
		//padding: '3px 10px 10px 30px',
		padding: 10,
		backgroundColor: 'rgba(0, 0, 0, .0)',
		maxWidth: 350,
		fontSize: '20px',		
		//fontFamily: 'Roboto, sans-serif',
	};
	// eslint-disable-next-line no-unused-vars
	let navigate = useNavigate();
	const [message, setMessage] = useState('');
	const [user, setUsere] = useState({ email: '', password: '' });
	const [show, setShow] = useState(false);  
	

	// eslint-disable-next-line react/prop-types
	const EndAdornment = ({ show, setShow }) => {
		return (
			<InputAdornment position='end'>
				<IconButton onClick={()=> setShow(!show)} >
					{show ? <VisibilityOff/> : <Visibility/>}
				</IconButton>
			</InputAdornment>
		)
	}


	const handleChannge =(e)=>{
		setUsere({...user,[e.target.name]: e.target.value})
	};
	const submitForm = (e)=>{
		e.preventDefault();
		/*const sendData = {
			email: user.email,			
			password: user.password,
			
		
		console.log(user.password)
		console.log(user.email)
		const formData = new FormData();
		formData.append("email", user.email);
		formData.append("password", user.password);

		axios({
			method: 'POST',
			url: 'http://localhost:8080/criptoapp/src/api/auth.php',
			data: formData,
			config: { headers: {'Content-Type': 'multipart/form-data' }}
		})		
			.then(response => {
				setMessage('');
				console.log(response.data)
				if (response.status == 200) {
					if (response.data.typeUser === "ADM") {
						setUser({
							id: response.data.id,
							name: response.data.name,
							lastname: response.data.lastname,
							img: response.data.img,
							typeUser: response.data.typeUser,
							email: response.data.email,
							phone: response.data.phone,
							idCountry: response.data.idCountry
						});
						navigate(`/adm/${response.data.id}${response.data.lastname}`);
						setPainel(`/adm/${response.data.id}`);
						setClose(false);
						//setID(response.data.id);
					} else if (response.data.typeUser === "CLIENT") {
						setUser({
							id: response.data.id,
							name: response.data.name,
							lastname: response.data.lastname,
							img: response.data.img,
							typeUser: response.data.typeUser,
							email: response.data.email,
							phone: response.data.phone,
							idCountry: response.data.idCountry
						})
						navigate(`/client/${response.data.id}${response.data.lastname}`);
						setPainel(`/client/${response.data.id}`);
						setClose(false);
						//setID(response.data.id);
					} else if (response.data.typeUser === "SUP"){
						setUser({
							id: response.data.id,
							name: response.data.name,
							lastname: response.data.lastname,
							img: response.data.img,
							typeUser: response.data.typeUser,
							email: response.data.email,
							phone: response.data.phone,
							idCountry: response.data.idCountry
						})
						navigate(`/supervisor/${response.data.id}${response.data.lastname}`);
						//setPainel(`/administrador/${response.data.id}`);
						setClose(false);
						//setID(response.data.id);
					}
				} else {
					console.log(response.data);
					setMessage(response.data.mensagem);
				}
			
		
		})
		.catch(function () {
			setTitle("Error");
			setMessage("Email Ou Password invalido");
			handleChange("event", 5);
			//console.error(error);
		});

		/*axios({
			method: 'POST',
			url: 'http://localhost:8080/auth',
			params: {
				email: user.email,
				password: user.password
			},
			config: {
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
					'Access-Control-Allow-Origin': '*',
				}
			}
		})		
		.then((response)=> {
		//handle success
		console.log(response)
		/*if(response.data.Status === '200'){
			if(response.data.tipoUser === "ADM"){
				navigate(`/adm/${response.data.id}`);
				setPainel(`/adm/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}else if(response.data.tipoUser === "CLIENT"){
				navigate(`/client/${response.data.id}`);
				setPainel(`/client/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}else {
				navigate(`/supervisor/${response.data.id}`);
				setPainel(`/administrador/${response.data.id}`);
				setClose(false);
				//setID(response.data.id);
			}
		}else{
			alert(response.data.mensagem);
		}
	})
	.catch(function () {
		//console.log(response)
		//alert(response);
	});*/

	};
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center', 
					justifyItem: 'center',
					alignItems: 'center',	
					//backgroundColor: 'rgba(0, 0, 0, .5)',
					//bgcolor: 'r',
					//mt: 3,
					//ml: .5,

				}}
			>
				<Typography
						 component={'div'}
					>
						<img src={logo} width={65} height={46}/>
					</Typography>

				<Box 
					sx={{
						display: 'flex', 
						flexDirection: 'column', 
						justifyContent: 'center', 
						justifyItem: 'center',
						alignItems: 'center',
						textAlign: 'center', 
						my: 1,
						pb: 1
					}}
				>
	                
          <Typography
            variant="h5"
            noWrap
            component="a"           
            sx={{
            	ml: -.5,
            	//mt: -.5,            
							fontWeight: 800,                      							
							fontSize: '1.6rem',
            	fontFamily: 'Wix Madefor Display, sans-serif',
          		//color: `${primery}`,
          		textShadow: `2px 2px 4px #ddd`,
							//color: '#00809b',
							textDecoration: 'none',
							'@media (max-width: 600px)': { fontSize: '25px' },
            }}
          >
	          Njango
	        </Typography> 
	        <Typography
	            variant="h5"
	            noWrap
	            component="a"           
	            sx={{
	            	ml: -.5,
	            	mt: -.5,            
								//fontWeight: 'bold',
								fontSize: '1rem',
	            	fontFamily: 'Wix Madefor Display, sans-serif',
								//color: '#00809b',
								textDecoration: 'none',
								'@media (max-width: 600px)': { fontSize: '15px' },
	            }}
	          >
	           	Investment
	        </Typography>               
	      </Box>				
			</Box>
			
		<form style={{display: 'flex', alignContent: 'center', alignItems: 'center'}} onSubmit={submitForm}>
			<Grid fullWidth>
				<Paper  elevation={0}  style={paperStyle}>
					<Grid align="start" sx={{mb: 2}}>						
						<Typography
							component="h5"
							sx={{
								justifyContent: 'center',
								alignItems: 'center',
								fontWeight: 'bold',	
								fontSize: '20px',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 600px)': { fontSize: '15px' },
							}}
						>
							Bem-vindo de volta!
						</Typography>
						<Typography
						
						sx={{
							justifyContent: 'center',
							alignItems: 'center',	
							fontSize: '15px',
							mb: 1,
							fontFamily: 'Wix Madefor Display, sans-serif',
							'@media (max-width: 600px)': { fontSize: '10px' },
						}}
						>
							{'Faça login para voltar à sua conta.'}
							
						</Typography>
					</Grid>
						<TextField	
							size="small"	
							type="email"
							placeholder="Insere o seu  email" 
							name="email"
							onChange={handleChannge}
							InputProps={{
							startAdornment: (
								<InputAdornment position="start">
								<Mail />
								</InputAdornment>
							),
							}}
							value={user.email} 
							fullWidth 
							required
							sx={{								
								mb: 1,
								fontFamily: 'Wix Madefor Display, sans-serif',
							}}
						/>
						<TextField
							size="small"
							label="password"
							name="password"
							onChange={handleChannge}																								
							placeholder="Insere a Password"
							variant="outlined"
							value={user.password} 
							required
							fullWidth
							type={show ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<EndAdornment show={show} setShow={setShow} />
								),
							}}
						/>				
						<Typography 
							sx={{
								fontFamily: 'Oswald, sans-serif', 
								//fontWeight: 'bold', 
								mt: .1, 
								mb: 2
							}}
						>
							<Link 
								href="#" 
								underline="none" 
								sx={{
									color: '#F9CC19',
									'&:hover': {
										color: '#171010',
										//backgroundColor: 'white',
										transition: 'all 1s',
									},		
								}}
								//onClick={() => { handleChange("event", 2), setTitle('ATUALIZAR SENHA') }}
							>
							Esqueceu a senha ?
							</Link>
						</Typography>
						
						<Button 
							type="submit"
							size="small"
							sx={{
								margin: '8px 0',
								color: 'white',
								border: 'none',
								cursor: 'pointer',
								height: '35px',
								textDecoration: 'none',
								fontSize: '15px',
								backgroundColor: '#F9CC19',
								borderRadius: 0,
								'&:hover': {
									backgroundColor: '#AD8500',
									color: '#171010',
									cursor: 'pointer',
									transition: '0.3s ease-in',
								},
								'@media (max-width: 600px)': { fontSize: '10px', height: '30px', },
							}}											
							fullWidth
						> 
							Entrar
						</Button>
						<Grid align="center" sx={{ mt: 1 }}>
							<Typography
								component="p"
									sx={{
											color: 'red',
											justifyContent: 'center',
											alignItems: 'center',
											fontWeight: 'bold',	
											fontSize: '10px',
											fontFamily: 'Wix Madefor Display, sans-serif',
											'@media (max-width: 600px)': { fontSize: '8px' },
										}}
									>
										{message}
								</Typography>
						</Grid>
						
						
						<Grid align="center" sx={{mt: 1}}>						
							<Typography
								component="h5"
								sx={{
									justifyContent: 'center',
									alignItems: 'center',
									fontWeight: 'bold',	
									fontSize: '15px',
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 600px)': { fontSize: '15px' },
								}}
							>
								Não tem uma conta?
							</Typography>
							<Typography							
								sx={{
									justifyContent: 'center',
									alignItems: 'center',
									//fontWeight: 'bold',
									fontSize: '15px',
									mb: 1,
									fontFamily: 'Oswald, sans-serif',
									'@media (max-width: 600px)': { fontSize: '12px' },
								}}
							>

								<Link 
									href="#" 
									underline="none" 
									sx={{
										color: '#F9CC19',
										'&:hover': {
											color: '#171010',
											//backgroundColor: 'white',
											transition: 'all 1s',
										},		
									}}
									onClick={() => { handleChange("event", 1), setTitle('Criar Conta'), setOpcao('CRIAR')}}
								>
									Cadastre-se agora
								</Link>
							</Typography>
						</Grid>
				</Paper>
				</Grid>
				
			
		</form>
		</>
	)
}
