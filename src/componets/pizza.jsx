import React, { useState, useEffect } from 'react'
import {
  TextField,
  Typography,
  Stack,
  Box,
  Card,
  Button,
  Modal,
} from '@mui/material'

import PizzaBanner from '../img/pizza-banner.png'
import PizzaBa from '../img/italian.webp'
import Capricciosa from '../img/capricciosa.webp'
import Cheesy from '../img/cheesy.webp'

import Margherita from '../img/margherita.webp'
import Hawaii from '../img/hawaii.webp'
import quattroStagioni from '../img/quattro-stagioni.webp'
import Tonno from '../img/tonno.webp'
import pizzabanner from '../img/pizza-banner.png'
import Pepperoni from '../img/pepperoni.webp'
import CloseIcon from '@mui/icons-material/Close'

import CreatPizza from './pizzD'
import { CarMobileIcon } from './CarMobileIcon'

const PizzaDeleils = [
  {
    Image: Capricciosa,
    userName: 'Pizza de Queijo',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 19.99,
  },
  {
    Image: PizzaBa,
    userName: 'Pizza de portuguesa',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 29.76,
  },
  {
    Image: PizzaBanner,
    userName: 'Pizza de calabresa',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 39.99,
  },
  {
    Image: PizzaBa,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 46.9,
  },

  {
    Image: PizzaBanner,
    userName: 'Pizza de calabresa',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 39.99,
  },
  {
    Image: PizzaBa,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 40.99,
  },

  {
    Image: Cheesy,
    userName: 'Pizza de Queijo',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 28.99,
  },
  {
    Image: PizzaBa,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 46.9,
  },

  {
    Image: Margherita,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 26.79,
  },

  {
    Image: Hawaii,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 46.39,
  },

  {
    Image: quattroStagioni,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 46.79,
  },
  {
    Image: Tonno,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 16.99,
  },
  {
    Image: pizzabanner,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 39.99,
  },
  {
    Image: Pepperoni,
    userName: 'Pizza de chocolate',
    description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
        drama asiático; fez-me refletir um pouco sobre
        os valores de culturas distintas`,
    pizzaPrice: 32.99,
  },
]

const style = {
  position: 'absolute',
  top: '60%',
  left: '50%',
  width: '60rem',
  height: '40rem',
  transform: 'translate(-50%, -60%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'ceneter',
  flexDirection: 'column',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '2.8rem',



  '@media only screen and (max-width: 805px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '99%',
    height: '99%',
    outline: 'none',
   
  },
}

const Pizza = ({ pizza }) => {
  const [open, setOpen] = useState(false)
  const [datas, setDatas] = useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const openModal = (img) => {
    setOpen(!open)
    const data = {
      Image: img.Image,
      userName: img.userName,
      description: img.description,
      pizzaPrice: img.pizzaPrice,
    }
    setDatas(data)
  }

  return (
    <>
      <Typography
        sx={{
          minHeight: '100vh',
          backgroundColor: '#dedede',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        {PizzaDeleils.length > 0 &&
          PizzaDeleils.map((addNewPizza, index) => {
            return (
              <Card
                key={index}
                sx={{
                  maxWidth: 345,
                  // background: 'rgb(3,37,77)',
                  border: '1px solid rgb(3,37,77)',
                  color: 'white',
                  gap: '39px',
                  margin: '2rem',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    '&:hover': {
                      transform: 'translateY(-20px)',
                      transition: '0.5s ease-in-out',
                    },
                  }}
                >
                  <img
                    onClick={handleOpen}
                    width={260}
                    height={260}
                    src={addNewPizza.Image}
                    alt="Pizza"
                  ></img>
                </Box>

                <Box
                  sx={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'red',
                  }}
                >
                  {addNewPizza?.userName}
                </Box>

                <Typography
                  sx={{ color: 'black', fontSize: '1.4rem' }}
                  variant="body2"
                  color="text.secondary"
                >
                  {addNewPizza?.description}
                </Typography>

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
                  }}
                >
                  {`R$ ${addNewPizza?.pizzaPrice}`}
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

                      backgroundColor: '#FF6510 !important',

                      '&:hover': {
                        background: 'transparent',
                        transition: '0.6s',
                      },
                    }}
                    onClick={() => openModal(addNewPizza)}
                  >
                    Ver as informações
                  </Button>
                </Stack>
              </Card>
            )
          })}

        {/* modal */}

        <Box
          sx={{
            // background: 'red',

            width: '80%',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            color: 'red',
          }}
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}> 
              <Box
                sx={{
                  position: 'absolute',
                  position: 'fixed',
                  right: '0',
                  top: '0',
                  width: '10%',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                 
                }}
              >
                <CloseIcon
                  sx={{
                    color: '#FF6510',
                    fontSize: '30px',
                  }}
                  onClick={handleClose}
                />
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {open && <CreatPizza data={datas} />}
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Typography>
    </>
  )
}
export default Pizza
