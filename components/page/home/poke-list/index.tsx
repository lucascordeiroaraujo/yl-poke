import React from 'react';

import { Container } from '~/styles/global';

import PokeList from './style';

import Card from '~/components/global/card';

const pokeList = () => (
  <Container>
    <PokeList>
      <Card
        imageBg="4"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
        name="charmeleon"
        types={[{ name: 'fire' }]}
      />

      <Card
        imageBg="3"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
        name="charizard"
        types={[{ name: 'fire' }, { name: 'flying' }]}
      />

      <Card
        imageBg="2"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
        name="squirtle"
        types={[{ name: 'speed' }, { name: 'water' }]}
      />

      <Card
        imageBg="1"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
        name="wartortle"
        types={[{ name: 'water' }]}
      />

      <Card
        imageBg="1"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
        name="blastoise"
        types={[{ name: 'water' }]}
      />

      <Card
        imageBg="2"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
        name="caterpie"
        types={[{ name: 'bug' }]}
      />

      <Card
        imageBg="3"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg"
        name="metapod"
        types={[{ name: 'bug' }]}
      />

      <Card
        imageBg="4"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg"
        name="butterfree"
        types={[{ name: 'bug' }, { name: 'flying' }]}
      />
    </PokeList>
  </Container>
);

export default pokeList;
