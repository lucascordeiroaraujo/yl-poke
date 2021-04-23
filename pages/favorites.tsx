import React, { useEffect } from 'react';

import { NextPageContext } from 'next';

import { useRouter } from 'next/router';

import {
  useFavorites,
  getFavoritesData,
  localStorageKey,
} from '~/hooks/favorites';

import { IPokeInfoRequest } from '~/utils/poke-list';

import { usePokeList, getPokeListData } from '~/hooks/home/poke-list';

import { IPokeListState } from '~/hooks/home/poke-list/types';

import { parseCookies } from '~/utils/cookies';

import Loader from '~/components/global/loader';

import FavoritesPage from '~/components/page/favorites';

interface IHomeProps {
  favorites: IPokeInfoRequest[];
  pokeList: IPokeListState;
}

export default function IndexPage({ favorites, pokeList }: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetFavoritesData } = useFavorites();

  const { handleSetPokeList } = usePokeList();

  useEffect(() => {
    handleSetFavoritesData(favorites);

    handleSetPokeList(pokeList);
  }, [handleSetFavoritesData, favorites, handleSetPokeList, pokeList]);

  if (isFallback) {
    return <Loader />;
  }

  return <FavoritesPage />;
}

IndexPage.getInitialProps = async ({ req }: NextPageContext) => {
  const data = parseCookies(req);

  const favorites = await getFavoritesData(data[localStorageKey]);

  const pokeList = await getPokeListData({ limit: 4 });

  return {
    favorites,
    pokeList,
  };
};
