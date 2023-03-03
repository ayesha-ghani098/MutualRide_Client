import React from 'react'

import styles from "./logo.module.css"
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <div className={styles.logo} ><img src={logo} alt="Logo"/>Mutual Ride</div>
  )
}

export default Logo