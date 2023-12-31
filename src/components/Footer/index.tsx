import { FooterInformation } from '../FooterInformation';
import { FooterContainer } from './style';
import {
  Power,
  User,
  GameController,
  Vibrate,
  Baby,
} from '@phosphor-icons/react';

export function Footer() {
  return (
    <FooterContainer className="footer flex">
      <FooterInformation icon={Power} text="Jogue também offline" />
      <FooterInformation icon={User} text="67 jogadores" />
      <FooterInformation
        icon={GameController}
        text="Compatível com uso remoto"
      />
      <FooterInformation icon={Vibrate} text="Vibração no controle" />
      <FooterInformation icon={Baby} text="Permitido para menores" />
    </FooterContainer>
  );
}
