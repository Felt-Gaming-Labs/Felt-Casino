import React from 'react';
import styled from 'styled-components';
// Correctly updated import path to match the location of your image
import welcomeImage from '../sections/Dashboard/feltbanner.png';

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`;

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #004000, #306000, #507000, #708000, #909000, #b0a000, #d0b000, #f0c000, #ffD700);
  background-size: 300% 300%;
  animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }

  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      {/* Add the img tag with the updated path */}
      <img src={welcomeImage} alt="Welcome Banner" style={{ maxWidth: '100%', borderRadius: '10px' }} />
      <div>
        <h1>gm🐓 Welcome to House Gamecock! </h1>
        <p>Life. Is. Just. A. Game.</p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://jup.ag/swap/SOL-GMCOCK_8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB', '_blank')}>
          🪙 Buy $GMCOCK
        </button>
        <button onClick={() => window.open('https://twitter.com/GMCOCK_COIN', '_blank')}>
          📲 Follow us on X
        </button>
        <button onClick={() => window.open('https://discord.gg/Tr8sMUPSZ7', '_blank')}>
          💬 Join our Discord!
        </button>
      </Buttons>
    </Welcome>
  );
}
