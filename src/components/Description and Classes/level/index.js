import styled from 'styled-components';
import { BsShieldShaded } from 'react-icons/bs';
import { useState } from 'react';

export default function Level() {

  const [filled, setFilled] = useState(50);

  return (
    <LevelContainer>
      <IconAndTextContainer>
        <Icon />
        <IconText>
          <p>
            10
          </p>
        </IconText>
      </IconAndTextContainer>
      <XpContainer>
        <ProgressBar filled={filled}>
          <div style={{
            height: '100%',
            width: `${filled}%`,
            backgroundColor: 'black'
          }}/>
        </ProgressBar>
        {filled}/100 xp
      </XpContainer>
    </LevelContainer>
  )
}

const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Icon = styled(BsShieldShaded)`
  font-size: 4em;
`;

const IconText = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);

  >p{
    font-size: 24px;
    font-weight: 700;
    color: black;
    -webkit-text-stroke: 1px white;
  }
`;

const XpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4%;
  border: solid 2px black;
  outline: solid 1px black;
  outline-offset: -0.3em;
  border-radius: 1em;

  width: 80%;
  height: 80%;
`;

const ProgressBar = styled.div`
  height: 50%;
  width: 70%;
  border: solid 1px;
  border-radius: 1em;
`;