import { SyntheticEvent, useState } from 'react';

type ListboxProps = {
  name: string,
  text: string,
  description: string,
  optionItems: string[],
  className?: string,
  onOptionClick: (evt: SyntheticEvent<HTMLOptionElement>) => void;
}

export default function Listbox({text, optionItems, onOptionClick, description, className, name}: ListboxProps): JSX.Element {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleButtonClick = () => setIsListOpen(!isListOpen);

  const handleOptionClick = (evt: SyntheticEvent<HTMLOptionElement>) => {
    onOptionClick(evt);
    setIsListOpen(false);
  };

  return(
    <div className={`custom-select ${isListOpen ? 'is-open' : ''} ${!text ? 'custom-select--not-selected': ''} ${className}` }>
      <span className="custom-select__label">{description}</span>
      <div className="custom-select__placeholder">{text}</div>
      <button className="custom-select__button" type="button" aria-label="Выберите одну из опций" onClick={handleButtonClick}>
        <span className="custom-select__text">{text}</span>
        <span className="custom-select__icon">
          <svg width="15" height="6" aria-hidden="true">
            <use xlinkHref="#arrow-down"></use>
          </svg>
        </span>
      </button>
      <ul className="custom-select__list" role="listbox">
        {
          optionItems.map((item) => (
            <option
              key={item}
              value={name}
              role="listitem"
              className="custom-select__item"
              onClick={handleOptionClick}
              label={item}
            >
              {item}
            </option>
          ))
        }
      </ul>
    </div>
  )
}
