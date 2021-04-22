import React from 'react';

import Card, { CardImage, CardInfo } from './style';

import Link from 'next/link';

interface ICardProps {
  imageBg: '1' | '2' | '3' | '4';
  imageUrl: string;
  name: string;
}

const card = ({ imageBg, imageUrl, name }: ICardProps) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Card>
      <CardImage bgType={imageBg}>
        <Link href="/">
          <a title={`${pokemonName} information`}>
            <img
              src={imageUrl}
              alt={`${pokemonName} picture`}
              title={pokemonName}
            />
          </a>
        </Link>
      </CardImage>

      <CardInfo>
        <h1 className="card-title">{pokemonName}</h1>
      </CardInfo>
    </Card>
  );
};

export default card;
