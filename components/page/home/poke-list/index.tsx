import React, { useCallback } from 'react';

import { usePokeList } from '~/hooks/home/poke-list';

import { Container } from '~/styles/global';

import PokeList from './style';

import Card from '~/components/global/card';

const pokeList = () => {
  const { pokeList } = usePokeList();

  if (Object.keys(pokeList).length === 0) return null;

  const pokemons = pokeList.pokemons.slice(4, 20);

  const generateBgType = useCallback(() => {
    return (Math.floor(Math.random() * 4) + 1).toString();
  }, []);

  type IgenerateBgType = '1' | '2' | '3' | '4';

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
