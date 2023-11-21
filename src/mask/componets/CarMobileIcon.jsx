import React from 'react'

import {
  TextField,
  Typography,
  Stack,
  Box,
  Card,
  Button,
  Modal,
} from '@mui/material';

import { useState } from 'react';

export const CarMobileIcon = () => {

    const [openMoadlPizza, setOpenMoadlPizza] =  useState(false);
    
  return (
    <>
      <Stack
      sx={{
        color: 'white',
        background: 'blue',
       

        width: '72px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        cursor:'pointer',
        borderRadius: '50%',
        right: '-10%',

      }}
      >CarMobileIcon</Stack>
    </>
  )
}
