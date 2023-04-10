import styled from 'styled-components'

export default function Gold(){
  return (
    <GoldContainer>Gold</GoldContainer>
  )
}

const GoldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 4%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;
`