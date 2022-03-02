import { AppStyle } from './style';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

function App() {
  return (
    <AppStyle>
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </AppStyle>
  );
}

export default App;
