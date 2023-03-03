import React from 'react';

import styles from "./text.module.css"

const index = ({text}) => {
  return (
    <p className={styles.text}>{text}</p>
  )
}

export default index