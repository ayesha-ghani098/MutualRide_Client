import React from "react";

import styles from "../profile.module.css";

const InfoItem = ({ label, value }) => {
  return (
    <div className={styles.userItem}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default InfoItem;
