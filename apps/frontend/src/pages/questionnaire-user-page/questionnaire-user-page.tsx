import { ChangeEvent, useState } from 'react';
import SpecializationCheckbox from '../../components/specialization/specialization-checkbox';
import { ExerciseTypeEnum } from '@fit-friends/shared-types';

const exerciseTypeValues = Object.values(ExerciseTypeEnum)
const exerciseTypeKeys = Object.keys(ExerciseTypeEnum)
const exerciseTypes = exerciseTypeKeys.map((item, index) => ({item: item.toLowerCase(), value: exerciseTypeValues[index], checked: false}));

export default function QuestionnaireUserPage(): JSX.Element {
  const [specializations, setSpecializations] = useState(exerciseTypes); 

  const handleSpecializationCheckboxChange = (index: number) => {
    setSpecializations([
      ...specializations.slice(0, index),
      { ...specializations[index], checked: !specializations[index].checked },
      ...specializations.slice(index + 1),
    ]);
  };  


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
                <form method="get">
                  <div className="questionnaire-user">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-user__wrapper">
                      <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Ваша специализация (тип) тренировок</span>
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
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="time"/>
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">10-30 мин</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="time" checked/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">30-50 мин</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="time"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">50-80 мин</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="time"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">больше 80 мин</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Ваш уровень</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Новичок</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level" checked/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Любитель</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level"/><span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Профессионал</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="questionnaire-user__block">
                        <div className="questionnaire-user__calories-lose"><span className="questionnaire-user__legend">Сколько калорий хотите сбросить</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label><span className="custom-input__wrapper">
                                <input type="number" name="calories-lose"/><span className="custom-input__text">ккал</span></span>
                            </label>
                          </div>
                        </div>
                        <div className="questionnaire-user__calories-waste"><span className="questionnaire-user__legend">Сколько калорий тратить в день</span>
                          <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                            <label><span className="custom-input__wrapper">
                                <input type="number" name="calories-waste"/><span className="custom-input__text">ккал</span></span>
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
