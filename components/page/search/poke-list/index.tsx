import React from 'react';

import { generateBgType, IgenerateBgType } from '~/utils/poke-list';

import { useSearch } from '~/hooks/search';

import { Container } from '~/styles/global';

import PokeList from './style';

import Card from '~/components/global/card';

const pokeList = () => {
  const { search } = useSearch();

  if (!search || Object.keys(search).length === 0) return null;

  return (
    <Container>
      <PokeList>
        {search.map(pokemon => (
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
