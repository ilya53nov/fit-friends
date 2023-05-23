import { ExerciseRdo } from '@fit-friends/shared-rdo'

type ExercisesCatalogCardProps = {
  exercise: ExerciseRdo,
}

export default function ExercisesCatalogCard({exercise}: ExercisesCatalogCardProps): JSX.Element {
  return(
    <li className="training-catalog__item">
    <div className="thumbnail-training">
      <div className="thumbnail-training__inner">
        <div className="thumbnail-training__image">
          <picture>
            <source type="image/webp" srcSet={exercise.image}/>
            <img src={exercise.image} width="330" height="190" alt=""/>
          </picture>
        </div>
        <p className="thumbnail-training__price">{exercise.price > 0 ? exercise.price : 'Бесплатно'}
        </p>
        <h3 className="thumbnail-training__title">{exercise.title}</h3>
        <div className="thumbnail-training__info">
          <ul className="thumbnail-training__hashtags-list">
            <li className="thumbnail-training__hashtags-item">
              <div className="hashtag thumbnail-training__hashtag"><span>#{exercise.type}</span></div>
            </li>
            <li className="thumbnail-training__hashtags-item">
              <div className="hashtag thumbnail-training__hashtag"><span>#{exercise.caloriesCount}</span></div>
            </li>
          </ul>
          <div className="thumbnail-training__rate">
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg><span className="thumbnail-training__rate-value">{exercise.rating}</span>
          </div>
        </div>
        <div className="thumbnail-training__text-wrapper">
          <p className="thumbnail-training__text">{exercise.description}</p>
        </div>
        <div className="thumbnail-training__button-wrapper">
          <a className="btn btn--small thumbnail-training__button-catalog" href="#">Подробнее</a>
          <a className="btn btn--small btn--outlined thumbnail-training__button-catalog" href="#">Отзывы</a>
        </div>
      </div>
    </div>
  </li>
  )
}
