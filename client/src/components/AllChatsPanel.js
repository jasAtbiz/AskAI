import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  box-sizing: border-box;
  /* display: flex; */
  width: 20vw;
  height: 100vh;
  background-color: #460C68;
`;

const NewChatButton = styled(Button)`
  border: 1px solid black;
  width: 95%;
  margin: 10px 2px;
`

const AllChatsPanel = () => {
  return (
    <MainDiv>
      <NewChatButton>+ New Chat</NewChatButton>
    </MainDiv>
  )
}

export default AllChatsPanel