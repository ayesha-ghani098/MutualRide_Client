import React from "react";

import styles from "./Heading.module.css";

export const HeadingText = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};

export const Heading2 = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};

