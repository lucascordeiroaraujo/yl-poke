import React from 'react';

import { useFavorites } from '~/hooks/favorites/index';

import FavoriteButton from './style';

import { FaStar } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

interface IFavButtonProps {
  id: number;
}

const favoriteButton = ({ id }: IFavButtonProps) => {
  const { handleToggleFavoritesStorage } = useFavorites();

  const handleSetFavorite = () => {
    handleToggleFavoritesStorage(id);

    toast.success('Added to your favorites');
  };

  return (
    <>
      <FavoriteButton onClick={handleSetFavorite}>
        <FaStar />
      </FavoriteButton>

      <ToastContainer />
    </>
  );
};

export default favoriteButton;
