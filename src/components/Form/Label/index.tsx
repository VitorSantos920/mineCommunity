import { LabelContainer } from './style';

interface FormLabelProps {
  text: string;
  labelFor: string;
}

export function FormLabel({ text, labelFor }: FormLabelProps) {
  return <LabelContainer htmlFor={labelFor}>{text}</LabelContainer>;
}
