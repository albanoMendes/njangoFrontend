import { List, Typography } from "@mui/material";
import Message from "../Message";
import { useState, useEffect } from "react";


//import React from 'react'
const rows = [
    {
        id: 1,
        nome: 'Njango Investment',
        email: 'njango@gmail.com',
        assunto: 'Bem Vindo',
        conteudo: 'Seja bem vindo a plataforma. Obrigado por nos escolher para o teu crescimento finânceiro. \n\nNjango Investment',
        idUser: '234hr5ghfg',
    },
    {
        id: 2,
        nome: 'Paulo Miranda',
        email: 'paulooo@gmail.com',
        assunto: 'Pagamentos Adiatadas',
        conteudo: 'Alguns fornecedores começam a reservar produtos depois de pagamento da metade adiantada. Precisamos marcar uma reunião. \n\nPaulo Miranda',
        idUser: '234hr5ghfg',
    },
    {
        id: 3,
        nome: 'Nilde Capavira',
        email: 'njango@gmail.com',
        assunto: 'Fazer Parte',
        conteudo: 'Saudações, gostei do vosso projeto e notei que ja esta em funcionamento. Gostaria de saber se ainda estão precisando de sócios. \n\nNilde Capavira',
        idUser: '234hr5ghfg',
    }
]


function Notifications({user}) {
    const [messages, setMensages] = useState(rows);

    /*useEffect(() => {
        fetch("http://localhost:8080/criptoapp/src/api/notificacoes/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setMensages(responseJson)

        })
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

    }, [])*/
    
    return (
        <>
            <List sx={{ width: '100%' }}>
                {messages.length == 0 ? <Typography>Não tem Mensagem para você</Typography> :
                    messages.map(message =>
                        <Message key={message.id} message={message} setMensages={setMensages} />
                    )        
                }
            </List>
        </>
    )
}

export default Notifications