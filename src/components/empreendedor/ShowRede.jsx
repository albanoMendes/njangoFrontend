import { Box, Button, Divider, Grid, Paper, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Add, Delete, Edit } from "@mui/icons-material";
//import axios from 'axios';
import Model from "../Model";
//import DeleteRedeF from "./DeleteRedeF";

function ShowRede({  setOpenModel, setBank, setValue, setOpcao, primery, secudary }) {

    const [verify, SetVerify] = useState('not');
    const [openModel, setOpen] = useState(false);
    //const [opcao, setOpcao] = useState('');
    //const [title, setTitle] = useState('');
    const [banco, setBanco] = useState({
        id: 0,
        nome: '',
        email: '',
        bank: '',
        agencia: '',
        nconta: '',
        tipoConta: '',
        nIdentidade: '',
        cell: ''
    });
    useEffect(() => { 
        /*axios({
              method: 'GET',
              url: 'http://localhost:8080/criptoapp/src/api/currencies/getfindrede.php',
              params: {
                  id: moeda.id,
              },
              config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(function (response) {
            //handle success
            if(response.status == 200){
                setBanco({
                    id: response.data.id,
                    nome: response.data.nome,
                    email: response.data.email,
                    bank: response.data.banco,
                    agencia: response.data.agencia,
                    nconta: response.data.nconta,
                    tipoConta: response.data.tipoconta,
                    nIdentidade: response.data.nidentidade,
                    cell: response.data.phone
                })
                SetVerify('yes')
            } else {
                SetVerify('not')
            }
            
              
          })
          .catch(function () {
            <DeleteRedeF rede={banco} setOpenModel={setOpen} setOpenM={setOpenModel}/>
          });*/

    }, [])
     

    const handleAdd = () => {
      setOpcao('ADD');
      setTitle('ADD REDE');
      setValue(1)
     
    };
    const handleEditar = () => {
        setOpcao('EDITAR');
        setTitle('EDITAR REDE');
        setBank({
            id: banco.id,
            nome: banco.nome,
            email: banco.email,
            banco: banco.bank,
            agencia: banco.agencia,
            nconta: banco.nconta,
            tipoConta: banco.tipoConta,
            nIdentidade: banco.nIdentidade,
            cell: banco.cell
        })
        setValue(1)
    };

    const handleApagar = () => {
        setBank({
            id: banco.id,
            nome: banco.nome,
            email: banco.email,
            banco: banco.bank,
            agencia: banco.agencia,
            nconta: banco.nconta,
            tipoConta: banco.tipoConta,
            nIdentidade: banco.nIdentidade,
            cell: banco.cell
        })
        setOpen(true)
    };
    
    return (
        <Box>
            {verify == 'not'? 

                 <IconButton 
                        onClick={handleAdd} 
                        size="small" 
                        aria-label="show 4 new mails" 
                        color="inherit"
                    >
                        <Add sx={{ color: '#00809b', fontSize: '20px'}} />
                    </IconButton>

                :
                <Paper elevation={0} sx={{ p: 0.5, mb: 1, maxWidth: 400 }}>
                <Typography 
                    sx={{  
                        fontWeight: 'bold',                                                   
                        fontSize: '25px',                    
                        fontFamily: 'Roboto, sans-serif',
                    }}>
                    {'DADOS BANCÁRIOS '}
               </Typography>
                <Divider/>
                <div
                    style={{                   
                        display: 'flex', 
                        justifyContent: 'center', 
                        justifyItems: 'center',
                    }}
                >
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between" spacing={2}>

                                <Grid item>
                                    <Box
                                        sx={{                                                       
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                        >
                                            Email:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.email}                    
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item>
                                    <Box
                                        sx={{ 
                                            mr: 5,
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                        <Typography
                                                variant="caption"
                                                sx={{  
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Roboto, sans-serif',
                                                    fontSize: '.7rem',               
                                                }}
                                            >
                                                Nome completo:
                                            </Typography>
                                            <Typography
                                                component={'div'}
                                                sx={{  
                                                    fontWeight: 'bold',
                                                    color: '#00809b',                        
                                                    fontFamily: 'Roboto, sans-serif',
                                                    fontSize: '.8rem',  
                                                    
                                                }}
                                                >
                                                {banco.nome}                    
                                        </Typography>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </div>
                

               
                <div
                    style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        justifyItems: 'center',
                    }}
                >
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between" spacing={2}>

                                <Grid item>
                                    <Box
                                        sx={{                                      
                                            mt: 1,             
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Nome do banco:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.bank}                    
                                        </Typography>
                                    </Box>
                                </Grid>
                                
                                <Grid item>
                                     <Box
                                        sx={{ 
                                            mt: 1,
                                            mr: 4,
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Código da Agência:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.agencia}                    
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </div>

                 <div
                    style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        justifyItems: 'center',
                    }}
                >
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between" spacing={2}>

                                <Grid item>
                                    <Box
                                        sx={{ 
                                            mt: 1,
                                            mb: 1,                                                        
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Número da conta:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.nconta}                    
                                        </Typography>
                                    </Box>

                                </Grid>

                                <Grid item>
                                    <Box
                                        sx={{ 
                                            mt: 1,
                                            mb: 1,  
                                            mr: 7,
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Tipo de conta:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.tipoConta}                    
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </div>

                <div
                    style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        justifyItems: 'center',
                    }}
                >
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between" spacing={2}>

                                <Grid item>
                                    <Box
                                        sx={{ 
                                                                                                
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Número de identificação:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.nIdentidade}                    
                                        </Typography>
                                    </Box>
                                </Grid>
                                
                                <Grid item>
                                    <Box
                                        sx={{                 
                                            mb: 1,                
                                            color: 'black',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', 
                                            justifyItems: 'center',
                                            
                                        }}
                                    >
                                    <Typography
                                            variant="caption"
                                            sx={{  
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.7rem',               
                                            }}
                                            >
                                            Telefone do beneficiário:
                                        </Typography>
                                        <Typography
                                            component={'div'}
                                            sx={{  
                                                fontWeight: 'bold',
                                                color: '#00809b',                        
                                                fontFamily: 'Roboto, sans-serif',
                                                fontSize: '.8rem',  
                                                
                                            }}
                                            >
                                            {banco.cell}                    
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </div>
                <Divider />

                <Box>
                    <IconButton 
                        onClick={handleEditar} 
                        size="small" 
                        aria-label="show 4 new mails" 
                        color="inherit"
                    >
                        <Edit sx={{ color: '#00809b', fontSize: '20px'}} />
                    </IconButton>
                    <IconButton 
                        onClick={handleApagar}
                        size="small" 
                        aria-label="show 4 new mails" 
                        color="inherit"
                    >
                        <Delete sx={{ color: 'red', fontSize: '20px'}}/>
                    </IconButton>                                    
                </Box>
            </Paper>
        }
         <Model
                title={'EXCLUIR REDE'}
                openModel = {openModel}
                setOpenModel = {setOpen}
            >
              
          </Model>      
        </Box>
    );
}



export default ShowRede;
