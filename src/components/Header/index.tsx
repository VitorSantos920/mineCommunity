import { useState } from 'react';
import { HeaderContainer } from './style';
import { List, X } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [visibility, setVisibility] = useState(false);

  const handleMenuVisibility = () => {
    setVisibility(!visibility);
  };

  const location = useLocation();

  return (
    <HeaderContainer className="header flex">
      <div className="header__brand flex">
        <img src="brand.svg" className="header__brand-img" alt="Mine Brand" />
        <a href="#" className="header__brand-text">
          Mine
        </a>
      </div>
      <nav className="header__menu--desktop">
        <ul className="header__menu-items flex">
          <li className="header__item">
            <Link to={location.pathname === '/register' ? '/' : '/register'}>
              {location.pathname === '/register' ? 'Cadastrar' : 'Entrar'}
            </Link>
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

      <nav className={`header__menu--mobile ${visibility && true}`}>
        <ul className="header__menu-items flex">
          <X size={40} weight="bold" onClick={handleMenuVisibility} />
          <li className="header__item">
            <a href="#" onClick={handleMenuVisibility}>
              Entrar
            </a>
          </li>
          <li className="header__item">
            <a href="#" onClick={handleMenuVisibility}>
              Forum
            </a>
          </li>
          <li className="header__item">
            <a href="#" onClick={handleMenuVisibility}>
              Sobre
            </a>
          </li>
          <li className="header__item">
            <a href="#" onClick={handleMenuVisibility}>
              Mojang
            </a>
          </li>
          <li className="header__item">
            <a href="#" onClick={handleMenuVisibility}>
              Perguntas
            </a>
          </li>
        </ul>
      </nav>
      <List size={40} weight="bold" onClick={handleMenuVisibility} />
    </HeaderContainer>
  );
}
