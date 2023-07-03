interface FormLabelProps {
  text: string;
  labelFor: string;
}

export function FormLabel({ text, labelFor }: FormLabelProps) {
  return <label htmlFor={labelFor}>{text}</label>;
}
