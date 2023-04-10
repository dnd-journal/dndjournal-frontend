import styled from 'styled-components'

export default function Journal() {
  return(
    <JournalContainer>
      Journal
    </JournalContainer>
  )
}

const JournalContainer = styled.div`
background-color: lightblue;
display: flex;
flex-direction: column;
align-items: center;
`