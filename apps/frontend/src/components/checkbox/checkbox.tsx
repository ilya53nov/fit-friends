type CheckboxProps = {
  value: string;
  name: string;
  description: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function Checkbox({description, value, onChange, isChecked, name}: CheckboxProps): JSX.Element {
  return(
    <div className="btn-checkbox">
      <label>
        <input className="visually-hidden" type="checkbox" name={name} onChange={onChange} value={value} checked={isChecked}/>
        <span className="btn-checkbox__btn">{description}</span>
      </label>
    </div>
  )
}