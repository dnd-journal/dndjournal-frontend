import styled from 'styled-components';
import Gold from './gold';
import Inventory from './inventory';

export default function InventoryAndGold(){
  return (
    <InventoryAndGoldTemplate>
      <Gold/>
      <Inventory/>
    </InventoryAndGoldTemplate>
  )
}

const InventoryAndGoldTemplate = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
`