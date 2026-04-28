import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburgerIcon from "../assets/images/hamburger.svg";
import Nav from './Nav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="layout">
      <div className="container">
        <img src={logo} alt="logo" width={200} />
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburgerIcon} alt='menu icon' />
        </button>
        <Nav isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
