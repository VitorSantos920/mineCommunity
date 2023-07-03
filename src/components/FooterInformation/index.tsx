import { ElementType } from 'react';
import { DivContainer } from './style';
interface FooterInformationProps {
  icon: ElementType;
  text: string;
}

export function FooterInformation({
  icon: Icon,
  text,
}: FooterInformationProps) {
  return (
    <DivContainer className="footer__information">
      <Icon className="footer__icon" size={28} weight="bold" />
      <p className="footer__information-text">{text}</p>
    </DivContainer>
  );
}
