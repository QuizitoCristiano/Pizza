import React, { useState } from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { PaidIngredients } from '.'
import * as T from './styles/index.js'
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

const MyStyledContainer = {
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

// const styles = {
//   textField: {
//     bgcolor: 'white',
//     '& .MuiInputBase-input': {
//       fontSize: '30px',
//       fontWeight: 'bold',
//     },
//   },
// }

export const PaymentIcon = ({
  data,
  soma,
  setSoma,
  setMandarParaSacola,
  mandarParaSacola,
  pedido,
  setPedido,
}) => {
  const [openForme, setOpenForme] = useState(false)
  const AbreForme = () => {
    setOpenForme(!openForme)
  }

  const [valor, setValor] = useState(0)
  const [newSoma, setNewSoma] = useState('')
  console.log(soma)

  const addItem = (event) => {
    if (event === 'decrease') {
      if (valor === 0) {
        alert('Você tem que marcar os itens antes de diminuir.')
        return
      }
      setValor(valor - 1);
    } else {
      setValor(valor + 1);
    }
    if (valor) {
      setNewSoma((soma + valor * data.pizzaPrice).toFixed(2))
    }
  }

  if (mandarParaSacola) {
    return (

        <Stack sx={MyStyledContainer}>
          <T.GardMedia>
            <T.GardMediaMain>
              <img
                id="minha-imagem"
                width={250}
                height={250}
                src={data?.Image}
                alt="Pizza"
              />
            </T.GardMediaMain>

            <Box>
              <Box
                sx={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'red',
                }}
              >
                <Box sx={{ gap: '2.5rem' }}>
                  <T.ButtonsWrapper>
                    <T.MyBotton
                      fundo="#FF6510 !important"
                      onClick={() => addItem('add')}
                    >
                      +
                    </T.MyBotton>
                    <T.MyBotton onClick={() => addItem('decrease')}>
                      -
                    </T.MyBotton>
                  </T.ButtonsWrapper>
                  <p>Valor atual: {newSoma}</p>
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
          </T.GardMedia>
          <T.GridIngredients>
            <Stack>
              <Box>
                <PaidIngredients />
              </Box>
            </Stack> 
          </T.GridIngredients>
        </Stack>
   
    )
  }
}
