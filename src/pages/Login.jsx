import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../styles/login.css'
import Email from '../assets/icons/email.svg'
import Lock from '../assets/icons/lock.svg'

const Login = () => {
  const [input, setInput] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  return (
    <main className='main'>
      <div className='input'>
        <h3 className='text'>Welcome! Enter your email and password to continue</h3>
        <div className='div1'>
          <h4 className='text'>Test data</h4>
          <div className='testdata'>
            <img src={Email} />
            <h4>john@gmail.com</h4>
          </div>
          <div className='testdata'>
            <img src={Lock} />
            <h4>john1234</h4>
          </div>
        </div>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Form.Text className='text-muted'> </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={inputPassword}
              onChange={e => setInputPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </main>
  )
}

export default Login
