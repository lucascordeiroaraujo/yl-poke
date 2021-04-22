import React from 'react';

import Home from './style';

import Carousel from './carousel';

import PokeList from './poke-list';

const home = () => (
  <Home>
    <Carousel />

    <PokeList />
  </Home>
);

export default home;
