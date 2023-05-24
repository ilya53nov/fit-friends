import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

type CarouselSliderProps = {
  slides: JSX.Element[];
  currentSlide: number;
  visibleSlides: number;
  naturalSlideWidth: number;
  naturalSlideHeight: number;
  classNameSlide?: string;
  classNameSlider?: string;
}

export default function CarouselSlider({slides, currentSlide, visibleSlides, naturalSlideHeight, naturalSlideWidth, classNameSlide, classNameSlider}: CarouselSliderProps): JSX.Element {
  return (
    <CarouselProvider
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={naturalSlideHeight}
      totalSlides={slides.length}
      visibleSlides={visibleSlides}
      currentSlide={currentSlide}
      isIntrinsicHeight={true}

    >     
      <Slider  className={classNameSlider}>
        {slides.map((slide, index) => (
          <Slide className={classNameSlide} key={index} index={index}>{slide}</Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}
