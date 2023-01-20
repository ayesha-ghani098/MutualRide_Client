import React from "react";

import styles from "./Heading.module.css";

const HeadingText = ({ text }) => {
  return <h3 className={styles.heading}>{text}</h3>;
};

export default HeadingText;
