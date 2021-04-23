import React from 'react';

import { usePokeList } from '~/hooks/home/poke-list';

import Carousel from './style';

import { Container } from '~/styles/global';

import Slider, { Settings } from 'react-slick';

import SlideItem from './slide';

const carousel = () => {
  const { pokeList } = usePokeList();

  if (!pokeList || Object.keys(pokeList).length === 0) return null;

  const sliderSettings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  const pokemons = pokeList.pokemons.slice(0, 4);

  return (
    <Container>
      <Carousel>
        <Slider {...sliderSettings}>
          {pokemons.map(pokemon => (
            <SlideItem key={pokemon.id} {...pokemon} />
          ))}
        </Slider>
      </Carousel>
    </Container>
  );
};

export default carousel;
