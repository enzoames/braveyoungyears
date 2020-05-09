// Copyright 2020 BraveYoungYears Inc. All Rights Reserved.

import React from 'react';
import styled from 'styled-components';
import BYY from './images/byy-logo.PNG'
import PurchasePrints from './images/prints-logo.PNG'

const Wrap = styled.div`
  width: 100%;
  hieght: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img:first-child {
    width: 100%;
    max-width: 900px;
  }

  > h1 {
    font-size: 16px;
    text-align: center;
  }

  > img:last-child {
    width: 50%;
    max-width: 450px;
    cursor: pointer;
  }
`;

function App() {
  return (
    <Wrap>
      <img src={BYY} alt="Brave Young Years"/>
      <h1>
        Brave Young Years is the movement to accept and encourage your choice 
        to live outside of the social standard. <br/><br/> Be Brave, and remain Young
        for the Years to come.
      </h1>
      <img src={PurchasePrints} alt="Brave Young Years"/>
    </Wrap>
  );
}

export default App;
