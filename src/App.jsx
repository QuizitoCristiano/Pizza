import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/mylayouts'
import { MyHome } from './pages/home'
import { PaymentIcon } from './paidIngredients/PaymentIcon'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome />} />
      </Routes>
      <PaymentIcon/>
    </BrowserRouter>
  )
}

export default App
