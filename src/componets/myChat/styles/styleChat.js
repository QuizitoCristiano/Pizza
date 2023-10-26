import { Box, Button, Stack, styled } from '@mui/material'

export const MyContainer = styled(Stack)(({ theme }) => ({
  bgcolor: '#dedede',
  border: '2px solid black',
  position: 'relative',
  borderRadius: '1rem',
  gap: '3rem',
  width: '350px',
  margin: '29px',
  padding: '2rem',
  minHeight: '440px',

  '@media only screen and (max-width: 705px)': {
    width: '80%',
    height: '53vh',
    top: '-0%',
    left: '1.5%',
    bgcolor: '#dedede',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '2.8rem',
    gap: '5rem',
    overflowY: 'auto',
  },
}))
export const GardMin = styled(Box)(({ theme }) => ({
  height: '300px',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: 'lightgray lightgray',
  '&::-webkit-scrollbar': {
    width: '1px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'lightgray',
  },
}))

export const MiniContainer = styled(Stack)(({ theme }) => ({
  bgcolor: '#dedede',
  position: 'relative',
  borderRadius: '1rem',
  gap: '1rem',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',

  '@media only screen and (max-width: 705px)': {
    width: '97%',
  },
}))
