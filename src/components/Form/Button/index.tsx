import { ButtonContainer } from './style';

interface FormButtonProps {
  text: string;
}
export default function FormButton({ text }: FormButtonProps) {
  return <ButtonContainer>{text}</ButtonContainer>;
}
