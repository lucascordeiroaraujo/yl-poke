import { ReactNode } from 'react';

export interface IPokeListContextData {
  pokeList: IPokeListState;
  handleSetPokeList(currentPost: IPokeListState): void;
}

export interface IPokeInfoRequest {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
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
