import { useEffect, useState } from 'react';
import PdfToImg from "pdftoimg-js";

const getConvertedPdfToPngUrl = async (pdfPath: string) => {
  const buffer = await PdfToImg(pdfPath, {imgType: 'png', returnType: 'buffer'});
  const blob = new Blob(buffer);
  const url = URL.createObjectURL(blob);

  return url;
}

type CertificateSlideProps = {
  certificate: string;
}

export default function CertificateSlide({certificate}: CertificateSlideProps): JSX.Element {
  const [url, setUrl] = useState('');
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getConvertedPdfToPngUrl(certificate);

      data
      ? setUrl(data)
      : setIsNotFound(true)      
    }

    if (!isNotFound) {  
      fetchData();
    }

  }, [isNotFound])

  return(
    <div className="certificate-card">
    <div className="certificate-card__image">
      <picture>
        <img src={url} width="294" height="360"></img>
      </picture>
    </div>
    <div className="certificate-card__buttons">
      <button className="btn-flat btn-flat--underlined certificate-card__button certificate-card__button--edit" type="button">
        <svg width="12" height="12" aria-hidden="true">
          <use xlinkHref="#icon-edit"></use>
        </svg><span>Изменить</span>
      </button>
      <button className="btn-flat btn-flat--underlined certificate-card__button certificate-card__button--save" type="button">
        <svg width="12" height="12" aria-hidden="true">
          <use xlinkHref="#icon-edit"></use>
        </svg><span>Сохранить</span>
      </button>
      <div className="certificate-card__controls">
        <button className="btn-icon certificate-card__control" type="button" aria-label="next">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-change"></use>
          </svg>
        </button>
        <button className="btn-icon certificate-card__control" type="button" aria-label="next">
          <svg width="14" height="16" aria-hidden="true">
            <use xlinkHref="#icon-trash"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}
