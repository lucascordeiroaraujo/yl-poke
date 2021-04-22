import React from 'react';

import { IPokeInfoRequest } from '~/hooks/home/poke-list/types';

import { statName } from '~/utils/poke-list';

import Slide, { SliderItemInfo } from './style';

import {
  FaStar,
  FaHotjar,
  FaCircle,
  FaFlask,
  FaGem,
  FaInfinity,
} from 'react-icons/fa';

import FavoriteButton from '~/components/global/favorite-button';

const slide = ({ id, name, sprites, stats, types }: IPokeInfoRequest) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Slide>
      <FavoriteButton id={id} />

      <div className="image-container">
        <img
          src={sprites.other.dream_world.front_default}
          alt={`${pokemonName} picture`}
          title={pokemonName}
        />
      </div>

      <SliderItemInfo className="info-container">
        <h1>{pokemonName}</h1>

        {types && (
          <div className="types-container">
            {types.map((type, index) => (
              <span key={index}>{type.type.name.toLowerCase()}</span>
            ))}
          </div>
        )}

        <div className="stats-container">
          {stats.map((stat, index) => (
            <p key={index}>
              <FaStar /> <strong>{stat.base_stat}</strong>{' '}
              <span>{statName(stat.stat.name)}</span>
            </p>
          ))}
        </div>
      </SliderItemInfo>
    </Slide>
  );
};

export default slide;
