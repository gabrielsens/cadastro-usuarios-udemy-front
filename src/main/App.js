import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { AppStyle } from './style';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Home from '../components/Pages/Home';
import Footer from '../components/template/Footer';

function App() {
  return (
    <AppStyle>
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </AppStyle>
  );
}

export default App;
