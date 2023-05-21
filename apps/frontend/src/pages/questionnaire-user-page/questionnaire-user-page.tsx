import { ChangeEvent, FormEvent, useState } from 'react';
import SpecializationCheckbox from '../../components/checkbox/specialization-checkbox';
import { ExerciseDurationEnum, ExerciseLevelEnum, ExerciseTypeEnum } from '@fit-friends/shared-types';
import ToggleRadio from '../../components/toggle-radio/toggle-radio';
import { UserValidation } from '@fit-friends/shared-validation';
import { toast } from 'react-toastify';
import { UpdateSportsmanUserDto } from '@fit-friends/shared-dto';
import { useUpdateUserMutation } from '../../store/users/users-api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';

enum InputNameEnum {
  Time = 'time',
  Level = 'level',
  CaloriesResetCount = 'caloriesResetCount',
  CaloriesSpendPerDayCount = 'caloriesSpendPerDayCount',  
}

const exerciseTypeValues = Object.values(ExerciseTypeEnum)
const exerciseTypeKeys = Object.keys(ExerciseTypeEnum)
const defaultExerciseTypes = exerciseTypeKeys.map((item, index) => ({item: item.toLowerCase(), value: exerciseTypeValues[index], checked: false}));

const exerciseDurationValues = Object.values(ExerciseDurationEnum);

const exerciseLevelValues = Object.values(ExerciseLevelEnum);

export default function QuestionnaireUserPage(): JSX.Element {
  const [specializations, setSpecializations] = useState(defaultExerciseTypes); 
  const [exerciseDuration, setExerciseDuration] = useState<string>(ExerciseDurationEnum.TenToThirty);
  const [exerciseLevel, setExerciseLevel] = useState<string>(ExerciseLevelEnum.Amateur);
  const [caloriesResetCount, setCaloriesResetCount] = useState<number>(UserValidation.CaloriesResetCount.min);
  const [caloriesSpendPerDayCount, setCaloriesSpendPerDayCount] = useState<number>(UserValidation.CaloriesSpendPerDayCount.min);
  const [updateUser, {isSuccess: isSuccessUpdateUser}] = useUpdateUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if(isSuccessUpdateUser) {
      navigate(ClientRoute.Index);
    }
  })

  const getSpecializationsChecked = () => specializations.filter((specialization) => specialization.checked);

  const handleSpecializationCheckboxChange = (index: number) => {
    const specializationsChecked = getSpecializationsChecked();

    if (specializationsChecked.length >= UserValidation.ExerciseType.maxCount && !specializations[index].checked) {
      toast.error(UserValidation.ExerciseType.message);
      return;
    }

    setSpecializations([
      ...specializations.slice(0, index),
      { ...specializations[index], checked: !specializations[index].checked },
      ...specializations.slice(index + 1),
    ]);
  }; 
  
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    if (name === InputNameEnum.Time) {
      setExerciseDuration(value);
    }

    if (name === InputNameEnum.Level) {
      setExerciseLevel(value);
    }

    if (name === InputNameEnum.CaloriesResetCount) {
      setCaloriesResetCount(+value);
    }

    if (name === InputNameEnum.CaloriesSpendPerDayCount) {
      setCaloriesSpendPerDayCount(+value);
    }
  }

  const isValidCaloriesResetCount = () => {
    return caloriesResetCount >= UserValidation.CaloriesResetCount.min
    &&
    caloriesResetCount <= UserValidation.CaloriesResetCount.max
  };

  const isValidCaloriesSpendPerDayCount = () => {
    return caloriesSpendPerDayCount >= UserValidation.CaloriesSpendPerDayCount.min
    &&
    caloriesSpendPerDayCount <= UserValidation.CaloriesSpendPerDayCount.max
  };

  const isValidSpecializationsCount = () => {
    const specializationsChecked = getSpecializationsChecked();

    return specializationsChecked.length <= UserValidation.ExerciseType.maxCount && specializationsChecked.length > 0;
  }

  const checkUserFields = () => {
    if (!isValidCaloriesResetCount()) {
      toast.error(UserValidation.CaloriesResetCount.message);
      return false;
    }

    if (!isValidCaloriesSpendPerDayCount()) {
      toast.error(UserValidation.CaloriesSpendPerDayCount.message);
      return false;
    }

    if (!isValidSpecializationsCount()) {
      toast.error(UserValidation.ExerciseType.message);
      return false;
    }

    if (!exerciseDuration) {
      return false;
    }   

    if (!exerciseLevel) {
      return false;
    }  
    
    return true;
  }

  const onSubmit = async (updateSportsmanUserDto: UpdateSportsmanUserDto) => {
    await updateUser(updateSportsmanUserDto);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (checkUserFields()) {
      const specializationsChecked = getSpecializationsChecked();

      const user: UpdateSportsmanUserDto = {
        caloriesResetCount: caloriesResetCount,
        caloriesSpendPerDayCount: caloriesSpendPerDayCount,
        durationTraining: exerciseDuration,
        exerciseLevel: exerciseLevel,
        exerciseTypes: specializationsChecked.map((specialization) => specialization.value),
      } 
      onSubmit(user);
    }    
  }

  return (
    <div className="wrapper">
      <main>
        <div className="background-logo">
          <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
            <use xlinkHref="#logo-big"></use>
          </svg>
          <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
            <use xlinkHref="#icon-logotype"></use>
          </svg>
        </div>
        <div className="popup-form popup-form--questionnaire-user">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form method="get" onSubmit={handleSubmit}>
                  <div className="questionnaire-user">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-user__wrapper">
                      <div className="questionnaire-user__block">
                        <span className="questionnaire-user__legend">Ваша специализация (тип) тренировок</span>
                        <div className="specialization-checkbox questionnaire-user__specializations">
                          {specializations.map((specialization, index) => (
                            <SpecializationCheckbox
                              key={specialization.item}
                              description={specialization.value}
                              isChecked={specialization.checked}
                              value={specialization.item}
                              onChange={() => handleSpecializationCheckboxChange(index)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Сколько времени вы готовы уделять на тренировку в день</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                          {exerciseDurationValues.map((item) => (
                            <ToggleRadio
                              name={InputNameEnum.Time}
                              key={item}
                              description={item}
                              isChecked={exerciseDuration === item}
                              value={item}
                              onChange={handleInputChange}
                            />
                          ))}                         
                        </div>
                      </div>
                      <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Ваш уровень</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                          {exerciseLevelValues.map((item) => (
                              <ToggleRadio
                                name={InputNameEnum.Level}
                                key={item}
                                description={item}
                                isChecked={exerciseLevel === item}
                                value={item}
                                onChange={handleInputChange}
                              />
                            ))}                              
                        </div>
                      </div>
                      <div className="questionnaire-user__block">
                        <div className="questionnaire-user__calories-lose"><span className="questionnaire-user__legend">Сколько калорий хотите сбросить</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label><span className="custom-input__wrapper">
                                <input type="number" onChange={handleInputChange} min={UserValidation.CaloriesResetCount.min} max={UserValidation.CaloriesResetCount.max} value={caloriesResetCount} name={InputNameEnum.CaloriesResetCount}/><span className="custom-input__text">ккал</span></span>
                            </label>
                          </div>
                        </div>
                        <div className="questionnaire-user__calories-waste"><span className="questionnaire-user__legend">Сколько калорий тратить в день</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label><span className="custom-input__wrapper">
                                <input type="number" onChange={handleInputChange} min={UserValidation.CaloriesSpendPerDayCount.min} max={UserValidation.CaloriesSpendPerDayCount.max} value={caloriesSpendPerDayCount} name={InputNameEnum.CaloriesSpendPerDayCount}/><span className="custom-input__text">ккал</span></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn questionnaire-user__button" type="submit">Продолжить</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>    
  )
}
