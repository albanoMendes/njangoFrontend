import {useState, useRef, forwardRef, useEffect} from 'react';
import { DialogActions, Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone, MedicalServices, HomeRepairService } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "../empreendedor/Form.module.css";

function createData(id, service, client, pagamento, descricao, empresa, mes, ano, data, datatime, iduser) {
  return {id, service, client, pagamento, descricao, empresa, mes, ano, data, datatime, iduser};
}

const rows = [
	createData(1, 'Construção', 'Pedro Francisco', 12000, 'Construção de uma residencia com 2 quartos e sala, cozinha e 2 banheiro', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(2, 'Ladrilho', 'Maria André', 60000, 'Ladrinho de sala e cozinha', 'SEGMENT LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(3, 'Canalização', 'Paulo Silva', 3000, 'Canalização de 2 banheiro e da cozinha', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'),
    createData(4, 'Eletricidade', 'Mateus Miranda', 1500000000, 'Instalação de eletrecidade em uma predio com 1 andadres 4 quartos e 3 hanheiros 2 cozinhas', 'SEGMENT LDA', 'Março', 2024,'10 de julho de 2023', '83282424MN944'),
    createData(5, 'Cinstrução', 'Miranda Nzimba', 120000, 'Construção de uma residencia de 3 quartos e 2 banheiro e uma cozinha e quintal', 'SEGMENT LDA', 'Março', 2024, '10 de julho de 2023', '83282424MN944'), 
];



function Formservice({ setValue, foto, opcao, setOpcao, setOpenModel, primery, secudary, user, sel, empresa}) {

	const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');
    const [novo, setNovo] = useState(false);
    const [produtos, setProdutos] = useState(rows)
    const [novocolor, setNovocolor] = useState('');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	const d = new Date();
	let month = months[d.getMonth()];


    const [service, setService] = useState({
    	id: '', 
    	service: '',
	    client: '', 
	    pagamento: 0,
	    descricao: '',	    
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
        setService({...service,[e.target.name]: e.target.value})
    };

    useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
			setService({
				id: sel.id, 
		    	service: sel.service,
	    		client: sel.client, 
	    		pagamento: sel.pagamento,
	    		descricao: sel.descricao,	 
		    	empresa: sel.empresa, 
		    	mes: sel.mes, 
		    	ano: sel.ano,    
		    	datatime: sel.datatime, 
		    	iduser: sel.iduser
			})
			//console.log(service)
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
            		<MedicalServices />
            		:
             	 	<HomeRepairService />
            	}
            </Button>

            {novo ?
            	<div className={classes.input_box} >
	        		<label for="fname" style={{}}>NOVO SERVIÇO</label>
					<input 
						type="text" 
						id="fname" 
						name="service" 
						value={service.service}
						onChange={handleChannge}
						//style={styles.input}
					/>


	        	</div>
            	:
            	<div className={classes.input_box} >                            	
					<label for="fproduto" style={{}}>SERVIÇO</label>
				    <select 
				    	id="fproduto" 
				    	name="service"
				    	onChange={handleChannge}
						value={service.service}
				    	
				    >
				    	{
				    		produtos.map((produto, index) => {
								return (
									<option 
										key={index}
								      	value={produto.service} 
								      	style={{
								      		fontSize: '14px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	{produto.service}
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
            		'@media (max-width: 800px)': { 
                    	display: 'flex', 
                    	flexDirection: 'column',
                    	justifyContent: 'center', 
                    },      

            	}}
            >
            	<div className={classes.input_box} >
	        		<label for="fcliente" style={{}}>CLIENTE</label>
					<input 
						type="text" 
						id="fcliente" 
						name="client" 
						value={service.client}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>

	        	<div className={classes.input_box} style={{marginLeft: 2}} >
	        		<label for="fpreco" style={{}}>PAGAMENTO</label>
					<input 
						type="number" 
						id="fpreco" 
						name="pagamento" 
						value={service.pagamento}
						onChange={handleChannge}
						//style={styles.input}
					/>
	        	</div>
            </Box>

            <div className={classes.input_box}>
        		<label for="descricao" style={{}}>DESCRIÇÃO</label>						
				<textarea 
					id="descricao"
					//cols={20}
					rows={6}								
					placeholder={`Descrição do Serviço:\nDescreva sucintamente o serviço feito`}
					name="descricao"
					onChange={handleChannge}
					//style={classes.textarea}	                        	
				>
					{sel.descricao} 
				</textarea>
				
			</div>

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

export default Formservice;