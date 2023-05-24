import { UserRdo } from '@fit-friends/shared-rdo';
import { useGetUsersQuery } from 'apps/frontend/src/store/users/users-api';
import { useState } from 'react';
import LookForCompanySlide from './look-for-company-slide';
import CarouselSlider from '../../slider/carousel-slider';
import LoadingSpinner from '../../spinner/loading-spinner';

export default function LookForCompanySlider(): JSX.Element {
  const {data: users = [], isLoading} = useGetUsersQuery(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return(<LoadingSpinner />)
  }

  const visibleSlides = 1;

  const handleButtonBackClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleButtonNextClick = () => {
    if (currentSlide < users.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return(
    <CarouselSlider
      naturalSlideHeight={1000}
      naturalSlideWidth={500}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      slides={users.slice(0,3).map((user: UserRdo) => <LookForCompanySlide key={user.id} user={user} />)}
    /> 
  )
}
