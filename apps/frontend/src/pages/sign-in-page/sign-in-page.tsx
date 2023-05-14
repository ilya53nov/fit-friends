import { LoginUserDto } from '@fit-friends/shared-dto';
import { useLoginMutation } from '../../store/auth/auth-api'
import { ChangeEvent, FormEvent, useState } from 'react';

export default function SignInPage() {
  const [login, {error}] = useLoginMutation();
  const [loginUserDto, setLoginUserDto] = useState<LoginUserDto>({
    email: '',
    password: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    
    setLoginUserDto({...loginUserDto, [name]: value});
  }

  const onSubmit = async (loginUserDto: LoginUserDto) => {
    const logged = await login(loginUserDto).unwrap();

    console.log(logged);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(loginUserDto);
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
        <div className="popup-form popup-form--sign-in">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Вход</h1>
              </div>
              <div className="popup-form__form">
                <form method="get" onSubmit={handleSubmit}>
                  <div className="sign-in">
                    <div className="custom-input sign-in__input">
                      <label><span className="custom-input__label">E-mail</span><span className="custom-input__wrapper">
                          <input required={true} onChange={handleInputChange} value={loginUserDto.email} type="email" name="email"/></span>
                      </label>
                    </div>
                    <div className="custom-input sign-in__input">
                      <label><span className="custom-input__label">Пароль</span><span className="custom-input__wrapper">
                          <input required={true} onChange={handleInputChange} value={loginUserDto.password} type="password" name="password"/></span>
                      </label>
                    </div>
                    <button className="btn sign-in__button" type="submit">Продолжить</button>
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
