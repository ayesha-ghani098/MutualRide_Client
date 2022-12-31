import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const RegisterDriver = () => {
  const initState = {
    name: "",
    email: "",
    cnic: "",
    phoneno: "",
    model: "",
    brand: "",
    issuanceno: "",
    drivinglicenseno: "",
    companyname: "",
    companyaddress: "",
    companyphoneno: "",
    termsAndConditions: false,
  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = useState(initState);

  const onSubmit = (values, event) => {
    console.log("Values::", values);

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
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* Personal Information */}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          {...register("name", { required: "Name is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: "Email is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cnic">
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

      {/* Vehicle Information */}

      <Form.Group className="mb-3" controlId="Model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter model"
          {...register("model", { required: "Model is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter brand"
          {...register("brand", { required: "Brand is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="IssuanceNo">
        <Form.Label>Issuance no</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Issuance no"
          {...register("issuanceno", { required: "Issuance no is required" })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="DrivingLicenseNo">
        <Form.Label>Driving License No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter driving license no"
          {...register("drivinglicenseno", {
            required: "Driving license no is required",
          })}
        />
      </Form.Group>

      {/* Work Experience */}

      <Form.Group className="mb-3" controlId="CompanyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Company Name"
          {...register("companyname")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="CompanyAddress">
        <Form.Label>Company Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter company address"
          {...register("companyaddress", {
            required: "Company address is required",
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="CompanyPhoneNo">
        <Form.Label>Company Phone No</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter company phone no"
          {...register("companyphoneno", {
            required: "Company phone no is required",
          })}
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

export default RegisterDriver;
