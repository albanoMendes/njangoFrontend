//import React from 'react'
import {useState} from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function CodeRefresh({handleChange, codigo, idetify, setCodigo}) {

    const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');
    const [code, setCode] = useState({
        n1: '',
        n2: '',
        n3: '',
        n4: ''
    })

    const handleChannge=(e)=>{
        setCode({...code,[e.target.name]: e.target.value})
    };
    console.log(codigo)
    const submit = async (e)=>{
       e.preventDefault(); 
       let co = code.n1 + code.n2 + code.n3 + code.n4;
        console.log(parseInt(co))
       if(parseInt(co) == codigo){
            handleChange("event", 4)
       }else {
            setCor('red');
            setMessage('[ERRO] Codigo Incorreto, tenta novamente!');
       }
       
       
    }

    const submitForm = async (e)=>{
        e.preventDefault();
        if(idetify != ''){
            axios({
               method: 'GET',
               url: 'http://localhost:8080/criptoapp/src/api/useres/refresh.php',
               params: {delete: idetify},
               config: { headers: {'Content-Type': 'multipart/form-data' }}
          })      
          .then((response)=> {
              //handle success
              console.log(response.data)
              if(response.status === 200){
                  //setCor('#00809b');
                  //setMessage('Convites apagada com sucesso!');
                  setCodigo(response.data);
                  console.log(response.data)
                  //handleChange("event", 4)
                    //setOpenModel(false);
              }else{
                setCor('red');
                setMessage('[ERRO] Usuario não encontrado');
                  //setOpenModel(false);
              }
          })
          .catch(function (response) {
              //console.log(response)
              //alert(response);
          });
        } else {
            setCor('#00809b');
             setMessage('Insere o seu email')
        }

    };

    return (
        <form style={{ 
                display: 'flex', 
                alignContent: 'center',
                flexDirection: 'column', 
                alignItems: 'center' 
            }}
        >
         

                 <Grid align="center">						
                    <Typography
                        component="h5"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',	
                            fontSize: '20px',
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 600px)': { fontSize: '15px' },
                        }}
                    >
                    Insere o código
                    </Typography>              
                </Grid>  
                 <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-even'
                    }}
                 >
                    <TextField
                        type="number"
                        name="n1"
                        inputProps={{ min: 0, max: 9 }}
                        onChange={handleChannge}                           
                        value={code.n1} 
                        //onChange={handleChange("event", 4)}                           
                        //value={user.email} 
                        required
                        sx={{
                            mb: 1,
                            mt: 1,
                            width: 50,
                            input: {textAlign: "center"},
                            fontSize: '2rem',
                            fontWeight: 700,
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                              display: "none",
                            },
                            "& input[type=number]": {
                              MozAppearance: "textfield",
                            },

                        }}
                    /> 
                    
                    <TextField
                        type="number"
                        name="n2"
                        inputProps={{ min: 0, max: 9 }}
                        onChange={handleChannge}                           
                        value={code.n2} 
                        required
                        sx={{
                            mb: 1,
                            mt: 1,
                            ml: 1,
                            width: 50,
                            input: {textAlign: "center"},
                            fontSize: '2rem',
                            fontWeight: 700,
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                              display: "none",
                            },
                            "& input[type=number]": {
                              MozAppearance: "textfield",
                            },

                        }}
                    /> 

                    <TextField
                        type="number"
                        name="n3"
                        inputProps={{ min: 0, max: 9 }}
                        onChange={handleChannge}                           
                        value={code.n3} 
                        //onChange={handleChange("event", 4)}                           
                        //value={user.email} 
                        required
                        sx={{
                            mb: 1,
                            mt: 1,
                            ml: 1,
                            width: 50,
                            input: {textAlign: "center"},
                            fontSize: '2rem',
                            fontWeight: 700,
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                              display: "none",
                            },
                            "& input[type=number]": {
                              MozAppearance: "textfield",
                            },

                        }}
                    /> 

                    <TextField
                        type="number"
                        name="n4"
                        inputProps={{ min: 0, max: 9 }}
                        onChange={handleChannge}                           
                        value={code.n4} 
                        //onChange={handleChange("event", 4)}                           
                        //value={user.email} 
                        required
                        sx={{
                            mb: 1,
                            mt: 1,
                            ml: 1,
                            width: 50,
                            input: {textAlign: "center"},
                            fontSize: '2rem',
                            fontWeight: 700,
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                              display: "none",
                            },
                            "& input[type=number]": {
                              MozAppearance: "textfield",
                            },

                        }}
                    /> 


                 </Box>
                 <Grid align="center" sx={{ mt: .5, mb: 1 }}>
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
                <Box>		
                    <Button 
                        //type="submit"  handleChange("event", 4)
                        type="submit"
                        onClick={submit}						
                        sx={{
                            m: '2px 0',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',		
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontFamily: 'Roboto, sans-serif',
                            backgroundColor: '#00809b',
                            '&:hover': {
                            color: '#013039',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                            },
                        }}			
                        //onClick={submitForm}
                    > 
                        OK
                    </Button>
                    <Button 
                        type="submit" 
                        onClick={submitForm}
                        sx={{
                            ml: 0.5,
                            color: '#677F88',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '12px',
                            '&:hover': {
                            color: 'white',
                            backgroundColor: '#677F88',
                            transition: 'all 400ms',
                            },
                        }}
                    > 
                    Reenviar
                </Button>   
    			</Box>    
                      
      
        </form>
  )
}

export default CodeRefresh