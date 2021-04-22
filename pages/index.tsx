import React, { useEffect } from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { Container } from '~/styles/global';

import Loader from '~/components/global/loader';

import PokeList from '~/components/page/home/poke-list';

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

  return (
    <Container>
      <PokeList />
    </Container>
  );
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
