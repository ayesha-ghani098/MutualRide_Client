import React from "react";

import { Button } from "react-bootstrap";
import { Highlight } from "../../Text";

const PrimaryButton = ({ text, onClick, outline }) => {
  return (
    <Button onClick={onClick} variant={outline ? "outline-primary" : "primary"}>
      <Highlight text={text} />
    </Button>
  );
};

export default PrimaryButton;
