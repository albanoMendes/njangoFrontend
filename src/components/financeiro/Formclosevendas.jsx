import {useState, useRef, forwardRef, useEffect} from 'react';
import { DialogActions, Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "../empreendedor/Form.module.css";


function Formclosevendas({ setValue, foto, opcao, setOpcao, setOpenModel, primery, secudary, user}) {

	const [selectedImage, setSelectedImage] = useState();
    const [img, setImg] = useState(foto)
    const selectFile = useRef();

    const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };

    const [closevenda, setClosevenda] = useState({
        id: '',
        valor: '',
        mes: '',
        ano: 2024,
        data: '',
        userid: '',
        file: '',  
    });


    const handleChannge=(e)=>{
        setClosevenda({...closevenda,[e.target.name]: e.target.value})
    };


	return(
		<Paper 
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: 'rgba(0, 0, 0, 0.0)', borderRadius: 0}}
		>
			<Box>
				<div className={classes.input_box} >
	        		<label for="fvalor" style={{}}>VALOR</label>
					<input 
						type="number" 
						id="fvalor" 
						name="valor" 
						value={closevenda.valor}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>

	        	<div className={classes.input_box} >
	        		<label for="fdata" style={{}}>DIA</label>
					<input 
						type="date" 
						id="fdata" 
						name="data" 
						value={closevenda.data}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>

	        	<div className={classes.input_box} >
	        		<label for="farquivo" style={{}}>COMPROVATE</label>
					<input 
						type="file" 
						id="farquivo" 
						name="file" 
						value={closevenda.file}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>


			</Box>

			<Box>         
		        <Button
		          //onClick={handleDelete}
		          sx={{
		              m: '2px 0',
		              color: 'white',
		              border: 'none',
		              cursor: 'pointer',		
		              textDecoration: 'none',
		              fontSize: '12px',
		              fontFamily: 'Roboto, sans-serif',
		              borderRadius: 0,
		              backgroundColor: `${secudary}`,
		              '&:hover': {
			              color: '#013039',
			              cursor: 'pointer',
			              transition: '0.3s ease-in',
		              },
		          }}			
		          >
		            {opcao}
		        </Button>
		        <Button
		          onClick={() => setValue(0)}
		          sx={{
		              ml: 0.5,
		              color: 'white',
		              fontFamily: 'Roboto, sans-serif',
		              borderRadius: 0,
		              fontSize: '12px',
		              '&:hover': {
			              color: `${secudary}`,
			              transition: 'all 400ms',
		              },
		          }}
		        >
		          VOLTAR
		        </Button>
		    </Box>
			
		</Paper>

	)

}

export default Formclosevendas;