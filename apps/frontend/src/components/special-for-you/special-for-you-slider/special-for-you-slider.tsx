import { useState } from 'react';
import CarouselSlider from '../../slider/carousel-slider';
import { useGetExercisesQuery } from '../../../store/exercises/exercises-api';
import SpecialForYouSlide from './special-for-you-slide';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import LoadingSpinner from '../../spinner/loading-spinner';

type SpecialForYouSliderProps = {
  exercises: ExerciseRdo[];
  currentSlide: number;
  visibleSlides: number;
}

export default function SpecialForYouSlider({currentSlide, exercises, visibleSlides}: SpecialForYouSliderProps): JSX.Element {
  return(
    <CarouselSlider
      naturalSlideHeight={1}
      naturalSlideWidth={1}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      slides={exercises.map((exercise: ExerciseRdo) => <SpecialForYouSlide key={exercise.id} exercise={exercise} />)}
    />
  )
}
