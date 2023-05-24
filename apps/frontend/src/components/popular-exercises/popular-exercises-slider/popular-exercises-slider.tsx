import { ExerciseRdo } from '@fit-friends/shared-rdo';
import CarouselSlider from '../../slider/carousel-slider';
import PopularExercisesSlide from './popular-exercises-slide';

type PopularExercisesSliderProps = {
  exercises: ExerciseRdo[];
  currentSlide: number;
  visibleSlides: number;
}

export default function PopularExercisesSlider({currentSlide, exercises, visibleSlides}: PopularExercisesSliderProps): JSX.Element {
  return(
    <CarouselSlider
      naturalSlideHeight={1}
      naturalSlideWidth={1}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      slides={exercises.map((exercise: ExerciseRdo) => <PopularExercisesSlide key={exercise.id} exercise={exercise} />)}
    />
  )
}
