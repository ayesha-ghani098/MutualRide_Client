import React from "react";
import { Form } from "react-bootstrap";

// need to work on
const Input = ({
  label,
  name,
  controlId,
  type,
  placeholder,
  warning,
  refa
},props) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </Form.Group>
  );
};

export default Input;
