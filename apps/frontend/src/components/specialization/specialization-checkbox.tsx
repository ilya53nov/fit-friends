type SpecializationCheckboxProps = {
  value: string;
  description: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function SpecializationCheckbox({description, value, onChange, isChecked}: SpecializationCheckboxProps): JSX.Element {
  return(
    <div className="btn-checkbox">
      <label>
        <input className="visually-hidden" type="checkbox" name="specialisation" onChange={onChange} value={value} checked={isChecked}/>
        <span className="btn-checkbox__btn">{description}</span>
      </label>
    </div>
  )
}
