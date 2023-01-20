import React from "react";
import { Button } from "react-bootstrap";

import styles from "./TextButton.module.css";

const PrimaryButton = ({ text, onClick, outline }) => {
  return (
    <Button
      className={styles.textBtn}
      onClick={onClick}
      variant={outline ? "outline-primary" : "primary"}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
