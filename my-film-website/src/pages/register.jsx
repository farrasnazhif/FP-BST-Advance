import React from 'react'
import Navbar from "../components/Organisms/Navbar";
import RegisterFormLayouts from "../components/Templates/RegisterFormLayouts";

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-brandDark">
        <Navbar />
        <RegisterFormLayouts /> {/* children */}

    </main>
  )
}

export default RegisterPage;