import React, { useEffect, useState } from 'react'
import './header.css'
import { Stack, Box, Typography } from '@mui/material'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'
import MenuIcon from '@mui/icons-material/Menu'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { IconButton } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Link } from 'react-router-dom'
import { PaidIngredients } from '../paidIngredients'
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

// const myStylesCss = {
//   color: 'red',
//   backgroundColor: '#999',
//   width: '450px',
//   height: '61vh',
//   top: '8.5rem',
//   left: '0px',
//   position: 'absolute',
//   overflowY: 'scroll',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignContent: 'center',
//   color: 'red',
//   opacity: 0,
//   transformOrigin: 'left center',
//   transform: 'scaleX(0)',
//   transition: 'opacity 0.5s ease, transform 0.5s ease',
//   animation: `${fadeInAnimation} 0.5s forwards`,
//   padding: '1.5rem',
//   overflowY: 'scroll',

//   '@media only screen and (max-width: 700px)': {
//     overflowY: 'scroll',
//     display: 'flex',
//     color: 'red',
//     // backgroundColor: 'blue',
//     width: '100%',
//     height: '90vh',
//     top: '8.5rem',
//     bottom: '0px',
//     position: 'absolute',
//     opacity: 0,
//     transformOrigin: 'bottom center',
//     transform: 'scaleX(0)',
//     transition: 'opacity 0.5s ease, transform 0.5s ease',
//     animation: `${fadeInAnimation} 0.5s forwards`,
//     padding: '1.5rem',
//   },
// }

export const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.Container_Header')
    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [abreMeno, setabreMeno] = useState(false)
  const MenuAberto = () => {
    setAbrirIcon(true)
  }
  const FecharMenu = () => {
    setabreMeno(!abreMeno)
  }

  const [isWhatsApp, setIsWhatsApp] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsWhatsApp((prevIsWhatsApp) => !prevIsWhatsApp)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  const [openPaidIngredient, setOpenPaidIngredient] = useState(false)
  const TogglebreIngredientePago = () => {
    setOpenPaidIngredient(!openPaidIngredient)
  }

  return (
    <header className="Container_Header">
      <Box className="div-box-text">
        <h2>
          Pizzaria<span> Sow</span>
        </h2>
      </Box>

      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.9rem',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',

            '@media only screen and (max-width: 700px)': {
              display: 'none',
            },
          }}
          className="div-box-button"
        >
          {isWhatsApp ? (
            <WhatsAppIcon
              sx={{
                color: '#FF6510',
                width: '2rem',
                height: '3.8rem',
                width: '3.8rem',
              }}
            />
          ) : (
            <WifiCalling3Icon
              sx={{
                color: '#FF6510',
                width: '2rem',
                height: '3.8rem',
                width: '3.8rem',
              }}
            />
          )}
          <Box>
            <p>24/7 serviço de entrega de pizza</p>
            <h3>+55 41 99760-748</h3>
          </Box>
        </Box>

        <Stack
          sx={{
            display: 'flex',

            '@media only screen and (max-width: 700px)': {
              display: 'flex',
            },
          }}
        >
          <Box className="logoIcons">
            <span onClick={TogglebreIngredientePago}>
              {openPaidIngredient ? (
                <ClearIcon
                  sx={{
                    width: '30px',
                    height: '40px',
                  }}
                />
              ) : (
                <LocalMallIcon
                  sx={{
                    width: '30px',
                    height: '40px',
                  }}
                />
              )}
            </span>
          </Box>
        </Stack>
      </Stack>
      <PaymentIcon mandarParaSacola={openPaidIngredient} />
      <Stack
        sx={{
          display: 'none',

          '@media only screen and (max-width: 700px)': {
            display: 'flex',
          },
        }}
      >
        <Box className="logoIcons">
          <span onClick={FecharMenu}>
            {abreMeno ? <RestaurantMenuIcon /> : <MenuIcon />}
          </span>
        </Box>

        {abreMeno && (
          <Box className="menu-celular">
            <Box className="div-box-icon">
              {isWhatsApp ? (
                <WhatsAppIcon
                  sx={{
                    color: '#FF6510',
                    bgcolor: '#fff',
                    width: '2rem',
                    borderRadius: '50%',
                    height: '3.8rem',
                    width: '3.8rem',
                    padding: '2px',

                    '&:hover': {
                      color: '#fff',
                      bgcolor: '#FF6510',
                      transition: 'all 0.42s ease',
                    },
                  }}
                />
              ) : (
                <WifiCalling3Icon
                  sx={{
                    color: '#FF6510',
                    bgcolor: '#fff',
                    width: '2rem',
                    borderRadius: '50%',
                    height: '3.8rem',
                    width: '3.8rem',
                    padding: '2px',

                    '&:hover': {
                      color: '#fff',
                      bgcolor: '#FF6510',
                      transition: 'all 0.42s ease',
                    },
                  }}
                />
              )}
              <Box>
                <p>24/7 serviço de entrega de pizza</p>
                <h3>+55 41 99760-748</h3>
              </Box>
            </Box>
          </Box>
        )}
      </Stack>
    </header>
  )
}
