import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { PaidIngredients } from '.'

import { keyframes } from '@emotion/react'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: scaleX(- 50%);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
const myStylesCss = {
  color: 'red',
  backgroundColor: '#999',
  width: '450px',
  height: '61vh',
  top: '0rem',
  left: '0px',
  position: 'absolute',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  color: 'red',
  opacity: 0,
  transformOrigin: 'left center',
  transform: 'scaleX(0)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  animation: `${fadeInAnimation} 0.5s forwards`,
  padding: '1.5rem',
  overflowY: 'scroll',

  '@media only screen and (max-width: 700px)': {
    overflowY: 'scroll',
    display: 'flex',
    color: 'red',
    // backgroundColor: 'blue',
    width: '100%',
    height: '90vh',
    top: '0px',

    position: 'absolute',
    opacity: 0,
    transformOrigin: 'bottom center',
    transform: 'scaleX(0)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
    animation: `${fadeInAnimation} 0.5s forwards`,
    padding: '1.5rem',
  },
}

export const PaymentIcon = ({
  data,
  soma,
  setSoma,
  pedido,
  setMandarParaSacola,
  mandarParaSacola,
}) => {
  const [openForme, setOpenForme] = useState(false)
  const AbreForme = () => {
    setOpenForme(!openForme)
  }
  const openModal = (img) => {
    setAbreSacola(!abreSacola)
    const valor = {
      Image: img.Image,
      userName: img.userName,
      description: img.description,
      pizzaPrice: img.pizzaPrice,
    }
    setValorDosItens(valor)
  }
  if (mandarParaSacola) {
    return (
      <Stack >
        <Box
          sx={{
            position:'fixed',
            left:0,top:'10rem',
            height: '90%',
            bgcolor: 'grey',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow:'auto',
            width: '50%',
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridGap: '10px',

            '@media only screen and (max-width: 805px)': {
              gridTemplateColumns: 'repeat(1, 1fr)',
            },
          }}
        >
          <Box sx={{  width: '100%' }}>
            <Box
              sx={{
                '@media only screen and (max-width: 805px)': {
                  // background: 'red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                },
              }}
            >
              <img
                id="minha-imagem"
                width={250}
                height={250}
                src={data?.Image}
                alt="Pizza"
              />
            </Box>
          </Box>
          <Typography
            sx={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              bgcolor: 'black',
              height: '5.9rem',
              width: '100%',
            }}
          >
            <Stack>
              <Box>
                <PaidIngredients />
              </Box>
            </Stack>
          </Typography>
        </Box>
      </Stack>
    )
  }
}
