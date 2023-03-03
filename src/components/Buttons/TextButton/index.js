import React from "react";

// Styles
import styles from "./TextButton.module.css";

const PrimaryButton = ({ text, onClick, outline }) => {
  return (
    <button
      className={!outline ? styles.textBtn : styles.textBtnOutline}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
