import { ExerciseRdo } from '@fit-friends/shared-rdo';
import SpecialOffersSlide from './special-offers-slide';
import CarouselSlider from '../../slider/carousel-slider';
import { useState } from 'react';
import { useGetExercisesQuery } from '../../../store/exercises/exercises-api';
import LoadingSpinner from '../../spinner/loading-spinner';

export default function SpecialOffersSlider(): JSX.Element {
  const {data: exercises = [], isLoading} = useGetExercisesQuery(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return(<LoadingSpinner />)
  }

  const visibleSlides = 1;

  const handleButtonBackClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleButtonNextClick = () => {
    if (currentSlide < exercises.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  }


  return(
    <CarouselSlider
      naturalSlideHeight={1000}
      naturalSlideWidth={500}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      slides={exercises.slice(0,3).map((exercise: ExerciseRdo) => <SpecialOffersSlide key={exercise.id} exercise={exercise} />)}
    /> 
  )
}
