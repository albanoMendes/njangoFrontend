//import React from 'react'
//import React from 'react'
import {useState} from 'react'; 
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';

function Refresh({idetify, handleChange}) {

    const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');

    const [refresh, setRefresh] = useState({
        password: '',
        repassword: '',
    })

    const handleChannge=(e)=>{
         setRefresh({...refresh,[e.target.name]: e.target.value})
    };

    const submitForm = async (e)=>{
        e.preventDefault();
        //handleChange("event", 1)
        if(refresh.password != '' && refresh.repassword != '' ){
            if(refresh.password === refresh.repassword) {
                const formData = new FormData();
                formData.append("email", idetify);
                formData.append("password", refresh.password);
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/criptoapp/src/api/useres/updatePassword.php',
                    data: formData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function () {
                    //handle success
                    //console.log(response)
                    handleChange("event", 0)
                    if(response.status == 200){
                        setMessage('');
                        setRefresh({
                            password: '',
                            repassword: '',
                        })
                    } else {
                        setCor('red')
                        setMessage('[ERRO] Ocorreu um erro, tente novamente!');
                    }
                    
                     
                })
                .catch(function () {
                    //handle error
                    //console.log(response)
                    setCor('red');
                    setMessage('O email corresponde a um usuario já cadastrado');
                });
                //setMessage('')
            } else {
                setCor('red');
                setMessage("Password diferentes. Escreve novamente!")
            }
            

        } else {
            setCor('#00809b');
            setMessage("Tem algum espaço vazio. Verifique!")
        }

    }
    

    return (
        <form style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
              <Grid fullWidth>
                <Paper
                    elevation={0}
                    style={{
                        padding: '3px 10px 10px 30px',		
                        fontSize: '20px',		
                        fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    <Grid align="center">						
                    <Typography
                        component="h5"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',	
                            fontSize: '25px',
                            mb: 1,
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 600px)': { fontSize: '15px' },
                        }}
                        >
                        Insere a nova senha
                    </Typography>						
                    </Grid>
                        <TextField
                            size="small"  						
                            label="Senha" 
                            placeholder="Senha" 
                            type="password"
                            name="password"
                            sx={{mb: 1}}
                            onChange={handleChannge}
                            value={refresh.password}  
                            fullWidth 
                            required
                        />
                        <TextField
                            size="small" 						
                            label="Confirma a senha" 
                            placeholder="Confirma a senha" 
                            type="password"
                            name="repassword"
                            onChange={handleChannge}
                            value={refresh.repassword}  
                            fullWidth 
                            required
                          />
                        <Grid align="center" sx={{ mt: 1 }}>
                            <Typography
                                component="p"
                                    sx={{
                                            color: `${cor}`,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontWeight: 'bold', 
                                            fontSize: '10px',
                                            fontFamily: 'Roboto, sans-serif',
                                            '@media (max-width: 600px)': { fontSize: '8px' },
                                        }}
                                    >
                                        {message}
                                </Typography>
                        </Grid>	
                      <Button 
                        type="submit"
                        size="small" 
                        onClick={submitForm}
                        sx={{
                            margin: '8px 0',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',                        
                            textDecoration: 'none',
                            fontSize: '15px',
                            backgroundColor: '#00809b',
                            '&:hover': {
                            color: '#013039',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                            },
                        }}												
                        fullWidth
                    > 
                        ok
                    </Button>
                </Paper>
              </Grid>   
        </form> 
        
    )
}

export default Refresh;