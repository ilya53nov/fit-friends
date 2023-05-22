import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

type CarouselSliderProps = {
  slides: JSX.Element[];
  currentSlide: number;
  visibleSlides: number;
}

export default function CarouselSlider({slides, currentSlide, visibleSlides}: CarouselSliderProps): JSX.Element {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={visibleSlides / 2}
      totalSlides={slides.length}
      visibleSlides={visibleSlides}
      currentSlide={currentSlide}
    >
      <Slider>
        {slides.map((slide, index) => (
          <Slide key={index} index={index}>{slide}</Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}
