import React, { useRef } from 'react';

import Carousel, { SliderContainer, SliderControls } from './style';

import { Container } from '~/styles/global';

import Slider, { Settings } from 'react-slick';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import SlideItem from './slide';

const carousel = () => {
  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  const sliderRef = useRef<Slider | null>(null);

  const sliderPrevNext = (direction: 'prev' | 'next') => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      if (direction === 'prev') {
        sliderRef.current?.slickPrev();
      } else if (direction === 'next') {
        sliderRef.current?.slickNext();
      }
    }
  };

  return (
    <Container>
      <Carousel>
        <SliderControls onClick={() => sliderPrevNext('prev')}>
          <FaChevronLeft />
        </SliderControls>

        <SliderContainer>
          <Slider ref={sliderRef} {...sliderSettings}>
            <SlideItem
              id="1"
              imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              name="bulbasaur"
              types={[{ name: 'grass' }, { name: 'poison' }]}
            />

            <SlideItem
              id="2"
              imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
              name="ivysaur"
              types={[{ name: 'grass' }, { name: 'poison' }]}
            />

            <SlideItem
              id="3"
              imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
              name="venusaur"
              types={[{ name: 'grass' }, { name: 'poison' }]}
            />

            <SlideItem
              id="4"
              imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
              name="charmander"
              types={[{ name: 'fire' }]}
            />
          </Slider>
        </SliderContainer>

        <SliderControls onClick={() => sliderPrevNext('next')}>
          <FaChevronRight />
        </SliderControls>
      </Carousel>
    </Container>
  );
};

export default carousel;
