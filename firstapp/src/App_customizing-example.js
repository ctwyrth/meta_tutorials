import './App.css';
import Nav from './components/customizing-example/Nav';
import Promo from './components/customizing-example/Promo';
import Intro1 from './components/customizing-example/Intro1';
import Intro2 from './components/customizing-example/Intro2';
import Intro3 from './components/customizing-example/Intro3';
import Footer from './components/customizing-example/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Promo />
      <div>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
