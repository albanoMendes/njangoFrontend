import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from "@mui/styles";
import { 
	Home,  
	Logout, 
	QueryStats, 
	AccountBalance, 
	FacebookOutlined, 
	Twitter, 
	Instagram, 
	LinkedIn, 
	InsertInvitation, 
	WorkHistory,
	Engineering,
	Handshake,
	Payments,
	ShoppingCart,
	Receipt,
} from "@mui/icons-material";
import { 
	AppBar, 
	Avatar, 
	Box,  
	IconButton, 
	Menu,
	MenuItem,  
	Stack, 
	Tab, 
	Tabs, 
	Toolbar, 
	Typography, 
	TextField,
	Divider,
	Paper, 
} from "@mui/material";
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types';
import Homepainel from '../components/recursohumanos/Homepainel';
import Allvagas from '../components/recursohumanos/Allvagas';
//import Paymentdiarios from '../components/financeiro/Paymentdiarios';
import Footerblog from '../components/blog/Footerblog';
//import Caixapainel from '../components/financeiro/Caixapainel';
import Employees from '../components/recursohumanos/Employees';

const useStyles = makeStyles(() =>({
   container:{
        color: "#F9CC19",
        height: "100%",
        width: "100%",
        paddingTop: useTheme().spacing(1),
        //backgroundColor: "white",
        [useTheme().breakpoints.up("sm")]:{
            //backgroundColor:'white',
            color:"#555",
            border:"1px solid #efefe",
        }
    },
    icon:{
        margin: useTheme().spacing(1),
        [useTheme().breakpoints.up("sm")]:{
          fontSize: "18px",         
        }
    },
    item:{
        display:'flex',
        alignItems:"center",
        marginBottom: useTheme().spacing(2),
        [useTheme().breakpoints.up("sm")]:{
            marginBottom:useTheme().spacing(3),
            cursor: "pointer",
        }
    },
    text:{
    	//fontFamily: ', sans-serif',
        fontWeight: 600,        
        //fontSize: "10px", 
        [useTheme().breakpoints.down("sm")]:{
            display: "none",
        }
    },
    body:{
        height: '100vh',
    }
}));

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Rhpainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus } = props;

	const [value, setValue] = useState(0);
	const classes = useStyles();
	const [opcao, setOpcao] = useState('');
	const [idioma, setIdioma] = useState('');
	const [openModel, setOpenModel] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [title, setTitle] = useState('');

	const [empresa, setEmpresa] = useState({
		id: '9fe1g44ru32',
		name: 'COFFE HOUSE LDA',
		segment: 'SERVICE',
		status: 'PROCESSADO',
		logo: 'Logo_c.png',
		nFun: 5,
		despesa: 100000,
		entrada: 140000,
		lucro: 40000,
		iduser: '24682463248',
	})

	const [ceo, setCeo] = useState({
		id: 1,
		name: 'PAULO MIRANDA',
		image: 'em_01.png'

	});

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	const handleMenu = (event) => {
	  setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	    setOpcao('EDITAR');
	    setTitle('EDITAR USUARIO');
	    setOpenModel(true);
	    setAnchorEl(null);
	};

	const handleLogout = () => {
	    setUser({
	      id: 0,
	      name: '',
	      lastname: '',
	      img: '',
	      typeUser: '',
	      email: '',
	      phone: '',
	      idCountry: 0
	    });
	    //navigate('/');
	}

	return(
		<>
			<AppBar elevation={1} position="sticky" sx={{  }}>
				<Toolbar>          
		          <Typography 
		          	variant="h6" 
		          	component="div" 
		          	sx={{ 
		          		flexGrow: 1,
		          		//fontWeight: 700,
		          		fontSize: '1rem',
									fontFamily: 'Oswald, sans-serif',	
		          		
		          	}}
		          >
		            PAINEL Recursos Humanos
		          </Typography>
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
		          	<Box
		          		sx={{
		          			display: 'flex',
		          		}}
		          	>
		          		<Typography 
				          	variant="h6" 
				          	component="div" 
				          	sx={{ 
				          		flexGrow: 1,
				          		fontWeight: 100,
				          		fontSize: '.7rem',
											fontFamily: 'Wix Madefor Display, sans-serif',	
				          		
				          	}}
			          	>
			            	Logout
			          	</Typography>
		          	</Box>	            
		        </Toolbar>
			</AppBar>


			<div className={classes.body}>
	        <Stack 
	            direction="row" 
	            spacing={2} 
	            justifyContent="space-between"
	            height="100vh"
	        >
	            <Box 
	                flex={2}
	                className={classes.container}>
	                <Box
	                	sx={{
											display: 'flex',
											alignItems: 'center',
	        						textAlign: 'center',
											mb: .5,
											p: 1
										}}
	                >
	                	<img 
											src={new URL(`../assets/empreendidor/${ceo.image}`, import.meta.url)}  
											alt="Slide"
											style={{
												width: '50px',
												height: '50px',
											}}
										/>

						<Box className={classes.text}>
							<Typography
			                sx={{
			                    //justifyContent: 'center',
			                    //alignItems: 'center',
			                    fontWeight: 700,
			                    fontFamily: 'Oswald, sans-serif',	
			                    fontSize: '15px',                       
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
			                    fontWeight: 200,
			                    fontFamily: 'Wix Madefor Display, sans-serif',	
			                    fontSize: '10px',                       
			                    //mb: -3,
			                    '@media (max-width: 600px)': { fontSize: '10px' },
			                    '@media (max-width: 320px)': { fontSize: '8px' },
			                }}  
			            >
			              EMPREENDEDOR
			            </Typography>
						</Box>
	                </Box>
	                 <Divider />
	                <Tabs
	                    orientation="vertical"
	                    value={value}
	                    onChange={handleChange}
	                    indicatorColor="secondary"
	                    textColor="inherit"  
	                    aria-label="Vertical tabs example"
	                     TabIndicatorProps={{
	                            style: {
	                                backgroundColor: "#F9CC19",
	                                color: "#F9CC19"
	                            }
	                        }}
	                  >
	                <Tab 
	                    icon={<Home className={classes.icon}/>} 
	                    iconPosition="start" 
	                    label={
	                        <Typography className={classes.text} sx={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px'}}>
	                            INICIO
	                        </Typography>
	                    } 
	                    {...a11yProps(0)} 
	                    className={classes.item}
	                />
	              	
	              	<Tab 
	                    icon={<WorkHistory className={classes.icon}/>} 
	                    iconPosition="start" 
	                    label={
	                        <Typography className={classes.text} sx={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px'}}>
	                            VAGAS DE EMPREGO
	                        </Typography>
	                    } 
	                    {...a11yProps(1)} 
	                    className={classes.item}
	                />

	                <Tab 
	                    icon={<Engineering className={classes.icon}/>} 
	                    iconPosition="start" 
	                    label={
	                        <Typography className={classes.text} sx={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px'}}>
	                            COLABORADORES
	                        </Typography>
	                    } 
	                    {...a11yProps(2)} 
	                    className={classes.item}
	                />
	              
	              <Tab
	                    icon={<AccountBalance className={classes.icon}/>} 
	                    iconPosition="start" 
	                    label={
	                        <Typography className={classes.text} sx={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px'}}>
	                            PAGAMENTOS
	                        </Typography>
	                    } {...a11yProps(3)} className={classes.item}

	                />
	                      
	                <div className={classes.item}>
	                    <Logout  onClick={() => handleLogout()} className={classes.icon}/>
	                      <Typography  onClick={() => handleLogout()} className={classes.text} sx={{fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px'}}>
	                        SAIR
	                      </Typography>              
	                </div>
	                </Tabs>
	            </Box>
	            <Box 
	                flex={12}
	                p={1}
	                component="main" 
	                sx={{position: 'relative', maxHeight: '100vh', overflowY: 'auto'}}
	            >
	                <TabPanel value={value} index={0}>
	                    <Homepainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} empresa={empresa} />
	                </TabPanel>         
	              	<TabPanel value={value} index={1}>
	                		<Allvagas primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} empresa={empresa} />
	                    
	            	</TabPanel>
	             	<TabPanel value={value} index={2}>
	                	<Employees primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} empresa={empresa} />
	              	</TabPanel> 
	              	<TabPanel value={value} index={3}>
	                	Pagamentos
	              	</TabPanel>        
	            </Box>
	        </Stack>
	      </div>
	      <Paper
	      	elevation={1} 
	        sx={{
	             	//p: 1,
	              //bgcolor: '#F2F2F2',
	              m: 1,
	              //minWidth: 200,
	              borderRadius: 0,     

          	}}
	      >
	      	<Footerblog primery={''} secudary={secudary}/>
	      </Paper>  

		</>

	)
}
export default Rhpainel;