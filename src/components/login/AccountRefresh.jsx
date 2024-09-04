import { Mail } from "@mui/icons-material"
import { Button, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import axios from 'axios';
import {useState} from 'react';

function AccountRefresh( props ) {

    // eslint-disable-next-line react/prop-types handleChange("event", 3)
    const { handleChange, setCodigo, setIdetify } = props;
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [cor, setCor] = useState('#00809b');

    const submitForm = async (e)=>{
        e.preventDefault();
        if(email != ''){
            axios({
               method: 'GET',
               url: 'http://localhost:8080/criptoapp/src/api/useres/refresh.php',
               params: {delete: email},
               config: { headers: {'Content-Type': 'multipart/form-data' }}
          })      
          .then((response)=> {
              //handle success
              console.log(response.data)
              if(response.status === 200){
                  //setCor('#00809b');
                  //setMessage('Convites apagada com sucesso!');
                  setCodigo(response.data);
                  setIdetify(email);
                  handleChange("event", 3)
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
        <form 
            style={{ 
                display: 'flex', 
                flexDirection: 'column',   
                alignItems: 'center', 
                maxWidth: '100%' 
            }}
        >
              
                    <Grid>
                        <Typography
                            component="h5"
                            sx={{
                                
                                //alignItems: 'center',
                                mb: 1,
                                fontWeight: 'bold',	
                                fontSize: '20px',
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 600px)': { fontSize: '15px' },
                            }}
                            >
                            Digite o seu email
                        </Typography>    
                    </Grid>
                    <TextField							
                        type="email"
                        placeholder="Insere o seu  email" 
                        name="email"
                        size="small"
                        onChange={(e)=> {
                            setEmail(e.target.value)
                        }}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Mail sx={{width: 20, height: 20}} />
                            </InputAdornment>
                        ),
                        }}
                        value={email} 
                        fullWidth 
                        required
                        sx={{								
                            mb: 1,
                            fontFamily: 'Roboto, sans-serif',
                            '@media (max-width: 500px)': { fontSize: '.5rem' },
                        }}
                    />
                    <Grid align="center">
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
                //type="submit"
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
                OK
            </Button>      
        </form>
  )
}

export default AccountRefresh