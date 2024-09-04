//import * as React from 'react';
import axios from 'axios';
import {Button, DialogActions, DialogContent, DialogContentText} from '@mui/material';


// eslint-disable-next-line react/prop-types
function Deletar({message, setOpenModel, setMessages}){

  const [massage, setMessage] = useState('');
  const [cor, setCor] = useState('#00809b');

  const handleDelete = (e) => {
     e.preventDefault();
         
      axios({
           method: 'GET',
           url: 'http://localhost:8080/criptoapp/src/api/messages/delete.php',
           params: {id: message.id},
           config: { headers: {'Content-Type': 'multipart/form-data' }}
      })      
      .then((response)=> {
          //handle success
          //console.log(response.data.Status)
          if(response.status === 200){
              setCor('#00809b');
              setMessage('Mensagem apagada com sucesso!');
              setMessages(response.data);
              setOpenModel(false);
          }else{
            setCor('red')
            setMessage('[ERRO] Mensagem não apagada');
              //setOpenModel(false);
          }
      })
      .catch(function (response) {
          console.log(response)
          //alert(response);
      });
  }; 
  return(
    <>
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Tem certeza que deseja Apagar a mensagem sobre ${message.assunto} ?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions> 
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
                        {massage}
                </Typography>
        </Grid>        
        <Button
          onClick={handleDelete}
          sx={{
              m: '2px 0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',		
              textDecoration: 'none',
              fontSize: '12px',
              fontFamily: 'Roboto, sans-serif',
              backgroundColor: 'red',
              '&:hover': {
              color: '#013039',
              cursor: 'pointer',
              transition: '0.3s ease-in',
              },
          }}			
          >
            Apagar
        </Button>
        <Button
          onClick={() => setOpenModel(false)}
          sx={{
              ml: 0.5,
              color: 'black',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '12px',
              '&:hover': {
              color: '#00809b',
              transition: 'all 400ms',
              },
          }}
        >
          Fechar
        </Button>
        </DialogActions>
    </>
  )
}

export default Deletar;