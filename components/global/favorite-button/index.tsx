import React, { useCallback, useEffect, useState } from 'react';

import { useFavorites } from '~/hooks/favorites/index';

import FavoriteButton from './style';

import { BsStarFill, BsStar } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';

interface IFavButtonProps {
  id: number;
}

const favoriteButton = ({ id }: IFavButtonProps) => {
  if (!id) return null;

  const [selectedFavorite, setSelectedFavorite] = useState(false);

  const { handleToggleFavoritesStorage, getFavoritesStorage } = useFavorites();

  const handleSetFavorite = () => {
    const messageType = handleToggleFavoritesStorage(id);

    if (messageType === 'add') {
      toast.success('Added to your favorites');
    } else {
      toast.success('Removed from your favorites');
    }
  };

  useEffect(() => {
    const isFavorite = getFavoritesStorage().find(
      (favorite: IFavButtonProps) => favorite.id === id,
    );

    setSelectedFavorite(isFavorite);
  }, [getFavoritesStorage]);

  const starIcon = useCallback(() => {
    if (selectedFavorite) {
      return <BsStarFill />;
    } else {
      return <BsStar />;
    }
  }, [selectedFavorite]);

  return (
    <>
      <FavoriteButton onClick={handleSetFavorite}>{starIcon()}</FavoriteButton>

      <ToastContainer />
    </>
  );
};

export default favoriteButton;
