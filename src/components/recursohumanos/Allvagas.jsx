import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {AutoStories, Downloading, StopCircle, Edit } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
//import Model from "../Model";
//import Read from "./Read";
import Model from "../Model";
import Formvagas from "./Formvagas";
//import Deletepartener from "./Deletepartener";
import EditIcon from '@mui/icons-material/Edit';
//import Formpartener from './Formpartener';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function createData(id, dep, nvagas, perfil, descricao, data, status, ncaditados) {
  return {
    id,
    dep,
    nvagas,
    perfil,
    descricao,
    data,
    status, 
    ncaditados
  };
}

const rows = [
  createData(1, 'MARKETING', 10, 'Que saiba usar as redes socias e que estaja disposto a aprender', 'Vaga para área de Markting digital','Apr 21, 2023 at 12:05 pm', 'ATIVO', 5 ),
  createData(2, 'FINANCEIRO', 5, 'Ensino medio concluido, em economia ou contabilidade.\n Requisito Importante: \nVontade de aprender e crescer profissional', 'Vaga para área de Contabilidade, para formados e estudantes de contabilidade ou econõmia','Apr 21, 2023 at 12:05 pm', 'ATIVO', 5 ),
  createData(3, 'TECNOLOGIA', 7, 'Que saiba alguma linguagem de programação como Python, PHP, ReactJS etc. \n Requisito Importante: \nVontade de aprender e crescer profissional', 'Vaga para área de Tecnologia','Apr 21, 2023 at 12:05 pm', 'ATIVO', 5 ),
  createData(4, 'RH', 15, 'Ensino medio concluido, em economia ou contabilidade.\n Requisito Importante: \nVontade de aprender e crescer profissional', 'Vaga para área de Contabilidade, para formados e estudantes de contabilidade ou econõmia','Apr 21, 2023 at 12:05 pm', 'NO', 5 ),
  createData(5, 'FINACEIRO', 20, 'Que saiba alguma linguagem de programação como Python, PHP, ReactJS etc. \n Requisito Importante: \nVontade de aprender e crescer profissional', 'Vaga para área de Tecnologia','Apr 21, 2023 at 12:05 pm', 'NO', 5 ),

]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'dep',
    numeric: false,
    disablePadding: false,
    label: 'DEPARTAMENTO',
  },
   
  {
    id: 'vaga',
    numeric: false,
    disablePadding: false,
    label: 'VAGAS',
  },
  {
    id: 'desc',
    numeric: false,
    disablePadding: false,
    label: 'DESCRIÇÃO',
  },
  {
    id: 'perfil',
    numeric: false,
    disablePadding: false,
    label: 'PERFIL DO CAND',
  },
  {
    id: 'cad',
    numeric: false,
    disablePadding: false,
    label: 'Nº CAND',
  },
  {
    id: 'data',
    numeric: false,
    disablePadding: false,
    label: 'DATA',
  },
  {
    id: 'opcao',
    numeric: false,
    disablePadding: false,
    label: 'Opção',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontSize: '.7rem',
                fontFamily: 'Oswald, sans-serif',
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ 
            flex: '1 1 100%',
            color: '#F9CC19', 
            fontSize: '1.2rem',
            fontFamily: 'Oswald, sans-serif',
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Total de Vagas
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function Allvagas(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;


	const [openModel, setOpenModel] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [opcao, setOpcao] = React.useState('');

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('dep');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [vagas, setVagas] = React.useState(rows);
  const [total, setTotal] = React.useState(0);


  const [vaga, setVaga] = React.useState({
	   	id: 0,
	    dep: '',
	    nvagas: 0,
	    perfil: '',
	    descricao: '',
	    data: '',
	    status: '', 
	    ncaditados: 0,
	})

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = vagas.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleADD = () => {
      setOpcao('ADD');
      setTitle('ADD VAGA');
      setOpenModel(true);
    };

  const handleEDITAR = (vaga) => {
      setOpcao('EDITAR');
      setTitle('EDITAR VAGA');
      setOpenModel(true);
      setVaga({
       	id: vaga.id,
    	dep: vaga.dep,
    	nvagas: vaga.nvagas,
    	perfil: vaga.perfil,
    	descricao: vaga.descricao,
    	data: vaga.data,
    	status: vaga.status, 
    	ncaditados: vaga.ncaditados,
      })
      
    };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - vagas.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(vagas, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

   React.useEffect(() => {
    	//let totd = 0;
    	let totl = 0;
    	vagas.forEach((vagain) => {
            //totd += parseFloat(empresa.despesa)
           if(vagain.status == 'ATIVO')
            	totl += vagain.nvagas
            //console.log(tot)
        })
        setTotal(totl)
        //setDespesas(totd)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
    }, [])

   const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <Formvagas primery={primery} secudary={secudary} emprego={vaga} opcao={opcao} setOpenModel={setOpenModel} />;
        case 'EDITAR':           
              return <Formvagas primery={primery} secudary={secudary} emprego={vaga} opcao={opcao} setOpenModel={setOpenModel} />;
        case 'DELETE':
              //return <Deleteblog blog={blog} setOpenModel={setOpenModel}  primery={primery} secudary={secudary}/>;
       	case 'CLOSE':
              return //<Bancocontainer  primery={primery} secudary={secudary}/>;
        default: 
          return null;
      }
    }


	return(
		<>
			<Grid container>
				<Grid item xs={12} sm={12} md={8}>
                <Typography
		                sx={{
		                    fontWeight: 400,
		                    fontSize: '25px',                   
		                    fontFamily: 'Oswald, sans-serif',
		                    '@media (max-width: 800px)': { fontSize: '15px' },
		                }}
		            >
		                VAGAS DE EMPREGO
		            </Typography>
		            <Typography
	                    sx={{                    
	                        fontSize: '15px',                                       
	                        fontFamily: 'Wix Madefor Display, sans-serif',
	                        '@media (max-width: 800px)': { fontSize: '10px' },
	                    }}
	                >
		               	Cadastre e contrele as vagas de empregos
		            </Typography>        
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                		<Paper                     	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            minWidth: 200,
	                            borderRadius: 0, 
	                            display: 'flex', 
		            			flexDirection: 'column',
		            			justifyContent: 'center',
		            			alignItems: 'center',
		    					textAlign: 'center',    

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
	                            {'Nº DE VAGAS ATIVAS'}
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
	                                    {`${total}`}
	                                </Typography>
	                    
	                            </div>              
	                    </Paper>

                </Grid>
                
			</Grid>

			<Box
                sx={{  
                    display: 'flex', 
                    float: 'right',
                    //mb: 1,
                    //mt: -2,
                    //width:  '100%'                   
                }}
            >
            	<IconButton  
                    onClick={() => handleADD()}                                    
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

	        <Box
				sx={{mt: 5}}
			>
				{vagas.length == 0 ? 

					<Typography
	                    sx={{
	                        pl: 1,
	                      	fontSize: '35px', 
							fontWeight: 500, 
							fontFamily: 'Six Caps, sans-serif',
							'@media (max-width: 800px)': { fontSize: '25px' },                          
	                 
	                        
	                    }}
	                >
	                    Não há vagas de emprego
	                </Typography>

					:
					<Paper>
				      <Box sx={{ width: '100%' }}>
				        <Paper sx={{ width: '100%', mb: 2 }}>
				          <EnhancedTableToolbar numSelected={selected.length} />
				          <TableContainer>
				            <Table
				              //sx={{ minWidth: 600 }}
				              aria-labelledby="tableTitle"
				              size={dense ? 'small' : 'medium'}
				            >
				              <EnhancedTableHead
				                numSelected={selected.length}
				                order={order}
				                orderBy={orderBy}
				                onSelectAllClick={handleSelectAllClick}
				                onRequestSort={handleRequestSort}
				                rowCount={rows.length}
				              />
				              <TableBody>
				                {visibleRows.map((row, index) => {
				                  const isItemSelected = isSelected(row.id);
				                  const labelId = `enhanced-table-checkbox-${index}`;

				                  return (
				                    <TableRow
				                      hover
				                      //onClick={(event) => handleClick(event, row.id)}
				                      //role="checkbox"
				                      //aria-checked={isItemSelected}
				                      tabIndex={-1}
				                      key={row.id}
				                      //selected={isItemSelected}
				                      sx={{ 
				                        cursor: 'pointer', 
				                        
				                      }}
				                    >
				                    
				                      <TableCell
				                        component="th"
				                        id={labelId}
				                        scope="row"
				                        //padding="none"
				                        sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.dep}
				                      </TableCell>
				                      <TableCell 
				                        align="center" 
				                        sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.nvagas}
				                      </TableCell>
				                      <TableCell 
				                        align="center" 
				                        sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.descricao}
				                      </TableCell>
				                      <TableCell 
				                        align="center"
				                         sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.perfil}
				                      </TableCell>
				                      <TableCell 
				                        align="center"
				                        sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.ncaditados}
				                      </TableCell>

				                      <TableCell 
				                        align="center"
				                        sx={{
				                          fontSize: '.6rem', 
				                          fontFamily: 'Wix Madefor Display, sans-serif',
				                        }}
				                      >
				                        {row.data}
				                      </TableCell>

				                      <TableCell align={'center'}>
				                            <IconButton 
				                                onClick={() => handleEDITAR(row)} 
				                                size="small" 
				                                aria-label="show 4 new mails" 
				                                color="inherit"
				                                sx={{ borderRadius: 0 }}
				                            >
				                                <Edit sx={{ color: `${'#F9CC19'}`, fontSize: '15px'}} />
				                            </IconButton>
				                            {row.status == 'ATIVO' ?
				                            	<IconButton 
					                                //onClick={() =>  handleDelete(row)} 
					                                size="small" 
					                                aria-label="show 4 new mails" 
					                                color="inherit"
					                                sx={{ borderRadius: 0 }}
					                            >
					                                <StopCircle sx={{ color: `red`, fontSize: '15px'}} />
					                            </IconButton> 				                            	
				                            	:
				                            	<IconButton 
					                                //onClick={() =>  handleDelete(row)} 
					                                size="small" 
					                                aria-label="show 4 new mails" 
					                                color="inherit"
					                                sx={{ borderRadius: 0 }}
					                            >
					                                <DeleteIcon sx={{ color: `red`, fontSize: '15px'}} />
					                            </IconButton> 	

				                            }
				                                                      
				                             
				                      </TableCell>
				                    </TableRow>
				                  );
				                })}
				                {emptyRows > 0 && (
				                  <TableRow
				                    style={{
				                      height: (dense ? 33 : 53) * emptyRows,
				                    }}
				                  >
				                    <TableCell colSpan={6} />
				                  </TableRow>
				                )}
				              </TableBody>
				            </Table>
				          </TableContainer>
				          <TablePagination
				            rowsPerPageOptions={[5, 10, 25]}
				            component="div"
				            count={rows.length}
				            rowsPerPage={rowsPerPage}
				            page={page}
				            onPageChange={handleChangePage}
				            onRowsPerPageChange={handleChangeRowsPerPage}
				          />
				        </Paper>
				        <FormControlLabel
				          control={<Switch checked={dense} onChange={handleChangeDense} />}
				          label="Dense padding"
				        />
				      </Box>

				      	<Model
				            title={title}
				            openModel = {openModel}
				            setOpenModel = {setOpenModel}
				        >
				        	{getComponent()}
				      	</Model>      
				   </Paper>
				}
			</Box>


		</>
	)

}
export default Allvagas;