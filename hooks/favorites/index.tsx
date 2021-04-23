import React, { createContext, useState, useContext } from 'react';

import { useCookies } from 'react-cookie';

import {
  IFavoritesContextData,
  IFavoriteState,
  IFavoritesProviderProps,
} from './types';

import { getPokeInfo, IPokeInfoRequest } from '~/utils/poke-list';

export const localStorageKey = '@ylPoke:favorites';

const FavoritesContext = createContext<IFavoritesContextData>(
  {} as IFavoritesContextData,
);

export const getFavoritesData = async (favorites: string) => {
  if (favorites) {
    const pokeList = [] as IPokeInfoRequest[];

    const userFavorites = JSON.parse(favorites) as IFavoriteState[];

    const requestUrl = `${process.env.API_URL}/pokemon`;

    for (let i = 0; i < userFavorites.length; i++) {
      const result = await getPokeInfo(`${requestUrl}/${userFavorites[i].id}`);

      if (result) pokeList.push(result);
    }

    return pokeList;
  }

  return [];
};

export const FavoritesProvider = ({ children }: IFavoritesProviderProps) => {
  const [favoritesStorage, setFavoritesStorage] = useCookies();

  const [favoritesData, setFavoritesData] = useState<IPokeInfoRequest[]>(() => {
    return [] as IPokeInfoRequest[];
  });

  const twoHours = 3600 * 2;

  const findById = (pokemonId: number) => {
    if (favoritesStorage[localStorageKey]) {
      const favorites = favoritesStorage[localStorageKey] as IFavoriteState[];

      return favorites.find(favorite => favorite.id === pokemonId);
    }

    return false;
  };

  const removeFavorite = (pokemonId: number) => {
    const favorites = favoritesStorage[localStorageKey] as IFavoriteState[];

    const favoritesWithOutId = favorites.filter(
      favorite => favorite.id !== pokemonId,
    );

    setFavoritesStorage(localStorageKey, JSON.stringify(favoritesWithOutId), {
      path: '/',
      maxAge: twoHours,
      sameSite: true,
    });
  };

  const addToFavorite = (pokemonId: number) => {
    let userFavorites = [];

    if (favoritesStorage[localStorageKey]) {
      userFavorites = favoritesStorage[localStorageKey];
    }

    userFavorites.push({ id: pokemonId });

    setFavoritesStorage(localStorageKey, JSON.stringify(userFavorites), {
      path: '/',
      maxAge: twoHours,
      sameSite: true,
    });
  };

  const getFavoritesStorage = () => {
    return favoritesStorage[localStorageKey] || [];
  };

  const handleToggleFavoritesStorage = (
    pokemonId: number,
  ): 'removed' | 'add' => {
    if (findById(pokemonId)) {
      removeFavorite(pokemonId);

      return 'removed';
    } else {
      addToFavorite(pokemonId);

      return 'add';
    }
  };

  const handleSetFavoritesData = (pokemons: IPokeInfoRequest[]) => {
    setFavoritesData(pokemons);
  };

  return (
    <FavoritesContext.Provider
      value={{
        getFavoritesStorage,
        favoritesData,
        handleToggleFavoritesStorage,
        handleSetFavoritesData,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites(): IFavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}
