import React from 'react'
import DetailFormLayouts from '../Organisms/DetailFormLayouts'
import RegisterForm from '../Molecules/RegisterForm'

const RegisterFormLayouts = () => {
  return (
    <DetailFormLayouts title="Register" type="register">
      <RegisterForm></RegisterForm>
    </DetailFormLayouts>

  )
}

export default RegisterFormLayouts
