import {useState} from 'react';
import {Paper, Button, Typography, TextField, Grid} from '@mui/material';
import axios from 'axios';
    
// eslint-disable-next-line react/prop-types
function Send({message, setOpenModel, setMessages}){

    const [massage, setMessage] = useState('');
    const [cor, setCor] = useState('#F9CC19');

    const paperStyle ={
                    backgroundColor: 'rgba(0, 0, 0, .0)',
                    borderRadius: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '10px 10px',
                     };

    const btnstyle = {margin:'8px 0'};
    
    //console.log(message);
    const [messaged, setMessaged]=useState({
                                    id: message.id,
                                    assunto: message.assunto,
                                    nome: message.nome,
                                    conteudo:'Olá sr. '+message.nome+'\n\n\n\n\n\n\n\n\nOpen Next',
                                    email: message.email,
                                    iduser: message.idUser
                                });
    const handleChannge =(e)=>{
        setMessaged({...messaged,[e.target.name]: e.target.value})
    };
    const submitForm = (e)=>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("id", messaged.id);
        formData.append("assunto", messaged.assunto);
        formData.append("conteudo", messaged.conteudo);        
        formData.append("email", messaged.email);        
        formData.append("iduser", messaged.iduser);
        axios({
             method: 'POST',
             url: 'http://localhost:8080/criptoapp/src/api/messages/enviar.php',
             data: formData,
             config: { headers: {'Content-Type': 'multipart/form-data' }}
        })      
        .then((response)=> {
            //handle success
            console.log(response.data);
            if(response.status === 200){
                setCor('#00809b');
                setMessage('Mensagem enviada com sucesso!');
                setOpenModel(false); 
            }else{
                setCor('red');
                setMessage('[Erro] Não foi possível enviar essa mensagem');
                //console.log(response.data.id_get)
            }
        })
        .catch(function (response) {
            //console.log(response)
            //alert(response);
        });
    
    };
    return(
        <>
            <Paper elevation={0} style={paperStyle}>
                 <Typography 
                    variant="h5" 
                    sx={{
                        marginButtom: 2,
                        color: '#F9CC19',                   
                        fontFamily: 'Oswald, sans-serif',
                    }} 
                    gutterBottom
                >
                    {messaged.assunto}
                </Typography>
               <Typography 
                    //variant="body2" 
                    sx={{
                        marginButtom: 2,
                        fontWeight: 200,
                        fontSize: '14px',                   
                        fontFamily: 'Wix Madefor Display, serif',
                    }} 
                    gutterBottom
                >
                    {messaged.nome}
                </Typography>
                    <TextField 
                        variant="outlined"
                        label="Conteudo" 
                        type="text" 
                        name="conteudo"
                        sx={{padding: '2px 2px',
                            fontWeight: 100, 
                            fontSize: '12px',                   
                            fontFamily: 'Wix Madefor Display, serif',
                        }}
                        multiline
                        rows={10}
                        onChange={handleChannge}
                        value={messaged.conteudo} 
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
                                        fontWeight: 500, 
                                        fontSize: '10px',
                                        fontFamily: 'Wix Madefor Display, sans-serif',
                                        '@media (max-width: 600px)': { fontSize: '8px' },
                                    }}
                                >
                                    {massage}
                            </Typography>
                    </Grid>
               
                <Button 
                    type="submit"                   
                    onClick={submitForm}
                    size="small"
                    sx={{
                        margin: '8px 0',
                        color: 'white',
                        borderRadius: 0,
                        cursor: 'pointer',
                        //height: '25px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontFamily: 'Wix Madefor Display, sans-serif',
                        backgroundColor: '#F9CC19',
                        '&:hover': {
                            color: '#171010',
                            backgroundColor: '#AD8500',
                            cursor: 'pointer',
                            transition: '0.3s ease-in',
                        },
                    }}			                        
                    fullWidth
                > 
                    Enviar
                </Button>
            </Paper>
        </>
    )
}

export default Send;