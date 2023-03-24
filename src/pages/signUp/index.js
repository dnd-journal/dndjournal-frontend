import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { signUp } from '../../services/signUpApi';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  const signUpForm = {
    username,
    email,
    password,
    passwordConfirmation
  }

  function handleUsername(evt) {
    evt.preventDefault();

    setUsername(evt.target.value);
  }

  function handleEmail(evt) {
    evt.preventDefault();

    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    evt.preventDefault();

    setPassword(evt.target.value);
  }

  function handlePasswordConfirmation(evt) {
    evt.preventDefault();

    setPasswordConfirmation(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const userData = await signUp(signUpForm);
      console.log(userData);
      navigate('/log-in')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <FormContainer>
      <FormFont>SIGN UP</FormFont>
      <InputField>
        <input type='text' placeholder='username' onChange={(evt) => handleUsername(evt)} />
      </InputField>
      <InputField>
        <input type='email' placeholder='email' onChange={(evt) => handleEmail(evt)} />
      </InputField>
      <InputField>
        <input type='password' placeholder='password' onChange={(evt) => handlePassword(evt)} />
      </InputField>
      <InputField>
        <input type='password' placeholder='password confirmation' onChange={(evt) => handlePasswordConfirmation(evt)} />
      </InputField>
      <SubmitButton onClick={(evt) => handleSubmit(evt)} >SUBMIT</SubmitButton>
      <FormLink to='/log-in'>
        Already have an account? Log-in now!
      </FormLink>
    </FormContainer>
  )
}


export const FormContainer = styled.form`
  height: 30em;
  width: 24em;
  padding: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;
`

export const FormFont = styled.span`
  font-size: 36px;
`

const InputField = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  >input{
    width: 100%;
    height: 3.6em;
    padding: 8px;
    border: none;
    border-radius: 6px;
  }

  >input::placeholder{
    font-size: 16px;
  }
`

export const SubmitButton = styled.button`
  width: 90%;
  height: 3.6em;

  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -4px;
  border-radius: 6px;
`;

export const FormLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: black;
`