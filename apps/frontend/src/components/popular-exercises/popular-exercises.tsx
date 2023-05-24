import { useState } from 'react';
import LoadingSpinner from '../spinner/loading-spinner';
import PopularExercisesSlider from './popular-exercises-slider/popular-exercises-slider';
import { useGetExercisesQuery } from '../../store/exercises/exercises-api';

export default function PopularExercises(): JSX.Element {
  const {data: exercises = [], isLoading} = useGetExercisesQuery(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return(<LoadingSpinner />)
  }

  const visibleSlides = 4;

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
    <section className="popular-trainings">
      <div className="container">
        <div className="popular-trainings__wrapper">
          <div className="popular-trainings__title-wrapper">
            <h2 className="popular-trainings__title">Популярные тренировки</h2>
            <button className="btn-flat popular-trainings__button" type="button"><span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </button>
            <div className="popular-trainings__controls">
              <button className="btn-icon popular-trainings__control" type="button" aria-label="previous">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button className="btn-icon popular-trainings__control" type="button" aria-label="next">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="popular-trainings__list">
            <PopularExercisesSlider currentSlide={currentSlide} exercises={exercises} visibleSlides={visibleSlides} />
          </ul>
        </div>
      </div>
    </section>
  )
}
