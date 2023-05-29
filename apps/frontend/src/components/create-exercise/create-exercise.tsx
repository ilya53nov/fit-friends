import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useCreateExerciseMutation } from '../../store/exercises/exercises-api'
import { CreateExerciseDto } from '@fit-friends/shared-dto';
import Listbox from '../listbox/listbox';
import { ExerciseDurationEnum, ExerciseGenderEnum, ExerciseTypeEnum } from '@fit-friends/shared-types';

const ListboxOption = {
  Type: {
    Key: 'type',
    Description: 'Выберите тип тренировки',
  },
  Duration: {
    Key: 'duration',
    Description: 'Сколько времени потратим',
  },
}

const types = Object.values(ExerciseTypeEnum);
const durations = Object.values(ExerciseDurationEnum);

export default function CreateExercise(): JSX.Element {
  const [createExercise] = useCreateExerciseMutation({});
  const [exercise, setExercise] = useState<CreateExerciseDto>({gender: ExerciseGenderEnum.All} as CreateExerciseDto)

  const handleOptionChange = (evt: SyntheticEvent<HTMLOptionElement>) => {
    const target = evt.target as HTMLOptionElement;
    const label = target.label;
    const value = target.value;

    setExercise({ ...exercise, [value]: label });
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = evt.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    setExercise({ ...exercise, [name]: value});
  }



  return(
    <div className="popup-form popup-form--create-training">
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Создание тренировки</h1>
          </div>
          <div className="popup-form__form">
            <form method="get">
              <div className="create-training">
                <div className="create-training__wrapper">
                  <div className="create-training__block">
                    <h2 className="create-training__legend">Название тренировки</h2>
                    <div className="custom-input create-training__input">
                      <label>
                        <span className="custom-input__wrapper">
                          <input onChange={handleInputChange} type="text" name="title" value={exercise.title}/>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="create-training__block">
                    <h2 className="create-training__legend">Характеристики тренировки</h2>
                    <div className="create-training__info">
                      <Listbox
                        name={ListboxOption.Type.Key}
                        description={ListboxOption.Type.Description}
                        className=''
                        onOptionClick={handleOptionChange}
                        optionItems={types}
                        text={exercise.type}                        
                      />
                      <div className="custom-input custom-input--with-text-right">
                        <label><span className="custom-input__label">Сколько калорий потратим</span><span className="custom-input__wrapper">
                            <input onChange={handleInputChange} type="number" name="caloriesCount" value={exercise.caloriesCount}/><span className="custom-input__text">ккал</span></span>
                        </label>
                      </div>
                      <Listbox
                        name={ListboxOption.Duration.Key}
                        description={ListboxOption.Duration.Description}
                        className=''
                        onOptionClick={handleOptionChange}
                        optionItems={durations}
                        text={exercise.duration}                        
                      />
                      <div className="custom-input custom-input--with-text-right">
                        <label><span className="custom-input__label">Стоимость тренировки</span><span className="custom-input__wrapper">
                            <input onChange={handleInputChange} type="number" name="price" value={exercise.price}/><span className="custom-input__text">₽</span></span>
                        </label>
                      </div>
                    </div>
                    <div className="create-training__radio-wrapper"><span className="create-training__label">Кому подойдет тренировка</span>
                      <div className="custom-toggle-radio create-training__radio">
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleInputChange} type="radio" name="gender" value={ExerciseGenderEnum.Men} checked={exercise.gender === ExerciseGenderEnum.Men}/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Мужчинам</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleInputChange} type="radio" name="gender" value={ExerciseGenderEnum.Women} checked={exercise.gender === ExerciseGenderEnum.Women}/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Женщинам</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleInputChange} type="radio" name="gender" value={ExerciseGenderEnum.All} checked={exercise.gender === ExerciseGenderEnum.All}/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Всем</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="create-training__block">
                    <h2 className="create-training__legend">Описание тренировки</h2>
                    <div className="custom-textarea create-training__textarea">
                      <label>
                        <textarea onChange={handleInputChange} value={exercise.description} name="description" placeholder=" "></textarea>
                      </label>
                    </div>
                  </div>
                  <div className="create-training__block">
                    <h2 className="create-training__legend">Загрузите видео-тренировку</h2>
                    <div className="drag-and-drop create-training__drag-and-drop">
                      <label>
                        <span className="drag-and-drop__label" tabIndex={0}>Загрузите сюда файлы формата MOV, AVI или MP4
                          <svg width="20" height="20" aria-hidden="true">
                            <use xlinkHref="#icon-import-video"></use>
                          </svg>
                        </span>
                        <input type="file" name="import" tabIndex={-1} accept=".mov, .avi, .mp4"/>
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn create-training__button" type="submit">Опубликовать</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
