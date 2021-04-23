import { ReactNode } from 'react';

import { IPokeInfoRequest } from '~/utils/poke-list';

export interface IFavoritesContextData {
  favoritesStorage: IFavoriteState[];
  handleToggleFavoritesStorage(pokemonId: number): void;

  favoritesData: IPokeInfoRequest[];
  handleSetFavoritesData(pokemons: IPokeInfoRequest[]): void;
}

export interface IFavoriteState {
  id: number;
}

export interface IFavoritesProviderProps {
  children: ReactNode;
}
