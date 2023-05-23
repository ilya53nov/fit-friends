import { ExerciseRdo } from '@fit-friends/shared-rdo';
import ExercisesCatalogCard from '../../components/exercises-catalog-card/exercises-catalog-card';
import { useState } from 'react';
import { BaseQuery, ExercisesQuery } from '@fit-friends/core';
import ExercisesCatalog from '../../components/exercises-catalog/exercises-catalog';
import { QueryParameter } from '@fit-friends/shared-types';

const defaultQuery: ExercisesQuery = {
  limit: 3, //QueryParameter.DefaultExerciseCountLimit,
  page: QueryParameter.DefaultPageNumber,
  sortDirection: QueryParameter.DefaultSortDirection,
}

export default function ExercisesCatalogPage(): JSX.Element {
  const [query, setQuery] = useState<ExercisesQuery>(defaultQuery);

  const handleMoreButtonClick = () => {
    setQuery({...query, limit: query.limit! + 3})
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
              <h1 className="visually-hidden">Каталог тренировок</h1>
              <div className="gym-catalog-form">
                <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
                <div className="gym-catalog-form__wrapper">
                  <button className="btn-flat btn-flat--underlined gym-catalog-form__btnback" type="button">
                    <svg width="14" height="10" aria-hidden="true">
                      <use xlinkHref="#arrow-left"></use>
                    </svg><span>Назад</span>
                  </button>
                  <h3 className="gym-catalog-form__title">Фильтры</h3>
                  <form className="gym-catalog-form__form">
                    <div className="gym-catalog-form__block gym-catalog-form__block--price">
                      <h4 className="gym-catalog-form__block-title">Цена, ₽</h4>
                      <div className="filter-price">
                        <div className="filter-price__input-text filter-price__input-text--min">
                          <input type="number" id="text-min" name="text-min" value="0"/>
                          <label htmlFor="text-min">от</label>
                        </div>
                        <div className="filter-price__input-text filter-price__input-text--max">
                          <input type="number" id="text-max" name="text-max" value="3200"/>
                          <label htmlFor="text-max">до</label>
                        </div>
                      </div>
                      <div className="filter-range">
                        <div className="filter-range__scale">
                          <div className="filter-range__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-range__control">
                          <button className="filter-range__min-toggle"><span className="visually-hidden">Минимальное значение</span></button>
                          <button className="filter-range__max-toggle"><span className="visually-hidden">Максимальное значение</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="gym-catalog-form__block gym-catalog-form__block--calories">
                      <h4 className="gym-catalog-form__block-title">Калории</h4>
                      <div className="filter-calories">
                        <div className="filter-calories__input-text filter-calories__input-text--min">
                          <input type="number" id="text-min-cal" name="text-min-cal"/>
                          <label htmlFor="text-min-cal">от</label>
                        </div>
                        <div className="filter-calories__input-text filter-calories__input-text--max">
                          <input type="number" id="text-max-cal" name="text-max-cal"/>
                          <label htmlFor="text-max-cal">до</label>
                        </div>
                      </div>
                      <div className="filter-range">
                        <div className="filter-range__scale">
                          <div className="filter-range__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-range__control">
                          <button className="filter-range__min-toggle"><span className="visually-hidden">Минимальное значение</span></button>
                          <button className="filter-range__max-toggle"><span className="visually-hidden">Максимальное значение</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="gym-catalog-form__block gym-catalog-form__block--rating">
                      <h4 className="gym-catalog-form__block-title">Рейтинг</h4>
                      <div className="filter-raiting">
                        <div className="filter-raiting__scale">
                          <div className="filter-raiting__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
                        </div>
                        <div className="filter-raiting__control">
                          <button className="filter-raiting__min-toggle"><span className="visually-hidden">Минимальное значение</span></button><span>1</span>
                          <button className="filter-raiting__max-toggle"><span className="visually-hidden">Максимальное значение</span></button><span>5</span>
                        </div>
                      </div>
                    </div>
                    <div className="gym-catalog-form__block gym-catalog-form__block--type">
                      <h4 className="gym-catalog-form__block-title">Тип</h4>
                      <ul className="gym-catalog-form__check-list">
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">йога</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">силовые</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type" name="type" checked/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">кроссфит</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type" checked/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">бокс</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">бег</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">аэробика</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">пилатес</span>
                            </label>
                          </div>
                        </li>
                        <li className="gym-catalog-form__check-list-item">
                          <div className="custom-toggle custom-toggle--checkbox">
                            <label>
                              <input type="checkbox" value="type-1" name="type"/><span className="custom-toggle__icon">
                                <svg width="9" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-check"></use>
                                </svg></span><span className="custom-toggle__label">стрейчинг</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="gym-catalog-form__block gym-catalog-form__block--sort">
                      <h4 className="gym-catalog-form__title gym-catalog-form__title--sort">Сортировка</h4>
                      <div className="btn-radio-sort gym-catalog-form__radio">
                        <label>
                          <input type="radio" name="sort" checked/><span className="btn-radio-sort__label">Дешевле</span>
                        </label>
                        <label>
                          <input type="radio" name="sort"/><span className="btn-radio-sort__label">Дороже</span>
                        </label>
                        <label>
                          <input type="radio" name="sort"/><span className="btn-radio-sort__label">Бесплатные</span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <ExercisesCatalog query={query} onMoreButtonClick={handleMoreButtonClick}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
