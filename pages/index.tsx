import React, { useEffect } from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import Loader from '~/components/global/loader';

import HomePage from '~/components/page/home';

interface IHomeProps {
  appInfo: IAppInfoState;
}

export default function IndexPage({ appInfo }: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  useEffect(() => {
    handleSetAppInfo(appInfo);
  }, [handleSetAppInfo, appInfo]);

  if (isFallback) {
    return <Loader />;
  }

  return <HomePage />;
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IHomeProps>
> {
  const appInfo = await getAppInfoData();

  return {
    props: {
      appInfo,
    },
    revalidate: 10,
  };
}
