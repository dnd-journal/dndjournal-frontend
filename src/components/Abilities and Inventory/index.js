import styled from 'styled-components';
import Abilities from './Abilities';
import InventoryAndGold from './inventory and Gold';

export default function AbilitiesAndInventory(){
  return (
    <AbilitiesAndInventoryLayout>
      <Abilities/>
      <InventoryAndGold/>
    </AbilitiesAndInventoryLayout>
  )
}

const AbilitiesAndInventoryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5em;
`