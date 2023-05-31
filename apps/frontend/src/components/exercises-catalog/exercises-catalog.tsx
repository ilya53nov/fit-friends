import { ExercisesQuery } from '@fit-friends/core'
import { useGetExercisesQuery } from '../../store/exercises/exercises-api';
import ExercisesCatalogCard from '../exercises-catalog-card/exercises-catalog-card';
import { ExerciseRdo } from '@fit-friends/shared-rdo';
import LoadingSpinner from '../spinner/loading-spinner';

type ExercisesCatalogProps = {
  query: ExercisesQuery | undefined;
  onMoreButtonClick: () => void;
}

export default function ExercisesCatalog({query, onMoreButtonClick}: ExercisesCatalogProps): JSX.Element {
  const {data: exercisesData, isLoading} = useGetExercisesQuery(query);

  if (isLoading) {
    return(<LoadingSpinner />);
  }

  return(
  <div className="training-catalog">
    <ul className="training-catalog__list">
      {exercisesData ? exercisesData.map((exercise: ExerciseRdo) => <ExercisesCatalogCard key={exercise.id} exercise={exercise}/>) : ''}
    </ul>
    <div className="show-more training-catalog__show-more">
      <button onClick={onMoreButtonClick} className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
      <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
    </div>
  </div>
  )
}
