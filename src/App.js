// Copyright 2020 BraveYoungYears Inc. All Rights Reserved.

import React, { useEffect } from 'react';
import styled from 'styled-components';
import BYY from './images/byy-logo.PNG';
import PurchasePrints from './images/prints-logo.PNG';
import media from './styles/media';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img:first-child {
    width: 100%;
    max-width: 900px;
  }

  > h1 {
    font-size: 12px;
    text-align: center;
    margin: 72px 0 88px 0;
  }

  > a {
    width: 50%;
    max-width: 250px;
    cursor: pointer;
    img {
      width: 100%;
    }
  }

  ${media.lg`
    h1 {
      font-size: 16px;
    }
  `}

`;

function App() {
  useEffect(()=> {
    if (window && window.gtag) {
      window.gtag('event', 'impression', {
        event_category: 'page',
        event_label: 'impression landing page ',
      });
    }
  }, []);

  const onClick = () => {
    if (window && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'button',
        event_label: 'buy prints',
      });
    }
  }

  return (
    <Wrap>
      <img src={BYY} alt="Brave Young Years"/>
      <h1>
        The movement to accept and encourage your choice 
        to live outside of the social standard. <br/><br/> Be Brave, and remain Young
        for the Years to come.
      </h1>
      <a href="https://braveyoungyears.darkroom.tech/" onClick={onClick} target="_blank" rel="noopener noreferrer">
        <img src={PurchasePrints} alt="Brave Young Years"/>
      </a>
    </Wrap>
  );
}

export default App;
