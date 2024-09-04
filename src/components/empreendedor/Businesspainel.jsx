import { useState, useEffect } from 'react';
import { 
	Grid, 
	Paper, 
	Button, 
	Box, 
	IconButton, 
	Typography, 
	Table, 
	TableBody, 
	TableCell, 
	TableContainer, 
	TableHead, 
	TablePagination, 
	TableRow,
	Card,
	CardContent,
	List,
	CardActions
} from '@mui/material';
import {
	MonetizationOn, 
	Engineering, 
	VisibilityOff, 
	Visibility,
	ReceiptLong,
	Edit,
	DeleteForever
} from '@mui/icons-material';
import Model from "../Model";
import Formbusness from './Formbusness';
import Empresabox from './Empresabox';
import Investirbox from './Investirbox';
import Busnessbox from './Busnessbox';
import Deletenegocio from './Deletenegocio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
	

];

const neg = [
	{
		id: '9fe1g44ru32',
		name: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		status: 'FUNCIONANDO',
		logo: 'Logo_c.png',
		capital: 100000,
		credito: 70000,
		lucro: 5,
		iduser: '24682463248',
		resumo: 'Oferecer conforto aos nosso clientes, se manter no mercado como uma marca de excelencia e satisfação.\n Mantendo um negocio estavel e rentavel',
		descricao: 'Abrimos a primeira cafeteria em 2017, apenas uma roulote e cadeiras.\nPr. André Miranda, socio criador da empresa.',
		objetivos: 'Aumentar o negocio, mais lojas\nSer uma referencia no mercado.',
		analise: 'É um mercado leve,  e com pouco concorrentes, o nosso publico alvo é multi facetario.',
		missao: 'Criar filhar e continuar a fornecer os nossos produtos',
		work: 'Vendemos cafés e bolos salgados e doces, nosso diferencial é o profissionalismo e a excelencia dos nossos produtos',
		organizacao: `Temos o setor RH, Administrativo, a Confeiteria e o Redes Sociais\nPaulo André Administrador, Ana Ricardo Recrutadora, Dina Miranda chefe de cozinha Paula Dembo e Fina Simão Ajudante de cozinha, Matilde Rosa Resp. Limpeza e Sebastião Nzimbo e Mingo Sirtol segurança`,
		markting: 'Redes Socias, e pafletos',
		local: 'Luanda, Viana, bairro Villa, rua Andre Pedro nº43',
		celular: '+244 926 000 544',
		image: 'investment_option.jpg',
	},
	{
		id: '9fe1g44ru32',
		name: 'DINA AMBULANTE LDA',
		segment: 'VENDA',
		status: 'ATIVO',
		logo: 'vendedora100.png',
		capital: 100000,
		credito: 40000,
		lucro: 10,
		iduser: '24682463248',
		resumo: 'Continuar a vender, facilitando a vida de alunos e outros trabalhadores no seu dia dia, mantendo o negócio.',
		descricao: 'Comecei a vender em janeiro de 2023, e parei em outubro do mesmo ano. Apenas eu vendo.',
		objetivos: 'Continuar a vender, e poder ajudar outras vendedoras',
		analise: 'É um mercado dinamico e meio inseguro, motivos politicos, muitas vendedoras\nPublico alvo alunos, e trabalhadores.',
		missao: 'Manter o meu negócio',
		work: 'Vendo produtos agriculas, banana, jingubas, bobós. Meus produtos são nacionais e bem tratados',
		organizacao: 'Não temos uma estrutura',
		markting: 'Andar na rua pergutando',
		local: 'Luanda, Viana, bairro Luanda Sul, rua Andre Pedro nº43',
		celular: '+244 926 333 544',
		image: 'hanoi_street.jpg',
	},
	{
		id: '9fe1g44ru32',
		name: 'FER BOLOS DOCES LDA',
		segment: 'VENDA',
		status: 'PROCESSADO',
		logo: 'bolo100.png',
		capital: 100000,
		credito: 110000,
		lucro: 25,
		iduser: '24682463248',
		resumo: '',
		descricao: '',
		objetivos: '',
		analise: '',
		missao: 'vou fazer depois',
		work: 'vou fazer depois',
		organizacao: `Nós temos um setor administrativo, os confeiteiro e o vendedor.`,
		markting: 'Nenhum',
		local: 'Benguela, Santa Monica, bairro Nzento rua Andre Pedro nº43',
		celular: '+244 926 333 544',
		image: 'cake_fundo.jpg',
	},
]
 
const investir = [

	{
		id: '54fe1g44ru32',
		empresa: 'LEVEZA SPA S.A',
		segment: 'SERVIÇO',
		capital: 150000,
		credito: 60000,
		lucro: 25,
		logo: 'cuidadospa100.png',
		iduser: '24682463248',
	},
	{
		id: '9f2131g44ru32',
		empresa: 'LENA MANICURE LDA',
		segment: 'SERVIÇO',
		capital: 50000,
		credito: 50000,
		lucro: 50,
		logo: 'tratamentounhas100.png',
		iduser: '24682463248',
	},
	{
		id: '9fe1g44rD32u32',
		empresa: 'PAULO TEC LDA',
		segment: 'SERVIÇO',
		capital: 10000000,
		credito: 40000000,
		lucro: 30,
		logo: 'utilizavel100.png',
		iduser: '24682463248',
	},
	{
		id: '54fe1g44ru32',
		empresa: 'DINA AMBULANTE LDA',
		segment: 'VENDA',
		capital: 25000,
		credito: 50000,
		lucro: 60,
		logo: 'vendedora100.png',
		iduser: '24682463248',
	},
	{
		id: '9f2131g44ru32',
		empresa: 'FER BOLOS DOCES LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 70000,
		lucro: 40,
		logo: 'bolo100.png',
		iduser: '24682463248',
	},
	{
		id: '9fe1g44rD32u32',
		empresa: 'BAR ARDENTE LDA',
		segment: 'VENDA',
		capital: 100000,
		credito: 200000,
		lucro: 25,
		logo: 'drinks100.png',
		iduser: '24682463248',
	}

]

const recibos = [
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		//mes: 'JANEIRO',
		data: '10/02/2024'
	},
	{
		id: 1,
		valor: 250000,
		tipo: 'LUCRO',
		//mes: 'FEVEREIRO',
		data: '10/02/2024'
	},

];  


function Businesspainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus } = props;
	const [despesas, setDespesas] = useState(0)
	const [lucros, setLucros] = useState(0)
	
	const [empresas, setEmpresas] = useState(rows)
	const [negocios, setNegocios] = useState(neg)
	const [investments, setInvestments] = useState(investir)
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordesp, setShowPasswordesp] = useState(false);
	const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');
    
    const [text, setText] = useState('Total Lucros');

    const [statusinvest, setStatusinvest] = useState('');
    const [cor, setCor] = useState('');

  const [plano, setPlano] = useState({
	   	id: 1,
			empresa: '',
			segment: '',
			status: '',
			resumo: '',
			capital: 0,
			credito: 0,
			lucro: 0,
			descricao: '',
			objetivos: '',
			analise: '',
			missao: '',
			work: '',
			organizacao: '',
			markting: '',
			local: '',
			celular: '',
			image: '',
			logo: '',
	});


	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleClickShowPasswordesp = () => setShowPasswordesp((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleMouseDownPasswordesp = (event) => {
        event.preventDefault();
    }

    const handleAdd = () => {
      setOpcao('ADD');
      setTitle('CADASTRAR NEGÓCIO');
      setOpenModel(true);

    };
    //console.log(currencies)
    const handleEditar = (negocio) => {
    	//console.log(currencies)
    	if(negocio.status == 'ATIVO' || negocio.status == 'FUNCIONANDO' ){
				toast.success('Plano Aprovado!', {
					theme: 'dark',
					fontFamily: 'Oswald, sans-serif',
				});
				
			} else {
				setOpcao('EDITAR');
	      setTitle('EDITAR PLANO DE NEGÓCIO');
	      setOpenModel(true);
	      setPlano({
	      	id: negocio.id,
					empresa: negocio.name,
					segment: negocio.segment,
					status: negocio.status,
					resumo: negocio.resumo,
					capital: negocio.capital,
					credito: negocio.credito,
					lucro: negocio.lucro,
					descricao: negocio.descricao,
					objetivos: negocio.objetivos,
					analise: negocio.analise,
					missao: negocio.missao,
					work: negocio.work,
					organizacao: negocio.organizacao,
					markting: negocio.markting,
					local: negocio.local,
					celular: negocio.celular,
					image: negocio.image,
					logo: negocio.logo, 
	      })
			}
      
      
    };

    const handleDelete = (negocio) => {
    	if(negocio.status == 'ATIVO' || negocio.status == 'FUNCIONANDO' ){
				toast.success('Plano Aprovado!', {
					theme: 'dark',
					fontFamily: 'Oswald, sans-serif',
				});
				
			} else {

	      setOpcao('APAGAR');
	      setTitle('DELETAR PLANO DE NEGÓCIO');
	      setOpenModel(true);
	      setPlano({
	      	id: negocio.id,
					empresa: negocio.name,
					segment: negocio.segment,
					status: negocio.status,
					resumo: negocio.resumo,
					capital: negocio.capital,
					credito: negocio.credito,
					lucro: negocio.lucro,
					descricao: negocio.descricao,
					objetivos: negocio.objetivos,
					analise: negocio.analise,
					missao: negocio.missao,
					work: negocio.work,
					organizacao: negocio.organizacao,
					markting: negocio.markting,
					local: negocio.local,
					celular: negocio.celular,
					image: negocio.image,
					logo: negocio.logo, 
	      })
	    }
      
    };



    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <Formbusness primery={primery} secudary={secudary} foto="sem-foto.png" banner="sem-foto.jpg"  opcao={opcao}  setOpenModel={setOpenModel} negocio={plano} setNegocio={setPlano}  />; 
        case 'EDITAR':         		
        				return <Formbusness primery={primery} secudary={secudary} foto={plano.logo} banner={plano.image}  opcao={opcao}  setOpenModel={setOpenModel} negocio={plano} setNegocio={setPlano} />;
        case 'APAGAR':
              return <Deletenegocio  setOpenModel={setOpenModel} primery={primery} secudary={secudary} negocio={plano}/>;   
        case 'PAYMENT':
              return //<Paymentsfunc funcionario={funcionaro}/>;   
        default: 
          return null;
      }
    }




    useEffect(() => {
    	let totd = 0;
    	let totl = 0;
    	empresas.forEach((empresa) => {
            totd += parseFloat(empresa.despesa)
            totl += parseFloat(empresa.lucro)
            //console.log(tot)
        })
        setLucros(totl)
        setDespesas(totd)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    }, [])

	return(
		<>
			<Grid container>
                <Grid item xs={12} sm={12} md={7}>
                   <Typography
		                sx={{
		                    fontWeight: 400,
		                    fontSize: '25px',                   
		                    fontFamily: 'Oswald, sans-serif',
		                    '@media (max-width: 800px)': { fontSize: '15px' },
		                }}
		            >
		                MEUS NEGÓCIOS
		            </Typography>
		            <Typography
		                    sx={{                    
		                        fontSize: '15px',                                       
		                        fontFamily: 'Wix Madefor Display, sans-serif',
		                        '@media (max-width: 800px)': { fontSize: '10px' },
		                    }}
		                >
		                Consulte aqui os seus negócios e investimentos
		            </Typography>        
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                	<Box
                		sx={{
                			display: 'flex',
                			 '@media (max-width: 900px)': { 
                			 	display: 'flex',
								flexDirection: 'column',
								//justifyContent: 'center',
								//alignItems: 'center' 
                			 },
                		}}
                	>
                		<Paper                     	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            minWidth: 200,
	                            borderRadius: 0,     

	                        }}
	                    >
	                        <Typography
	                            sx={{
	                                fontWeight: 'bold',               
	                                fontSize: '12px',
	                                pl: 1,
	                                pt: 1,
	                                fontFamily: 'Wix Madefor Display, sans-serif',
	                                '@media (max-width: 800px)': { fontSize: '8px' },
	                            }}
	                        >
	                            {'Total Despesas'}
	                        </Typography>
	                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
	                                <Typography
	                                    sx={{
	                                        pl: 1,
										                      fontSize: '35px', 
																				fontWeight: 500, 
																				fontFamily: 'Six Caps, sans-serif',
																				'@media (max-width: 800px)': { fontSize: '25px' },                          
	                                        
	                                        
	                                    }}
	                                >
	                                    {showPasswordesp ? ` ${despesas.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
	                                </Typography>
	                                <IconButton
	                                    size="small"
	                                    //aria-label="toggle password visibility"
	                                    onClick={handleClickShowPasswordesp}
	                                    onMouseDown={handleMouseDownPasswordesp}
	                                    color="inherit"
            							sx={{borderRadius: 0, height: 40, width: 40}}                           
	                                >
	                                    {showPasswordesp ? <VisibilityOff sx={{ color: `${secudary}`, fontSize: '20px'}} /> : <Visibility  sx={{ color: `${secudary}`, fontSize: '20px'}} />}
	                                </IconButton>
	                            </div>              
	                    </Paper>
	                    <Paper                    	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            ml: .5,
	                            minWidth: 200,
	                            borderRadius: 0,
	                            '@media (max-width: 900px)': {ml: 0},     

	                        }}
	                    >
	                        <Typography
	                            sx={{
	                                fontWeight: 'bold',               
	                                fontSize: '12px',
	                                pl: 1,
	                                pt: 1,
	                                fontFamily: 'Wix Madefor Display, sans-serif',
	                                '@media (max-width: 800px)': { fontSize: '8px' },
	                            }}
	                        >
	                            {text}
	                        </Typography>
	                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
	                                <Typography
	                                    sx={{
	                                        pl: 1,
	                                        fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },                          
	                                        
	                                        
	                                    }}
	                                >
	                                    {showPassword ? ` ${lucros.toLocaleString("en-US", {style:"currency", currency:"USD"})}`: '****'}
	                                </Typography>
	                                <IconButton
	                                    size="small"
	                                    aria-label="toggle password visibility"
	                                    onClick={handleClickShowPassword}
	                                    onMouseDown={handleMouseDownPassword}
	                                    sx={{borderRadius: 0, height: 40, width: 40}}                           
	                                    >
	                                    {showPassword ? <VisibilityOff sx={{ color: `${secudary}`, fontSize: '20px'}} /> : <Visibility  sx={{ color: `${secudary}`, fontSize: '20px'}} />}
	                                </IconButton>
	                            </div>              
	                    </Paper>

                	</Box>
                    
                </Grid>
            </Grid>

            <Box
                sx={{  
                    display: 'flex', 
                    float: 'right',
                    mb: 1,
                    //mt: -2,
                    //width:  '100%'                   
                }}
            >
            	<IconButton  
                    onClick={() => handleAdd()}                                    
                    sx={{  
                        //mr: -2,
                        borderRadius: 0, 
                        height: 30, 
                        width: 40,                  
                        color: `${secudary}`,
                        border: `1px solid ${secudary}`,                       
                        fontSize: '20px',
                        fontFamily: 'Wix Madefor Display, sans-serif',
		                '&:hover': {
		                    color: 'white',		                   
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
                    }}
                >
                	+
                </IconButton>
            </Box>
			
            <Grid container spacing={2}>
			
					<Grid item xs={12} sm={8} sx={{ display: { xs: 'flex', md: 'grid' }, flexDirection: 'column', }}>
						<Typography
				            sx={{
				            	m: 1,
				                fontWeight: 500,
				                fontSize: '20px',                   
				                fontFamily: 'Oswald, sans-serif',
				                '@media (max-width: 800px)': { fontSize: '15px' },
				            }}
				        >
			             PLANOS DE NEGÓCIOS
			          	</Typography>
						<Grid container justifyContent="center" spacing={2}>
							{
								negocios.map((empresa, index) =>{
									return(
										<Grid key={index} item xs={12} md={6} sm={12}>
											<Busnessbox primery={primery} secudary={secudary} empresa={empresa} handleEditar={handleEditar} handleDelete={handleDelete}/>
										</Grid>
									)
								})

							}
						</Grid>
						<Typography
				            sx={{
				            	m: 1,
				                fontWeight: 500,
				                fontSize: '20px',                   
				                fontFamily: 'Oswald, sans-serif',
				                '@media (max-width: 800px)': { fontSize: '15px' },
				            }}
				        >
			              EMPRESAS
			          	</Typography>
						<Grid container justifyContent="center" spacing={2}>
							{
								empresas.map((empresa, index) =>{
									return(
										<Grid key={index} item xs={12} md={6} sm={12}>
											<Empresabox primery={primery} secudary={secudary} empresa={empresa} topico={'DESPESA DA EMPRESA'} />
										</Grid>
									)
								})

							}

						</Grid>

					</Grid>

					<Grid item xs={12} sm={4}>
						<div>
							<Typography
				              sx={{
				                  fontWeight: 500,
				                  fontSize: '20px',                   
				                  fontFamily: 'Oswald, sans-serif',
				                  '@media (max-width: 800px)': { fontSize: '15px' },
				              }}
				          >
				              EMPRESAS PARA INVESTIR
				          </Typography>
				          <Typography
				              sx={{                    
				                  fontSize: '12px',                                       
				                  fontFamily: 'Wix Madefor Display, serif',
				                  '@media (max-width: 800px)': { fontSize: '10px' },
				              }}
				          >
				              Não guarda o seu dinheiro, investe e aumenta os seus lucros!
				          </Typography>     
					 	</div>

					 	<Box>
					 		 <List sx={{ width: '100%' }}>
					 		 	{
					 		 		investments.length == 0 ? <Typography>Não tem Investmentos</Typography> 
					 		 		:
		              investments.map((investment, index) => {
		              	return(		                    	
		              		<Box key={index}>
		              			<Investirbox primery={primery} secudary={secudary} investment={investment}  />
		              		</Box>
		              	)
		                  
		              })     
					 		 	}

					 		 </List>
					 	</Box>
					 	
					</Grid>

				</Grid>
			<Model
            title={title}
            openModel = {openModel}
            setOpenModel = {setOpenModel}
        >
              {
              getComponent()
              }
       </Model> 
       <ToastContainer />     
		</>
		
	)
}
export default Businesspainel;