import React, { createContext, useCallback, useState, useContext } from 'react';

import {
  IPokeListContextData,
  IPokeListState,
  IPokeListProviderProps,
  IPokeListRequest,
} from './types';

import api from '~/services/api';

import { getPokeInfo } from '~/utils/poke-list';

const PokeListContext = createContext<IPokeListContextData>(
  {} as IPokeListContextData,
);

export const getPokeListData = async ({ limit }: { limit: number }) => {
  return api
    .get<IPokeListRequest>(`/pokemon?limit=${limit}`)
    .then(async response => {
      const pokeList = response.data.results;

      const pokemons = [];

      for (let i = 0; i < pokeList.length; i++) {
        const pokemon = await getPokeInfo(pokeList[i].url);

        if (pokemon) pokemons.push(pokemon);
      }

      return {
        next: response.data.next,
        previous: response.data.previous,
        pokemons,
      };
    })
    .catch(() => {
      return {
        next: '',
        previous: '',
        pokemons: [],
      };
    });
};

export const PokeListProvider = ({ children }: IPokeListProviderProps) => {
  const [pokeList, setPokeList] = useState<IPokeListState>(() => {
    return {} as IPokeListState;
  });

  const handleSetPokeList = useCallback((pokeList: IPokeListState) => {
    setPokeList(pokeList);
  }, []);

  return (
    <PokeListContext.Provider
      value={{
        pokeList,
        handleSetPokeList,
      }}
    >
      {children}
    </PokeListContext.Provider>
  );
};

export function usePokeList(): IPokeListContextData {
  const context = useContext(PokeListContext);

  if (!context) {
    throw new Error('usePokeList must be used within an PokeListProvider');
  }

  return context;
}
