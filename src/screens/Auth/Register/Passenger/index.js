import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const RegisterPassenger = () => {
  const initState = {
    name: "",
    email: "",
    cnic: "",
    phoneno: "",
    termsAndConditions: false,
  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values, event) => {
    console.log("Values:::", values);

    event.target.reset();
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    // getValues,
    // watch,
    // formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          {...register("name", { required: "Name is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: "Email is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Cnic">
        <Form.Label>CNIC</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter cnic"
          {...register("cnic", { required: "Cnic is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Phoneno">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone no"
          {...register("phoneno", { required: "Phone no is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Checkbox">
        <Form.Check
          type="checkbox"
          label="I would like to receive your newsletter and other promotional information."
          {...register("termsAndConditions", { required: "Required" })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterPassenger;
