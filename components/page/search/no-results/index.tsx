import React from 'react';

import NoResults from './style';

import { FaRegSadTear } from 'react-icons/fa';

import PokeList from '~/components/page/home/poke-list';

const noResults = () => (
  <NoResults>
    <strong>
      No results found <FaRegSadTear />
    </strong>

    <p>How about any of these?</p>

    <PokeList start={0} end={4} shuffle={true} />
  </NoResults>
);

export default noResults;
