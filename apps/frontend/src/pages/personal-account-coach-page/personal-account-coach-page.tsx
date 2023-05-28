import { UserRdo } from '@fit-friends/shared-rdo';
import { useGetMeQuery } from '../../store/auth/auth-api'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useGetUserQuery } from '../../store/users/users-api';
import { getUserId } from '../../utils/local-storage';
import { useNavigate } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';
import UserInfo from '../../components/user-info/user-info';
import CoachNavigation from '../../components/coach-navigation/coach-navigation';
import CertificateSlider from '../../components/certificate-slider/certificate-slider';
import LoadingSpinner from '../../components/spinner/loading-spinner';

const certificates = [
  'https://wp-s.ru/wallpapers/9/18/438540442363429/izgib-reki-na-fone-zakata.jpg',
  'https://i.pinimg.com/originals/16/74/32/167432185b15978f3b26d33e70df79b7.jpg',
  'https://i.pinimg.com/736x/cc/25/91/cc25911a8e23fa11515ed0eb06ee6785.jpg',
  'https://wp-s.ru/wallpapers/9/18/438540442363429/izgib-reki-na-fone-zakata.jpg',
  'https://i.pinimg.com/originals/16/74/32/167432185b15978f3b26d33e70df79b7.jpg',
  'https://i.pinimg.com/736x/cc/25/91/cc25911a8e23fa11515ed0eb06ee6785.jpg',
]

export default function PersonalAccountCoachPage(): JSX.Element {
  const {data: userData = {} as UserRdo, isSuccess: isSuccessMyProfile, isLoading: isLoadingMyProfile, isError} = useGetMeQuery({});
  const [certificates, setCertificates] = useState<string[]>([]);
  
  const navigate = useNavigate();  

  useEffect(() => {
    if (isError) {
      navigate(ClientRoute.Login);      
    }
  }, [isError])

  useEffect(() => {
    if (userData && userData.certificate) {
      //const cert = [userData.certificate, userData.certificate, userData.certificate, userData.certificate, userData.certificate];
      console.log(userData.certificate);
      setCertificates(userData.certificate);
    }
  }, [userData])

  if (!userData) {
    return(<LoadingSpinner />)
  }

  return(
    <div className="wrapper">
      <header className="header">
        <div className="container"><a className="header__logo" href="index.html" aria-label="Переход на главную">
            <svg width="187" height="70" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg></a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item"><a className="main-nav__link is-active" href="#" aria-label="На главную">
                  <svg width="18" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-home"></use>
                  </svg></a></li>
              <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Личный кабинет">
                  <svg width="16" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-user"></use>
                  </svg></a></li>
              <li className="main-nav__item"><a className="main-nav__link" href="#" aria-label="Друзья">
                  <svg width="22" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-friends"></use>
                  </svg></a></li>
              <li className="main-nav__item main-nav__item--notifications"><a className="main-nav__link" href="#" aria-label="Уведомления">
                  <svg width="14" height="18" aria-hidden="true">
                    <use xlinkHref="#icon-notification"></use>
                  </svg></a>
                <div className="main-nav__dropdown">
                  <p className="main-nav__label">Оповещения</p>
                  <ul className="main-nav__sublist">
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                        <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
                        <time className="notification__time" dateTime="2023-12-23 12:35">23 декабря, 12:35</time></a>
                    </li>
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                        <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-22 09:22">22 декабря, 09:22</time></a>
                    </li>
                    <li className="main-nav__subitem"><a className="notification is-active" href="#">
                        <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
                        <time className="notification__time" dateTime="2023-12-18 18:50">18 декабря, 18:50</time></a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form action="#" method="get">
              <label><span className="search__label">Поиск</span>
                <input type="search" name="search"/>
                <svg className="search__icon" width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-search"></use>
                </svg>
              </label>
              <ul className="search__list">
                <li className="search__item"><a className="search__link" href="#">Бокс</a></li>
                <li className="search__item"><a className="search__link is-active" href="#">Бег</a></li>
                <li className="search__item"><a className="search__link" href="#">Аэробика</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
                <li className="search__item"><a className="search__link" href="#">Text</a></li>
              </ul>
            </form>
          </div>
        </div>
      </header>
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Личный кабинет</h1>
              <UserInfo userData={userData} />
              <div className="inner-page__content">
                <div className="personal-account-coach">
                  <CoachNavigation/>
                  <CertificateSlider certificatesData={certificates}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
