import React from 'react';

import { generateBgType, IgenerateBgType } from '~/utils/poke-list';

import { usePokeList } from '~/hooks/home/poke-list';

import { Container } from '~/styles/global';

import PokeList from './style';

import Card from '~/components/global/card';

const pokeList = () => {
  const { pokeList } = usePokeList();

  if (!pokeList || Object.keys(pokeList).length === 0) return null;

  const pokemons = pokeList.pokemons.slice(4, 20);

  return (
    <Container>
      <PokeList>
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.id}
            imageBg={generateBgType() as IgenerateBgType}
            {...pokemon}
          />
        ))}
      </PokeList>
    </Container>
  );
};

export default pokeList;
