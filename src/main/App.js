import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { AppStyle } from './style';

import Routes from './Routes';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

function App() {
  return (
      <AppStyle>
        <BrowserRouter>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </BrowserRouter>
      </AppStyle>
  );
}

export default App;
