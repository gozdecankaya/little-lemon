import { useState } from 'react';
import hamburgerIcon from '../assets/images/hamburger.svg';
import Nav from './Nav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="layout header-section">
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="Little Lemon" width={200} />
        </div>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburgerIcon} alt="menu icon" />
        </button>
        <Nav isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
