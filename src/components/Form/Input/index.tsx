import { InputContainer } from './style';

interface FormInputProps {
  inputType: string;
  inputPlaceholder: string;
  inputInfo: string;
  isRequired?: boolean;
}

export function FormInput({
  inputType,
  inputInfo,
  inputPlaceholder,
  isRequired = false,
}: FormInputProps) {
  return (
    <InputContainer
      type={inputType}
      name={inputInfo}
      id={inputInfo}
      placeholder={inputPlaceholder}
      required={isRequired}
    />
  );
}
