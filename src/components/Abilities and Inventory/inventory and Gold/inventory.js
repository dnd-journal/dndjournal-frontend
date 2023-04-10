import styled from 'styled-components'
import {SiReact} from 'react-icons/si';

export default function Inventory(){
  return(
    <InventoryContainer>
      inventory
      <Icons/>
      <Icons/>
      <Icons/>
    </InventoryContainer>
  )
}

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 4%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;
`;

const Icons = styled(SiReact)`
  font-size: 54px;
  margin: 20%;
`;