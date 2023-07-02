import { ElementType } from 'react';

interface FooterInformationProps {
  icon: ElementType;
  text: string;
}

export function FooterInformation({
  icon: Icon,
  text,
}: FooterInformationProps) {
  return (
    <div className="footer__information">
      <Icon size={28} weight="bold" />
      <p className="footer__information-text">{text}</p>
    </div>
  );
}
