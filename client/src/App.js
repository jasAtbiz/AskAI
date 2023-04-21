import styled from 'styled-components';
import './App.css';
import AllChatsPanel from './components/AllChatsPanel';
import InteractionPanel from './components/InteractionPanel';

const AskAi = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <AskAi>
        <AllChatsPanel />
        <InteractionPanel />
      </AskAi>
    </div>
  );
}

export default App;
