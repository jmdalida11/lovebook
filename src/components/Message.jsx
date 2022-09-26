import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled, { keyframes } from 'styled-components';
import { AiFillMail, AiFillHeart } from "react-icons/ai";

const Container = styled.div`
  padding: 0px auto;
  padding-top: 2rem;
  width: 100vw;
  font-size: 30px;
  text-align: center;
  position: relative;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 30px;
`;

const TypeAnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 1rem;
`;

const HeartIconAnim = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 200px; width: 200px; opacity: 1 }
 60% { height: 305px; width: 305px; opacity: 0.2; }
 60% { height: 205px; width: 205px; opacity: 0.4; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

const HeartIcon = styled(AiFillHeart)`
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  color: #83092e;
  animation-name: ${HeartIconAnim};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;

const StyledButton = styled.button`
  padding: ${({ padding }) => padding ?? '2rem'};
  border: none;
  border-radius: 30px;
  background-color: #ecdbc9;
  cursor: pointer;
  outline: none;
  ${({ isHidden }) => isHidden ? 'display: none;' : ''}
  
  :hover {
    opacity: 0.9;
  }
`;

const Scene1 = ({ nextScene }) => {
  const [showMessage, setShowMessage] = useState(false);

  return <Container>
    <HeadContainer>
      <h3>Message For My Favorite Person</h3>
      <AiFillMail />
    </HeadContainer>
    <StyledButton style={{ marginTop: '50px' }} isHidden={showMessage} onClick={() => setShowMessage(true)}>
      Please Click To Read The Message
    </StyledButton>
    <br /><br />
    {!showMessage && <StyledButton
      onClick={nextScene}>Please Click To Show Memories</StyledButton> }
    {showMessage && <TypeAnimationContainer>
      <TypeAnimation
      sequence={[
        1000,
        'Hello Mahal,',
        3000,
        'You know I\'m not good in writing poem nor love letter',
        4000,
        'but I wanted to tell you that I love you so much!',
        3000,
        'and I really miss you a lot',
        5000,
        'Though you are not beside me right now',
        4000,
        'I am constantly having you in my mind. Uwu <3',
        4000,
        'Wishing you all the best things in life',
        4000,
        'Take care always.',
        4000,
        () => {
          setShowMessage(false);
        }
      ]}
      wrapper="div"
      cursor={true}
      speed={1}
      style={{ fontSize: '50px' }}
    />
    </TypeAnimationContainer>
    }
    <HeartIcon />
  </Container>
}

export default Scene1;