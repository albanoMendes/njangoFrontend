import {useState} from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';
import Login from './Login';
import Singup from './Singup';
import AccountRefresh from './AccountRefresh';
import CodeRefresh from './CodeRefresh';
import Refresh from './Refresh';
//import Messages from '../Messages';


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

// eslint-disable-next-line react/prop-types
export default function SignInOutContainer({tab, setClose, setPainel, setTitle, setUser, opcao, setOpcao,  setLogado, setStatus}){

  const [value, setValue] = useState(tab);
  //const [message, setMessage] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [idetify, setIdetify] = useState('');
	const handleChange = (event, newValue) => {
	setValue(newValue);
	};

	return(
		<>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} setClose={setClose} setPainel={setPainel} setTitle={ setTitle } setUser={setUser} setOpcao={setOpcao}/>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Singup foto="sem-foto.jpg" handleChange={handleChange} setTitle={ setTitle } opcao={opcao}/>
      </TabPanel>
     
      <TabPanel value={value} index={2}>
        <AccountRefresh  handleChange={handleChange} setCodigo={setCodigo} setIdetify={setIdetify}/>
      </TabPanel>
      
      <TabPanel value={value} index={3}>
        <CodeRefresh handleChange={handleChange} codigo={codigo} idetify={idetify} setCodigo={setCodigo}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Refresh idetify={idetify} handleChange={handleChange}/>
      </TabPanel>

      

		</>
	)
}
