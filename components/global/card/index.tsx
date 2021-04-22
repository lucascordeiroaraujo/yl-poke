import React, { useCallback } from 'react';

import { IPokeInfoRequest } from '~/hooks/home/poke-list/types';

import { statName } from '~/utils/poke-list';

import Card, { CardImage, CardInfo } from './style';

import Link from 'next/link';

import FavoriteButton from '~/components/global/favorite-button';

interface ICardProps extends IPokeInfoRequest {
  imageBg: '1' | '2' | '3' | '4';
}

const card = ({ id, imageBg, sprites, name, types, stats }: ICardProps) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  const chunkStats = useCallback(() => {
    var statsResult = [];

    const chunkSize = 2;

    for (var i = 0, len = stats.length; i < len; i += chunkSize) {
      statsResult.push(stats.slice(i, i + chunkSize));
    }

    return statsResult;
  }, []);

  return (
    <Card>
      <div className="card-favorite">
        <FavoriteButton id={id} />
      </div>

      <CardImage bgType={imageBg}>
        <Link href="/">
          <a title={`${pokemonName} information`}>
            <img
              src={sprites.other.dream_world.front_default}
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
              <span key={index}>{type.type.name.toLowerCase()}</span>
            ))}
          </div>
        )}

        <table className="card-stats">
          <tbody>
            {chunkStats().map((item, index) => (
              <tr key={index}>
                {item.map((stat, index) => (
                  <td key={index}>
                    <p>
                      <span>{stat.base_stat}</span> {statName(stat.stat.name)}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardInfo>
    </Card>
  );
};

export default card;
