
import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Button,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as G from './styles/styleChat'
import { keyframes } from '@emotion/react'

const ChatApp = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const messagesContainerRef = useRef()

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const sendMessage = () => {
    if (newMessage) {
      const newId = generateId();
      const updatedMessages = [...messages, { id: newId, text: newMessage }];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  const handleRemoveMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <G.MyContainer
      sx={{
        bgcolor: '#dedede',
      }}
    >
      <G.GardMin
        ref={messagesContainerRef}
      >
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText sx={{ color: 'black' }} primary={message.text} />

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveMessage(message.id)}
            >
              <CloseIcon />
            </Button>
          </ListItem>
        ))}
      </G.GardMin>
      <Stack
        sx={{
          bgcolor: '#dedede',
          position: 'relative',
          borderRadius: '1rem',
          gap: '1rem',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',

          '@media only screen and (max-width: 705px)': {
            width: '97%',
          },
        }}
      >
        <TextField
          sx={{
            width: '90%',
            color:'black',           
          }}
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <Button
          sx={{
            bgcolor: '#ff6510 !important',
            fontWeight: '800',
            color: 'white',
            fontWeight: '800',
          }}
          onClick={sendMessage}
        >
          Enviar
        </Button>
      </Stack>
    </G.MyContainer>
  )
}

export default ChatApp

