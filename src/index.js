import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import SimpleHeading from './components/SimpleHeading/SimpleHeading';
import SimpleParagraph from './components/SimpleParagraph/SimpleParagraph'
import SimpleRandom from './components/RandomText/RandomText'
import CopyRight from './components/CopyRight/CopyRight'
import PersonalCard from './components/PersonalCard/PersonalCard'
import Advantages from './components/Advantages/Advantages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
            <App />
            <SimpleHeading />
            <SimpleParagraph/>
            <SimpleRandom/>
            <PersonalCard />
            <Advantages/>
            <CopyRight/>
      </>
     
);
