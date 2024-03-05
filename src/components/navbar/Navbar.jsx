import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Assets/Logo.svg'
const Navbar = () => {

  const NavData = {
    logo :{ 
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
  
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={NavData.logo.src} alt={NavData.logo.alt} />
      </div>
      <div className={styles.items}>
        {NavData.navbar.map((item, index) => {
          return (
            <a key={index} href={item.href}>
              {item.navitem}
            </a>
          )})}
          <button className={styles.button}>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar