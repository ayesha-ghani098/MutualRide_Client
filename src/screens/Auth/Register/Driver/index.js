import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { registerDriver } from "../../../../redux/web3/actions";
import Layout from "../../../../components/Container";
import { Heading } from "../../../../components/Text";
import { useNavigate } from "react-router-dom";

const RegisterDriver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const web3 = useSelector((state) => state.web3);
  const initState = {
    name: "ASFAR",
    email: "A@B.COM",
    cnic: "122121212",
    phoneno: "121212",
    regno: "2121",
    model: "SDSD",
    licenceNo: "1223232",
  };

  console.log(web3);
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
    useEffect(()=>{

      if(web3.user.isDriver){
        navigate("/Driver")
      }
    },[])
  const onSubmit = async (values, event) => {
    console.log("Values::", values);
   let a = await dispatch(
      registerDriver(web3.rideSharingContractObj, web3.wallet.address, values)
    );
    // event.target.reset();
    navigate("/driver")
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
    <Layout>
      <Heading text="Registeration Form" />
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
    </Layout>
  );
};

export default RegisterDriver;
