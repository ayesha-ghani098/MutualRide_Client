import React from "react";
import { Alert } from "bootstrap";

const AlertMessage = ({ message }) => {
  return <Alert variant="primary">{message}</Alert>;
};

export default AlertMessage;
