import React from 'react';

import { useSearch } from '~/hooks/search';

import Search from './style';

import PokeList from './poke-list';

import NoResults from './no-results';

const search = () => {
  const { search } = useSearch();

  return (
    <Search>
      {!search || Object.keys(search).length === 0 ? (
        <NoResults />
      ) : (
        <PokeList />
      )}
    </Search>
  );
};

export default search;
