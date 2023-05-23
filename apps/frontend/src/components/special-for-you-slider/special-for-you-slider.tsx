import { useState } from 'react';
import CarouselSlider from '../slider/carousel-slider';
import { useGetExercisesQuery } from '../../store/exercises/exercises-api';
import SpecialForYouSlide from './special-for-you-slide';
import { ExerciseRdo } from '@fit-friends/shared-rdo';

export default function SpecialForYouSlider(): JSX.Element {

  const {data: exercises = [], isLoading} = useGetExercisesQuery(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return(<div>Loading...</div>)
  }

  const visibleSlides = 3;

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
    <section className="special-for-you">
      <div className="container">
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">Специально подобрано для вас</h2>
            <div className="special-for-you__controls">
              <button onClick={handleButtonBackClick} className="btn-icon special-for-you__control" type="button" aria-label="previous">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button onClick={handleButtonNextClick} className="btn-icon special-for-you__control" type="button" aria-label="next">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          {/* <ul className="special-for-you__list"> */}
            <CarouselSlider
              currentSlide={currentSlide}
              visibleSlides={visibleSlides}
              slides={exercises.map((exercise: ExerciseRdo) => <SpecialForYouSlide key={exercise.id} exercise={exercise} />)}
            />            
          {/* </ul> */}
        </div>
      </div>
    </section>
  )
}
