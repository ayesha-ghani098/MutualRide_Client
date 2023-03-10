import React from "react";

import styles from "./alert.module.css";

const AlertMessage = ({ message }) => {
  return <div className={styles.alertMessage}>{message}</div>;
};

export default AlertMessage;
