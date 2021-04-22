import React, { ReactNode } from 'react';

import { AppInfoProvider } from './app';

interface IProps {
  children: ReactNode;
}

const SiteProvider = ({ children }: IProps) => (
  <AppInfoProvider>{children}</AppInfoProvider>
);

export default SiteProvider;
