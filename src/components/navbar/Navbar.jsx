import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../Assets/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavData = {
    logo: {
      src: Logo,
      alt: 'Logo',
    },
    navbar: [
      {
        navitem: "Crypto Taxes",
        href: '/',
      },
      {
        navitem: "Free Tools",
        href: '/',
      },
      {
        navitem: "Resource Center",
        href: '/',
      }
    ],
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className={`${isOpen ? styles.responsive: ''}`}>
    <div className={`${styles.navbar}`}>
      <div className={styles.logo}>
        <img src={NavData.logo.src} alt={NavData.logo.alt} />
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </div>
      <div className={styles.items}>
        {NavData.navbar.map((item, index) => (
          <a key={index} href={item.href}>{item.navitem}</a>
        ))}
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
