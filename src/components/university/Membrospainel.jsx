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
import {AutoStories, Downloading} from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import Model from "../Model";
import Read from "./Read";
import Deletepartener from "./Deletepartener";
import EditIcon from '@mui/icons-material/Edit';
import Formpartener from './Formpartener';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function createData(id, name, curso, semestre, phone, email) {
  return {
    id,
    name,
    curso,
    semestre,
    phone,
    email
  };
}

const rows = [
  createData(1, 'Paulo Miranda', 'Contabilidade', '2024.2', '+244 924 432 334', 'paulomm@gmail.com' ),
  createData(2, 'Paulo Miranda', 'Contabilidade', '2024.2', '+244 924 432 334', 'paulomm@gmail.com' ),
  createData(3, 'Paulo Miranda', 'Contabilidade', '2024.2', '+244 924 432 334', 'paulomm@gmail.com' ),
  createData(4, 'Paulo Miranda', 'Contabilidade', '2024.2', '+244 924 432 334', 'paulomm@gmail.com' ),
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
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'curso',
    numeric: false,
    disablePadding: false,
    label: 'Curso',
  },
  {
    id: 'semestre',
    numeric: false,
    disablePadding: false,
    label: 'Semestre',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'tel',
    numeric: false,
    disablePadding: false,
    label: 'Tel',
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
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontSize: '.9rem',
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
          Participantes
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

function Membrospainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;


	const [parter, setParter] = React.useState({
	    id: 0,
	    name: '',
	    curso: '', 
	    semestre: '',
	    phone: '',
	    email: '',
	 })

  const [openModel, setOpenModel] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [opcao, setOpcao] = React.useState('');

    const [blogs, setBlogs] = React.useState(rows);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  	const handleAdd = () => {
      setOpcao('ADD');
      setTitle('CADASTRAR PARTICIPANTE');
      setOpenModel(true);

    };

   
    	//console.log(currencies)
   const handleEditar = (parter) => {
    	//console.log(currencies)
    	setOpcao('EDITAR');
       setTitle('EDITAR PARTICIPANTE');
       setOpenModel(true);
       setParter({
       		id: parter.id,
    		name: parter.name,
    		curso: parter.curso, 
    		semestre: parter.semestre, 
    		phone: parter.phone,
    		email: parter.email,
       })
   };


   const handleDelete = (parter) => {

   		setOpcao('DELETE');
       setTitle('DELETAR PARTICIPANTE');
       setOpenModel(true);
       setParter({
       		id: parter.id,
    		name: parter.name,
    		curso: parter.curso, 
    		semestre: parter.semestre, 
    		phone: parter.phone,
    		email: parter.email,
       })
      
    };




      
      
 

  	const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <Formpartener partenerin={parter} tipoUser={''}  opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary}  />; 
        case 'READ':
        	return //<Read primery={primery} secudary={secudary} blog={blog}/>;
        case 'EDITAR':           
              return <Formpartener partenerin={parter} tipoUser={''}  opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary}  />; 
        case 'DELETE':
              return <Deletepartener partener={parter} setOpenModel={setOpenModel}  primery={primery} secudary={secudary}/>;
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
		                PARTICIPANTES DO ESTUDO
		            </Typography>
		            <Typography
	                    sx={{                    
	                        fontSize: '15px',                                       
	                        fontFamily: 'Wix Madefor Display, sans-serif',
	                        '@media (max-width: 800px)': { fontSize: '10px' },
	                    }}
	                >
		               	Insere aqui os participantes do estudo para elaboração do artigo do semestre.
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
	                            {'TOTAL DE PARTICIPANTES'}
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
	                                    {`${rows.length}`}
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

	        <Box
				sx={{mt: 5}}
			>
				{blogs.length == 0 ? 
					<Typography
	                    sx={{
	                        pl: 1,
	                      	fontSize: '35px', 
							fontWeight: 500, 
							fontFamily: 'Six Caps, sans-serif',
							'@media (max-width: 800px)': { fontSize: '25px' },                          
	                        
	                        
	                    }}
	                >
	                    Não tem nenhum Artigo
	                </Typography>
					:
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
			                      //tabIndex={-1}
			                      //key={row.id}
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
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.name}
			                      </TableCell>
			                      <TableCell 
			                        align="left" 
			                        sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.curso}
			                      </TableCell>
			                      <TableCell 
			                        align="left"
			                         sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.semestre}
			                      </TableCell>

			                      <TableCell 
			                        align="left"
			                         sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.email}
			                      </TableCell>


			                      <TableCell 
			                        align="left"
			                        sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.phone}
			                      </TableCell>

			                      <TableCell align={'left'}>
			                      		<IconButton 
			                                onClick={() => handleEditar(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <EditIcon sx={{ color: `${'#F9CC19'}`, fontSize: '15px'}} />
			                            </IconButton>			                            
			                            <IconButton 
			                                onClick={() =>  handleDelete(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <DeleteIcon sx={{ color: `red`, fontSize: '15px'}} />
			                            </IconButton>                           
			                             
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
export default Membrospainel;