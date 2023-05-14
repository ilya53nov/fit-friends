import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { useRegisterUserMutation } from '../../store/auth/auth-api'
import { useAddAvatarMutation } from '../../store/files/files-api';
import { ParameterKey, RoleEnum, UserGenderEnum } from '@fit-friends/shared-types';
import { CreateBaseUserDto } from '@fit-friends/shared-dto';
import { UserValidation } from '@fit-friends/shared-validation';

export default function SignUpPage(): JSX.Element {
  const [registerUser, {error: errorRegisterUser}] = useRegisterUserMutation();
  const [user, setUser] = useState<CreateBaseUserDto>({
    avatar: '',
    name: '',
    email: '',
    exerciseLevel: '',
    exerciseTypes: [],
    gender: UserGenderEnum.NotMatter,
    locationDefault: '',
    password: '',
    role: RoleEnum.Sportsman,
    dateBirth: new Date(),
  });
  const [addAvatar] = useAddAvatarMutation();
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    
    setUser({...user, [name]: value});
  }

  const onAddAvatarClick = async (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append(ParameterKey.File, file);

    const loadedAvatar = await addAvatar(formData).unwrap();

    setUser({...user, avatar: loadedAvatar});

    (filePickerRef.current as HTMLDivElement).style.background =
      `url(${URL.createObjectURL(file as File)}) no-repeat center/cover`;
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
        <div className="popup-form popup-form--sign-up">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Регистрация</h1>
              </div>
              <div className="popup-form__form">
                <form method="get">
                  <div className="sign-up">
                    <div className="sign-up__load-photo">
                      <div className="input-load-avatar">
                        <label>
                          <input required={true} className="visually-hidden" type="file" accept="image/png, image/jpeg" onChange={onAddAvatarClick}/>
                          <span className="input-load-avatar__btn" ref={filePickerRef}>
                            <svg width="20" height="20" aria-hidden="true">
                              <use xlinkHref="#icon-import"></use>
                            </svg>
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__description">
                        <h2 className="sign-up__legend">Загрузите фото профиля</h2><span className="sign-up__text">JPG, PNG, оптимальный размер 100&times;100&nbsp;px</span>
                      </div>
                    </div>
                    <div className="sign-up__data">
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Имя</span>
                          <span className="custom-input__wrapper">
                            <input pattern={String(UserValidation.Name.SymbolsPattern)} required={true} type="text" minLength={UserValidation.Name.Length.min} maxLength={UserValidation.Name.Length.max} onChange={handleInputChange} value={user.name} name="name"/>
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">E-mail</span>
                          <span className="custom-input__wrapper">
                            <input required={true} type="email" onChange={handleInputChange} value={user.email} name="email"/>
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label>
                          <span className="custom-input__label">Дата рождения</span>
                          <span className="custom-input__wrapper">
                            <input required={true} type="date" name="dateBirth" max="2099-12-31"/>
                          </span>
                        </label>
                      </div>
                      <div className="custom-select custom-select--not-selected">
                        <span className="custom-select__label">Ваша локация</span>
                        <button className="custom-select__button" type="button" aria-label="Выберите одну из опций">
                          <span className="custom-select__text"></span>
                          <span className="custom-select__icon">
                            <svg width="15" height="6" aria-hidden="true">
                              <use xlinkHref="#arrow-down"></use>
                            </svg>
                          </span>
                        </button>
                        <ul className="custom-select__list" role="listbox">
                            <option
                              
                              value={'sdfgfd'}
                              role='listitem'
                              className='custom-select__item capitalize'
                              
                            >{'sdfgfd'}</option>
                        </ul>
                      </div>
                      <div className="custom-input">
                        <label><span className="custom-input__label">Пароль</span>
                          <span className="custom-input__wrapper">
                            <input required={true} type="password" minLength={UserValidation.PasswordLength.min} maxLength={UserValidation.PasswordLength.max} name="password" onChange={handleInputChange} value={user.password} autoComplete="off"/>
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__radio"><span className="sign-up__label">Пол</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big">
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="gender" onChange={handleInputChange} value={UserGenderEnum.Male} defaultChecked={user.gender === UserGenderEnum.Male}/>
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Мужской</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="gender" onChange={handleInputChange} value={UserGenderEnum.Female} defaultChecked={user.gender === UserGenderEnum.Female}/>
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Женский</span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="gender" onChange={handleInputChange} value={UserGenderEnum.NotMatter} defaultChecked={user.gender === UserGenderEnum.NotMatter}/>
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">Неважно</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sign-up__role">
                      <h2 className="sign-up__legend">Выберите роль</h2>
                      <div className="role-selector sign-up__role-selector">
                        <div className="role-btn">
                          <label>
                            <input className="visually-hidden" type="radio" name="role" value={RoleEnum.Coach} onChange={handleInputChange} defaultChecked={user.role === RoleEnum.Coach}/>
                            <span className="role-btn__icon">
                              <svg width="12" height="13" aria-hidden="true">
                                <use xlinkHref="#icon-cup"></use>
                              </svg>
                            </span>
                            <span className="role-btn__btn">Я хочу тренировать</span>
                          </label>
                        </div>
                        <div className="role-btn">
                          <label>
                            <input className="visually-hidden" type="radio" name="role" value={RoleEnum.Sportsman} onChange={handleInputChange} defaultChecked={user.role === RoleEnum.Sportsman}/>
                            <span className="role-btn__icon">
                              <svg width="12" height="13" aria-hidden="true">
                                <use xlinkHref="#icon-weight"></use>
                              </svg>
                            </span>
                            <span className="role-btn__btn">Я хочу тренироваться</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="sign-up__checkbox">
                      <label>
                        <input type="checkbox" value="user-agreement" name="user-agreement" checked/><span className="sign-up__checkbox-icon">
                          <svg width="9" height="6" aria-hidden="true">
                            <use xlinkHref="#arrow-check"></use>
                          </svg></span><span className="sign-up__checkbox-label">Я соглашаюсь с <span>политикой конфиденциальности</span> компании</span>
                      </label>
                    </div>
                    <button className="btn sign-up__button" type="submit">Продолжить</button>
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
