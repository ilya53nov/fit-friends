import { ExerciseLevelEnum, ExerciseTypeEnum, ParameterKey } from '@fit-friends/shared-types';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';
import { UserValidation } from '@fit-friends/shared-validation';
import { toast } from 'react-toastify';
import SpecializationCheckbox from '../../components/checkbox/specialization-checkbox';
import { useUpdateUserMutation } from '../../store/users/users-api';
import ToggleRadio from '../../components/toggle-radio/toggle-radio';
import { useAddCertificateMutation } from '../../store/files/files-api';
import { UpdateCoachUserDto } from '@fit-friends/shared-dto';

enum InputNameEnum {
  Description = 'description',
  Level = 'level',
  IndividualTraining = 'individual-training',
}

const exerciseTypeValues = Object.values(ExerciseTypeEnum)
const exerciseTypeKeys = Object.keys(ExerciseTypeEnum)
const defaultExerciseTypes = exerciseTypeKeys.map((item, index) => ({item: item.toLowerCase(), value: exerciseTypeValues[index], checked: false}));

const exerciseLevelValues = Object.values(ExerciseLevelEnum);

export default function QuestionnaireCoachPage(): JSX.Element {
  const [specializations, setSpecializations] = useState(defaultExerciseTypes); 
  const [exerciseLevel, setExerciseLevel] = useState<string>(ExerciseLevelEnum.Amateur);
  const [updateUser, {isSuccess: isSuccessUpdateUser}] = useUpdateUserMutation();
  const navigate = useNavigate();
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [isReadyCoach, setIsReadyCoach] = useState(false);
  const [addCertificate, {data: certificatePath, }] = useAddCertificateMutation();
  const [certificate, setCertificate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(isSuccessUpdateUser) {
      navigate(ClientRoute.Main);
    }
  })

  useEffect(() => {
    if (certificatePath) {
      setCertificate(certificatePath);
    }
  }, [certificatePath])

  useEffect(() => {
    if (isSuccessUpdateUser) {
      navigate(ClientRoute.PersonalAccountCoach);
    }
  })

  const onAddCertificateClick = async (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append(ParameterKey.File, file);

    await addCertificate(formData);
  }; 

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

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = evt.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    if (name === InputNameEnum.Level) {
      setExerciseLevel(value);
    }

    if (name === InputNameEnum.Description) {
      setDescription(value);
    }

    if (name === InputNameEnum.IndividualTraining) {
      setIsReadyCoach(!isReadyCoach);
    }
  }

  const isValidSpecializationsCount = () => {
    const specializationsChecked = getSpecializationsChecked();

    return specializationsChecked.length <= UserValidation.ExerciseType.maxCount && specializationsChecked.length > 0;
  }

  const checkUserFields = () => {
    if (!isValidSpecializationsCount()) {
      toast.error(UserValidation.ExerciseType.message);
      return false;
    }

    if (!certificate) {
      toast.error(UserValidation.Certificate.message);
      return false;      
    }

    if (!exerciseLevel) {
      return false;
    }  

    if (!description) {
      toast.error(UserValidation.CommentLength.message);
      return false;
    }  
    
    return true;
  }

  const onSubmit = async (updateSportsmanUserDto: UpdateCoachUserDto) => {
    await updateUser(updateSportsmanUserDto);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (checkUserFields()) {
      const specializationsChecked = getSpecializationsChecked();

      const user: UpdateCoachUserDto = {
        certificate: certificate,
        isReadyCoach: isReadyCoach,
        comment: description,
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
        <div className="popup-form popup-form--questionnaire-coach">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form method="get" onSubmit={handleSubmit}>
                  <div className="questionnaire-coach">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-coach__wrapper">
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваша специализация (тип) тренировок</span>
                        <div className="specialization-checkbox questionnaire-coach__specializations">
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
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваш уровень</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-coach__radio">
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
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
                        <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                          <label>
                            <span className="drag-and-drop__label" ref={filePickerRef} tabIndex={0}>{certificate ? certificate : 'Загрузите сюда файл формата PDF'}
                              <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="#icon-import"></use>
                              </svg>
                            </span>
                            <input type="file" onChange={onAddCertificateClick} required={true}  name="import" tabIndex={-1} accept=".pdf"/>
                          </label>
                        </div>
                      </div>
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Расскажите о своём опыте, который мы сможем проверить</span>
                        <div className="custom-textarea questionnaire-coach__textarea">
                          <label>
                            <textarea onChange={handleInputChange} minLength={UserValidation.CommentLength.min} maxLength={UserValidation.CommentLength.max} name={InputNameEnum.Description} value={description} placeholder=" ">{description}</textarea>
                          </label>
                        </div>
                        <div className="questionnaire-coach__checkbox">
                          <label>
                            <input onChange={handleInputChange} type="checkbox" value="individual-training" name={InputNameEnum.IndividualTraining} checked={isReadyCoach}/>
                            <span className="questionnaire-coach__checkbox-icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="questionnaire-coach__checkbox-label">Хочу дополнительно индивидуально тренировать</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn questionnaire-coach__button" type="submit">Продолжить</button>
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
