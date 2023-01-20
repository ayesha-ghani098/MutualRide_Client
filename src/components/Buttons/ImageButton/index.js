import React from 'react'

import styles from "./ImageButton.module.css";

const ImageButton = ({src,label,onClick}) => {
  return (
    <div className={styles.imgButton} onClick={onClick}>
        <img src={src} alt="Button img"/>
        <div>{label}</div>
    </div>
  )
}

export default ImageButton