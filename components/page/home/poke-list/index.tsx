import React from 'react';

import { shuffleArray } from '~/utils';

import { generateBgType, IgenerateBgType } from '~/utils/poke-list';

import { usePokeList } from '~/hooks/home/poke-list';

import { Container } from '~/styles/global';

import PokeList from './style';

import Card from '~/components/global/card';

interface IPokeListProps {
  start?: number;
  end?: number;
  shuffle?: boolean;
}

const pokeList = ({ start = 4, end = 20, shuffle = false }: IPokeListProps) => {
  const { pokeList } = usePokeList();

  if (!pokeList || Object.keys(pokeList).length === 0) return null;

  let pokemons = pokeList.pokemons;

  if (shuffle) {
    pokemons = shuffleArray(pokemons);
  }

  pokemons = pokemons.slice(start, end);

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
