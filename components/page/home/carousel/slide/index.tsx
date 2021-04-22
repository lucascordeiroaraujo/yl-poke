import React from 'react';

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

interface ISlideProps {
  id: string;
  imageUrl: string;
  name: string;
  types: Array<{
    name: string;
  }>;
}

const slide = ({ id, imageUrl, name, types }: ISlideProps) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Slide>
      <FavoriteButton id={id} />

      <div className="image-container">
        <img
          src={imageUrl}
          alt={`${pokemonName} picture`}
          title={pokemonName}
        />
      </div>

      <SliderItemInfo className="info-container">
        <h1>{pokemonName}</h1>

        {types && (
          <div className="types-container">
            {types.map((type, index) => (
              <span key={index}>{type.name.toLowerCase()}</span>
            ))}
          </div>
        )}

        <div className="stats-container">
          <p>
            <FaStar /> <strong>45</strong> <span>HP</span>
          </p>

          <p>
            <FaHotjar /> <strong>49</strong> <span>Attack</span>
          </p>

          <p>
            <FaCircle /> <strong>49</strong> <span>Defense</span>
          </p>

          <p>
            <FaFlask /> <strong>65</strong> <span>Special Attack</span>
          </p>

          <p>
            <FaGem /> <strong>65</strong> <span>Special Defense</span>
          </p>

          <p>
            <FaInfinity /> <strong>45</strong> <span>Speed</span>
          </p>
        </div>
      </SliderItemInfo>
    </Slide>
  );
};

export default slide;
