import api from '~/services/api';

export const statName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-/gi, ' ')
    .replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
};

export interface IPokeInfoRequest {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}

export const getPokeInfo = async (pokeUrl: string) => {
  return api
    .get<IPokeInfoRequest>(pokeUrl)
    .then(response => {
      const { id, name, sprites, stats, types } = response.data;

      return {
        id,
        name,
        sprites,
        stats,
        types,
      };
    })
    .catch(() => {
      return null;
    });
};

export const generateBgType = () => {
  return (Math.floor(Math.random() * 7) + 1).toString();
};

export type IgenerateBgType = '1' | '2' | '3' | '4' | '5' | '6' | '7';
