import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bankaccount from '../Bankaccount';
import Formclosevendas from './Formclosevendas';
//import ShowRede from './ShowRede';

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
        <Box sx={{ p: 3 }}>
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

export default function Bancocontainer({ setOpenModel, primery, secudary, opcao, setOpcao, user, total }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [banco, setBanco] = React.useState({
    id: 'fje894201923',
    name: 'Njango Investment',
    bank: '(BFA) BANCO DE FOMENTO ANGOLA',
    agencia: '0021',
    conta: '0002825442-1',
    ibam: '23462364253732074628638548232',
  })

  return (
    <Box sx={{ width: '100%' }}>
      <CustomTabPanel value={value} index={0}>
       <Bankaccount setValue={setValue} banco={banco} setBanco={setBanco} opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Formclosevendas setValue={setValue} opcao={'ADD'}  setOpenModel={setOpenModel} primery={primery} secudary={secudary} user={user} />
      </CustomTabPanel>
    </Box>
  );
}
