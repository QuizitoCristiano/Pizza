import React, { useState, useEffect } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import PizzaBanner from '../img/pizza-banner.png'
import QuatroEstacoes from '../img/quattro-stagioni.webp'
import Margherita from '../img/capricciosa.webp'

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [PizzaBanner, QuatroEstacoes, Margherita] // Lista de imagens

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [images])

  return (
    <Stack
      sx={{
        height: '100vh',
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'black',
        color: '#fff',
        padding: '2rem',
        padding: '5rem 9% 2rem',
        '@media only screen and (max-width: 805px)': {
          minHeight: '768px',
        },
      }}
    >
      <Stack
        sx={{
          //   bgcolor: 'red',
          gap: '2rem',
          height: 'auto',
          width: '100%',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'space-between',
          flexDirection: 'row',
          gap: '4rem',

          '@media only screen and (max-width: 905px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '3rem',
              fontWeight: '800',
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
              listStyle: 'none',
              scrollBehavior: 'smooth',
              marginBottom: '2rem',
              color: '#FF6510',

              position: 'relative',

              '@media only screen and (max-width: 905px)': {
                fontSize: '2rem',
                fontWeight: '800',
                position: 'relative',
              },
            }}
            variant="h4"
          >
            Melhor pizza da cidade
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontSize: '3rem',
              fontWeight: '800',
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
              listStyle: 'none',
              scrollBehavior: 'smooth',

              '@media only screen and (max-width: 905px)': {
                fontSize: '2rem',
                fontWeight: '800',
              },
            }}
            variant="h2"
          >
            Perfeição de pizza <br /> em cada mordida
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
          className="myImgPizza"
        >
          {/* <img src={PizzaBanner} alt="" /> */}
          <Box className="styles_top "></Box>
          <Box className="styles_left"></Box>
          <img
            id="minha-imagem"
            width={450}
            height={450}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{
              '@media screen and (max-width: 805px)': {
                width: '50px',
                height: 'auto',
              },
            }}
          />

          <Box className="styles_line "></Box>
          <Box className="styles_right"></Box>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Banner
