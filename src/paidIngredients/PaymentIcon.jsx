import React, { useState } from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'
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




const style = {
  width: '65rem',
  height: '45rem',
  top: '-10%',
  left: '-5%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'ceneter',
  flexDirection: 'column',
  bgcolor: '#dedede',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '2.8rem',
  gap: '3rem',

  '@media only screen and (max-width: 805px)': {
    width: '97%',
    height: '99vh',
    top: '-0%',
    left: '1.5%',
    position: 'absolute',
    bgcolor: '#dedede',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '2.8rem',
    gap: '5rem',
  },
}


const styles = {
  textField: {
    bgcolor: 'white',
    
    '& .MuiInputBase-input': {
      fontSize: '30px',
      fontWeight: 'bold',
    },
  },
};

export const PaymentIcon = ({
  data,
  soma,
  setSoma,

  setMandarParaSacola,
  mandarParaSacola,
  pedido,
  setPedido
}) => {
  const [openForme, setOpenForme] = useState(false)
  const AbreForme = () => {
    setOpenForme(!openForme)
  }

  const [valor, setValor] = useState(0)

  const aumentarValor = () => {
    setValor(valor + 1)
  }

  const diminuirValor = () => {
    if (valor === 0) {
      alert('Você tem que marcar os itens antes de diminuir.')
    } else {
      setValor(valor - 1)
    }
  }



  const openModal = (img) => {
    setAbreSacola(!abreSacola)
    const valor = {
      Image: img.Image,
      userName: img.userName,
      description: img.description,
      pizzaPrice: img.pizzaPrice,
      setSoma: soma,
    }
    setValorDosItens(valor)
  }
  if (mandarParaSacola) {
    return (
    
      <Stack >
        <Box
          // sx={{
          //   position: 'fixed',
          //   left: 0,
          //   top: '10rem',
          //   height: '90%',
          //   bgcolor: 'grey',
          //   alignContent: 'center',
          //   justifyContent: 'center',
          //   flexDirection: 'column',
          //   overflow: 'auto',
          //   width: '50%',
          //   display: 'grid',
          //   gridTemplateColumns: 'repeat(1, 1fr)',
          //   gridGap: '10px',

          //   '@media only screen and (max-width: 805px)': {
          //     gridTemplateColumns: 'repeat(1, 1fr)',
          //   },
          // }}
          sx={style}
        >
          <Box
            sx={{
              width: '100%',
              bgcolor: 'green',
              padding: '1.5rem',
            }}
          >
            <Box
              sx={{
                '@media only screen and (max-width: 805px)': {
                  background: 'green',
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

            <Box>
              <Box
                sx={{
                  
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'red',
                }}
              >
                <Box sx={{gap: '2.5rem',}}>
          

                  <Stack sx={{
                    bgrcolor: 'grey',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    gap: '2rem'
                  }}>

                  <Button sx={{
                    borderRadius: '4px',
                    // bgcolor: '#f6410a',
                    fontSize: '20px',
                  
                    height: '23px',
                    width: '10px !important',
                 
                    color: '#fff',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'Roboto sans-serif',
                    fontFamily: 'Shrikhand cursive',
                    fontWeight: '900',
                
                    backgroundColor: '#FF6510 !important',
                  }} onClick={aumentarValor}>
                    +
                  </Button>
                  <Button
                  sx={{
                    borderRadius: '4px',
                    // bgcolor: '#f6410a',
                    fontSize: '2rem',
                  
                    height: '23px',
                    width: '10px !important',
                 
                    color: '#fff',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'Roboto sans-serif',
                    fontFamily: 'Shrikhand cursive',
                    fontWeight: '900',
                
                    backgroundColor: 'black !important',
                  }}
                    onClick={diminuirValor}
                  >
                    -
                  </Button>
                  </Stack>

                  <p>Valor atual: {valor}</p>
                </Box>
              </Box>

              <Box
                sx={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                }}
              >
                {data?.soma}
   
              </Box>
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
