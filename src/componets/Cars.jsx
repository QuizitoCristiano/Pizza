import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import { ButtonsWrapper } from '../paidIngredients/styles'
import { BorderBottomRounded, Construction } from '@mui/icons-material'

const ChatComponent = () => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages([...messages, messageInput])
      setMessageInput('')
    }
  }

  const handleRemoveMessage = (index) => {
    const updatedMessages = [...messages]
    updatedMessages.splice(index, 1)
    setMessages(updatedMessages)
  }

  return (
    <Container
      sx={{
        bgcolor: '#dedede',
        border: '2px solid black',
        position: 'relative',
        borderRadius: '1rem',
        gap: '3rem',
        width: '350px',
        margin: '29px',
        minHeight: '440px',

        '@media only screen and (max-width: 705px)': {
          width: '97%',
          height: '93vh',
          top: '-0%',
          left: '1.5%',
          bgcolor: '#dedede',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: '2.8rem',
          gap: '5rem',
          overflowY: 'auto',
        },
      }}
    >
      <List
        sx={{
          color: 'red',
          // bgcolor: 'black',
          width: '100',
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '40vh',
          marginTop: '0.5rem',
          overflowY: 'auto',
        }}
      >
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveMessage(index)}
            >
              <CloseIcon />
            </Button>
          </ListItem>
        ))}
      </List>

      <TextField
        label="Digite uma mensagem"
        variant="outlined"
        fullWidth
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <Button
        sx={{
          bgcolor: '#ff6510 !important',
          fontWeight: '800',
          BorderBottom: '50rem',
        }}
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
      >
        Enviar
      </Button>
    </Container>
  )
}

export default ChatComponent
