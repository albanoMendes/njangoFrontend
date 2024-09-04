import { useState, Fragment } from 'react'; 
import {
	AppBar, 
	Divider, 
	Box, 
	Button, 
	Grid, 
	Tabs, 
	Toolbar,
	Typography, 
	Link, 
	Drawer, 
	IconButton, 
	Paper,
	Container, 
	Tab,
	ListItemText,
	List,
	ListItem,
	MenuItem,
	TextField,
} from '@mui/material';

import {
	Facebook, 
	Close, 
	MoreVert,
	Twitter, 
	LocationOn, 
	Instagram, 
	Menu, 
	LinkedIn, 
	LocalPhone, 
	Watch, 
	WhatsApp, 
	Telegram,
	Mail,
	MailOutline,
	X,
	Dashboard,
	
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import Model from '../components/Model';
import SignInOutContainer from '../components/login/SignInOutContainer';
import logo from '../assets/LogoIn13.png';
import Publicidades from '../components/Publicidades.jsx';
import Investmenthome from '../components/Investmenthome.jsx';
import Investmentative from '../components/Investmentative.jsx';
import Bloghome from '../components/blog/Bloghome';
import Moreblogs from '../components/blog/Moreblogs';
import Readblog from '../components/blog/Readblog';
import AboutUs from '../components/AboutUs';
import Moreinfo from '../components/aboutus/Moreinfo';
import ContactUs from '../components/ContactUs';
import Contactpainel from '../components/contactus/Contactpainel';
import classes from "./Homelayoult.module.css";
import Moreactives from '../components/investactives/Moreactives';
import Investmentpainel from '../components/investments/Investmentpainel';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const blogs = [
	{
		id: 1,
		title: 'Software De Gerenciamento De Produção',
		subtitle: '',
		tipo: 'TECNOLÓGIA',
		autor: '(UP) UNIVESIADE PIAJET',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: 'A agricultura 4.0 é um conjunto de inovações voltadas para tecnologia avançada, a qual visa aprimorar, otimizar e rentabilizar a produtividade no campo. Com a demanda crescente de maior produtividade, mantendo a mesma área de plantio, a tecnologia é imprescindível para este processo. A partir do desenvolvimento de softwares e equipamentos que fazem a gestão do sistema de produção do produto e que consequentemente trará melhorias no desempenho das máquinas e diminuirá as chances de erro no processo. O Brasil lidera o ranking de produtividade agropecuária no mundo, porém, ainda é um país que não utiliza a tecnologia a seu favor, principalmente para ter total controle de sua safra para obter resultados positivos na redução de custo e aumento de lucratividade. No século XX iniciou-se a evolução da tecnologia na Agricultura, e no decorrer dos anos ela foi sendo aprimorada e estima-se que até 2022 a Agricultura 5.0 já estará disponível e com muito mais tecnologia. Atualmente o agricultor já tem ao seu dispor equipamentos de alta performance e tecnologia, que os auxiliam a produzir mais e melhor com menos tempo e recursos, porém para muitos agricultores pequenos, o acesso a esse tipo de equipamento e tecnologia ainda é um sonho um pouco distante. Apesar do Brasil ser um país com grande potencial de desenvolvimento agrícola, os custos de implementação para alguns tipos de agronegócio e mesmo a instabilidade do mercado causam incertezas nos empresários para investimentos no mesmo. Porém, com o aumento na procura e consumo de produtos produzidos em campo, essa realidade provavelmente irá melhorar no decorrer dos anos.',
		image: 'CAMPO_DIGITALIZADO.jpg',
		more: 'saber mais'
	},
	{
		id: 2,
		title: '5 Tipos De Investimentos Que Todo Empreendedor Deve Conhecer',
		subtitle: '',
		tipo: 'ECONÓNIA',
		autor: '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
		data: 'Apr 21, 2023 at 12:05 pm',		
		conteudo: `O que é investimento?
		O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
		Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
		Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.

		Afinal, a principal característica do investimento é fazer o dinheiro investido render.
		Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
		Investimentos de renda fixa
		São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
		Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.

		Investimentos de renda variável
		Já os investimentos de renda variável não possuem uma rentabilidade previsível. A aplicação sofre interferências diversas, como o momento do mercado, a saúde da empresa investida e até mesmo fatores como o internacional – guerras, catástrofes, pandemias…
		Portanto, oferece muito risco e a participação de um consultor especializado em mercado é mais do que necessária aqui.

		`,		
		image: 'fundos_investimentos.jpg',
		more: 'saber mais'
	}
];

const idiomas = [
  {
    id: 1, 
    value: 'Português',
    label: 'PT',
    descricao: 'BITCOIN',
    logo: 'portugal.png',
    rede: 1,
  },
  {
    id: 2,
    value: 'English',
    label: 'AG',
    descricao: 'ETHEREUM',
    logo: 'usa.png',
    rede: 2,
  },
  {
    id: 3,
    value: 'French',
    label: 'FH',
    descricao: 'CARDANO',
    logo: 'Franch.png',
    rede: 3,
  },
];

function Homepainel(props) {
	
	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, read } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showInfo, setShowInfo] = useState('none');
	const [mobileOpenInf, setMobileOpenInf] = useState(false);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [value, setValue] = useState(0);
	const [idioma, setIdioma] = useState('');

	const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

	const [openModel, setOpenModel] = useState(false);
	const [title, setTitle] = useState('');
	const [opcao, setOpcao] = useState('');

	const [about, setAbout] = useState('INÍCIO');
	//const [showInfo, setShowInfo] = useState('none');
	const [inicio, setInicio] = useState(`${secudary}`);
	const [investment, setInvestment] = useState('white');
	const [inveactive, setInveactive] = useState('white');
	const [blog, setBlog] = useState('white');
	const [sobre, setSobre] = useState('white');
	const [contact, setContact] = useState('white');

		const handleChangeLe = (event) => {
    //setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	const handleOpenUserMenu = (event) => {
	    setAnchorElUser(event.currentTarget);
	};

	const handleOpenInfo = () => {

			if(mobileOpenInf){
				setShowInfo('none');
	    	setMobileOpenInf(false);
			} else {
				setShowInfo('flex');
	    	setMobileOpenInf(true);
			}
	   
	};


	const submit = ()=>{

		if(logado){

		} else {
			setOpenModel(true);
			setTitle('')
		}

	};


	const handleCloseUserMenu = () => {
	  setAnchorElUser(null);
	};

	const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	}

  const changeColor = (cor) =>{
	switch(cor){
        case 'INICIO': 
            setInicio(`${secudary}`)
            setInvestment('white') 
            setInveactive('white')
            setBlog('white')
            setSobre('white')
            setContact('white')
            setAbout('INÍCIO')
            break
        case 'INVESTIMENT':           
            setInicio('white')
            setInvestment(`${secudary}`) 
            setInveactive('white')
            setBlog('white')
            setSobre('white')
            setContact('white')
            setAbout('INVESTIMENTOS')
            break
        case 'INVESTACT':
           	setInicio('white')
            setInvestment('white') 
            setInveactive(`${secudary}`)
            setBlog('white')
            setSobre('white')
            setContact('white')
            setAbout('INVESTIMENTOS ATIVOS')
            break  
        case 'BLOG':
           	setInicio('white')
            setInvestment('white') 
            setInveactive('white')
            setBlog(`${secudary}`)
            setSobre('white')
            setContact('white')
            setAbout('BLOG')
            break 
        case 'SOBRE':
           	setInicio('white')
            setInvestment('white') 
            setInveactive('white')
            setBlog('white')
            setSobre(`${secudary}`)
            setContact('white')
            setAbout('SOBRE NÓS')
            break   
        case 'CONTACT':
           	setInicio('white')
            setInvestment('white') 
            setInveactive('white')
            setBlog('white')
            setSobre('white')
            setContact(`${secudary}`)
            setAbout('CONTATE-NOS')
            break           
        default: 
          return null;
      }
	}

	const drawer = (
	    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start',   }}>
	      
	      <ul 
	      	style={{      		
	      		listSyle: 'none',
						margin: 0,
						padding: 0,
						width: '100%',
	      	}}
	      	>
	        <li style={{}}>
	          <Link 
	            //href='#inicio'
	            onClick={()=> {setValue(0), changeColor('INICIO')}}
	            sx={{								
								display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	bgcolor: `${inicio == 'white' ? '': inicio}`,
						  	//color: 'white',
						  	fontWeight: 700,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,						              
	            	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
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
	            onClick={()=> {setValue(1), changeColor('INVESTIMENT')}}
	            sx={{								
								display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,	
		          	bgcolor: `${investment == 'white' ? '': investment}`,					              
	            	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
		                transition: 'all 400ms',
		             },
				        }}
				           
	          >
	            INVESTIMENTOS
	          </Link>
	        </li>

	         <li style={{marginTop: '1px'}}>
	          <Link 
	            //href='#inicio'
	            onClick={()=> {setValue(2), changeColor('INVESTACT')}}
	            sx={{								
								display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,
		          	bgcolor: `${inveactive == 'white' ? '': inveactive}`,						              
		          	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
		                transition: 'all 400ms',
		             },
			        }}
	           
	          >
	            INVESTIMENTOS ATIVOS
	          </Link>
	        </li>

	        <li style={{marginTop: '1px'}}>
	          <Link 
	            //href='#inicio'
	            onClick={()=> {setValue(3), changeColor('BLOG')}}
	            sx={{								
								display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	fontWeight: 700,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,
		          	bgcolor: `${blog == 'white' ? '': blog}`,						              
	            	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
		                transition: 'all 400ms',
		             },
		       		}}
	           
	          >
	            BLOG
	          </Link>
	        </li>

	         <li style={{marginTop: '1px'}}>
	          <Link 
	            //href='#inicio'
	            onClick={()=> {setValue(4), changeColor('SOBRE')}}
	            sx={{								
								display: 'block',										  	
						  	textAlign: 'start',										  	
						  	padding: '20px 16px',
						  	textDecoration: 'none',
						  	fontWeight: 600,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,
		          	bgcolor: `${sobre == 'white' ? '': sobre}`,						              
	            	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
		                transition: 'all 400ms',
		             },
		        	}}
	           
	          >
	            SOBRE NÓS
	          </Link>
	        </li>
	         <li style={{marginTop: '1px'}}>
	          <Link 
	            //href='#inicio'
	            onClick={()=> {setValue(5), changeColor('CONTACT')}}
	            sx={{								
					display: 'block',										  	
				  	textAlign: 'start',										  	
				  	padding: '20px 16px',
				  	textDecoration: 'none',
				  	fontWeight: 700,		              	
		          	fontFamily: 'Wix Madefor Display, sans-serif',							              	
		          	fontSize: '.8rem',  
		          	color: `${primery}`,
		          	bgcolor: `${contact == 'white' ? '': contact}`,						              
	            	'&:hover': {
		              	bgcolor: `${secudary}`,
		                cursor: 'pointer',
		                color: 'white',
		                transition: 'all 400ms',
		             },
		        }}
	           
	          >
	            CONTATE-NOS
	          </Link>
	        </li>



	         
	      </ul>
	    </Box>
	  )

	return(
		<>
			<Box
				sx={{
					display: { xs: 'none', md: `${about == 'INÍCIO' ? 'flex' : 'none' }`, },
					justifyContent: 'space-evenly',
					alignItems: 'center',
          			textAlign: 'center',	
					p: 5,


				}}
			>
				
				<Box
					sx={{
						display: 'flex',	
						//mt: 3,
						//ml: .5,

					}}
				>
					<Typography
						 component={'div'}
					>
						<img src={logo} width={65} height={45}/>
					</Typography>

					<Box
		              	sx={{
		              		display: 'flex', 
		              		flexDirection: 'column',
		              		justifyContent: 'start',
		              		alignItems: 'start',
		        			textAlign: 'start',

		              	}}
              		>
	                	
            		<Typography			                 
	                  variant="p" 
	                  component={'div'}
	                  sx={{
	                		fontWeight: 800,
	                		mt: -.05,
			            	fontSize: '1.5rem',
			            	fontFamily: 'Wix Madefor Display, sans-serif',
	                		//color: `${primery}`,
	                		textShadow: `2px 2px 4px #ddd`,
	                		ml: -1,
	                		'@media (max-width: 982px)': { 
	            			fontSize: '1.6rem',	
	            			//mt: -2,	 
	            		},
	                  }}

                >
                  Njango 
                  
              	</Typography>
              	<Typography			                 
                  variant="p" 
                  component={'div'}
                  sx={{
                		//fontWeight: 700,
                		mt: -.5,
		            	fontSize: '1rem',
		           		fontFamily: 'Wix Madefor Display, sans-serif',
                		//color: `${primery}`,
                		ml: -1,
                		'@media (max-width: 982px)': { 
		            			fontSize: '1.1rem',	
		            			mt: -.5,	 
		            		},
                  }}

                >
                  
                  Investment
              	</Typography>

            		

		     </Box>
					
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
            				textAlign: 'center',							
							borderRadius: '50%',
							border: '1px solid #ddd',
							width: 48,
							height: 48,
							'@media (max-width: 982px)': { 
		            			width: 38,
								height: 38,
		          			},
						}}
					>
						<LocalPhone 
							sx={{
								fontSize: '1.8rem', 
								color: `${secudary}`,
								'@media (max-width: 982px)': { 
			            			fontSize: '1.5rem', 
									
			            		},

							}} 
						/>
					</Box>
					<Box
						sx={{
							ml: 3,
							'@media (max-width: 982px)': { 
		            			///fontSize: '1.1rem',	
		            			ml: 1,	 
		            		},

						}}
					>
						<Typography
							sx={{
								fontSize: '.9rem',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 982px)': { 
			            			fontSize: '.8rem', 
									
			            		},
								'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',
					                //color: 'white',
					                transition: 'all 400ms',
					             },
							}}
						>
							+244 946 463 288
						</Typography>						
						<Typography
							sx={{
								fontSize: '.9rem',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 982px)': { 
			            			fontSize: '.8rem', 
									
			            		},
								'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',
					                //color: 'white',
					                transition: 'all 400ms',
					             },
							}}
						>
							+244 926 333 223
						</Typography>
					</Box>
					
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
            	textAlign: 'center',							
							borderRadius: '50%',
							border: '1px solid #ddd',
							width: 48,
							height: 48,
							'@media (max-width: 982px)': { 
		            	width: 38,
									height: 38,
		           },
						}}
					>
						<LocationOn sx={{fontSize: '1.8rem', color: `${secudary}`,}} />
					</Box>
					<Box
						sx={{
							ml: 3,
							'@media (max-width: 982px)': { 
		            			///fontSize: '1.1rem',	
		            			ml: 1,	 
		            		},

						}}
					>
						<Typography
							sx={{
								fontSize: '.9rem',
								fontFamily: 'Wix Madefor Display, sans-serif',
								'@media (max-width: 982px)': { 
	            			fontSize: '.8rem',							
	            		},
								'&:hover': {
		              	color: `${secudary}`,
		                cursor: 'pointer',
		                //color: 'white',
		                transition: 'all 400ms',
		             },
							}}
						>
							Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
						</Typography>						
						
					</Box>
					
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
        				textAlign: 'center',

					}}
				>

					<Button
						onClick={submit}
						sx={{
							borderRadius: 0,
							border: `2px solid ${secudary}`,
							backgroudColor: 'white',
							//fontWeight: 'bold',
							fontSize: '.9rem',
							fontFamily: 'Wix Madefor Display, sans-serif',
							color: `${secudary}`,
							p:'10px 35px 10px 35px',
							'@media (max-width: 982px)': { 
		            			fontSize: '.7rem', 
		            			p:'10px 30px 10px 30px',
								
		            		},
							'&:hover': {
				              	bgcolor: `${secudary}`,
				                cursor: 'pointer',
				                color: 'white',
				                transition: 'all 400ms',
				             },
							
						}}
					>
						{status}
					</Button>
					
				</Box>

			</Box>

			<AppBar 
				elevation={0} 
				position="sticky" 
				sx={{ 
					bgcolor: `rgba(0, 0, 0, .5)`,					
					maxHeight: 80,				
					'@media (max-width: 982px)': { 
	        			bgcolor: 'rgba(0, 0, 0, .5)',
					
	        	},
				}}
				>
				<Container maxWidth="x2">
						<Box
							sx={{
								mt: -1.5,
								//display: { xs: 'none', md: 'flex', sm: 'flex' }
								display: { xs: 'none', md: `${about == 'INÍCIO' ? 'flex' : 'none' }` },
								justifyContent: 'space-between',
								alignItems: 'center',
        				textAlign: 'center',
							}}
						>
							<ul 
								style={{
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
										onClick={()=> {setValue(0), changeColor('INICIO')}}
										sx={{	

											display: 'block',										  	
									  	textAlign: 'center',										  	
									  	padding: '40px 16px',
									  	textDecoration: 'none',
									  	fontFamily: 'Oswald, sans-serif',							              	
			              	fontWeight: 500,
			              	fontSize: '.9rem',  
			              	color: `${inicio=='' ? 'white' : inicio}` ,						              
			            	'&:hover': {
			              	//color: `${secudary}`,
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
										INÍCIO
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(1), changeColor('INVESTIMENT')}}
										sx={{								
											display: 'block',										  	
											textAlign: 'center',
											padding: '40px 16px',
											textDecoration: 'none',							              	
		              		fontWeight: 500,
		              		fontSize: '.9rem', 
		              		color: `${investment=='' ? 'white' : investment}`,
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
										INVESTIMENTOS
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(2), changeColor('INVESTACT')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	fontWeight: 500,
							              	fontSize: '.9rem',  
							              	//color: `#51515C`,	
							              	color: `${inveactive=='' ? 'white' : inveactive}`,					              
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
										INVESTIMENTOS ATIVOS
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(3), changeColor('BLOG')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	fontWeight: 500,
							              	fontSize: '.9rem', 
							              	color: `${blog=='' ? 'white' : blog}`,
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
										BLOG
									</Link>									
								</li>
								<li style={{}}>
									<Link
										onClick={()=> {setValue(4), changeColor('SOBRE')}}
										sx={{								
											display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
							              	fontWeight: 500,
							              	fontSize: '.9rem', 
							              	color: `${sobre=='' ? 'white' : sobre}`,
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
										SOBRE NÓS
									</Link>									
								</li>
								<li style={{}}>
								<Link
									onClick={()=> {setValue(5), changeColor('CONTACT')}}
									sx={{								
										display: 'block',										  	
									  	textAlign: 'center',
									  	padding: '40px 16px',
									  	textDecoration: 'none',							              	
						              	fontWeight: 500,
						              	fontSize: '.9rem',  
						              	color: `${contact=='' ? 'white' : contact}`,
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
									CONTATE-NOS
								</Link>									
							</li>
							</ul>

							<Box
								sx={{display: 'flex'}}
							>
									<TextField
                    //fullWidth                   
                    size="small"
                    sx={{mr: 1}}
                    id="component-disabled"
                    defaultValue="PT"
                    select
                    //label="Moedas"    
                    onChange={(e) => { setIdioma(e.target.value); } }
                  >
                    {idiomas.map((option) => (
                          <MenuItem              
                              key={option.id} value={option.label}                             
                          >   
                              <Box
                                  sx={{
                                      display: 'flex',
                                      p: 0,
                                  }}
                              >
                                <img                  
                                src={new URL(`../assets/${option.logo}`, import.meta.url)}
                                width={18}
                                height={18}
                                style={{ justifyItems: 'center' }}
                              />                     
                              <Typography 
                                  sx={{ 
                                    //fontSize: '8px',                    
                                    fontWeight: 200,
                                    ml: .5,
					          								fontSize: '.7rem',
																		fontFamily: 'Oswald, sans-serif',	
                                    alignItems: 'center',                                  
                                }}>
                                  
                                  {option.value}
                                </Typography>  
                                
                              </Box>       
                            
                          </MenuItem>
                        ))}
                  </TextField> 
                  <Dashboard  
                  	sx={{ 
                  		color: `${secudary}`, 
                  		fontSize: 30, 
                  		mt: .5,
                  		'&:hover': {
					              	//color: `${secudary}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             	},
                  	}}
                  />
							</Box>
						</Box>

						<Box
							sx={{
								//mt: ,
								//display: { xs: 'none', md: 'flex', sm: 'flex' }
								display: { xs: 'none', md: `${about == 'INÍCIO' ? 'none' : 'flex' }` },
								justifyContent: 'space-between',
								alignItems: 'center',
        						textAlign: 'center',
							}}
						>
							
							<Box
								sx={{
									display: 'flex',	
									//mt: 3,
									//ml: .5,

								}}
							>
								<Typography
									 component={'div'}
								>
									<img src={logo} width={55} height={35}/>
								</Typography>

								<Box
					              	sx={{
					              		display: 'flex', 
					              		flexDirection: 'column',
					              		justifyContent: 'start',
					              		alignItems: 'start',
					        				textAlign: 'start',

					              	}}
					              >
				                	
	            		<Typography			                 
		                  variant="p" 
		                  component={'div'}
		                  sx={{
		                		fontWeight: 800,
		                		mt: -.05,
				            		fontSize: '1.2rem',
				            		fontFamily: 'Wix Madefor Display, sans-serif',
		                		color: `${primery}`,
		                		textShadow: `2px 2px 4px #ddd`,
		                		ml: -1,
		                		'@media (max-width: 982px)': { 
				            			fontSize: '1rem',	
				            			//mt: -2,	 
				            		},
		                  }}

		                >
		                  Njango 
		                  
		              	</Typography>
		              	<Typography			                 
		                  variant="p" 
		                  component={'div'}
		                  sx={{
		                		//fontWeight: 700,
		                		mt: -.5,
				            		fontSize: '.8rem',
				           			fontFamily: 'Wix Madefor Display, sans-serif',
		                		color: `${primery}`,
		                		ml: -1,
		                		'@media (max-width: 982px)': { 
				            			fontSize: '1.1rem',	
				            			mt: -.5,	 
				            		},
		                  }}

		                >
		                  
		                  Investment
		              	</Typography>
						     </Box>
									
								</Box>

								<Box
								sx={{
									mt: -1.5,
									display: 'flex',

									//display: { xs: 'none', md: `${about == 'INÍCIO' ? 'flex' : 'none' }` },
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
											onClick={()=> {setValue(0), changeColor('INICIO')}}
											sx={{	

												display: 'block',										  	
										  	textAlign: 'center',										  	
										  	padding: '40px 10px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
				              	fontWeight: 500,
				              	fontSize: '.9rem',  
				              	color: `${inicio=='' ? primery : inicio}` ,						              
					            	'&:hover': {
					              	//color: `${secudary}`,
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
											INÍCIO
										</Link>									
									</li>
									<li style={{}}>
										<Link
											onClick={()=> {setValue(1), changeColor('INVESTIMENT')}}
											sx={{								
												display: 'block',										  	
												textAlign: 'center',
												padding: '40px 16px',
												textDecoration: 'none',							              	
			              		fontWeight: 500,
			              		fontSize: '.9rem', 
			              		color: `${investment=='' ? primery : investment}`,
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
											INVESTIMENTOS
										</Link>									
									</li>
									<li style={{}}>
										<Link
											onClick={()=> {setValue(2), changeColor('INVESTACT')}}
											sx={{								
												display: 'block',										  	
											  	textAlign: 'center',
											  	padding: '40px 16px',
											  	textDecoration: 'none',
											  	fontFamily: 'Oswald, sans-serif',							              	
					              	fontWeight: 500,
					              	fontSize: '.9rem',  
					              	//color: `#51515C`,	
					              	color: `${inveactive=='' ? primery : inveactive}`,					              
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
											INVESTIMENTOS ATIVOS
										</Link>									
									</li>
									<li style={{}}>
										<Link
											onClick={()=> {setValue(3), changeColor('BLOG')}}
											sx={{								
												display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
				              	fontWeight: 500,
				              	fontSize: '.9rem', 
				              	color: `${blog=='' ? primery : blog}`,
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
											BLOG
										</Link>									
									</li>
									<li style={{}}>
										<Link
											onClick={()=> {setValue(4), changeColor('SOBRE')}}
											sx={{								
												display: 'block',										  	
										  	textAlign: 'center',
										  	padding: '40px 16px',
										  	textDecoration: 'none',
										  	fontFamily: 'Oswald, sans-serif',							              	
				              	fontWeight: 500,
				              	fontSize: '.9rem', 
				              	color: `${sobre=='' ? primery : sobre}`,
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
											SOBRE NÓS
										</Link>									
									</li>
									<li style={{}}>
									<Link
										onClick={()=> {setValue(5), changeColor('CONTACT')}}
										sx={{								
											display: 'block',										  	
									  	textAlign: 'center',
									  	padding: '40px 16px',
									  	textDecoration: 'none',							              	
			              	fontWeight: 500,
			              	fontSize: '.9rem',  
			              	color: `${contact=='' ? primery : contact}`,
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
										CONTATE-NOS
									</Link>									
								</li>
								</ul>
							</Box>



							</Box>

							<Box
								sx={{
									display: { xs: 'flex', md: 'none', sm: 'flex' },
									justifyContent: 'space-between',
									alignItems: 'center',
	      					textAlign: 'center',
	      					//p: 1,
	      					height: 80,
									//display: { xs: 'none', md: 'flex' },
								}}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
	            						textAlign: 'center',
									}}
								>
								 {mobileOpen ?
								 	<Close 
										onClick={handleDrawerToggle}
										sx={{
											fontSize: '2rem', 
											mr: 1,
											color: `${primery}`,
										}} 
									/>
								 	:
								 	<Menu 
										onClick={handleDrawerToggle}
										sx={{
											fontSize: '2rem', 
											mr: 1,
											color: `${primery}`,
										}} 
									/>

								 }
									
									<Box
										sx={{
											display: 'flex',	
											//mt: 3,
											//ml: .5,

										}}
									>
										<Typography
											 component={'div'}
										>
											<img src={logo} width={50} height={40}/>
										</Typography>

										<Box
		                	sx={{
		                		display: 'flex', 
		                		flexDirection: 'column',
		                		justifyContent: 'start',
		                		alignItems: 'start',
	            					textAlign: 'start',

		                	}}
		                >
				                	
	                		<Typography			                 
			                  variant="p" 
			                  component={'div'}
			                  sx={{
			                  		fontWeight: 800,
			                  		mt: -.05,
						            		fontSize: '1.4rem',
						            		fontFamily: 'Wix Madefor Display, sans-serif',
			                  		color: `${primery}`,
			                  		textShadow: `2px 2px 4px #ddd`,
			                  		ml: -1,
			                  		'@media (max-width: 500px)': { 
				            			//fontSize: '2.5rem',	
				            			//mt: -2,	 
				            		},
			                  }}

			                >
			                  Njango 
			                  
			              	</Typography>
			              	<Typography			                 
			                  variant="p" 
			                  component={'div'}
			                  sx={{
		                  		//fontWeight: 700,
		                  		mt: -1,
					            		fontSize: '.9rem',
					            		fontFamily: 'Wix Madefor Display, sans-serif',
		                  		color: `${primery}`,
		                  		ml: -1,
		                  		'@media (max-width: 500px)': { 
			            			//fontSize: '2.5rem',	
			            			//mt: -2,	 
			            		},
			                  }}

			                >
			                  
			                  Investment
			              	</Typography>
								     </Box>
										
									</Box>
								</Box>

								<Box
									sx={{display: 'flex'}}
								>
									
									<TextField
                    //fullWidth                   
                    size="small"
                    sx={{mr: 1}}
                    id="component-disabled"
                    defaultValue="PT"
                    select
                    //label="Moedas"    
                    onChange={(e) => { setIdioma(e.target.value); } }
                  >
                    {idiomas.map((option) => (
                          <MenuItem              
                              key={option.id} value={option.label}                            
                          >   
                             
                              <img                  
                                src={new URL(`../assets/${option.logo}`, import.meta.url)}
                                width={18}
                                height={18}
                                style={{ justifyItems: 'center' }}
                              />                     
                                
                                 
                            
                          </MenuItem>
                        ))}
                  </TextField> 
                  <Dashboard  
                  	sx={{ 
                  		color: `${secudary}`, 
                  		fontSize: 25, 
                  		mt: .8,
                  		'&:hover': {
					              	//color: `${secudary}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             	},
                  	}}
                  />
                  <MoreVert 
                  	onClick={handleOpenInfo} 
                  	sx={{
                  		fontSize: 25, 
                  		color: `${primery}`, 
                  		mt: .8,
                  		'&:hover': {
					              	color: `${secudary}`,
					                cursor: 'pointer',					                
					                transition: 'all 400ms',
					             	},
                  	}} 
                  />
								</Box>

							</Box>
					</Container>
					<Box
						sx={{
							display: { xs: `${showInfo}`, md: 'none', sm:  `${showInfo}`},
				      		flexDirection: 'column',
				      		justifyContent: 'flex-start',
				      		alignItems: 'flex-start',
				      		position: 'fixed',
				      		width: 300,
				      		bgcolor: 'rgba(0, 0, 0, .5)',
				      		right: '0px',
				      		top: 80,
				      		p: 2,
				      		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
				      		transition: '0.3s ease-in-out',

						}}
					>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
	            				textAlign: 'center',							
								borderRadius: '50%',
								border: '1px solid #ddd',
								width: 48,
								height: 48,
								'@media (max-width: 982px)': { 
			            			width: 38,
									height: 38,
			            		},
							}}
						>
							<LocalPhone 
								sx={{
									fontSize: '1.8rem', 
									color: `${secudary}`,
									'@media (max-width: 982px)': { 
				            			fontSize: '1.5rem', 
										
				            		},

								}} 
							/>
						</Box>
						<Box
							sx={{
								ml: 3,
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									color: `${primery}`,
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									'&:hover': {
						              	color: `${secudary}`,
						                cursor: 'pointer',
						                //color: 'white',
						                transition: 'all 400ms',
						             },
								}}
							>
								+244 946 463 288
							</Typography>						
							<Typography
								sx={{
									fontSize: '1rem',
									color: `${primery}`,
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									'&:hover': {
						              	color: `${secudary}`,
						                cursor: 'pointer',
						                //color: 'white',
						                transition: 'all 400ms',
						             },
								}}
							>
								+244 926 333 223
							</Typography>
						</Box>
						
					</Box>

					<Box
						sx={{
							mt: 3.5,
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>

						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
	            				textAlign: 'center',							
								borderRadius: '50%',
								border: '1px solid #ddd',
								width: 48,
								height: 48,
								'@media (max-width: 982px)': { 
			            			width: 38,
									height: 38,
			            		},
							}}
						>
							<LocationOn sx={{fontSize: '1.8rem', color: `${secudary}`,}} />
						</Box>
						<Box
							sx={{
								ml: 3,
								'@media (max-width: 982px)': { 
			            			///fontSize: '1.1rem',	
			            			ml: 1,	 
			            		},

							}}
						>
							<Typography
								sx={{
									fontSize: '1rem',
									color: `${primery}`,
									fontFamily: 'Wix Madefor Display, sans-serif',
									'@media (max-width: 982px)': { 
				            			fontSize: '.7rem', 
										
				            		},
									'&:hover': {
						              	color: `${secudary}`,
						                cursor: 'pointer',
						                //color: 'white',
						                transition: 'all 400ms',
						             },
								}}
							>
								Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
							</Typography>						
							
						</Box>
						
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
			        		textAlign: 'center',
			        		mt: 3.5,
						}}
					>

						<Button
							onClick={submit}
							sx={{
								borderRadius: 0,
								border: `2px solid ${secudary}`,
								backgroudColor: 'white',
								//fontWeight: 'bold',

								fontSize: '.9rem',
								fontFamily: 'Wix Madefor Display, sans-serif',
								color: `${secudary}`,
								p:'10px 35px 10px 35px',
								'@media (max-width: 982px)': { 
				          			fontSize: '.8rem', 
				          			p:'10px 50px 10px 50px',
									
				          		},
								'&:hover': {
					              	bgcolor: `${secudary}`,
					                cursor: 'pointer',
					                color: 'white',
					                transition: 'all 400ms',
					             },
								
							}}
						>
							{status}
						</Button>
						
					</Box>
				</Box>
			</AppBar>
			<Box 
					sx={{}}
				>
				<CustomTabPanel value={value} index={0}>
		        	<Publicidades  primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} />
		        	<Box
				     		sx={{
									display: 'flex',
									justifyContent: 'center',
									justifyItems: 'center',
									//flexDirection: 'column',
									alignItems: 'center',
									
									//color: `${primery}`,
									//m: 4 AboutUs

								}}
				     >
		        		<AboutUs  primery={primery} secudary={secudary}/>
		        	</Box>
		        	<Investmenthome primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} setUser={setUser} />
		        	<Box>
		        		<Investmentative primery={primery} secudary={secudary} />
		        	</Box>
				     <Box
				     		sx={{
									display: 'flex',
									justifyContent: 'center',
									flexDirection: 'column',
									alignItems: 'center',
									//color: `${primery}`,
									//m: 4 AboutUs

								}}
				     >
		        		<Bloghome  primery={primery} secudary={secudary}/>
		        	</Box>	
		        	<Box

		        	>
		        		<Paper
			        		sx={{
			        			m:'5px 2px',
			        			borderRadius: 0, 
			        			//background: '#D3D3DB',
			        		}}
			        	>
			        			<ContactUs primery={primery} secudary={secudary}/>
			        	</Paper>
			        	<Box
			        		sx={{
			        			display: { xs: 'none', md: 'flex', sm:  'flex'},
			        			justifyContent: 'center',
			        			alignItems: 'center',
	      						textAlign: 'center',
			        			p: 1,

			        		}}
			        	>
			        		<Divider 
			        			orientation="vertical" 
			        			variant="middle" 
			        			flexItem 
			        			sx={{
			    						fontWeight: 700,  
			    						mt: 7,
			    						mr: 2,
			    						fontSize: 15,
                			//width: 120,
                			height: 80,
                			border: `1px solid #BDC1C9`,
                			'@media (max-width: 982px)': {
                					mt: 7,
			    								mr: 0,
                			},

            				}}

			        		/>
			        		<Box
			        			sx={{
			        				display: 'flex',
			        				justifyContent: 'center',
											flexDirection: 'column',
											alignItems: 'center',
											p: 6,
											'@media (max-width: 982px)': {
												 p: 0,
											},

			        			}}
			        		>
			        			<Box
												sx={{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
						            	textAlign: 'center',							
													//borderRadius: '50%',
													border: 0,
													width: 48,
													height: 48,
													'@media (max-width: 982px)': { 
								            	width: 38,
															height: 38,
								          },
												}}
											>
												<LocalPhone 
													sx={{
														fontSize: '1.8rem', 
														color: `${secudary}`,
														'@media (max-width: 982px)': { 
								            			fontSize: '1.5rem', 
								            			ml: 2.5,
															},

													}} 
												/>
											</Box>
											<Box
												sx={{
													ml: 3,

													'@media (max-width: 982px)': {
															width: '100%', 
						            			///fontSize: '1.1rem',	
						            			ml: 4,	 
						            		},

												}}
											>
												<Typography
													sx={{
														fontSize: '.8rem',
														fontFamily: 'Wix Madefor Display, sans-serif',
														'@media (max-width: 900px)': { 
							            			fontSize: '.7rem', 
							            		},
														'&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
													}}
												>
													+244 946 463 288
												</Typography>						
												<Typography
													sx={{
														fontSize: '.8rem',
														//color: '#D3D3DB',
														fontFamily: 'Wix Madefor Display, sans-serif',
														'@media (max-width: 982px)': { 
									            			fontSize: '.7rem', 
															
									            		},
														'&:hover': {
											              	color: `${secudary}`,
											                cursor: 'pointer',
											                //color: 'white',
											                transition: 'all 400ms',
											             },
													}}
												>
													+244 926 333 223
												</Typography>
											</Box>
											
										</Box>
										<Divider 
										 		orientation="vertical" 
										 		variant="middle" 
										 		flexItem 
										 		sx={{
					    						fontWeight: 700,  
					    						mt: 7,
					    						ml: 5,
					    						fontSize: 15,
		                			//width: 120,
		                			height: 80,
		                			border: `1px solid #BDC1C9`
		            				}}	
										 	/>
										 		<Box
					        			sx={{
					        				display: 'flex',
					        				justifyContent: 'center',
													flexDirection: 'column',
													alignItems: 'center',
													p: 6,
													ml: 3,
													'@media (max-width: 982px)': { 
								            p: 0,
														ml: 2,
								          },

					        			}}
					        		>
					        			
					        			<Box
													sx={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
							            	textAlign: 'center',							
														//borderRadius: '50%',
														border: 0,
														width: 48,
														height: 48,
														'@media (max-width: 982px)': { 
									            	width: 38,
																height: 38,
									          },
													}}
												>
													<Mail 
														sx={{
															fontSize: '1.8rem', 
															color: `${secudary}`,
															'@media (max-width: 900px)': { 
									            			fontSize: '1.5rem', 
															
									            		},

														}} 
													/>
												</Box>
												<Box
													sx={{
														mt: .5,
														//ml: 3,
														'@media (max-width: 982px)': { 
							            			///fontSize: '1.1rem',	
							            			//ml: 1,	 
							            		},

													}}
												>
													<Typography

														sx={{
															fontSize: '.8rem',
															fontFamily: 'Wix Madefor Display, sans-serif',
															'@media (max-width: 982px)': { 
								            			fontSize: '.8rem', 
								            		},
															'&:hover': {
										              	color: `${secudary}`,
										                cursor: 'pointer',
										                //color: 'white',
										                transition: 'all 400ms',
										             },
														}}
													>
														njangoinvestiment@gmail.com
													</Typography>						
										
												</Box>
												
					        		</Box>
										 <Divider 
										 		orientation="vertical" 
										 		variant="middle" 
										 		flexItem 
										 		sx={{
					    						fontWeight: 700,  
					    						mt: 7,
					    						ml: 5,
					    						fontSize: 15,
		                			//width: .1,
		                			height: 80,
		                			border: `1px solid #BDC1C9`
		            				}}	
										 	/>
										 	<Box
					        			sx={{
					        				display: 'flex',
					        				justifyContent: 'center',
													flexDirection: 'column',
													alignItems: 'center',
													p: 6,
													'@media (max-width: 982px)': { 
								            p: 0,
								           },


					        			}}
					        		>

					        			<Box
													sx={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
							            	textAlign: 'center',							
														//borderRadius: '50%',
														border: 0,
														width: 48,
														height: 48,
														'@media (max-width: 982px)': { 
									            	width: 38,
																height: 38,
									           },
													}}
												>
													<LocationOn 
														sx={{
															fontSize: '1.8rem', 
															color: `${secudary}`,
															'@media (max-width: 982px)': { 
									            	fontSize: '1.5rem',
									           },
														}} 
													/>
												</Box>
												<Box
													sx={{
														ml: 3,
														'@media (max-width: 982px)': { 
							            			///fontSize: '1.1rem',	
							            			ml: 5,	 
							            		},

													}}
												>
													<Typography
														sx={{
															fontSize: '.8rem',
															fontFamily: 'Wix Madefor Display, sans-serif',
															'@media (max-width: 982px)': { 
								            			fontSize: '.7rem',							
								            		},
															'&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
														}}
													>
														Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
													</Typography>						
													
												</Box>
					
					        			
					        		</Box>
					        		<Divider 
										 		orientation="vertical" 
										 		variant="middle" 
										 		flexItem 
										 		sx={{
					    						fontWeight: 700,  
					    						mt: 7,
					    						ml: 5,
					    						fontSize: 15,
		                			//width: 120,
		                			height: 80,
		                			border: `1px solid #BDC1C9`
		            				}}	
										 	/>
			        			
			        		</Box>

			        		<Box
				        		sx={{
				        			display: { xs: 'flex', md: 'none', sm:  'none'},
				        			justifyContent: 'center',
				        			flexDirection: 'column',
				        			alignItems: 'center',
		      						textAlign: 'center',
				        			p: 5,

				        		}}
				        	>

				        	<Box
			        			sx={{
			        				display: 'flex',
			        				justifyContent: 'center',
											flexDirection: 'column',
											alignItems: 'center',
											//p: 6,
											'@media (max-width: 982px)': {
												 //p: 0,
											},

			        			}}
			        		>
			        			<Box
												sx={{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
						            	textAlign: 'center',							
													//borderRadius: '50%',
													border: 0,
													width: 48,
													height: 48,
													'@media (max-width: 982px)': { 
								            	width: 38,
															height: 38,
								          },
												}}
											>
												<LocalPhone 
													sx={{
														fontSize: '1.8rem', 
														color: `${secudary}`,
														'@media (max-width: 982px)': { 
								            			//fontSize: '1.5rem', 
								            			//ml: 2.5,
															},

													}} 
												/>
											</Box>
											<Box
												sx={{
													//ml: 3,

													'@media (max-width: 982px)': {
															//width: '100%', 
						            			///fontSize: '1.1rem',	
						            			//ml: 4,	 
						            		},

												}}
											>
												<Typography
													sx={{
														fontSize: '1rem',
														fontFamily: 'Wix Madefor Display, sans-serif',
													
														'&:hover': {
									              	color: `${secudary}`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             },
													}}
												>
													+244 946 463 288
												</Typography>						
												<Typography
													sx={{
														fontSize: '1rem',
														//color: '#D3D3DB',
														fontFamily: 'Wix Madefor Display, sans-serif',
														
														'&:hover': {
											              	color: `${secudary}`,
											                cursor: 'pointer',
											                //color: 'white',
											                transition: 'all 400ms',
											             },
													}}
												>
													+244 926 333 223
												</Typography>
											</Box>
											
										</Box>
										<Divider 
										 		
										 		sx={{
					    						fontWeight: 700,  
					    						mt: 4,
					    						//ml: 5,
					    						fontSize: 15,
		                			width: 250,
		                			//height: 80,
		                			border: `1px solid #BDC1C9`
		            				}}	
										 	/>

										 	<Box
					        			sx={{
					        				display: 'flex',
					        				justifyContent: 'center',
													flexDirection: 'column',
													alignItems: 'center',
													mt: 4,
													'@media (max-width: 982px)': {
														 //p: 0,
													},

					        			}}
					        		>
					        			<Box
														sx={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
								            	textAlign: 'center',							
															//borderRadius: '50%',
															border: 0,
															width: 48,
															height: 48,
															'@media (max-width: 982px)': { 
										            	width: 38,
																	height: 38,
										          },
														}}
													>
														<Mail 
															sx={{
																fontSize: '1.8rem', 
																color: `${secudary}`,
																'@media (max-width: 982px)': { 
										            			//fontSize: '1.5rem', 
										            			//ml: 2.5,
																	},

															}} 
														/>
													</Box>
													<Box
														sx={{
															//ml: 3,

															'@media (max-width: 982px)': {
																	//width: '100%', 
								            			///fontSize: '1.1rem',	
								            			//ml: 4,	 
								            		},

														}}
													>
														<Typography
															sx={{
																fontSize: '1rem',
																fontFamily: 'Wix Madefor Display, sans-serif',
															
																'&:hover': {
											              	color: `${secudary}`,
											                cursor: 'pointer',
											                //color: 'white',
											                transition: 'all 400ms',
											             },
															}}
														>
															njangoinvestiment@gmail.com
														</Typography>						
														
													</Box>
						        	</Box>
				        		<Divider										 		
									 		sx={{
				    						fontWeight: 700,  
				    						mt: 4,
				    						//ml: 5,
				    						fontSize: 15,
	                			width: 250,
	                			//height: 80,
	                			border: `1px solid #BDC1C9`
	            				}}	
									 	/>

									 	<Box
				        			sx={{
				        				display: 'flex',
				        				justifyContent: 'center',
												flexDirection: 'column',
												alignItems: 'center',
												mt: 4,
												mb: 4,
												'@media (max-width: 982px)': {
													 //p: 0,
												},

				        			}}
				        		>
				        			<Box
													sx={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
							            	textAlign: 'center',							
														//borderRadius: '50%',
														border: 0,
														width: 48,
														height: 48,
														'@media (max-width: 982px)': { 
									            	width: 38,
																height: 38,
									          },
													}}
												>
													<LocationOn 
														sx={{
															fontSize: '1.8rem', 
															color: `${secudary}`,
															'@media (max-width: 982px)': { 
									            			//fontSize: '1.5rem', 
									            			//ml: 2.5,
																},

														}} 
													/>
												</Box>
												<Box
													sx={{
														//ml: 3,

														'@media (max-width: 982px)': {
																//width: '100%', 
							            			///fontSize: '1.1rem',	
							            			//ml: 4,	 
							            		},

													}}
												>
													<Typography
														sx={{
															fontSize: '1rem',
															fontFamily: 'Wix Madefor Display, sans-serif',
															textAlign: 'center',
															'&:hover': {
										              	color: `${secudary}`,
										                cursor: 'pointer',
										                //color: 'white',
										                transition: 'all 400ms',
										             },
														}}
													>
														Viana, zango 4, Rua Pedro Arlindo Cruz <br/> casa nº 45, Luanda, Angola
													</Typography>						
													
												</Box>

					        	</Box>

				        	</Box>
				
									<Paper
										elevation={1}
										sx={{
											//bgcolor: `${primery}`,
							        ///textAlign: 'center',
							         p: 8,
							         m: 1,
							         borderRadius: 0,
										}}

									>

										<Box
											sx={{
												//bgcolor: `${primery}`,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
								          		//textAlign: 'center',

											}}
										>
											<Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
												<Grid item xs={12}>
													<Grid container justifyContent="center" spacing={2}>
														
														<Grid item sm={6} md={4} xs={12}>
															<Box>
																<Typography			                 
										                variant="p" 
										                component={'div'}
										                sx={{
										              		fontWeight: 300,
										              		///mt: -.1,
												            	fontSize: '1.5rem',
												            	fontFamily: 'Wix Madefor Display, sans-serif',
										              		color: 'white',
										              		//ml: .5,
										              		'@media (max-width: 500px)': { 
											            			//fontSize: '2.5rem',	
											            			//mt: -2,	 
										            			},
									              		}}

									            	>
									                  Sobre Nós
									              	</Typography>  
									              	<Typography			                 
										                variant="p" 
										                component={'div'}
										                sx={{
										              		fontWeight: 300,
										              		//mt: -.1,
													            fontSize: '.8rem',
													            fontFamily: 'Wix Madefor Display, sans-serif',
											              		color: 'white',
											              		//ml: .5,
											              		'@media (max-width: 500px)': { 
											            			//fontSize: '2.5rem',	
											            			//mt: -2,	 
										            			},
										              		}}

										            	>
									                  Njango investiment plataforma para acessória de investimentos, para empreendedores 
									                  com projetos funcionando ou não que precisa de investimento, e para investidores com 
									                  recursos para financiar. Monitiramos o investimentos garantido o funcionamento do investiimento
									                  e a entrega do lucro ao investidor e acompanhamento do seu investimento.
									              	</Typography> 
															</Box>
															
														</Grid>

														<Grid item sm={6} md={4} xs={12}>
															<Box>
																<Typography			                 
									                variant="p" 
									                component={'div'}
									                sx={{
									              		fontWeight: 200,
									              		//mt: -.1,
											            	fontSize: '1.5rem',
											            	fontFamily: 'Wix Madefor Display, sans-serif',
									              		color: 'white',
									              		//ml: .5,
									              		'@media (max-width: 500px)': { 
										            			//fontSize: '2.5rem',	
										            			//mt: -2,	 
									            			},
								              		}}

								            	>
								                  Ultimos Blogs Postados
								              	</Typography>
								              	

								              	<List sx={{ width: '100%'}}>

								              		{blogs.map((slide, index) => {
																			return(
																				<ListItem alignItems="flex-start">
														        
																	        <ListItemText
																	          primary={
																	          	 <Typography
																	                sx={{ 
																	                	//display: 'inline'
																	                	mt: -2, 
																	                	color: 'white',
																	                	fontSize: 15,
																	                	fontWeight: 200,
																	                	fontFamily: 'Wix Madefor Display, sans-serif',
																	                	'&:hover': {
																			              	//bgcolor: `${secudary}`,
																			                cursor: 'pointer',
																			                color: '#B8B8C8',
																			                transition: 'all 400ms',
																			             },
																	              	}}
																	                //component="span"
																	                //variant="body2"
																	                //color="text.primary"
																	              >
																	                {slide.title}
																	              </Typography>

																	          }
																	          secondary={
																	            <Fragment
																	            	sx={{ 
																	                	//display: 'inline' 
																	                	//color: 'B8B8B8',

																	              	}}
																	            >
																	            	<Box
																	            		sx={{
																	            			display: 'flex',
																	            			justifyContent: 'space-between'
																	            		}}
																	            	>
																	            		
																	            		<Typography
																	                sx={{ 
																	                	//display: 'inline' 
																	                	color: '#B8B8B8',
																	                	fontSize: 9,
																	                	fontFamily: 'Wix Madefor Display, sans-serif',
																	              	}}
																	                
																	              >
																	                {slide.autor}
																	              </Typography>
																	              <Typography
																	                sx={{ 
																	                	//display: 'inline' 
																	                	color: '#B8B8B8',
																	                	//mt: .1,
																	                	fontSize: 9,
																	                	fontFamily: 'Wix Madefor Display, sans-serif',
																	              	}}
																	                
																	              >
																	                {slide.data}
																	              </Typography>

																	            	</Box>
																	              
																	              
																	            </Fragment>
																	          }
																	        />
																	      </ListItem>
																			)
																			
																		})

								              		}								              	

								              		


								              	</List>
															</Box>
														</Grid>

														<Grid item sm={6} md={4} xs={12}>
															<Box>
																<Typography			                 
											                variant="p" 
											                component={'div'}
											                sx={{
											              		fontWeight: 300,
											              		///mt: -.1,
													            fontSize: '1.5rem',
													            fontFamily: 'Wix Madefor Display, sans-serif',
											              		color: 'white',
											              		//ml: .5,
											              		'@media (max-width: 500px)': { 
											            			//fontSize: '2.5rem',	
											            			//mt: -2,	 
										            			},
										              		}}

										            	>
										                  Agendar Reunião
										              	</Typography>  

										              	<Typography			                 
												                variant="p" 
												                component={'div'}
												                sx={{
												              		fontWeight: 300,
												              		mt: 1,
														            	fontSize: '.8rem',
														            	fontFamily: 'Wix Madefor Display, sans-serif',
												              		color: 'white',
												              		//ml: .5,
												              		'@media (max-width: 500px)': { 
													            			//fontSize: '2.5rem',	
													            			//mt: -2,	 
												            			},
											              		}}

											            	>
										                  Agenda reunião para conselho de melhores investimentos para o valor expecificos,
										                  e outros assuntos relacionados a investimentos.
										              	</Typography>

										              	<div className={classes.search}>
																	<span className={classes.form_element} >

																		<span className={classes.fa_search}>
																			<MailOutline
																				sx={{
																					fontSize: '1.8rem', 
																					color: `${secudary}`,
																					'@media (max-width: 982px)': { 
														            			fontSize: '1.5rem', 
														            	 },
														            }}
																			/>
																		</span>

																		<input type="email" placeholder="Informe o seu email"/>
																	</span>
																</div>  
																
															</Box>
														</Grid>
																
														
													</Grid>
												</Grid>
											</Grid>
										</Box>

										<Box

											sx={{
												mt: 1,
												display: 'flex',
												justifyContent: 'space-between',
												'@media (max-width: 900px)': { 
					            		justifyContent: 'center',
													flexDirection: 'column',
													alignItems: 'center',

					            	 },

											}}
										>

											<Box
												sx={{
													mt: -1.5,
													display: 'flex',
													//display: { xs: 'none', md: `${about == 'INÍCIO' ? 'flex' : 'none' }` },
													alignItems: 'center',
					        				textAlign: 'center',
												}}
											>
												<ul 
													style={{
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
															onClick={()=> {setValue(0), changeColor('INICIO')}}
															sx={{	

																display: 'block',										  	
														  	textAlign: 'center',										  	
														  	padding: '40px 16px',
														  	textDecoration: 'none',
														  	fontFamily: 'Oswald, sans-serif',							              	
								              	fontWeight: 500,
								              	fontSize: '.9rem',  
								              	color: 'white' ,						              
									            	'&:hover': {
									              	color: `#B8B8C8`,
									                cursor: 'pointer',
									                //color: 'white',
									                transition: 'all 400ms',
									             	},
									             	'@media (max-width: 900px)': { 
							            				fontSize: '.8rem', 
							            				padding: '30px 16px', 
							            			},
							            			'@media (max-width: 600px)': { 
							            				fontSize: '.7rem', 
							            				padding: '25px 10px', 
									            	},
									            	'@media (max-width: 425px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 15px', 
									            	},
									            	'@media (max-width: 380px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 10px', 
									            	},
									            	'@media (max-width: 320px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 5px', 
									            	},
									            }}
														>
															INÍCIO
														</Link>									
													</li>
													<li style={{}}>
														<Link
															onClick={()=> {setValue(1), changeColor('INVESTIMENT')}}
															sx={{								
																display: 'block',										  	
																textAlign: 'center',
																padding: '40px 16px',
																textDecoration: 'none',							              	
							              		fontWeight: 500,
							              		fontSize: '.9rem', 
							              		color: 'white',
							              		fontFamily: 'Oswald, sans-serif',						              
										            '&:hover': {
										              	color: '#B8B8C8',
										                cursor: 'pointer',
										                //color: 'white',
										                transition: 'all 400ms',
										            },
									              	'@media (max-width: 900px)': { 
							            				fontSize: '.8rem', 
							            				padding: '30px 16px', 
								            		},
								            		'@media (max-width: 600px)': { 
							            				fontSize: '.7rem', 
							            				padding: '25px 10px', 
								            		},
								            		'@media (max-width: 425px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 15px', 
									            	},
									            	'@media (max-width: 380px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 10px', 
									            	},
									            	'@media (max-width: 320px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 5px', 
									            	},
									            }}
														>
															INVESTIMENTOS
														</Link>									
													</li>
													<li style={{}}>
														<Link
															onClick={()=> {setValue(2), changeColor('INVESTACT')}}
															sx={{								
																display: 'block',										  	
															  	textAlign: 'center',
															  	padding: '40px 16px',
															  	textDecoration: 'none',
															  	fontFamily: 'Oswald, sans-serif',							              	
									              	fontWeight: 500,
									              	fontSize: '.9rem',  
									              	//color: `#51515C`,	
									              	color: 'white',					              
										            	'&:hover': {
										              	color: '#B8B8C8',
										                cursor: 'pointer',
										                //color: 'white',
										                transition: 'all 400ms',
										             	},
										             	'@media (max-width: 900px)': { 
								            				fontSize: '.8rem', 
								            				padding: '30px 16px', 
									            		},
									            		'@media (max-width: 600px)': { 
								            				fontSize: '.7rem', 
								            				padding: '25px 10px', 
									            		},
									            		'@media (max-width: 425px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 15px', 
										            	},
										            	'@media (max-width: 380px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 10px', 
									            	},
									            	'@media (max-width: 320px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 5px', 
									            	},
									            }}
														>
															INVESTIMENTOS ATIVOS
														</Link>									
													</li>
													<li style={{}}>
														<Link
															onClick={()=> {setValue(3), changeColor('BLOG')}}
															sx={{								
																display: 'block',										  	
															  	textAlign: 'center',
															  	padding: '40px 16px',
															  	textDecoration: 'none',
															  	fontFamily: 'Oswald, sans-serif',							              	
									              	fontWeight: 500,
									              	fontSize: '.9rem', 
									              	color: 'white',
									              	//color: `#51515C`,						              
											            '&:hover': {
											              	color: '#B8B8C8',
											                cursor: 'pointer',
											                //color: 'white',
											                transition: 'all 400ms',
											             },
											             '@media (max-width: 900px)': { 
								            				fontSize: '.8rem', 
								            				padding: '30px 16px', 
									            		},
												          '@media (max-width: 600px)': { 
								            				fontSize: '.7rem', 
								            				padding: '25px 10px', 
									            		},
									            		'@media (max-width: 425px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 15px', 
										            	},
										            	'@media (max-width: 380px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 10px', 
									            	},
									            	'@media (max-width: 320px)': { 
							            				fontSize: '.6rem', 
							            				padding: '15px 5px', 
									            	},
													      }}
														>
															BLOG
														</Link>									
													</li>
													<li style={{}}>
														<Link
															onClick={()=> {setValue(4), changeColor('SOBRE')}}
															sx={{								
																display: 'block',										  	
															  	textAlign: 'center',
															  	padding: '40px 16px',
															  	textDecoration: 'none',
															  	fontFamily: 'Oswald, sans-serif',							              	
									              	fontWeight: 500,
									              	fontSize: '.9rem', 
									              	color: 'white',
									              	//color: `#51515C`,							              
											            '&:hover': {
											              	color: '#B8B8C8',
											                cursor: 'pointer',
											                //color: 'white',
											                transition: 'all 400ms',
											             },
											             '@media (max-width: 900px)': { 
								            				fontSize: '.8rem', 
								            				padding: '30px 16px', 
									            		},
									            		'@media (max-width: 600px)': { 
								            				fontSize: '.7rem', 
								            				padding: '25px 10px', 
									            		},
									            		'@media (max-width: 425px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 15px', 
										            	},
										            	'@media (max-width: 380px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 10px', 
										            	},
										            	'@media (max-width: 320px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 5px', 
										            	},
													     }}
														>
															SOBRE NÓS
														</Link>									
													</li>
													<li style={{}}>
													<Link
														onClick={()=> {setValue(5), changeColor('CONTACT')}}
														sx={{								
															display: 'block',										  	
														  	textAlign: 'center',
														  	padding: '40px 16px',
														  	textDecoration: 'none',							              	
								              	fontWeight: 500,
								              	fontSize: '.9rem',  
								              	color: 'white',
								              	//color: `#51515C`,	
								              	fontFamily: 'Oswald, sans-serif',						              
										            '&:hover': {
										              	color: '#B8B8C8',
										                cursor: 'pointer',
										                //color: 'white',
										                transition: 'all 400ms',
										             },
										             '@media (max-width: 900px)': { 
								            				fontSize: '.8rem', 
								            				padding: '30px 16px', 
									            		},
									            		'@media (max-width: 600px)': { 
								            				fontSize: '.7rem', 
								            				padding: '25px 10px', 
									            		},
									            		'@media (max-width: 425px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 15px', 
										            	},
										            	'@media (max-width: 380px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 10px', 
										            	},
										            	'@media (max-width: 320px)': { 
								            				fontSize: '.6rem', 
								            				padding: '15px 5px', 
										            	},
								            	}}
													>
														CONTATE-NOS
													</Link>									
												</li>
												</ul>
											</Box>

											<Box
												sx={{
													mt: 2.5,
													display: 'flex',
													justifyContent: 'space-evenly',
													'@media (max-width: 900px)': { 
						            		mt: 0,													
						            	},
												}}
											>

												<Facebook  
													sx={{
														fontSize: 24,
														m: 1,
														color: '#B8B8C8',
														'&:hover': {
							              	color: 'white',
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
														fontSize: 24,
														m: 1,
														color: '#B8B8C8',
														'&:hover': {
							              	color: 'white',
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
														fontSize: 24,
														m: 1,
														color: '#B8B8C8',
														'&:hover': {
								              	color: 'white',
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
														fontSize: 24,
														m: 1,
														color: '#B8B8C8',
														'&:hover': {
								              	color: 'white',
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
														fontSize: 24,
														m: 1,
														color: '#B8B8C8',
														'&:hover': {
								              	color: 'white',
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

										<Box

											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												mt: 5,
											}}
										>
											
											<Box
												className={classes.logo_footer}
											>
												<Typography
													component={'div'}
												>
													<img src={logo}/>
												</Typography>


												<Box
											    	sx={{
											    		display: 'flex', 
											    		flexDirection: 'column',
											    		justifyContent: 'start',
											    		alignItems: 'start',
															textAlign: 'start',

											    	}}
											    >
											            	
													<Typography			                 
											          variant="p" 
											          component={'div'}
											          sx={{
											          		fontWeight: 800,
											          		mt: -.05,
										            		fontSize: '1.4rem',
										            		fontFamily: 'Wix Madefor Display, sans-serif',
											          		color: `white`,
											          		textShadow: `2px 2px 4px #ddd`,
											          		ml: -1,
											          		'@media (max-width: 500px)': { 
											        			fontSize: '.8rem',	
											        			//mt: -2,	 
											        		},
											          }}

											        >
											          Njango 
											          
											      	</Typography>
											      	<Typography			                 
											          variant="p" 
											          component={'div'}
											          sx={{
											      			//fontWeight: 700,
											      			mt: -1,
									            		fontSize: '.9rem',
									            		fontFamily: 'Wix Madefor Display, sans-serif',
										      				color: `white`,
											      			ml: -1,
											      			'@media (max-width: 500px)': { 
													    			fontSize: '.6rem',	
													    			mt: -.5,	 
													    		},
											          }}

											        >
											          
											          Investment
											      	</Typography>
												</Box>
												
											</Box>

											<Box>
												<Typography			                 
					                variant="p" 
					                component={'div'}
					                sx={{
					              		fontWeight: 200,
					              		mt: 2,
							            	fontSize: '.9rem',
							            	fontFamily: 'Oswald, sans-serif',
					              		color: 'white',
					              		//ml: .5,
					              		'@media (max-width: 500px)': { 
						            			fontSize: '.4rem',	
						            			//mt: -2,	 
					            			},
				              		}}

				            		>
				                  @ 2024 termos de funcionameno legal, garantado pela leis nº23.
				              	</Typography>
											</Box>
										</Box>
									</Paper>
				        	
			        		
			        	</Box>
			    </CustomTabPanel>
		      <CustomTabPanel value={value} index={1}>
		        <Investmentpainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} setUser={setUser}/>
		      </CustomTabPanel>
		      <CustomTabPanel value={value} index={2}>
		        <Moreactives primery={primery} secudary={secudary}/>
		      </CustomTabPanel>
		      <CustomTabPanel value={value} index={3}>
		      	{read ?
		       		<Readblog primery={primery} secudary={secudary} />
		       		:
		       		<Moreblogs primery={primery} secudary={secudary} />
		      	}
		      </CustomTabPanel>
		      <CustomTabPanel value={value} index={4}>
		       	<Moreinfo primery={primery} secudary={secudary}/>
		      </CustomTabPanel>
		      <CustomTabPanel value={value} index={5}>
		        <Contactpainel primery={primery} secudary={secudary}/>
		      </CustomTabPanel>
			</Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', sm: 'flex' }, }}>
		        <Box component="nav">
		          	<Drawer 
			            variant='temporary' 
			            open={mobileOpen} 
			            onClick={handleDrawerToggle}
			            sx={{
			              "& .MuiDrawer-paper":{
			                boxSizing: "border-box",
			                width: "240px",
			                top: 80,
			                bgcolor: 'rgba(0, 0, 0, .2)',
			              }
			            }}
			        >
		            	{drawer}
	         		</Drawer>
	       		</Box>

	      </Box>

	      <Model
	        openModel = {openModel}
	        setOpenModel={setOpenModel}
	        title={title}
	      >
	        <SignInOutContainer setTitle={setTitle} tab={0} setClose={setOpenModel} setUser={setUser} opcao={'CRIAR'} setOpcao={setOpcao}/>
	      </Model>
			
		</>
	)
}
export default Homepainel;
