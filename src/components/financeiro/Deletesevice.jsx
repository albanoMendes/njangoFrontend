import { useState, useEffect } from 'react';
//import axios from 'axios';
import {Button, DialogActions, DialogContent, DialogContentText} from '@mui/material';


// eslint-disable-next-line react/prop-types
function Deletesevice({negocio, setOpenModel, iduser, primery, secudary}){

  	const [massage, setMessage] = useState('');
  	const [cor, setCor] = useState('#00809b');

  	const handleDelete = (e) => {
     e.preventDefault();
    /*     
      axios({
           method: 'GET',
           url: 'http://localhost:8080/criptoapp/src/api/messages/delete.php',
           params: {id: negocio.id},
           config: { headers: {'Content-Type': 'multipart/form-data' }}
      })      
      .then((response)=> {
          //handle success
          //console.log(response.data.Status)
          if(response.status === 200){
              setCor('#00809b');
              setMessage('Messagem apagada com sucesso!');
              //setMessages(response.data);
              setOpenModel(false);
          }else{
              setMessage('[ERRO] Mensagem não apagada');
              //setOpenModel(false);
          }
      })
      .catch(function (response) {
          console.log(response)
          //alert(response);
      });
      axios({
            method: 'GET',
            url: 'http://localhost:8080/criptoapp/src/api/messages/getclientmessage.php',
            params: {
                id: iduser,
            },
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            setMensages(response.data)
            
        })
        .catch(function () {
          
        });*/
    
  	}; 
  	return(
    <>
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Tem certeza que deseja Apagar o serviço. ${negocio.service} ?`}
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
              borderRadius: 0,
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
              borderRadius: 0,
              fontSize: '12px',
              '&:hover': {
	              color: `${secudary}`,
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

export default Deletesevice;