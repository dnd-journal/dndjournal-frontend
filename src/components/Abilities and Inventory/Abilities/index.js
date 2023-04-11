import styled from 'styled-components';

export default function Abilities(){
  return (
    <AbilitiesContainer>
      <AbilityContainer>
        COM
        <p>10</p>
      </AbilityContainer>
    </AbilitiesContainer>
  )
}

const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 10%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;
`;

const AbilityContainer = styled.div`
  width: 4em;
  height: 4em;
  padding: 10%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* position: relative; */

  >p{
    font-weight: 700;
  }
`;