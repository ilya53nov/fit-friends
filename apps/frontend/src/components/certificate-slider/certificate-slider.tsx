import { useState } from 'react';
import CarouselSlider from '../slider/carousel-slider';
import CertificateSlide from './certificate-slide';

type CertificateSliderProps = {
  certificates: string[];
}

export default function CertificateSlider({certificates}: CertificateSliderProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleSlides = 3;

  const handleButtonBackClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleButtonNextClick = () => {
    if (currentSlide < certificates.length - visibleSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return(
  <div className="personal-account-coach__additional-info">
    <div className="personal-account-coach__label-wrapper">
      <h2 className="personal-account-coach__label">Дипломы и сертификаты</h2>
      <button className="btn-flat btn-flat--underlined personal-account-coach__button" type="button">
        <svg width="14" height="14" aria-hidden="true">
          <use xlinkHref="#icon-import"></use>
        </svg><span>Загрузить</span>
      </button>
      <div className="personal-account-coach__controls">
        <button onClick={handleButtonBackClick} className="btn-icon personal-account-coach__control" type="button" aria-label="previous">
          <svg width="16" height="14" aria-hidden="true">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
        <button onClick={handleButtonNextClick} className="btn-icon personal-account-coach__control" type="button" aria-label="next">
          <svg width="16" height="14" aria-hidden="true">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
      </div>
    </div>

      <CarouselSlider
        currentSlide={currentSlide}
        visibleSlides={visibleSlides}
        slides={certificates.map((certificate) => <CertificateSlide key={certificate} certificate={certificate} />)}
      />
    
  </div>
  )
}
