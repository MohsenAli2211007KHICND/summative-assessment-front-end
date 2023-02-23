import React from 'react'
import styles from './Navbar.module.css'
import logo from './Logo.png'

export default function Navbar() {
  return (
    <div className={styles.navBar}>
    <div className={styles.navContainer}>
      <img src={logo} alt="" style={{borderRadius: '85px'}} />
    </div>
    </div>
  )
}
