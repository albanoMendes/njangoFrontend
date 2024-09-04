import { useState, useEffect } from 'react';
import { Button, Typography, Box, AppBar, Container, Link} from "@mui/material";
import { Close, Menu, LocationOn } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Model from '../components/Model';
import SignInOutContainer from '../components/login/SignInOutContainer';
import {useNavigate, useParams} from 'react-router-dom';

const rows = [
	{
		id: 1,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 100000,
		lucro: 20,		
		descricao: 'Empresa dedicada a fornecer café sustentável, apoiando agricultores locais e promovendo práticas ecológicas.',
		objetivos: 'Oferecer o melhor café e acompanhates do pais, e garatir a satisfação dos nossos clientes, em nossos os estabelecimentos!',
		missao: 'Missão de fornecer café de alta qualidade enquanto impacta positivamente as comunidades produtoras',
		oferta: 'Café e acompanhates',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Café de origem única, cultivado de forma sustentável e comércio justo',
		entrega: 'As entregas são feitas nas lojas e ao domicílio',
		local: 'Malanje, Katepa rua Nzinga nº 42',
		image: 'microsite_individual.jpg',
		logo: 'Logo_c.png',
		more: 'saber mais'
	},
	
	
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Investirpainel(props) {

	const { primery, secudary, logado, user, setUser, setStatus} = props;
	let navigate = useNavigate();
	const id = useParams();
	const [openModel, setOpenModel] = useState(false);
	const [title, setTitle] = useState('');
	const [opcao, setOpcao] = useState('');

	const [value, setValue] = useState(0);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [about, setAbout] = useState('DESCRICAO');
	const [showInfo, setShowInfo] = useState('none');
	const [descricao, setDescricao] = useState(`${secudary}`);
	const [objetivo, setObjetivo] = useState('');
	const [missao, setMissao] = useState('');
	const [oferta, setOferta] = useState('');
	const [plano, setPlano] = useState('');
	const [ceo, setCeo] = useState({
		id: 1,
		name: 'PAULO MIRANDA',
		image: 'em_01.png'

	});
	const [investiment, setInvestimet] = useState({
		id: 1,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	})

	const handleDrawerToggle = () => {
	    setMobileOpen(!mobileOpen);
	}

	const handleBack = () => {
	    navigate('/');
	 }

	 const submit = ()=>{

		//;
		if(logado){

		} else {
			setOpenModel(true);
			setTitle('')
		}

	};



	const changeColor = (cor) =>{
		switch(cor){
	        case 'DESCRICAO': 
	            setDescricao(`${secudary}`)
	            setObjetivo('') 
	            setMissao('')
	            setOferta('')
	            setPlano('')
	            setAbout('DESCRIÇÃO')
	            break
	        case 'OBJETIVO':           
	            setDescricao('')
	            setObjetivo(`${secudary}`) 
	            setMissao('')
	            setOferta('')
	            setPlano('')
	            setAbout('OBJETIVOS')
	            break
	        case 'MISSAO':
	           	setDescricao('')
	            setObjetivo('') 
	            setMissao(`${secudary}`)
	            setOferta('')
	            setPlano('')
	            setAbout('MISSÃO')
	            break  
	        case 'OFERTA':
	           	setDescricao('')
	            setObjetivo('') 
	            setMissao('')
	            setOferta(`${secudary}`)
	            setPlano('')
	            setAbout('OFERTA')
	            break 
	        case 'PLANO':
	           	setDescricao('')
	            setObjetivo('') 
	            setMissao('')
	            setOferta('')
	            setPlano(`${secudary}`)
	            setAbout('PLANO OPERACIONAL')
	            break       
	        default: 
	          return null;
	      }

	}

	useEffect(() => {
			console.log(id.id)
    	rows.forEach((empresa) => {
           if(empresa.id == id.id){
           		setInvestimet({
           			id: empresa.id,
								empresa: empresa.empresa,
								segment: empresa.segment,
								capital: empresa.capital,
								credito: empresa.credito,
								lucro: empresa.lucro,
								descricao: empresa.descricao,
								objetivos: empresa.objetivos,
								missao: empresa.missao,
								oferta: empresa.oferta,
								organizacao: empresa.organizacao,
								operacional:empresa.operacional,
								caraOne: empresa.caraOne,
								entrega: empresa.entrega,
								local: empresa.local,
								image: empresa.image,
								logo: empresa.logo,
								more: empresa.more
           		})
           }
            //console.log(tot)
        })

  }, []);

	return(
		<div
			style={{
					width: '100%',
					height: 'auto',

				}}
		>
			<img 
				src={new URL(`../assets/publicidades/${investiment.image}`, import.meta.url)}  
				alt="Slide"
				style={{
					width: '100%',
					height: '100vh',
				}}
			/>
			<Box
				style={{
					width: '100%',
					height: '100%',
					top: 0,
					left: 0,
					bottom: 0,
					background: 'rgba(0, 0, 0, .5)',
					position: 'absolute',
				}}

			>

				<Box>
						<Box
							sx={{
								mt: .5,
								//display: { xs: 'none', md: 'flex', sm: 'flex' }
								display: { xs: 'none', md: 'flex' },
								float: 'right',
								alignItems: 'center',
        						textAlign: 'center',
							}}
						>
							<ul style={{
									display: 'flex',
									listStyleType: 'none',
									alignItems: 'center',
          							textAlign: 'center',
								  	margin: 0,
								  	padding: 0,
								  	overflow: 'hidden'
								}}

							>
								<li style={{}}>
									<Link
										//onClick={()=> setValue(0)}
										onClick={handleBack}
										sx={{
											display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	//fontWeight: 700,
							              	fontSize: '.9rem',  
							              	color: 'white' ,						              
							            	'&:hover': {
								              	color: `${secudary}`,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
								                //textDecoration: 'underline',
							             	},
							             	'@media (max-width: 900px)': { 
					            				fontSize: '.8rem', 
					            				padding: '30px 16px', 
					            			},
							            }}
									>
										INÍCIO
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(0), changeColor('DESCRICAO')}}
										sx={{								
											display: 'block',										  	
											textAlign: 'center',
											padding: '40px 16px',
											textDecoration: 'none',							              	
						              		//fontWeight: 700,
						              		fontSize: '.9rem', 
						              		color: `${descricao=='' ? 'white' : descricao}` ,
						              		fontFamily: 'Oswald, sans-serif',						              
									            '&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									            },
								              	'@media (max-width: 900px)': { 
						            				fontSize: '.8rem', 
						            				padding: '30px 16px', 
							            		},
				            				}}
									>
										DESCRIÇÃO
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(1), changeColor('OBJETIVO')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	//fontWeight: 700,
							              	fontSize: '.9rem',  
							              	//color: `#51515C`,	
							              	color: `${objetivo=='' ? 'white' : objetivo}` ,					              
									            '&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
									             '@media (max-width: 900px)': { 
						            				fontSize: '.8rem', 
						            				padding: '30px 16px', 
							            		},
								            }}
									>
										OBJETIVOS
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(2), changeColor('MISSAO')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	//fontWeight: 700,
							              	fontSize: '.9rem', 
							              	color: `${missao=='' ? 'white' : missao}` ,
							              	//color: `#51515C`,						              
									            '&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
									             '@media (max-width: 900px)': { 
						            				fontSize: '.8rem', 
						            				padding: '30px 16px', 
							            		},
								            }}
									>
										MISSÃO
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(3), changeColor('OFERTA')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	//fontWeight: 700,
							              	fontSize: '.9rem', 
							              	color: `${oferta=='' ? 'white' : oferta}` ,
							              	//color: `#51515C`,							              
								            '&:hover': {
								              	color: `${secudary}`,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
								             },
								             '@media (max-width: 900px)': { 
					            				fontSize: '.8rem', 
					            				padding: '30px 16px', 
						            		},
				            			}}
									>
										OFERTA
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(4), changeColor('PLANO')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',							              	
							              	//fontWeight: 700,
							              	fontSize: '.9rem',  
							              	color: `${plano=='' ? 'white' : plano}` ,
							              	//color: `#51515C`,	
							              	fontFamily: 'Oswald, sans-serif',						              
								            '&:hover': {
								              	color: `${secudary}`,
								                cursor: 'pointer',
								                //color: 'white',
								                transition: 'all 400ms',
								             },
								            '@media (max-width: 900px)': { 
					            				fontSize: '.8rem', 
					            				padding: '30px 16px', 
						            		},
						            	}}
									>
										PLANO OPERACIONAL
									</Link>									
								</li>

							</ul>
						</Box>
						<Box
							sx={{
								mt: 5.1,
								display: { xs: 'flex', md: 'none', sm: 'flex' },
								float: 'right',
								alignItems: 'center',
        						textAlign: 'center',
							}}
						>
							{mobileOpen ?
							 	<Close 
									onClick={() => {handleDrawerToggle(), setShowInfo('none')}}
									sx={{
										fontSize: '1.8rem', 
										mr: 1,
										color: 'white',
									}} 
								/>
							 	:
							 	<Menu 
									onClick={() => {handleDrawerToggle(), setShowInfo('flex')}}
									sx={{
										fontSize: '1.8rem', 
										mr: 1,
										color: 'white',
									}} 
								/>

							 }
						</Box>						
				</Box>
				<Box
					sx={{
						display: { xs: `${showInfo}`, md: 'none', sm:  `${showInfo}`},
			      		flexDirection: 'column',
			      		justifyContent: 'flex-start',
			      		alignItems: 'flex-start',
			      		position: 'fixed',
			      		width: 225,
			      		bgcolor: 'rgba(0, 0, 0, .2)',
			      		right: '0px',
			      		top: 80,
			      		p: 1,
			      		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
			      		transition: '0.3s ease-in-out',
					}}
				>
					<ul 
			      	style={{      		
			      		listSyle: 'none',
			      		listStyleType: 'none',
						margin: 0,
						padding: 0,
						width: '100%',
			      	}}
			      	>
			        <li style={{}}>
			          <Link 
			            //href='#inicio'
			            onClick={handleBack}
			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	//bgcolor: `${secudary}`,
						  	color: 'white',
						  	fontWeight: 700,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	//color: `${primery}`,						              
			            	'&:hover': {
				              	//bgcolor: `${secudary}`,
				                cursor: 'pointer',
				                color: `${secudary}`,
				                transition: 'all 400ms',
				             },
				        }}
			           
			          >
			            INÍCIO
			          </Link>
			        </li>

			         <li style={{marginTop: '1px'}}>
			          <Link 
			            //href='#inicio'
			            onClick={()=> {setValue(0), changeColor('DESCRICAO')}}
			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	color: 'white',	
				          	bgcolor: `${descricao}`,					              
			            	'&:hover': {				              	
				                cursor: 'pointer',
				                color: 'white',
				                transition: 'all 400ms',
				             },
						}}
						           
			          >
			            DESCRIÇÃO
			          </Link>
			        </li>

			         <li style={{marginTop: '1px'}}>
			          <Link 
			            //href='#inicio'
			            onClick={()=> {setValue(1), changeColor('OBJETIVO')}}
			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	color: 'white',	
				          	bgcolor: `${objetivo}`,					              
				          	'&:hover': {				              	
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
				             },
					        }}
			           
			          >
			            OBJETIVOS
			          </Link>
			        </li>

			        <li style={{marginTop: '1px'}}>
			          <Link 
			            //href='#inicio'
			            onClick={()=> {setValue(2), changeColor('MISSAO')}}
			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	color: 'white',
				          	bgcolor: `${missao}`,						              
			            	'&:hover': {				              	
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 400ms',
				             },
				       	}}
			           
			          >
			            MISSÃO
			          </Link>
			        </li>

			         <li style={{marginTop: '1px'}}>
			          <Link 
			            //href='#inicio'
			            onClick={()=> {setValue(3), changeColor('OFERTA')}}

			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	fontWeight: 600,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	color: 'white',	
				          	bgcolor: `${oferta}`,					              
			            	'&:hover': {				              	
				                cursor: 'pointer',
				                color: 'white',
				                transition: 'all 400ms',
				             },
				        }}
			           
			          >
			            OFERTA
			          </Link>
			        </li>
			         <li style={{marginTop: '1px'}}>
			          <Link 
			            //href='#inicio'
			            onClick={()=> {setValue(4), changeColor('PLANO')}}
			            sx={{								
							display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '15px 11px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
				          	fontFamily: 'Oswald, sans-serif',							              	
				          	fontSize: '.8rem',  
				          	color: 'white',
				          	bgcolor: `${plano}`,						              
			            	'&:hover': {				              	
				                cursor: 'pointer',
				                color: 'white',
				                transition: 'all 400ms',
				             },
				        }}
			           
			          >
			            PLANO OPERACIONAL
			          </Link>
			        </li>
			         
			      </ul>
				</Box>
				<Box
					sx={{
						m: '7px 7px 0 7px',
						color: 'white',
					}}
				>
					<div>
						<img src={new URL(`../assets/Logos/${investiment.logo}`, import.meta.url)} width={70} height={70}/>
					</div>
					<div>
						<Typography
			                sx={{
			                    //justifyContent: 'center',
			                    //alignItems: 'center',
			                    fontWeight: 500,
			                    fontFamily: 'Oswald, sans-serif',	
			                    fontSize: '15px',                       
			                    mb: -3,
			                    '@media (max-width: 600px)': { fontSize: '10px' },
			                    '@media (max-width: 320px)': { fontSize: '8px' },
			                }}  
			            >
			               EMPRESA A SE INVESTIR
			            </Typography>
			            <Typography			                 
			                variant="p" 
			                component={'div'}
			                sx={{
			              		fontWeight: 700,
			              		//mt: 1,
					            fontSize: '70px',
					            fontFamily: 'Oswald, sans-serif',
			              		color: 'white',
			              		//ml: .5,
			              		'@media (max-width: 600px)': { 
			            			fontSize: '50px',	
			            			mt: 1,	 
		            			},
		            			'@media (max-width: 320px)': { fontSize: '35px', mt: 1.5 },
		              		}}

		            	>
		              
		                  {investiment.empresa}
		              	</Typography>
		              	<Typography
			                sx={{
			                    //justifyContent: 'center',
			                    //alignItems: 'center',
			                    //fontWeight: 'bold',
			                    fontFamily: 'Oswald, sans-serif',	
			                    fontSize: '12px',
			                    mt: 1, 
			                    p: 1,                      
			                    //fontFamily: 'Arvo, serif',
			                    
			                    '@media (max-width: 600px)': { fontSize: '8px', mt: -1, },
			                    '@media (max-width: 320px)': { fontSize: '6.5px' },
			                }}  
			            >
			               INFORMAÇÃO DO PLANO DE NEGÓCIO
			            </Typography>  

					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'start',
							p: 1,
						}}
						>
							<Box sx={{m: 1}}>
								<Typography 
									sx={{
										fontSize: '8px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 320px)': { fontSize: '7px' },
										
									}}
								>
									CAPITAL DA EMPRESA
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 600px)': { 
											fontSize: '30px', 
											//mt: -1, 
										},
										'@media (max-width: 320px)': { fontSize: '25px' },
										
									}}
								>
									{(investiment.capital).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>

							<Box sx={{m: 1}}>
								<Typography 
									sx={{
										fontSize: '8px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 320px)': { fontSize: '7px' },
										
									}}
								>
									VALOR DO INVESTIMENTO
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 600px)': { 
											fontSize: '30px', 
											//mt: -1, 
										},
										'@media (max-width: 320px)': { fontSize: '25px' },
										
									}}
								>
							
									{(investiment.credito).toLocaleString("en-US", {style:"currency", currency:"USD"})}
								</Typography>
							</Box>

							<Box sx={{m: 1}}>
								<Typography 
									sx={{
										fontSize: '8px', 
										fontWeight: 'bold', 
										fontFamily: 'Wix Madefor Display, sans-serif', 
										color: `${secudary}`,
										'@media (max-width: 320px)': { fontSize: '7px' },
										
									}}
								>
									SEU LUCRO
								</Typography>
								<Typography 
									sx={{
										fontSize: '35px', 
										fontWeight: 500, 
										fontFamily: 'Six Caps, sans-serif',
										'@media (max-width: 600px)': { 
											fontSize: '30px', 
											//mt: -1, 
										},
										'@media (max-width: 320px)': { fontSize: '25px' },
										
									}}
								>
								
									{investiment.lucro}%
								</Typography>
							</Box>
						</div>
						<Box
							style={{								
								maxWidth: '500px',
								height: '130px',
								backgroundColor: `${secudary}`,
								borderStyle: 'inset',
							  	borderWidth: 0,
							  	padding: '10px',
							  	//position: 'relative',
							}}
						>	

							<Box
								sx={{p: 1}}
							>
								<Typography
					                sx={{
					                    //justifyContent: 'center',
					                    //alignItems: 'center',
					                    fontWeight: 500,
					                    fontFamily: 'Oswald, sans-serif',	
					                    fontSize: '15px',                       
					                    mb: -3,
					                    '@media (max-width: 600px)': { fontSize: '12px' },
					                    '@media (max-width: 320px)': { fontSize: '10px' },
					                }}  
					            >
					               {about}
					            </Typography>
					            <Box 
									sx={{
										mt: 4,
										maxWidth: '500px',
										height: 'auto'

									}}
								>
									<CustomTabPanel value={value} index={0}>
							    		<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '10px' },
							                }}  
							            >
							               {investiment.descricao}
							            </Typography>
							      	</CustomTabPanel>
							      	<CustomTabPanel value={value} index={1}>
							        	<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '10px' },
							                }}  
							            >
							               {investiment.objetivos}
							            </Typography>
							      	</CustomTabPanel>							      	
							      	<CustomTabPanel value={value} index={2}>
							        	<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '10px' },
							                }}  
							            >
							               {investiment.missao}
							            </Typography>
							      	</CustomTabPanel>
							      	<CustomTabPanel value={value} index={3}>
							        	<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '10px' },
							                }}  
							            >
							               {investiment.oferta}
							            </Typography>
							      	</CustomTabPanel>
							      	<CustomTabPanel value={value} index={4}>
							        	<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '10px' },
							                }}  
							            >
							               {investiment.operacional}
							            </Typography>
							      	</CustomTabPanel>
								</Box>
							</Box>
							
				            	
						</Box>

						<Box>
							<Typography
				                sx={{
				                    //justifyContent: 'center',
				                    //alignItems: 'center',
				                    fontWeight: 500,
				                    fontFamily: 'Oswald, sans-serif',	
				                    fontSize: '15px',                       
				                    //mb: -3,
				                    '@media (max-width: 600px)': { fontSize: '12px' },
				                    '@media (max-width: 320px)': { fontSize: '10px' },
				                }}  
				            >
				               CARACTERÍSTICA ÚNICA			            </Typography>
				            <Typography
				                sx={{
				                    //justifyContent: 'center',
				                    //alignItems: 'center',
				                    fontWeight: 500,
				                    fontFamily: 'Wix Madefor Display, sans-serif',	
				                    fontSize: '14px',                       
				                   // mb: -3,
				                    '@media (max-width: 600px)': { fontSize: '10px' },
				                    '@media (max-width: 320px)': { fontSize: '8px' },
				                }}  
				            >
				               {investiment.caraOne}
				            </Typography>


						</Box>

						<Box>
							<Typography
				                sx={{
				                    //justifyContent: 'center',
				                    //alignItems: 'center',
				                    fontWeight: 500,
				                    fontFamily: 'Oswald, sans-serif',	
				                    fontSize: '15px',                       
				                    //mb: -3,
				                    '@media (max-width: 600px)': { fontSize: '12px' },
				                    '@media (max-width: 320px)': { fontSize: '10px' },
				                }}  
				            >
				               ENTREGA
				            </Typography>
				            <Typography
				                sx={{
				                    //justifyContent: 'center',
				                    //alignItems: 'center',
				                    fontWeight: 500,
				                    fontFamily: 'Wix Madefor Display, sans-serif',	
				                    fontSize: '14px',                       
				                    //mb: -3,
				                    '@media (max-width: 600px)': { fontSize: '10px' },
				                    '@media (max-width: 320px)': { fontSize: '8px' },
				                }}  
				            >
				               {investiment.entrega}
				            </Typography>


						</Box>

						<Box
							sx={{
								display: 'flex',
							}}
						>
							<LocationOn 
								sx={{ 
									fontSize: '19px', 
									color: `${secudary}`,
									'@media (max-width: 600px)': { fontSize: '15px' },
				                    '@media (max-width: 320px)': { fontSize: '10px' },  
								}} />
							<Typography
				                sx={{
				                    //justifyContent: 'center',
				                    //alignItems: 'center',
				                    fontWeight: 500,
				                    fontFamily: 'Oswald, sans-serif',	
				                    fontSize: '15px',                       
				                    //mb: -3,
				                    '@media (max-width: 600px)': { fontSize: '11px' },
				                    '@media (max-width: 320px)': { fontSize: '9px' },
				                }}  
				            >
				               {investiment.local}
				            </Typography>

						</Box>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								maxWidth: '500px',
								mt: 1,
							}}
						>
							<Button 
					        	//size="small"
					        	onClick={submit}
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
					        	INVESTIR
					        </Button>  
					        <Box
										sx={{
											display: 'flex',
											mt: 1

										}}
									>
										<img 
											src={new URL(`../assets/empreendidor/${ceo.image}`, import.meta.url)}  
											alt="Slide"
											style={{
												width: '40px',
												height: '40px',
											}}
										/>
										<div>
											<Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    fontWeight: 500,
							                    fontFamily: 'Oswald, sans-serif',	
							                    fontSize: '14px',                       
							                    ml: 1,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '8px' },
							                }}  
							            >
							               {ceo.name}
							            </Typography>
							            <Typography
							                sx={{
							                    //justifyContent: 'center',
							                    //alignItems: 'center',
							                    mt: -.5,
							                    ml: 1,
							                    fontWeight: 700,
							                    fontFamily: 'Wix Madefor Display, sans-serif',	
							                    fontSize: '14px',                       
							                    //mb: -3,
							                    '@media (max-width: 600px)': { fontSize: '10px' },
							                    '@media (max-width: 320px)': { fontSize: '8px' },
							                }}  
							            >
							              CEO
							            </Typography>
										</div>
									</Box>

						</Box>
				</Box>
			</Box>
			<Model
	        openModel = {openModel}
	        setOpenModel={setOpenModel}
	        title={title}
	    >
        	<SignInOutContainer setTitle={setTitle} tab={0} setClose={setOpenModel} setUser={setUser} opcao={'CRIAR'} setOpcao={setOpcao}/>
      	</Model>
			<Footer primery={primery} secudary={secudary} logo={investiment.logo} empresa={investiment.empresa}/>
		</div>

	)
}
export default Investirpainel;