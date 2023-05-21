import { ChangeEvent } from 'react';

type ToggleRadioProps = {
  name: string;
  description: string;
  isChecked: boolean;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleRadio({description, isChecked, name, onChange, value}: ToggleRadioProps): JSX.Element {
  return(
  <div className="custom-toggle-radio__block">
    <label>
      <input type="radio" name={name} checked={isChecked} value={value} onChange={onChange}/>
      <span className="custom-toggle-radio__icon"></span>
      <span className="custom-toggle-radio__label">{description}</span>
    </label>
  </div>
  )
}

