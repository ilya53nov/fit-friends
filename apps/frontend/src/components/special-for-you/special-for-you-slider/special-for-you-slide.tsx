import { ExerciseRdo } from '@fit-friends/shared-rdo'

type SpecialForYouSlideProps = {
  exercise: ExerciseRdo;
}

export default function SpecialForYouSlide({exercise}: SpecialForYouSlideProps): JSX.Element {
  return(
    <li className="special-for-you__item">
      <div className="thumbnail-preview">
        <div className="thumbnail-preview__image">
          <picture>
            <img src={exercise.image} srcSet={exercise.image} width="452" height="191" alt=""/>
          </picture>
        </div>
        <div className="thumbnail-preview__inner">
          <h3 className="thumbnail-preview__title">{exercise.type}</h3>
          <div className="thumbnail-preview__button-wrapper">
            <a className="btn btn--small thumbnail-preview__button" href="#">Подробнее</a>
          </div>
        </div>
      </div>
    </li>
  )
}
