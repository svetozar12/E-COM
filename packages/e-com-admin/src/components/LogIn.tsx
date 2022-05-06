import React from 'react'
import { Form, Input } from '@E-COM/ui_lib'

const LogIn = () => {
  const [emailValue, setEmailValue] = React.useState<string>('')
  const [passwordValue, setPasswordValue] = React.useState<string>('')

  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(false)
  const [isPasswordShort, setIssPasswordShort] = React.useState<boolean>(false)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const handleSubmit = async (): Promise<any> => {
    return console.log('click')
  }
  return (
    <>
      <Form
        button_label="LOG-IN"
        handleSubmit={handleSubmit}
        childrens={[
          <Input.Email
            emailValue={emailValue}
            setEmailValue={setEmailValue}
            isValidEmail={isValidEmail}
          />,
          <Input.Password
            passwordValue={passwordValue}
            setPasswordValue={setPasswordValue}
            isPasswordShort={isPasswordShort}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />,
        ]}
      />
    </>
  )
}

export default LogIn
