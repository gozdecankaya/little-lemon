import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
