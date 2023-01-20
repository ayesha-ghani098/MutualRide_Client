import React from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";

const RequestRide = (props) => {
  // will display these props in passenger request form below
  // extract rideId from here
  const [searchparams] = useSearchParams();
  console.log("aya data", searchparams.get("driverId"));

  const initState = {
    requiredseats: "",
  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values, event) => {
    console.log("Values:::", values);
    // name,image would be taken from user account
    // source and destination would be taken from maps work
    // source:{latitude:"",longitude:""}
    // destination:{latitude:"",longitude:""}
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
    <>
      <Layout>
        <Heading text="Request a Ride" />
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3" controlId="RequiredSeats">
            <Form.Label>Required Seats</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter required seats"
              {...register("requiredseats", {
                required: "required seats is required",
              })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Request a Ride
          </Button>
        </Form>
      </Layout>
    </>
  );
};

export default RequestRide;
