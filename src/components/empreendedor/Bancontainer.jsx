import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Formbanco from './Formbanco';
import ShowRede from './ShowRede';

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

export default function Bancontainer({ setOpenModel, primery, secudary, opcao, setOpcao }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <CustomTabPanel value={value} index={0}>
        <Formbanco setValue={setValue} opcao={opcao} setOpcao={setOpcao} setOpenModel={setOpenModel} secudary={secudary} primery={primery} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ShowRede   setOpenModel={setOpenModel}  setValue={setValue} setOpcao={setOpcao} secudary={secudary} primery={primery} />
      </CustomTabPanel>
    </Box>
  );
}

