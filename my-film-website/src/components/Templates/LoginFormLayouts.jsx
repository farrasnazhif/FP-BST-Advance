import React from 'react'
import DetailFormLayouts from '../Organisms/DetailFormLayouts'
import LoginForm from '../Molecules/LoginForm'

const LoginFormLayouts = () => {
  return (
      <DetailFormLayouts title="Login" type="login">
      <LoginForm></LoginForm>
    </DetailFormLayouts>

  )
}

export default LoginFormLayouts
