//import * as React from 'react';
import axios from 'axios';
import {Button, DialogActions, DialogContent, DialogContentText} from '@mui/material';


// eslint-disable-next-line react/prop-types
function DeleteNot({message, setOpenModel, setMessages}){

  const [massage, setMessage] = useState('');
  const [cor, setCor] = useState('#00809b');

  const handleDelete = (e) => {
     e.preventDefault();
         
      axios({
           method: 'GET',
           url: 'http://localhost:8080/criptoapp/src/api/notificacoes/delete.php',
           params: {id: message.id},
           config: { headers: {'Content-Type': 'multipart/form-data' }}
      })      
      .then((response)=> {
          //handle success
          //console.log(response.data.Status)
          if(response.status === 200){
              setCor('#00809b');
              setMessage('Notificação apagada com sucesso!');
              //setMessages(response.data);
              setOpenModel(false);
          }else{
              setMessage('[ERRO] Notificacao não apagada');
              //setOpenModel(false);
          }
      })
      .catch(function (response) {
          console.log(response)
          //alert(response);
      });

      fetch("http://localhost:8080/criptoapp/src/api/notificacoes/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setMensages(responseJson)
      })
  }; 
  return(
    <>
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Tem certeza que deseja Apagar a notificação do sr(a). ${message.nome} ?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>         
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

export default DeleteNot;