import { ReactNode } from 'react';

import { IPokeInfoRequest } from '~/utils/poke-list';

export interface IFavoriteState {
  id: number;
}

export interface IFavoritesContextData {
  getFavoritesStorage: any;
  handleToggleFavoritesStorage(pokemonId: number): 'removed' | 'add';

  favoritesData: IPokeInfoRequest[];
  handleSetFavoritesData(pokemons: IPokeInfoRequest[]): void;
}

export interface IFavoritesProviderProps {
  children: ReactNode;
}
