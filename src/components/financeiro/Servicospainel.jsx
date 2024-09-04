import { Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { ShoppingCart, Print, Today, EventAvailable, SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit, Add, People } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Bancocontainer from './Bancocontainer';
import SearchIcon from '@mui/icons-material/Search';
import Formservice from './Formservice';
import Deletesevice from './Deletesevice';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#F9CC19"
        },
    },
    search: {
		  marginTop: '10px',
		  color: '#aaa',
		  fontSize: '16px',
		},
		form_element: {
		  position: 'relative',
		},
		'search input': {
		  	width: '100%',
		  	height: '50px',
		  	backgroundColor: 'white',
		 		boxSizing: 'border-box',
				border: '1px solid #ccc',  
		  	borderRadius: 0,
		  	p: 1,
		  	textIndent: '1em',
		},
		'search fa_search': {
		  position: 'absolute',
		  top: '-2px',
		  right: '10px',
		  bottom: 0,
		},
});
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '17ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));


function createData(id, service, client, pagamento, descricao, empresa, mes, ano, data, datatime, iduser) {
  return {id, service, client, pagamento, descricao, empresa, mes, ano, data, datatime, iduser};
}

const rows = [
	createData(1, 'Construção', 'Pedro Francisco', 12000, 'Construção de uma residencia com 2 quartos e sala, cozinha e 2 banheiro', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(2, 'Ladrilho', 'Maria André', 60000, 'Ladrinho de sala e cozinha', 'SEGMENT LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(3, 'Canalização', 'Paulo Silva', 3000, 'Canalização de 2 banheiro e da cozinha', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(4, 'Eletricidade', 'Mateus Miranda', 1500000000, 'Instalação de eletrecidade em uma predio com 1 andadres 4 quartos e 3 hanheiros 2 cozinhas', 'SEGMENT LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(5, 'Cinstrução', 'Miranda Nzimba', 120000, 'Construção de uma residencia de 3 quartos e 2 banheiro e uma cozinha e quintal', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'), 
];

function Servicospainel(props) {

	const { primery, secudary, empresa, setTotal, setText } = props;

	const classes = useStyles();

	const [servicos, setServicos] = useState(rows)
	//const [total, setTotal] = useState(0);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [servico, setServico] = useState({
	    id: '',
	    service: '',
	    client: '', 
	    pagamento: 0,
	    descricao: '',
	    empresa: '',
	    mes: '',
	    ano: '',
	    datatime: '',
      	iduser: '',
	 });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        
    };

     const handleSearch = (search) => {

      let new_list = servicos.filter(venda=> venda.name);
      //setFuncionarios()
      

      if(search == ''){
      	setServicos(servicos)
      } else {
      	console.log(new_list)
      	setServicos(new_list)
      }
        


    };

    const handleDelete = (venda) => {
      setOpcao('DELETE');
      setTitle('APAGAR SERVIÇO');
      setOpenModel(true);
      setServico({
      	id: venda.id,
		    service: venda.service,
		    client: venda.client, 
		    pagamento: venda.pagamento,
		    descricao: venda.descricao,
		    empresa: venda.empresa,
		    mes: venda.mes,
		    ano: venda.ano,
		    datatime: venda.datatime,
      	iduser: venda.iduser
      })

    };

    const handleAdd = () => {
      setOpcao('ADD');
      setTitle('ADD SERVIÇO');
      setOpenModel(true);
      setServico({
      	id: '',
		    service: '',
		    client: '', 
		    pagamento: 0,
		    descricao: '',
		    empresa: '',
		    mes: '',
		    ano: '',
		    datatime: '',
      	iduser: '',
      })

    };

     const handleClose = () => {
      setOpcao('CLOSE');
      setTitle('FECHAR O CAIXA DO DIA');
      setOpenModel(true);

    };

    //console.log(currencies)
    const handleEditar = (venda) => {
      setOpcao('EDITAR');
      setTitle('EDITAR SERVIÇO');
      setOpenModel(true);
      setServico({
        id: venda.id,
		    service: venda.service,
		    client: venda.client, 
		    pagamento: venda.pagamento,
		    descricao: venda.descricao,
		    empresa: venda.empresa,
		    mes: venda.mes,
		    ano: venda.ano,
		    datatime: venda.datatime,
      	iduser: venda.iduser
      })
      
    };

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <Formservice  sel={servico} opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary} empresa={empresa}  />; 
        case 'EDITAR':           
              return <Formservice  sel={servico} opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary} empresa={empresa}  />; 
        case 'DELETE':
              return <Deletesevice negocio={servico} setOpenModel={setOpenModel}  primery={primery} secudary={secudary}/>;
       	case 'CLOSE':
              return <Bancocontainer  primery={primery} secudary={secudary}/>;
        default: 
          return null;
      }
    }

    useEffect(() => {
			let tot = 0;  
			setText('VALOR DE SERVIÇOS DESTE MÊS')
		 	servicos.forEach((venda) => {
		 		if(venda.mes == 'Março'){
		 			 tot += parseFloat(venda.pagamento)
		 		}
           
            //console.log(tot)
        })
        setTotal(tot);
        /*fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                tot += parseFloat(anuncio.vcampanha)
                console.log(tot)
            })
            setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            setAnuncios(responseJson)

        }) */
        
        
    }, [])

	return(
		<>
			<Box sx={{ mt: 5}}>
	            {servicos.length == 0? 
	                <Typography sx={{m:'1px auto'}}>Não há vendas</Typography>
	                :
	                <>
	                	<Box
		                    sx={{  
		                        display: 'flex', 
		                        justifyContent: 'space-between',
		                        mb: 1,
		                        '@media (max-width: 670px)': { 
		                        	display: 'flex', 
		                        	flexDirection: 'column',
		                        	justifyContent: 'center', 
		                        },                    
		                    }}
		                >
		                	<Box>
				            		<Search>
				  		            <SearchIconWrapper>
				  		              <SearchIcon />
				  		            </SearchIconWrapper>
				  		            <StyledInputBase
				  		              placeholder="buscar nome"
				  		              inputProps={{ 'aria-label': 'search' }}
				                    onChange={(e) => handleSearch(e.target.value)}
				  		            />
				  		          </Search>
				            	</Box>		                	
									<Box 
										sx={{
											display: 'flex',
											'@media (max-width: 670px)': { 
													mt: 1
											}
										}}
									>
												
										<Button  
				                        onClick={handleClose}
				                        
				                        size="small"
				                        sx={{  
				                            mr:1,                  
				                            color: 'white', 
				                            borderRadius: 0,                           
				                            fontFamily: 'Roboto, sans-serif',
				                            fontSize: '14px',
				                            '&:hover': {                       
				                                transition: 'all 400ms',
				                                backgroundColor: `${secudary}`,
				                            },
				                        }}
				                    >
				                        <EventAvailable />
				                    </Button>		                    
		                    <Button  
		                       // onClick={() => getAllUsers()}
		                        
		                        //variant="outlined"
		                        size="small"
		                        sx={{  
		                            mr:1,                  
		                            color: `${secudary}`, 
		                            borderRadius: 0,                          
		                            fontFamily: 'Roboto, sans-serif',
		                            fontSize: '14px',
		                            '&:hover': {                       
		                                transition: 'all 400ms',
		                                backgroundColor:  `${secudary}`,
		                                color: 'white',
		                            },
		                        }}
		                    >
		                     <ShoppingCart />
		                    </Button>
		                     <Button  
		                        onClick={() => handleAdd()}                                    
		                        sx={{  
		                            mr:1,                  
		                            color: 'white',
		                            borderRadius: 0,
		                            backgroundColor:  `${secudary}`,
		                            fontFamily: 'Roboto, sans-serif',
		                            fontSize: '14px',
		                            '&:hover': {                       
		                                transition: 'all 400ms',
		                                color:  `${secudary}`,
		                            },
		                        }}
		                    >
		                    	<Add />
		                    </Button>

											</Box> 
		                	
		                </Box> 

		                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
	                	 
		                  <TableContainer sx={{ maxHeight: 440 }}>
		                      <Table stickyHeader aria-label="sticky table">
		                      <TableHead>
		                          <TableRow className={classes.root}>                         
		                             
		                              
		                              <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              >
		                                  SERVIÇO
		                              </TableCell>

		                              <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              >
		                                  CLIENTE
		                              </TableCell>
		                              
		                              <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              >
		                                  PAGAMENTO
		                              </TableCell>

		                               <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              	>
		                                  DESCRIÇÃO
		                              </TableCell>

		                              <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              	>
		                                  DATA
		                              </TableCell>
		                              
		                              <TableCell                       
		                                  align={'center'}
		                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
		                              >
		                                  OPCÕES
		                              </TableCell>
		                      
		                          </TableRow>
		                      </TableHead>
		                      <TableBody>
		                          {servicos
		                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		                          .map((row) => {
		                              return (
		                              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        

		                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
		                                      {row.service}
		                                  </TableCell>

		                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
		                                      {row.client}
		                                  </TableCell>

		                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
		                                      {row.pagamento}
		                                  </TableCell>

		                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
		                                      {row.descricao}
		                                  </TableCell>

		                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
		                                      {row.data}
		                                  </TableCell>
		                                      
		                                    <TableCell align={'center'}>
		                                    		<IconButton 
		                                            onClick={() => handleEditar(row)} 
		                                            size="small" 
		                                            aria-label="show 4 new mails" 
		                                            color="inherit"
		                                            sx={{ borderRadius: 0 }}
		                                        >
		                                            <Print sx={{ color: `${secudary}`, fontSize: '15px'}} />
		                                        </IconButton>
		                                        <IconButton 
		                                            onClick={() => handleEditar(row)} 
		                                            size="small" 
		                                            aria-label="show 4 new mails" 
		                                            color="inherit"
		                                            sx={{ borderRadius: 0 }}
		                                        >
		                                            <Edit sx={{ color: `${secudary}`, fontSize: '15px'}} />
		                                        </IconButton>
		                                        <IconButton 
		                                            onClick={() =>  handleDelete(row)} 
		                                            size="small" 
		                                            aria-label="show 4 new mails" 
		                                            color="inherit"
		                                            sx={{ borderRadius: 0 }}
		                                        >
		                                            <Delete sx={{ color: `red`, fontSize: '15px'}} />
		                                        </IconButton>
		                                          
		                                         
		                                  </TableCell>
		                              
		                              </TableRow>
		                              );
		                          })}
		                      </TableBody>
		                      </Table>
		                  </TableContainer>
		                  <TablePagination
		                      rowsPerPageOptions={[10, 25, 100]}
		                      component="div"
		                      count={servicos.length}
		                      rowsPerPage={rowsPerPage}
		                      page={page}
		                      onPageChange={handleChangePage}
		                      onRowsPerPageChange={handleChangeRowsPerPage}
		                  />
		              </Paper>
	                </>
	                
	            }
	        </Box>

	        <Model
	            title={title}
	            openModel = {openModel}
	            setOpenModel = {setOpenModel}
	        >
	          {
	          getComponent()
	          }
	      </Model>       
			
		</>

	)


}
export default Servicospainel;