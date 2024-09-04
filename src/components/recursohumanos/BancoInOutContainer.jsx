import {useState} from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';
//import Login from './Login';
//import Singup from './Singup';
//import AccountRefresh from './AccountRefresh';
//import CodeRefresh from './CodeRefresh';
//import Refresh from './Refresh';
import Formbanco from '../empreendedor/Formbanco';


function TabPanel(props) {
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
        <Box>
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

export default function BancoInOutContainer({tab, setClose, setPainel, setTitle, setUser, opcao, setOpcao,  setLogado, setStatus}){

  const [value, setValue] = useState(tab);
  //const [message, setMessage] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [idetify, setIdetify] = useState('');
	const handleChange = (event, newValue) => {
	setValue(newValue);
	};

	const [banco, setBanco] = useState({
        id: 0,
        nome: '',
        email: '',
        bank: '',
        agencia: '',
        nconta: '',
        tipoConta: '',
        nIdentidade: '',
        cell: '',  
        idTitular: 0

    });

	return(
		<>
	      <TabPanel value={value} index={0}>
	        <Formemployees handleChange={handleChange} setClose={setClose} setPainel={setPainel} setTitle={ setTitle } setUser={setUser} setOpcao={setOpcao}/>
	      </TabPanel>
	      
	      <TabPanel value={value} index={1}>
	        <Formbanco handleChange={handleChange} setTitle={ setTitle } opcao={opcao}/>
	      </TabPanel>

		</>
	)
}
