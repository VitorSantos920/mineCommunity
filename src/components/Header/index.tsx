import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer className="header flex">
      <div className="header__brand flex">
        <img src="brand.svg" className="header__brand-img" alt="Mine Brand" />
        <a href="#" className="header__brand-text">
          Mine
        </a>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-items flex">
          <li className="header__item">
            <a href="#">Entrar</a>
          </li>
          <li className="header__item">
            <a href="#">Forum</a>
          </li>
          <li className="header__item">
            <a href="#">Sobre</a>
          </li>
          <li className="header__item">
            <a href="#">Mojang</a>
          </li>
          <li className="header__item">
            <a href="#">Perguntas</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
