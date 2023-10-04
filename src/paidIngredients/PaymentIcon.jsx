import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { PaidIngredients } from './index'

export const PaymentIcon = () => {
  const [openForme, setOpenForme] = useState(false)
  const AbreForme = () => {
    setOpenForme(!openForme)

    alert('beleza bor aí')
  }

  return (
    <>
      <Box
        sx={{
          height: '100%',
          bgcolor: 'grey',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '10px',

          '@media only screen and (max-width: 805px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        }}
      >
        <LocalMallIcon sx={{ color: '#FF6510', fontSize: '3rem' }} />

        <Typography
          sx={{
            position: 'absolute',
            top: '1.3rem',
            // right: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            fontSize: '1.5rem',
            bgcolor: 'black',
            height: '18px',
            width: '1.8rem',
          }}
        >
          3
        </Typography>

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
            <Button
              sx={{
                color: 'white',
                bgcolor: '  #FF6510 !important',
                fontSize: '1.2rem',
                fontWeight: '900',
              }}

              onClick={() => AbreForme()}
            >
              Fazer Bedido
            </Button>
          </Stack>
        </Typography>
      </Box>
    </>
  )
}
