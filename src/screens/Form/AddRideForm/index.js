import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

import Sidebar from "../../../components/Sidebar";
import AddressPicker from "../../../components/AddressPicker";

const AddRide = () => {
  const initState = {
    availableseats: "",
    time: "",
    costPerKm: "",
  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values, event) => {
    console.log("Values:::", values);
    // name,image,vehicleType would be taken from user account
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
      <Sidebar />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <AddressPicker/>
        <Form.Group className="mb-3" controlId="AvailableSeats">
          <Form.Label>Available Seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter available seats"
            {...register("availableseats", {
              required: "Available seats is required",
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter time"
            {...register("time", { required: "Time is required" })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="CostPerKm">
          <Form.Label>Cost Per Km</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter cost per km"
            {...register("costPerKm", { required: "Cost per km is required" })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add a Ride
        </Button>
      </Form>
    </>
  );
};

export default AddRide;
