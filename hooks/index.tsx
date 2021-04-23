import React, { ReactNode } from 'react';

import HomeProvider from './home';

import { FavoritesProvider } from './favorites';

import { SearchProvider } from './search';

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <HomeProvider>
    <FavoritesProvider>
      <SearchProvider>{children}</SearchProvider>
    </FavoritesProvider>
  </HomeProvider>
);

export default AppProvider;
