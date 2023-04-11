import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import {BsFillPersonFill} from 'react-icons/bs';
export default function PersonalInfo(){

  const {userData} = useContext(UserContext);
  const {name} = userData;

  return (
    <PersonalInfoContainer>
      <NameContainer>
        <span>{name}</span>
        <div></div>
        <p>Name</p>
      </NameContainer>
      <Icon/>
    </PersonalInfoContainer>
  );
}

const PersonalInfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding: 4%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;
`;

const NameContainer = styled.div`
  width: auto;
  height: 36px;

  margin-left: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  >div {
    width: 200%;
    border-bottom: solid 2px;
    margin: 4px 0 2px 0;
  }

  >span {
    font-weight: 700;
  }

  >p {
    font-weight: 200;
  }
`

const Icon = styled(BsFillPersonFill)`
  font-size: 4em;
  margin: 0;
`