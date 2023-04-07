import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import logIn from '../../services/logInApi';
import { FormContainer, FormFont, FormLink, SubmitButton } from '../signUp';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  const loginForm = {
    email,
    password
  }

  function handleEmail(evt) {
    evt.preventDefault();

    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    evt.preventDefault();

    setPassword(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const userData = await logIn(loginForm);
      setUserData(userData);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer>
      <FormFont>LOGIN</FormFont>
      <LoginFormContainer>
        <InputField>
          <input type='email' placeholder='email' onChange={(evt) => handleEmail(evt)} />
        </InputField>
        <InputField>
          <input type='password' placeholder='password' onChange={(evt) => handlePassword(evt)} />
        </InputField>
      </LoginFormContainer>
      <SubmitButton onClick={(evt) => handleSubmit(evt)} >SUBMIT</SubmitButton>
      <FormLink to='/sign-up'>
        Don't have an account yet? Sign-up now!
      </FormLink>
    </FormContainer>
  )
}

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width: 90%;
  height: 8em;
`

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  >input{
    width: 100%;
    height: 3.6em;
    padding: 8px;
    border: solid 2px;
    border-radius: 6px;
  }

  >input::placeholder{
    font-size: 16px;
  }
`