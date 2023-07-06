import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainContainer } from './style';
import { Footer } from '../components/Footer';

export function Default() {
  return (
    <div>
      <Header />
      <MainContainer>
        <img src="brand.svg" alt="Mine Brand" />
        <Outlet />
      </MainContainer>
      <Footer />
    </div>
  );
}
