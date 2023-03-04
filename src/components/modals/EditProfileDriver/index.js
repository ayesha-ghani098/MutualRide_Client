import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Modal } from "react-bootstrap";

// Components
import { Heading2 } from "../../Text/Heading";

const EditProfile = ({show,onHide}) => {
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = useState({
    name: "ASFAR",
    email: "A@B.COM",
    cnic: "122121212",
    phoneno: "121212",
    regno: "2121",
    model: "SDSD",
    licenceNo: "1223232",
  });

  const onSubmit = async (values, event) => {
   onHide()
  };

  const onError = (error) => {};

  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });

  return (
    <Modal
    show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Heading2 text="Edit Profile" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

          {/* <Form.Group className="mb-3" controlId="DrivingLicenseNo">
        <Form.Label>Driving License No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter driving license no"
          {...register("drivinglicenseno", {
            required: "Driving license no is required",
          })}
        />
      </Form.Group> */}

          {/* Work Experience */}

          <Form.Group className="mb-3" controlId="regno">
            <Form.Label>Registration No.</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Resigstration no."
              {...register("regno", {
                required: "registration no is required",
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="licenceNo">
            <Form.Label>License No.</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter licence no."
              {...register("licenceNo", {
                required: "licence no is required",
              })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfile;
