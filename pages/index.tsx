import React, { useEffect } from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { usePokeList, getPokeListData } from '~/hooks/home/poke-list';

import { IPokeListState } from '~/hooks/home/poke-list/types';

import Loader from '~/components/global/loader';

import HomePage from '~/components/page/home';

interface IHomeProps {
  pokeList: IPokeListState;
}

export default function IndexPage({ pokeList }: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetPokeList } = usePokeList();

  useEffect(() => {
    handleSetPokeList(pokeList);
  }, [handleSetPokeList, pokeList]);

  if (isFallback) {
    return <Loader />;
  }

  return <HomePage />;
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IHomeProps>
> {
  const pokeList = await getPokeListData();

  return {
    props: {
      pokeList,
    },
    revalidate: 10,
  };
}
