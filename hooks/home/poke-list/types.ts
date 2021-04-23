import { ReactNode } from 'react';

import { IPokeInfoRequest } from '~/utils/poke-list';

export interface IPokeListContextData {
  pokeList: IPokeListState;
  handleSetPokeList(currentPost: IPokeListState): void;
}

export interface IPokeListState {
  next: string;
  previous: string;
  pokemons: Array<IPokeInfoRequest>;
}

export interface IPokeListProviderProps {
  children: ReactNode;
}

export interface IPokeListRequest {
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}
