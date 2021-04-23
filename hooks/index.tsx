import React, { ReactNode } from 'react';

import HomeProvider from './home';

import { FavoritesProvider } from './favorites';

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <HomeProvider>
    <FavoritesProvider>{children}</FavoritesProvider>
  </HomeProvider>
);

export default AppProvider;
