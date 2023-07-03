import { LabelContainer } from './style';

interface FormLabelProps {
  labelFor: string;
  text: string;
}

export function FormLabel({ text, labelFor }: FormLabelProps) {
  return <LabelContainer htmlFor={labelFor}>{text}</LabelContainer>;
}
