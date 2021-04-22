import React from 'react';

import Loader from './style';

import Fade from 'react-reveal/Fade';

const loader = () => (
  <Loader>
    <img
      src={require('~/public/images/yalo.png')}
      alt="Yalo: Conversational Commerce in WhatsApp and Facebook Messenger"
      title="Yalo: Conversational Commerce in WhatsApp and Facebook Messenger"
      width="120"
      height="120"
    />

    <Fade>
      <p>Aguarde, carregando...</p>
    </Fade>
  </Loader>
);

export default loader;
