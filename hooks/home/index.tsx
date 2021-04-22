import React, { ReactNode } from 'react';

import { PokeListProvider } from './poke-list';

interface IProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <PokeListProvider>{children}</PokeListProvider>
);

export default HomeProvider;
