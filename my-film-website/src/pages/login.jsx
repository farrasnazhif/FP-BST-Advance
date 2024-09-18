import React from 'react'
import LoginFormLayouts from '../components/Templates/LoginFormLayouts'
import Navbar from '../components/Organisms/Navbar'

const LoginPage = () => {
  return (
   <main className='min-h-screen bg-brandDark'>
    <Navbar />
    <LoginFormLayouts />
   </main>
  )
}

export default LoginPage;