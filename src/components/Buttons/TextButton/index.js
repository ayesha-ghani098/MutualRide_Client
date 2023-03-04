import React from "react";

// Styles
import styles from "./TextButton.module.css";

const PrimaryButton = ({ text, onClick, outline,disabled }) => {
  return (
    <button
      className={!outline ? styles.textBtn : styles.textBtnOutline}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
