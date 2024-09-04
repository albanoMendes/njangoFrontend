import * as React from 'react';
//import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
//import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import  {Box, IconButton} from '@mui/material';
import { Close, Send} from '@mui/icons-material';
//import Send from './mensagem/Send';
import DeleteNot from './mensagem/DeleteNot';
import Model from './Model';
import MessageInOutContainer from './mensagem/MessageInOutContainer';


// eslint-disable-next-line react/prop-types
export default function Message({ message, setMessages }) {
  
  const [openModel, setOpenModel] = React.useState(false);
  const [opcao, setOpcao] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [mensage, setMessage] = React.useState({
      // eslint-disable-next-line react/prop-types
      id: message.id,
      // eslint-disable-next-line react/prop-types
      nome: message.nome,
      // eslint-disable-next-line react/prop-types
      email: message.email,
      // eslint-disable-next-line react/prop-types
      assunto: message.assunto,
      // eslint-disable-next-line react/prop-types
      conteudo: message.conteudo,
      // eslint-disable-next-line react/prop-types
      idUser: message.iduser
  })
  // eslint-disable-next-line no-unused-vars
  const handleLerMessage = () => {
    setOpcao('Visibility');
    setTitle('Ler Mensagem');
    setOpenModel(true);
  };
  const handleSendMessage = () => {
    setOpcao('ForwardToInbox');
    setTitle('Responder Mensagem');
    setOpenModel(true);
  };
  const handleDeleteMessage = () => {
    setOpcao('Delete');
    setTitle('Apagar Mensagem');
    setOpenModel(true);
  };
  const getComponent = () =>{
    switch(opcao){
      case 'Visibility': 
        return <MessageInOutContainer tab={0} message={mensage} setClose={setOpenModel} setMessages={setMessages}/>;
      case 'ForwardToInbox': 
        return <MessageInOutContainer tab={1} message={mensage} setClose={setOpenModel} setMessages={setMessages}/>; 
      case 'Delete':
        return <DeleteNot message={mensage} setOpenModel={setOpenModel} setMessages={setMessages}/>; 
      default: 
        return null;
    }
  }
  return(
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', 
            alignItems: "flex-start",
        }}
      >
        <ListItemText
          primary={
            <Typography
                sx={{
                    fontWeight: 400,
                    fontSize: '15px',
                    color: '#F9CC19',                   
                    fontFamily: 'Oswald, sans-serif',
                    '@media (max-width: 800px)': { fontSize: '15px' },
                }}
              >
                {mensage.assunto}
              </Typography>
            
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{
                    fontWeight: 200,
                    fontSize: '14px',                   
                    fontFamily: 'Wix Madefor Display, serif',
                    '@media (max-width: 800px)': { fontSize: '15px' },
                }}
              >
                {mensage.nome}
              </Typography>
              <Typography
                component='p'
                 sx={{
                    fontWeight: 100,
                    fontSize: '12px',                   
                    fontFamily: 'Wix Madefor Display, serif',
                    '@media (max-width: 800px)': { fontSize: '15px' },
                }}
              >
                {mensage.conteudo}
              </Typography>              
            </React.Fragment>
          }
        />
        <Box>
          <IconButton 
            onClick={handleSendMessage} 
            size="small" 
            aria-label="show 4 new mails" 
            color="inherit"
            sx={{borderRadius: 0}}
          >
              <Send sx={{fontSize: '20px', color: '#F9CC19'}} />
          </IconButton>
          <IconButton 
            onClick={handleDeleteMessage}
            size="small" 
            aria-label="show 4 new mails" 
            color="inherit"
            sx={{borderRadius: 0}}
          >
              <Close sx={{ fontSize: '20px', color: 'red'}} />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
      <Model
            title={title}
            openModel = {openModel}
            setOpenModel = {setOpenModel}
          >
            {
              getComponent()
            }
        </Model>
      </>
  )
}
