import { UserRdo } from '@fit-friends/shared-rdo'
import { ExerciseLevelEnum, ExerciseTypeEnum, LocationEnum, ParameterKey, UserGenderEnum } from '@fit-friends/shared-types';
import { UserValidation } from '@fit-friends/shared-validation';
import { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import SpecializationCheckbox from '../checkbox/specialization-checkbox';
import Listbox from '../listbox/listbox';
import { useUpdateUserMutation } from '../../store/users/users-api';
import { UpdateCoachUserDto } from '@fit-friends/shared-dto';
import { useAddAvatarMutation } from '../../store/files/files-api';

type UserInfoProps = {
  userData: UserRdo | undefined,
}

const ListboxOption = {
  ClassName: 'user-info-edit__select',
  Location: {
    Key: 'locationDefault',
    Description: 'Локация',
  },
  Gender: {
    Key: 'gender',
    Description: 'Пол',
  },
  Level: {
    Key: 'exerciseLevel',
    Description: 'Уровень',
  },
}

export default function UserInfo({userData}: UserInfoProps): JSX.Element {
  const [updateUser, {isSuccess: isSuccessUpdateUser}] = useUpdateUserMutation();
  const [addAvatar, {data: avatarPath}] = useAddAvatarMutation();
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState<UserRdo>({
    avatar: '',
    email: '',
    exerciseLevel: '',
    exerciseTypes: [],
    gender: '',
    id: '',
    locationDefault: '',
    name: '',
    role: ''
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);     
    }
  }, [userData])

  useEffect(() => {
    if (user.exerciseTypes) {
      setSpecializations(defaultExerciseTypes);
    }
  }, [user.exerciseTypes])

  const locations = Object.values(LocationEnum);
  const genders = Object.values(UserGenderEnum);
  const levels = Object.values(ExerciseLevelEnum);

  const exerciseTypeValues = Object.values(ExerciseTypeEnum)
  const exerciseTypeKeys = Object.keys(ExerciseTypeEnum)
  const defaultExerciseTypes = exerciseTypeKeys.map((item, index) => ({
    item: item.toLowerCase(),
    value: exerciseTypeValues[index],
    checked: user.exerciseTypes.some((type) => type === exerciseTypeValues[index])
  }));
  const [specializations, setSpecializations] = useState(defaultExerciseTypes); 

  const getSpecializationsChecked = () => specializations.filter((specialization) => specialization.checked);

  const handleSpecializationCheckboxChange = (index: number) => {
    if (!isEdit) {
      return;
    }

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
    
    setUser({...user, [name]: value});
  }

  const handleOptionChange = (evt: SyntheticEvent<HTMLOptionElement>) => {
    if (!isEdit) {
      return;
    }

    const target = evt.target as HTMLOptionElement;
    const label = target.label;
    const value = target.value;

    setUser({ ...user!, [value]: label });
  };

  const onSubmit = async (updateSportsmanUserDto: UpdateCoachUserDto) => {
    await updateUser(updateSportsmanUserDto);

    setIsEdit(!isEdit);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    isEdit 
    ? onSubmit(user)
    : setIsEdit(!isEdit);
  }

  const handleDeleteAvatar = () => {
    const avatarPath = '';

    onSubmit({...user, avatar: avatarPath});
    setUser({...user, avatar: avatarPath});
  }

  const handleUpdateAvatar = () => {
    onSubmit({avatar: avatarPath});
  }

  const onAddAvatarClick = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append(ParameterKey.File, file);

    addAvatar(formData);
  }; 

  useEffect(() => {
    if (avatarPath) {
      setUser({...user, avatar: avatarPath});
    }    
  }, [avatarPath])

  return(
    <section className="user-info-edit">
      <div className="user-info-edit__header">
        <div className="input-load-avatar">
          <label>
            <input disabled={!isEdit} required={true} className="visually-hidden" type="file" name="user-photo-1" accept="image/png, image/jpeg" onChange={onAddAvatarClick}/>
            <span className="input-load-avatar__avatar" ref={filePickerRef}>
              <img src={user?.avatar} srcSet={user?.avatar} width="98" height="98" alt="user photo"/>
            </span>
          </label>
        </div>
        <div className={`user-info-edit__controls ${!isEdit ? 'visually-hidden' : ''}`}>
          <button className="user-info-edit__control-btn" aria-label="обновить" onClick={handleUpdateAvatar}>
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-change"></use>
            </svg>
          </button>
          <button className="user-info-edit__control-btn" aria-label="удалить" onClick={handleDeleteAvatar}>
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="#icon-trash"></use>
            </svg>
          </button>
        </div>
      </div>
      <form  className="user-info-edit__form" action="#" method="post" onSubmit={handleSubmit}>
        <button className="btn-flat btn-flat--underlined user-info-edit__save-button"  type="submit" aria-label={isEdit ? 'Сохранить' : 'Редактировать'}>
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#icon-edit"></use>
          </svg><span>{isEdit ? 'Сохранить' : 'Редактировать'}</span>
        </button>
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title">Обо мне</h2>
          <div className="custom-input user-info-edit__input">
            <label>
              <span className="custom-input__label">Имя</span>
              <span className="custom-input__wrapper">
                <input
                  readOnly={!isEdit}
                  pattern={UserValidation.Name.SymbolsPattern}
                  required={true}
                  type="text"
                  minLength={UserValidation.Name.Length.min}
                  maxLength={UserValidation.Name.Length.max}
                  onChange={handleInputChange}
                  value={user.name}
                  name="name"
                />
              </span>
            </label>
          </div>
          <div className="custom-textarea user-info-edit__textarea">
            <label><span className="custom-textarea__label">Описание</span>
              <textarea
                readOnly={!isEdit}
                onChange={handleInputChange}
                minLength={UserValidation.CommentLength.min}
                maxLength={UserValidation.CommentLength.max}
                name={'comment'}
                value={user?.comment}>{user?.comment}
              </textarea>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section user-info-edit__section--status">
          <h2 className="user-info-edit__title user-info-edit__title--status">Статус</h2>
          <div className="custom-toggle custom-toggle--switch user-info-edit__toggle">
            <label>
              <input disabled={!isEdit} type="checkbox" name="isReadyCoach" checked={user?.isReadyCoach} onChange={() => setUser({...user, isReadyCoach: !user.isReadyCoach})}/>
              <span className="custom-toggle__icon" >
                <svg width="9" height="6" aria-hidden="true">
                  <use xlinkHref="#arrow-check"></use>
                </svg></span><span className="custom-toggle__label">Готов тренировать</span>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title user-info-edit__title--specialization">Специализация</h2>
          <div className="specialization-checkbox user-info-edit__specialization">
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
        <Listbox
          name={ListboxOption.Location.Key}
          description={ListboxOption.Location.Description}
          className={ListboxOption.ClassName}
          onOptionClick={handleOptionChange}
          optionItems={locations}
          text={user?.locationDefault}                        
        />
        <Listbox 
          name={ListboxOption.Gender.Key}
          description={ListboxOption.Gender.Description}
          className={ListboxOption.ClassName}
          onOptionClick={handleOptionChange}
          optionItems={genders}
          text={user?.gender}                        
        />  
        <Listbox 
          name={ListboxOption.Level.Key}
          description={ListboxOption.Level.Description}
          className={ListboxOption.ClassName}
          onOptionClick={handleOptionChange}
          optionItems={levels}
          text={user?.exerciseLevel}                        
        /> 
      </form>
    </section>
  )
}
