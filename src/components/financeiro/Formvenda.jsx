import {useState, useRef, forwardRef, useEffect} from 'react';
import { DialogActions, Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone, AddShoppingCart, ShoppingCart } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "../empreendedor/Form.module.css";


function createData(id, name, preco, qtd, total, empresa, mes, ano, data, datatime, iduser) {
  return {id, name, preco, qtd, total, empresa, mes, ano, data, datatime, iduser};
}

const rows = [
	createData(1, 'Croassa e caputchino', 4000, 3, 1200,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(2, 'Bolo café Preto', 2000, 3, 6000,'COFFE HOUSE LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(3, 'Chá preto e chadwiche', 1000, 3, 3000,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(4, 'Croassa e Chá preto', 5000, 3, 1500,'COFFE HOUSE LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(5, 'Chadwiche e caputchino', 4000, 3, 1200,'COFFE HOUSE LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'), 
];



function Formvenda({ setValue, foto, opcao, setOpcao, setOpenModel, primery, secudary, user, sel, empresa}) {

	const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');
    const [novo, setNovo] = useState(false);
    const [produtos, setProdutos] = useState(rows)
    const [novocolor, setNovocolor] = useState('');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	const d = new Date();
	let month = months[d.getMonth()];


    const [venda, setVenda] = useState({
    	id: '', 
    	name: '', 
    	preco: 0, 
    	qtd: 0, 
    	total: '', 
    	empresa: empresa.name, 
    	mes: month, 
    	ano: d.getFullYear(),    
    	datatime: (new Date()).toLocaleString(), 
    	iduser: ''
    });


    const handleNew = () => {
    	if(opcao == 'EDITAR'){
    		setNovo(false)
    	} else {
    		setNovo(novo ? false : true );
    	}
    }
    const handleChannge=(e)=>{
        setVenda({...venda,[e.target.name]: e.target.value})
    };

    useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
			setVenda({
				id: sel.id, 
		    	name: sel.name, 
		    	preco: sel.preco, 
		    	qtd: sel.qtd, 
		    	total: sel.total, 
		    	empresa: sel.empresa, 
		    	mes: sel.mes, 
		    	ano: sel.ano,    
		    	datatime: sel.datatime, 
		    	iduser: sel.iduser
			})
		}


	}, [])

	return(
		<Paper 
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: 'rgba(0, 0, 0, 0.0)', borderRadius: 0}}
		>

			<Button  
               	onClick={handleNew}
                
                //variant="outlined"
                size="small"
                sx={{  
                    mr:1,                  
                    color: `${novo ? secudary : 'white'}`, 
                    borderRadius: 0,                          
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    backgroundColor: `${novo ? '' : secudary}`,
                    '&:hover': {                       
                        transition: 'all 400ms',
                        backgroundColor:  `${secudary}`,
                        color: 'white',
                    },
                }}
            >
            	{novo ?            		
            		<AddShoppingCart />
            		:
             	 	<ShoppingCart />
            	}
            </Button>
            {novo ?
            	<div className={classes.input_box} >
	        		<label for="fname" style={{}}>NOVO PRODUTO</label>
					<input 
						type="text" 
						id="fname" 
						name="name" 
						value={venda.name}
						onChange={handleChannge}
						//style={styles.input}
					/>


	        	</div>
            	:
            	<div className={classes.input_box} >                            	
					<label for="fproduto" style={{}}>PRODUTO</label>
				    <select 
				    	id="fproduto" 
				    	name="name"
				    	onChange={handleChannge}
						value={venda.name}
				    	
				    >
				    	{
				    		produtos.map((produto, index) => {
								return (
									<option 
										key={index}
								      	value={produto.name} 
								      	style={{
								      		fontSize: '14px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	{produto.name}
								    </option>				
								)
			                })


				    	}
				    </select>
                </div>
            }
            <Box
            	sx={{
            		display: 'flex',
            		justifyContent: 'space-between',

            	}}
            >
            	<div className={classes.input_box} >
	        		<label for="fname" style={{}}>QTD.</label>
					<input 
						type="number" 
						id="fname" 
						name="qtd" 
						value={venda.qtd}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>

	        	<div className={classes.input_box} style={{marginLeft: 5}} >
	        		<label for="fpreco" style={{}}>PREÇO</label>
					<input 
						type="number" 
						id="fpreco" 
						name="preco" 
						value={venda.preco}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>
            </Box>

            <Divider />

            <Box sx={{ mt: 1, mb: .5 }}>
            	 <Button 
	                type="submit" 							
	                sx={{
	                    m: '2px 0',
	                    color: 'white',
	                    borderRadius: 0,
	                    cursor: 'pointer',		
	                    textDecoration: 'none',
	                    fontSize: '12px',
	                    fontWeight: 200,								                   
		                backgroundColor: `${secudary}`,
		                fontFamily: 'Wix Madefor Display, sans-serif',
		                '&:hover': {
		                    color: '#171010',
		                    backgroundColor: '#AD8500',
		                    cursor: 'pointer',
		                    transition: '0.3s ease-in',
		                },
	                        
	                }}			
	                //onClick={handleSave}
	            > 
	                {opcao}
	            </Button>
            </Box>

           

		</Paper>

	)

}

export default Formvenda;