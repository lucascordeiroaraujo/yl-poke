import { ReactNode } from 'react';

import { IPokeInfoRequest } from '~/utils/poke-list';

export interface ISearchContextData {
  search: IPokeInfoRequest[];
  handleSetSearch(search: IPokeInfoRequest[]): void;
}

export interface ISearchProviderProps {
  children: ReactNode;
}

export interface IRequestProps {
  results: Array<{
    name: string;
    url: string;
  }>;
}
