import { Box, Button, Stack, styled } from '@mui/material'

export const MyStyledContainer = styled(Stack)(({ theme }) => ({
  width: '65rem',
  height: '45rem',
  top: '-10%',
  left: '-5%',
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
    width: '97%',
    height: '99vh',
    top: '-0%',
    left: '1.5%',
    position: 'absolute',
    bgcolor: '#dedede',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '2.8rem',
    gap: '5rem',
  },
}))
export const MyBotton = styled(Button)(({ theme, fundo }) => ({
  borderRadius: '4px',
  fontSize: '2rem',
  height: '23px',
  width: '10px !important',
  color: '#fff',
  border: 'none',
  outline: 'none',
  fontFamily: 'Roboto sans-serif',
  fontFamily: 'Shrikhand cursive',
  fontWeight: '900',
  backgroundColor: fundo ? fundo : 'black !important',
}))
export const GridIngredients = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  bgcolor: 'black',
  height: '5.9rem',
  width: '100%',
}))
export const ButtonsWrapper = styled(Stack)(({ theme }) => ({
  bgrcolor: 'grey',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  gap: '2rem',
}))
export const GardMedia = styled(Box)(({ theme }) => ({
  width: '100%',
  bgcolor: 'green',
  padding: '1.5rem',
}))
export const GardMediaMain = styled(Box)(({ theme }) => ({
  '@media only screen and (max-width: 805px)': {
    background: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}))
export const Img = styled('img')(({ theme }) => ({
    width:250,
    height:250
  }))