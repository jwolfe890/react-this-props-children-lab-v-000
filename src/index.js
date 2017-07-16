import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedDecorations';

ReactDOM.render(
  <div>
    <Invitation><h1>Hey, you should totally come to this awesome party I'm throwing!</h1></Invitation>
    <ThemedParty theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedParty>
  </div>,
  document.getElementById('main')
);



