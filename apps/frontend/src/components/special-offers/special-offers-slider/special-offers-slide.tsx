import { ExerciseRdo } from '@fit-friends/shared-rdo'

type SpecialOffersSlideProps = {
  exercise: ExerciseRdo;
}

export default function SpecialOffersSlide({exercise}: SpecialOffersSlideProps): JSX.Element {
  return(
    //  <li className="special-offers__item">
      <aside className="promo-slider">
        <div className="promo-slider__overlay"></div>
        <div className="promo-slider__image">
          <img src={exercise.image} srcSet={exercise.image}  width="1040" height="469" alt="promo-photo"/>
        </div>
        <div className="promo-slider__header">
          <h3 className="promo-slider__title">{exercise.title} </h3>
          <div className="promo-slider__logo">
            <svg width="74" height="74" aria-hidden="true">
              <use xlinkHref="#logotype"></use>
            </svg>
          </div>
        </div><span className="promo-slider__text">Специальное предложение</span>
        <div className="promo-slider__bottom-container">
          <div className="promo-slider__slider-dots">
            <button className="promo-slider__slider-dot--active promo-slider__slider-dot" aria-label="первый слайд"></button>
            <button className="promo-slider__slider-dot" aria-label="второй слайд"></button>
            <button className="promo-slider__slider-dot" aria-label="третий слайд"></button>
          </div>
          <div className="promo-slider__price-container">
            <p className="promo-slider__price">{exercise.price} ₽</p>
            <p className="promo-slider__sup">за занятие</p>
            <p className="promo-slider__old-price">{exercise.price * 1.1} ₽</p>
          </div>
        </div>
      </aside>
    // </li>
  )
}
