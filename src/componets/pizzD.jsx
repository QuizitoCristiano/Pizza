import React, { useState, useEffect, Fragment } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material'
import MandatoryItems from './mandatoryItems'
import { Topping } from '../mask'
import NestedModal from './DateSlection'
import Pizza from './pizza'
import { PaymentIcon } from '../paidIngredients/PaymentIcon'

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

const sizes = [
  {
    size: 'Pequena',
    percentage: 30,
    tamanho: '40px',
  },
  {
    size: 'Média',
    percentage: 15,
    tamanho: '49px',
  },
  {
    size: 'Grande',
    percentage: 30,
    tamanho: '57px',
  },
]

export const CreatPizza = ({ data }) => {
  const [soma, setSoma] = useState(0);
  const [selectedSize, setSelectedSize] = useState('')
  const [abreMenuPizza, setAbreMenuPizza] = useState(false)

  const toggleMenu = () => {
    setAbreMenuPizza(!abreMenuPizza)
  }

  const [openNewModa, setOpenNewModa] = useState(false)

  const toggleNewModal = () => {
    setOpenNewModa(!openNewModa)
  }

  const [pedido, setPedido] = useState({
    pizza: {
      nome: [data.userName],
      imagem: [data.Image],
    },

    
      ingredientes: [],
      bebidas: [],
    
  })




  useEffect(() => {
    console.log(pedido)
  }, [pedido])




  // useEffect(() => {
  //   // Convertendo o objeto pedido para um formato compatível com o Firebase
  //   const pedidoFirebase = {
  //     pizza: {
  //       nome: pedido.pizza.nome[0],
  //       imagem: pedido.pizza.imagem[0],
  //     },
  //     ingredientes: pedido.ingredientes,
  //     bebidas: pedido.bebidas,
  //   };
  
  //   // Enviando para o Firebase
  //   database.ref('pedidos').push(pedidoFirebase)
  //     .then(() => {
  //       console.log('Pedido enviado com sucesso para o Firebase!');
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao enviar pedido para o Firebase:', error);
  //     });
  // }, [pedido]);
  




  


  const [sacola, setSacola] = useState([])

  const adicionarItemNaSacola = () => {
    if (pedido.ingredientes.length > 0 || pedido.bebidas.length > 0) {
      setSacola([...sacola, pedido])
      // alert('Você conseguiu adicionar na sacola!')
    } else {
      alert('Você não conseguiu adicionar os itens. Tente novamente.')
    }
  }

  const [mandarParaSacola, setMandarParaSacola] = useState(false)
  const addSacolo = () => {
    setMandarParaSacola(true)
    return adicionarItemNaSacola()
  }

  const handleSizeSelection = (size) => {
    setSelectedSize(size)
  }

  return (
    <>
      <Stack
        sx={{
          display: 'grid',
          height: 'auto',
          gridTemplateColumns: '1fr 2fr',
          gap: '1rem',
          position: 'relative',
          '@media only screen and (max-width: 805px)': {
            gridTemplateColumns: ' 1fr',
          },
        }}
      >
        <Box
          sx={{
            '@media only screen and (max-width: 805px)': {
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
          <Stack
            sx={{
              position: 'relative',
              height: '33rem',
              gap: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              '@media only screen and (max-width: 805px)': {
                height: '50rem',
                width: '100%',
              },
            }}
          >
            <Stack
              sx={{
                height: '30rem',
                padding: '1rem',
                gap: '2rem',
                // background: 'green',
                overflowY: 'scroll',

                '@media only screen and (max-width: 805px)': {
                  height: '40rem',
                  gap: '2rem',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  textAlign: 'center',
                  // background: 'green',
                },
              }}
            >
              <Box
                sx={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'red',
                }}
              >
                {data?.userName}
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      // bgcolor: 'red',
                      width: '100%',

                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      marginBottom: '2rem',
                    }}
                  >
                    {sizes.map((size, index) => {
                      return (
                        <Box sx={{ gap: '2rem' }} key={index}>
                          <img
                            style={{
                              width: size.tamanho,
                              height: size.tamanho,
                            }}
                            src={data.Image}
                            alt={data.description}
                          />
                          <Stack>
                            <Box sx={{ color: 'black', gap: '2rem' }}>
                              {size.size}
                            </Box>
                            <input
                              type="radio"
                              name={selectedSize}
                              value={size.size}
                              checked={selectedSize === size.size}
                              onChange={() => handleSizeSelection(size.size)}
                            />
                          </Stack>
                        </Box>
                      )
                    })}
                  </Typography>
                </Typography>

                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Topping
                    soma={soma}
                    setSoma={setSoma}
                    setPedido={setPedido}
                  />
                </Typography>

                <Typography
                  sx={{
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      color: 'red',
                      marginBottom: '1rem',
                      marginTop: '1rem',
                      width: '100%',
                    }}
                  ></Box>
                  <Stack>
                    <Button
                      sx={{
                        borderRadius: '4px',
                        bgcolor: '#f6410a',
                        fontSize: '12px',
                        fontWeight: '500',
                        padding: '1rem 2rem',
                        Color: '#fff',
                        border: 'none',
                        outline: 'none',
                        fontFamily: 'Roboto sans-serif',
                        fontFamily: 'Shrikhand cursive',
                        fontWeight: '900',
                        gap: '2rem',
                        backgroundColor: '#FF6510 !important',
                      }}
                      onClick={toggleMenu}
                    >
                      {abreMenuPizza ? (
                        <ArrowUpwardIcon
                          sx={{
                            color: '#fff',
                            fontWeight: '900',
                            fontSize: '2rem',
                          }}
                        />
                      ) : (
                        <ArrowDownwardIcon
                          sx={{
                            color: '#fff',
                            fontWeight: '900',
                            fontSize: '2rem',
                          }}
                        />
                      )}
                      Itens de Bebidas
                    </Button>
                    <Box
                      sx={{
                        color: 'red',
                        marginBottom: '2rem',
                        marginTop: '2rem',
                        width: '100%',
                      }}
                    >
                      {abreMenuPizza && (
                        <MandatoryItems
                          setPedido={setPedido}
                          pedido={pedido}
                          soma={soma}
                          setSoma={setSoma}
                        />
                      )}
                    </Box>
                  </Stack>
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1.4rem',
                  marginBottom: '3rem',
                }}
                variant="body2"
                color="text.secondary"
              >
                {data?.description}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: ' space-between',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '600',
              color: 'rgb(3,37,77)',
              position: 'absolute',
              bottom: '0px',

              '@media only screen and (max-width: 805px)': {
                gap: '2rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                // background: 'green',
                bottom: '45px',
              },
            }}
          >
            {soma ? (
              <Button
                sx={{
                  borderRadius: '4px',
                  bgcolor: '#f6410a',
                  fontSize: '12px',
                  fontWeight: '500',
                  padding: '1rem 2rem',
                  color: 'white !important',
                  fontFamily: 'Roboto sans-serif',
                  fontFamily: 'Shrikhand cursive',
                  fontWeight: '900',
                  gap: '2rem',
                  backgroundColor: '#FF6510 !important',

                  '&:hover': {
                    background: 'transparent',
                    transition: '0.6s',
                  },
                }}
                onClick={addSacolo}
              >
                Adicionar na sacola
                <Box onClick={toggleNewModal} sx={{ height: 'auto' }}>
                  {sizes.map((item, index) => {
                    const calculatePrice = () => {
                      const percentage = item.percentage / 100
                      const price = data.pizzaPrice

                      if (selectedSize === 'small') {
                        return (price - price * percentage + soma).toFixed(2)
                      } else {
                        return (price + price * percentage + soma).toFixed(2)
                      }
                    }

                    return (
                      <Fragment key={index}>
                        {item.size === selectedSize && (
                          <Fragment>{`R$ ${calculatePrice()}`}</Fragment>
                        )}
                      </Fragment>
                    )
                  })}
                </Box>
              </Button>
            ) : null}
          </Stack>
        </Box>
      </Stack>
      <PaymentIcon
        setMandarParaSacolae={setMandarParaSacola}
        mandarParaSacola={mandarParaSacola}
        data={data}
        soma={soma}
        setSoma={setSoma}
        setPedido={setPedido}
        pedido={pedido}
      />
    </>
  )
}

export default CreatPizza
