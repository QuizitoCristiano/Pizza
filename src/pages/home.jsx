import React, { useState } from 'react'
import './home.css'
import { TextField, Typography, Stack, Box } from '@mui/material'
import Pizza from '../componets/pizza'
import Banner from '../componets/Banner'
import { Header } from '../Header/Header'
import { CarMobileIcon } from '../componets/CarMobileIcon'
import { MyFooter } from '../componets/Footer'
import { Cta } from '../componets/Cta'
import { useEffect } from 'react'
import { api_users } from '../api/back'
import { PaymentIcon } from '../paidIngredients/PaymentIcon'
import { PaidIngredients } from '../paidIngredients'
import ChatComponent from '../componets/Cars'
import { Chat } from '@mui/icons-material'
import MiChat from '../componets/Chat'

export const MyHome = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await api_users.user.get()
        setMessages(response)
      } catch (err) {
        console.err(err)
      }
    }
    getMessages()
    console.log(messages)
  }, [])
  return (
    <>
      <Stack
        sx={{
          minHeight: '100vh',
          width: '100%',
          //   padding: '5rem 9% 2rem',
          backgroundColor: '#081b29',

          background: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'colunm',
          // gap: '5rem',

          '@media only screen and (max-width: 800px)': {
            width: '100%',
            position: 'relative',
          },
        }}
      >
        <Header />
        <Banner />
        <Pizza />
        <ChatComponent/>
        {/* <MiChat/> */}
        <MyFooter />
      </Stack>
    </>
  )
}
