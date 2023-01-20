import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Container.module.css";

const Layout = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

export default Layout;
