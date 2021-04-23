import React from 'react';

import { useFavorites } from '~/hooks/favorites';

import { generateBgType, IgenerateBgType } from '~/utils/poke-list';

import { Container } from '~/styles/global';

import Favorites, { PokeList } from './style';

import Card from '~/components/global/card';

import NoResults from './no-results';

const favorites = () => {
  const { favoritesData } = useFavorites();

  return (
    <Container>
      <Favorites>
        <h1>Your Favorites</h1>

        {Object.keys(favoritesData).length > 0 ? (
          <PokeList>
            {favoritesData.map(pokemon => (
              <Card
                key={pokemon.id}
                imageBg={generateBgType() as IgenerateBgType}
                {...pokemon}
              />
            ))}
          </PokeList>
        ) : (
          <NoResults />
        )}
      </Favorites>
    </Container>
  );
};

export default favorites;
