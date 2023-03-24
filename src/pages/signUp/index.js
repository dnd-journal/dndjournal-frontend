import { useEffect, useState } from 'react';
import styled from 'styled-components'

export default function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [signUpForm, setSignUpForm] = useState({});

  function handleUsername(evt) {
    evt.preventDefault();

    console.log(evt.target.value);
    setUsername(evt.target.value);
  }

  function handleEmail(evt) {
    evt.preventDefault();

    console.log(evt.target.value);
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    evt.preventDefault();

    console.log(evt.target.value);
    setPassword(evt.target.value);
  }

  function handlePasswordConfirmation(evt) {
    evt.preventDefault();

    console.log(evt.target.value);
    setPasswordConfirmation(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setSignUpForm({
      username,
      email,
      password,
      passwordConfirmation
    })
  }

  return (
    <FormContainer>
        <FormFont>SIGN UP</FormFont>
        <InputField>
          <input type='text' placeholder='username' onChange={(evt) => handleUsername(evt)} />
        </InputField>
        <InputField>
          <input type='email' placeholder='email'  onChange={(evt) => handleEmail(evt)} />
        </InputField>
        <InputField>
          <input type='password' placeholder='password'  onChange={(evt) => handlePassword(evt)} />
        </InputField>
        <InputField>
          <input type='password' placeholder='password confirmation'  onChange={(evt) => handlePasswordConfirmation(evt)} />
        </InputField>
        <SubmitButton onClick={(evt) => handleSubmit(evt)} >SUBMIT</SubmitButton>
    </FormContainer>
  )
}

const FormContainer = styled.form`
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

const FormFont = styled.p`
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

const SubmitButton = styled.button`
  width: 90%;
  height: 3.6em;

  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -4px;
  border-radius: 6px;
`;
