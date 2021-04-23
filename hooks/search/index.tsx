import React, { createContext, useCallback, useState, useContext } from 'react';

import {
  ISearchContextData,
  ISearchProviderProps,
  IRequestProps,
} from './types';

import api from '~/services/api';

import { getPokeInfo, IPokeInfoRequest } from '~/utils/poke-list';

const SearchContext = createContext<ISearchContextData>(
  {} as ISearchContextData,
);

export const getSearchData = async (term: string) =>
  api
    .get<IRequestProps>(`/pokemon/?limit=200}`)
    .then(async response => {
      const pokemons = response.data.results.filter(pokemon =>
        pokemon.name.includes(term),
      );

      const pokeList = [] as IPokeInfoRequest[];

      for (let i = 0; i < pokemons.length; i++) {
        const result = await getPokeInfo(`${pokemons[i].url}`);

        if (result) pokeList.push(result);
      }

      return pokeList;
    })
    .catch(() => {
      return [];
    });

export const SearchProvider = ({ children }: ISearchProviderProps) => {
  const [search, setSearch] = useState<IPokeInfoRequest[]>([]);

  const handleSetSearch = useCallback((search: IPokeInfoRequest[]) => {
    setSearch(search);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        search,
        handleSetSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): ISearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }

  return context;
}
