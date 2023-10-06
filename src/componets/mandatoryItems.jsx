import React, { useState } from 'react'
import { Typography, Stack, Box, Button, Input } from '@mui/material'

import AguaComgas from '../img/agua-mineral-com-gas.png'
import AguaSemgas from '../img/agua-mineral-sem-gas.png'
import FantaLaranja from '../img/fanta.png'
import FantaUva from '../img/fanta-uva-.png'
import Pessego from '../img/pessego.png'

import AguaTonica from '../img/agua-tonica-.png'
import Tonica from '../img/agua-tonica.jpg'
import GuaranaAntarctica from '../img/guarana-antarctica-removebg-preview.png'
import refreDeMaca from '../img/ilustracao-removebg-preview.png'
import Pepis from '../img/pepis.png'
import RefriPepis from '../img/refrigerante-pepis.png'

import Coca from '../img/refrigerante-coca-lata.jpg'
import RefriAbacaxi from '../img/Refrigerante-de-abacaxi-removebg-preview.png'
import Refriuva from '../img/refrigerante-de-uva.png'
import Sprite from '../img/sprite.png'
import Antarctica2l from '../img/Refrigerante-Guaraná-Antarctica-2l.jpg'
import Coca2l from '../img/refri-cocacola.png'

const Drinks = [
  {
    Image: Coca2l,
    name: 'Coca 2l',
    price: 12.5,
  },
  {
    Image: Antarctica2l,
    name: 'Garaná 2l',
    price: 12,
  },
  {
    Image: AguaComgas,
    name: 'Água Com Gás',
    price: 17,
  },
  {
    Image: AguaSemgas,
    name: 'Água Sem Gás',
    price: 10,
  },
  {
    Image: FantaLaranja,
    name: 'Fanta Laranja',
    price: 7,
  },
  {
    Image: FantaUva,
    name: 'Fanta Uva',
    price: 7,
  },
  {
    Image: Pessego,
    name: 'Suco de Pessego',
    price: 5,
  },

  {
    Image: AguaTonica,
    name: 'Água Tonica',
    price: 10,
  },
  {
    Image: Tonica,
    name: 'Água Tonica',
    price: 9,
  },
  {
    Image: GuaranaAntarctica,
    name: 'Guarana Antarctica',
    price: 7,
  },
  {
    Image: refreDeMaca,
    name: 'Refri de Maçã',
    price: 9,
  },
  {
    Image: Pepis,
    name: 'Pepis',
    price: 9,
  },
  {
    Image: RefriPepis,
    name: 'Pepis',
    price: 7,
  },

  {
    Image: Coca,
    name: 'Coca',
    price: 6,
  },
  {
    Image: RefriAbacaxi,
    name: 'Refri de Abacaxi',
    price: 8,
  },
  {
    Image: Refriuva,
    name: 'Refri de  Morango',
    price: 10,
  },
  {
    Image: FantaUva,
    name: 'Fanta Uva',
    price: 9,
  },
  {
    Image: Sprite,
    name: 'Sprite',
    price: 10,
  },
]

const MandatoryItems = ({ soma, setSoma, setPedido }) => {


  const [selectedItems, setSelectedItems] = useState([])
  const calculateTotal = () => {
    const total = selectedItems.reduce(
      (acc, index) => acc + Drinks[index].price,
      0
    )
    setSoma(total)
  }

  const getMydrink = ( arrayMyIndex ) => {
    const bebidas = []
    for (let i = 0; i < arrayMyIndex.length; i++) {
      const myDrink = {
        name: Drinks[arrayMyIndex[i]].name,
        price: Drinks[arrayMyIndex[i]].price,
      }
      bebidas.push(myDrink)
    }
    return bebidas
  }

  const handleItemToggle = (index) => {
    const itemIndex = selectedItems.indexOf(index)
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, index])
    } else {
      const updatedItems = [...selectedItems]
      updatedItems.splice(itemIndex, 1)
      setSelectedItems(updatedItems)
    }
  }

  const addBebida = () => {
    calculateTotal()
    console.log(selectedItems)
    const bebida = getMydrink(selectedItems)
    setPedido((prevPedido) => ({
      ...prevPedido,
      bebidas: [...prevPedido.bebidas, bebida],
    }))
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        height: 'auto',
        flexWrap: 'wrap',
        gap: '2rem',
        // // overflowY: 'scroll',
        // // background: 'red',
      }}
    >
      {Drinks.length > 0 &&
        Drinks.map((ingredient, index) => {
          const isChecked = selectedItems.includes(index)

          return (
            <Box
              key={index}
              sx={{
                color: 'red',
                border: '1px solid orange',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <img src={ingredient.Image} width={95} height={100} alt="" />
              <Typography>{ingredient.name}</Typography>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleItemToggle(index)}
              />
            </Box>
          )
        })}

      <Stack
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'row',
          height: 'auto',
          // overflowY: 'scroll',
          // background: 'green',
          flexWrap: 'wrap',
          gap: '2rem',

          '@media only screen and (max-width: 805px)': {
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          },
        }}
      >
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
          onClick={addBebida}
        >
          Ver o Preço Total
        </Button>

        {selectedItems.length > 0 && (
          <div>
            <Typography
              sx={{
                color: 'green',
                fontSize: '1.8rem',
                fontWeight: '900',
              }}
            >
              Total: {soma}
            </Typography>
          </div>
        )}
      </Stack>
    </Stack>
  )
}

export default MandatoryItems
