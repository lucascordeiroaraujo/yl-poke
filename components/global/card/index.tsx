import React from 'react';

import Card, { CardImage, CardInfo } from './style';

import Link from 'next/link';

interface ICardProps {
  imageBg: '1' | '2' | '3' | '4';
  imageUrl: string;
  name: string;
  types: Array<{
    name: string;
  }>;
}

const card = ({ imageBg, imageUrl, name, types }: ICardProps) => {
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

        {types && (
          <div className="card-types">
            {types.map((type, index) => (
              <span key={index}>{type.name.toLowerCase()}</span>
            ))}
          </div>
        )}
      </CardInfo>
    </Card>
  );
};

export default card;
