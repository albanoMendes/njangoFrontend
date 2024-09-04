import { useState } from 'react';
import {Box, Typography, Divider, Grid} from '@mui/material';
import {Watch, Mail, LocationOn, LocalPhone, MailOutline} from '@mui/icons-material';
import logo from '../assets/LogoIn13.png';
//import classes from "./Footer.module.css";



function Footerpainel(props) {

	const { primery, secudary } = props;

	return(
		<Box
			sx={{
				bgcolor: `${primery}`,
          		//textAlign: 'center',
          		p: 10,
			}}

		>

		</Box>
	)

}

export default Footerpainel;