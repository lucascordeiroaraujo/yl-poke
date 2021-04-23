import React, { useEffect } from 'react';

import { GetStaticPropsResult, GetStaticPaths } from 'next';

import { useSearch, getSearchData } from '~/hooks/search';

import { IRequestProps } from '~/hooks/search/types';

import { usePokeList, getPokeListData } from '~/hooks/home/poke-list';

import { IPokeListState } from '~/hooks/home/poke-list/types';

import { IPokeInfoRequest } from '~/utils/poke-list';

import api from '~/services/api';

import { useRouter } from 'next/router';

import Loader from '~/components/global/loader';

import SearchPage from '~/components/page/search';

interface ISearchProps {
  pokemons: IPokeInfoRequest[];
  pokeList: IPokeListState;
}

export default function IndexPage({ pokemons, pokeList }: ISearchProps) {
  const { isFallback } = useRouter();

  const { handleSetSearch } = useSearch();

  const { handleSetPokeList } = usePokeList();

  useEffect(() => {
    handleSetSearch(pokemons);

    handleSetPokeList(pokeList);
  }, [handleSetSearch, pokemons, handleSetPokeList, pokeList]);

  if (isFallback) {
    return <Loader />;
  }

  return <SearchPage />;
}

export const getStaticPaths: GetStaticPaths = async () =>
  api.get<IRequestProps>('/pokemon').then(response => {
    const result = response.data.results;

    const paths = result.map(pokemon => {
      return {
        params: {
          term: pokemon.name,
        },
      };
    });

    return {
      paths,
      fallback: true,
    };
  });

interface IStaticProps {
  params: {
    term: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<ISearchProps>> {
  const { term } = params;

  const pokemons = await getSearchData(term);

  const pokeList = await getPokeListData({ limit: 4 });

  return {
    props: {
      pokemons,
      pokeList,
    },
    revalidate: 10,
  };
}
