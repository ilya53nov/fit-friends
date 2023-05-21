import Checkbox from './checkbox';

type SpecializationCheckboxProps = {
  value: string;
  description: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function SpecializationCheckbox({description, value, onChange, isChecked}: SpecializationCheckboxProps): JSX.Element {
  const checkBoxName = "specialisation";

  return(
    <Checkbox description={description} isChecked={isChecked} name={checkBoxName} onChange={onChange} value={value}/>
  )
}
