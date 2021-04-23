import React, { useEffect } from 'react';

import { NextPageContext } from 'next';

import { useRouter } from 'next/router';

import { useFavorites, getFavoritesData } from '~/hooks/favorites';

import { IPokeInfoRequest } from '~/utils/poke-list';

import { parseCookies } from '~/utils/cookies';

import Loader from '~/components/global/loader';

import FavoritesPage from '~/components/page/favorites';

interface IHomeProps {
  pokeList: IPokeInfoRequest[];
}

export default function IndexPage({ pokeList }: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetFavoritesData } = useFavorites();

  useEffect(() => {
    handleSetFavoritesData(pokeList);
  }, [handleSetFavoritesData, pokeList]);

  if (isFallback) {
    return <Loader />;
  }

  return <FavoritesPage />;
}

IndexPage.getInitialProps = async ({ req }: NextPageContext) => {
  const data = parseCookies(req);

  const pokeList = await getFavoritesData(data['@ylPoke:favorites']);

  return {
    pokeList,
  };
};
