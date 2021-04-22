import React, { ReactNode } from 'react';

import SiteProvider from './app';

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <SiteProvider>{children}</SiteProvider>
);

export default AppProvider;
