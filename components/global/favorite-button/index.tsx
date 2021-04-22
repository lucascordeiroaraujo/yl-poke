import React from 'react';

import FavoriteButton from './style';

import { FaStar } from 'react-icons/fa';

interface IFavButtonProps {
  id: number;
}

const favoriteButton = ({ id }: IFavButtonProps) => {
  const handleSetFavorite = () => {
    console.log(id);
  };

  return (
    <FavoriteButton onClick={handleSetFavorite}>
      <FaStar />
    </FavoriteButton>
  );
};

export default favoriteButton;
