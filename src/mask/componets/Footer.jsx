import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useEffect, useState } from 'react'


export const MyFooter = () => {

  const [trocarIcon, setTrocarIcon] = useState(true);

  useEffect(() => {
    const tempoTemorato = setTimeout(() => {
      setTrocarIcon(prevIcon => !prevIcon);
    }, 2000);

    return () => clearTimeout(tempoTemorato);
  }, [trocarIcon]);

  return (
    <>
      <Stack
        sx={{
          padding: ' 2rem 7%',
          bgcolor: 'black',
          width: '100%',
          height: '25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',


          '@media only screen and (max-width: 700px)': {
            flexDirection: 'column',
            transition: 'all 0.45s ease',

          },
        }}
      >
        <Box>
          <Box className="div-box-text">
            <h2>
              Pizzaria<span> Sow</span>
            </h2>
          </Box>
          <Typography sx={{ bgcolor: 'black' }}>
            <WhatsAppIcon
              sx={{ width: '37px', height: '37px' }}
              className="contato-icons"
            />
            <FacebookSharpIcon
              sx={{ width: '37px', height: '37px' }}
              className="contato-icons"
            />
            <InstagramIcon
              sx={{ width: '37px', height: '37px' }}
              className="contato-icons"
            />
            <YouTubeIcon
              sx={{ width: '37px', height: '37px' }}
              className="contato-icons"
            />
          </Typography>
        </Box>

        <Box className="div-box-icon">


          {trocarIcon ? <WifiCalling3Icon sx={{
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
            }
          }} /> : <WhatsAppIcon sx={{
            color: '#FF6510',
            width: '2rem',
            bgcolor: '#fff',
            height: '3.8rem',
            width: '3.8rem',
            padding: '1px',
            borderRadius: '50%',
            '&:hover': {
              color: '#fff',
              bgcolor: '#FF6510',
              transition: 'all 0.42s ease',
            }
          }} />}
          <Box>
            <p>24/7 serviço de entrega de pizza</p>
            <h3>+55 41 99760-748</h3>
          </Box>

        </Box>
      </Stack>
    </>
  )
}
