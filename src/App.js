import './App.css';
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
    </div>
  );
}

export default App;
