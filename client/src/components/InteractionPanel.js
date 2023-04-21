import { ArrowRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  box-sizing: border-box;
  width: 80vw;
  height: 100vh;
  background-color: #FEDEFF;
`;

const Interactions = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
`;

const Title = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleInput = styled(Input)`
  border: none;
  box-shadow: 3px 3px 3px #444444;
  font-size: 14px;
  width: 600px;

  &:hover{
    outline: none;
    border: none;
  }
`;

const InteractionChat = styled.div`
  height: 65vh;
`;

const InteractionInputDiv = styled.div`
  display: flex;
  height: 20vh;
  /* border-top: 1px solid black; */
`

const StyledInput = styled(Input)`
  margin: 50px 150px;
  padding: 8px 30px;
  border: none;
  box-shadow: 5px 5px 5px #444444;
  font-size: 14px;
  width: 100%;

  &:hover{
    outline: none;
    border: none;
  }
`;


const StyledArrow = styled(ArrowRightOutlined)`
  cursor: pointer;
`

const InteractionPanel = () => {

  const [interactionInputVal , setInteractionInputVal] = useState("");
  const [titleInputVal , setTitleInputVal] = useState("");

  const showEnteredText = (e) => {
    setInteractionInputVal("");
  }

  return (
    <MainDiv>
      <Interactions>
        <Title>
          <TitleInput 
            placeholder='Enter title of your chat ( will help you in future )'
            onChange={(e) => setTitleInputVal(e.target.value)}
            value={titleInputVal}
          />
        </Title>

        <InteractionChat>

        </InteractionChat>

      </Interactions>
      <InteractionInputDiv>
        <StyledInput 
          placeholder='Ask AI...'
          onChange={(e) => setInteractionInputVal(e.target.value)}
          onPressEnter={showEnteredText}
          value={interactionInputVal}
        />
      </InteractionInputDiv>
    </MainDiv>
  )
}

export default InteractionPanel