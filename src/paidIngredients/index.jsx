import React, { useEffect, useState } from 'react'
import { Button, Box, Stack, Typography } from '@mui/material'
import NestedModal from '../componets/DateSlection'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Topping } from '../mask'
import TextField from '@mui/material/TextField'

import Modal from '@mui/material/Modal'

export const PaidIngredients = () => {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [block, setBlock] = useState('')
  const [floor, setFloor] = useState('')
  const [apartment, setApartment] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // const [errors, setErrors] = useState({
  //   fullName: '',
  //   phoneNumber: '',
  //   address: '',
  //   cep: '',
  //   block: '',
  //   floor: '',
  //   apartment: '',
  // })

  // const handleFullNameChange = (event) => {
  //   const value = event.target.value
  //   setFullName(value)
  //   setErrors({ ...errors, fullName: value ? '' : 'Campo obrigatório' })
  // }

  // const handlePhoneNumberChange = (event) => {
  //   const value = event.target.value
  //   setPhoneNumber(value)
  //   setErrors({ ...errors, phoneNumber: value ? '' : 'Campo obrigatório' })
  // }



  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState(false);

  const handleNomeChange = (event) => {
    const novoNome = event.target.value;
    setNome(novoNome);
    setError(novoNome === '');
  };

  const handleButtonClick = () => {
    setError(nome === '' ? true : false);
  };

  const handleTelefoneChange = (event) => {
    const novoTelefone = event.target.value;
    setTelefone(novoTelefone);
    setError(!isValidTelefone(novoTelefone));
  };

  const isValidTelefone = (telefone) => {
    // Expressão regular para permitir apenas dígitos e um comprimento mínimo de 10
    const telefoneRegex = /^\d{10,}$/;
    return telefoneRegex.test(telefone);
  };




  const style = {
    width: '65rem',
    height: '45rem',
    top: '20%',
    left: '30%',
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
      width: '96%',
      height: '90vh',
      top: '10%',
      left: '0%',
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

  return (
    <>
      <Stack
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
            color: 'white',
            bgcolor: '  #FF6510 !important',
            fontSize: '1.2rem',
            fontWeight: '900',
          }}
     
         onClick={handleOpen}>Preencha os dados</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack
              sx={{
                width: '100%',
                height: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridGap: '10px',

                '@media only screen and (max-width: 805px)': {
                  gridTemplateColumns: 'repeat(1, 1fr)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: '10px',

                  '@media only screen and (max-width: 805px)': {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                }}
              >
                <TextField
                  type="text"
                  placeholder="Nome completo"
                  id="nome"
                  variant="outlined"
                  fullWidth
                  value={nome}
                  onChange={handleNomeChange}
                  error={error}
                  
                  helperText={ error ? 'Por favor, preencha o nome.' : '' }
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />

                <TextField
                  type="Number"
                  placeholder="Número de telefone"
                  value={telefone}
                  onChange={handleTelefoneChange}
                  helperText={error ? 'Por favor, insira um telefone válido.' : ''}
                  error={error}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridGap: '10px',

                  '@media only screen and (max-width: 805px)': {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                }}
              >
                <TextField
                  type="text"
                  placeholder="Endereço de entrega"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />

                <TextField
                  type="text"
                  placeholder="CEP"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridGap: '10px',
                }}
              >
                <TextField
                  type="text"
                  placeholder="Bloco"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />

                <TextField
                  type="text"
                  placeholder="Andar"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />
                <TextField
                  type="text"
                  placeholder="apartamento"
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  gridGap: '10px',
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={7}
                  placeholder="A sua mensagem é muito importante"
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    borderRadius: '8px',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                />
              </Box>
            </Stack>

            <Stack>
              <Button
                sx={{
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '500',
                  padding: '1rem 2rem',
                  color: '#fff',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Roboto sans-serif',
                  fontFamily: 'Shrikhand cursive',
                  fontWeight: '900',
                  gap: '2rem',
                  backgroundColor: '#FF6510 !important',
                  fontSize: '1.2rem',
                  fontWeight: '900',
                  
                }}
                onClick={handleButtonClick}
              >
                Finalizar pedido
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </>
  )
}
