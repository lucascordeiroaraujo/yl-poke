import React from 'react';

import PokeList from './style';

import Card from '~/components/global/card';

const pokeList = () => (
  <PokeList>
    <Card
      imageBg="1"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      name="bulbasaur"
    />

    <Card
      imageBg="2"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
      name="ivysaur"
    />

    <Card
      imageBg="3"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
      name="venusaur"
    />

    <Card
      imageBg="4"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
      name="charmander"
    />

    <Card
      imageBg="4"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
      name="charmeleon"
    />

    <Card
      imageBg="3"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
      name="charizard"
    />

    <Card
      imageBg="2"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
      name="squirtle"
    />

    <Card
      imageBg="1"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
      name="wartortle"
    />

    <Card
      imageBg="1"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
      name="blastoise"
    />

    <Card
      imageBg="2"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"
      name="caterpie"
    />

    <Card
      imageBg="3"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg"
      name="metapod"
    />

    <Card
      imageBg="4"
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg"
      name="butterfree"
    />
  </PokeList>
);

export default pokeList;
