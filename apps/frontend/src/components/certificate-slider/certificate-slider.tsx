import { ChangeEvent, useEffect, useRef, useState } from 'react';
import CarouselSlider from '../slider/carousel-slider';
import CertificateSlide from './certificate-slide';
import { ParameterKey } from '@fit-friends/shared-types';
import { useAddCertificateMutation } from '../../store/files/files-api';
import { useUpdateUserMutation } from '../../store/users/users-api';

const DEFAULT_VISIBLE_SLIDES = 3;

type CertificateSliderProps = {
  certificatesData: string[];
}

export default function CertificateSlider({certificatesData}: CertificateSliderProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [addCertificate, {data: certificatePath, }] = useAddCertificateMutation();
  const [certificates, setCertificate] = useState<string[]>([]);
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [updateUser, {isSuccess: isSuccessUpdateUser}] = useUpdateUserMutation();
  
  useEffect(() => {
    if (certificatePath) {
      updateUser({certificate: [...certificates, certificatePath]});
      setCertificate([...certificates, certificatePath]);
    }
  }, [certificatePath])

  useEffect(() => {
    if (certificatesData) {
      setCertificate([...certificatesData]);
    }
  }, [certificatesData])

  const handleButtonBackClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleAddCertificateClick = () => {
    filePickerRef.current?.click();
  }

  const handleButtonNextClick = () => {
    if (currentSlide < certificates.length - DEFAULT_VISIBLE_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const handleDeleteClick = (certificate: string) => {
    const filteredCertificates = certificates.filter((item) => item !== certificate);

    updateUser({certificate: [...filteredCertificates]});
    setCertificate([...filteredCertificates]);
  }

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

  return(
  <div className="personal-account-coach__additional-info">
    <div className="personal-account-coach__label-wrapper">
      <h2 className="personal-account-coach__label">Дипломы и сертификаты</h2>
      <button onClick={handleAddCertificateClick} className="btn-flat btn-flat--underlined personal-account-coach__button" type="button">
        <svg width="14" height="14" aria-hidden="true">
          <use xlinkHref="#icon-import"></use>
        </svg>
        <input ref={filePickerRef} className='visually-hidden' type="file" onChange={onAddCertificateClick} required={true}  name="import" tabIndex={-1} accept=".pdf"/>
        <span>Загрузить</span>
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
    <ul className="personal-account-coach__list">
      <CarouselSlider
        naturalSlideHeight={1}
        naturalSlideWidth={1}
        currentSlide={currentSlide}
        isIntrinsicHeight={true}
        visibleSlides={DEFAULT_VISIBLE_SLIDES}
        slides={certificates.map((certificate) => <CertificateSlide key={certificate} certificate={certificate} onDeleteClick={() => handleDeleteClick(certificate)}/>)}
      />
    </ul>
  </div>
  )
}
