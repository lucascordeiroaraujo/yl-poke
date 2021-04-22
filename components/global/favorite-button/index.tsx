import React from 'react';

import FavoriteButton from './style';

import { FaStar } from 'react-icons/fa';

interface IFavButtonProps {
  id: string;
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
