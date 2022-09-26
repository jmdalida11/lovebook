import { useReducer } from 'react';
import styled from 'styled-components';
import Deck from './components/Deck';
import Message from './components/Message';
import Music from './assets/music.mp3';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom right, rgba(171, 63, 96, 1), rgba(171, 63, 96, 0.1));
`;

const music = new Audio(Music);

const initialState = {
  scene: 1,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'NEXT_SCENE': {
      return { ...state, scene: state.scene+1 }
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const nextScene = () => {
    dispatch({ type: 'NEXT_SCENE' });
    music.play();
  }

  const displayCurrentScene = () => {
    switch (state.scene) {
      case 1: {
        return <Container><Message nextScene={nextScene} /></Container>
      }
      case 2: {
        return <Deck />
      }
      default:
        return <div>default Scene</div>
    }
  }

  return <>{displayCurrentScene()}</>
}

export default App;
