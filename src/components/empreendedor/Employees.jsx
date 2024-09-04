import { Box,  Grid, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { SwitchAccount, ForwardToInbox, MonetizationOn, ToggleOn, ToggleOff,Visibility, VisibilityOff, AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
//import Formfuncionario from './Formfuncionario';
//import Deletefuncionario from './Deletefuncionario';
//import Paymentsfunc from './Paymentsfunc';
import Funcionariomore from './Funcionariomore';
import Paymentemployees from './Paymentemployees';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "#F9CC19"
        },
    }
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

function createData(id, name, salario, empresa, bi, cell, email, endereco, profissao, data_create, image) {
  return {id, name, salario, empresa, bi, cell, email, endereco, profissao, data_create, image};
}


const rows = [
    createData(1, 'Pedro Mzongi', 14000, 'SEGMENT S.A','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','GESTOR DE MIDIAS', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(2, 'Nzimba Pedro', 50000, 'SEGMENT S.A','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','CONTABILISTA', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(3, 'Florinda Miranda', 20000, 'SEGMENT S.A','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','VENDEDOR', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(4, 'Jacito Milto', 150000, 'SEGMENT S.A','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','RECURSOS HUMANOS', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(5, 'Mpanzo Pjango', 40000, 'SEGMENT S.A','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','ORGANIZACAO', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(7, 'Maria Mzongi', 14000, 'COFFE HOUSE LDA','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','GESTOR DE MIDIAS', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(8, 'Nzimba Pedro', 30000, 'COFFE HOUSE LDA','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','CONTABILISTA', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(9, 'Florinda Miranda', 20000, 'COFFE HOUSE LDA','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','VENDEDOR', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(10, 'Jacito Milto', 120000, 'COFFE HOUSE LDA','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','RECURSOS HUMANOS', '10 de julho de 2023', 'juvenalll.jpg'),
    createData(11, 'Mzinga Phanzo', 20000, 'COFFE HOUSE LDA','83282424MN944', '923 564 584','pedromzongi@gmail.com', 'Luanda, viana, caop-b, rua: pedro Nzimba nº25','ORGANIZACAO', '10 de julho de 2023', 'juvenalll.jpg'),
    
];

function Employees(props) {

	const { primery, secudary } = props;
	const classes = useStyles();

    //const [value, setValue] = useState(dayjs('02/10/2023'));
	const [funcionarios, setFuncionarios] = useState(rows)
	const [total, setTotal] = useState(0);
    const [convites, setConvites] = useState([])
    const [showPassword, setShowPassword] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [title, setTitle] = useState('');
    const [opcao, setOpcao] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        
    };

     const handleSearch = (search) => {

      let new_list = funcionarios.filter(funcionario=> funcionario.name.includes(search));
      //setFuncionarios()
      console.log(new_list)
      setFuncionarios(new_list)

      if(search == '')
        setFuncionarios(funcionarios)

    };

    const handlepPay = (funcionario) => {
      setOpcao('PAYMENT');
      setTitle('PAGAMENTOS');
      setOpenModel(true);
      setFuncionaro({
        id: funcionario.id,
        name: funcionario.name,
        salario: funcionario.salario, 
        empresa: funcionario.empresa,
        bi: funcionario.bi,
        cell: funcionario.cell,
        email: funcionario.email,
        endereco: funcionario.endereco,
        profissao: funcionario.profissao,
        data_create: funcionario.data_create,
        image: funcionario.image
      })

    };

    const handleAdd = () => {
      setOpcao('ADD');
      setTitle('ADD FUNCIONARIO');
      setOpenModel(true);

    };
    //console.log(currencies)
    const handleMore = (funcionario) => {
      setOpcao('MORE');
      setTitle('INFO FUNCIONARIO');
      setOpenModel(true);
      setFuncionaro({
          id: funcionario.id,
          name: funcionario.name,
          salario: funcionario.salario, 
          empresa: funcionario.empresa,
          bi: funcionario.bi,
          cell: funcionario.cell,
          email: funcionario.email,
          endereco: funcionario.endereco,
          profissao: funcionario.profissao,
          data_create: funcionario.data_create,
          image: funcionario.image
      })
      
    };

  

    const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return //<Formfuncionario foto="sem-foto.jpg" funcionaro={funcionaro} opcao={opcao} setFuncionaro={setFuncionaro} setOpenModel={setOpenModel} primery={primery} secudary={secudary}  />; 
        case 'MORE':           
              return <Funcionariomore funcionario={funcionaro} primery={primery} secudary={secudary}   />; 
        case 'PAYMENT':
              return <Paymentemployees funcionario={funcionaro}  primery={primery} secudary={secudary}/>;
        default: 
          return null;
      }
    }


    useEffect(() => {
		let tot = 0;  
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
			<div style={{marginBottom: 50}}>
        <Typography
            sx={{
                fontWeight: 500,
                fontSize: '25px',                   
                fontFamily: 'Oswald, sans-serif',
                '@media (max-width: 800px)': { fontSize: '15px' },
            }}
        >
            FUNCIONÁRIOS
        </Typography>
        <Typography
            sx={{                    
                fontSize: '15px',                                       
                fontFamily: 'Wix Madefor Display, serif',
                '@media (max-width: 800px)': { fontSize: '10px' },
            }}
        >
            Consulte aqui os seus funcionarios, salarios e pagamentos.
        </Typography>     
    </div>
        <Box sx={{ mt: 5}}>
            {funcionarios.length == 0? 
                <Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
                :
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                          <TableRow className={classes.root}>                         
                             
                              
                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  NAME
                              </TableCell>

                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  TELEFONE
                              </TableCell>
                              
                              <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  ENDEREÇO
                              </TableCell>

                               <TableCell                       
                                  align={'center'}
                                  style={{ minWidth: 100, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '12px' }}
                              >
                                  PROFISSÃO
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
                          {funcionarios
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                              return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>        

                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
                                      {row.name}
                                  </TableCell>

                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
                                      {row.cell}
                                  </TableCell>

                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
                                      {row.endereco}
                                  </TableCell>

                                  <TableCell align={'center'} sx={{fontFamily: 'Wix Madefor Display, serif', fontSize: '11px'}}>
                                      {row.profissao}
                                  </TableCell>
                                      
                                    <TableCell align={'center'}>
                                        <IconButton 
                                            onClick={() =>  handlepPay(row)} 
                                            size="small" 
                                            aria-label="show 4 new mails" 
                                            color="inherit"
                                            sx={{ borderRadius: 0 }}
                                        >
                                            <MonetizationOn sx={{ color: 'green', fontSize: '20px'}} />
                                        </IconButton>
                                        <IconButton 
                                            onClick={() =>  handleMore(row)} 
                                            size="small" 
                                            aria-label="show 4 new mails" 
                                            color="inherit"
                                            sx={{ borderRadius: 0 }}
                                        >
                                            <SwitchAccount sx={{ color: `${secudary}`, fontSize: '20px'}} />
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
                      count={funcionarios.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                  />
              </Paper>
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
export default Employees;
