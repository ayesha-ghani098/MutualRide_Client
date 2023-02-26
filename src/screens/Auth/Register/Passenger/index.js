import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { registerRider } from "../../../../redux/web3/actions";
import Layout from "../../../../components/Container";
import { Heading } from "../../../../components/Text";
import { useNavigate } from "react-router-dom";

const RegisterPassenger = () => {
  const navigate = useNavigate()

  const web3 = useSelector((state) => state.web3);
  const dispatch = useDispatch();
  const initState = {
    name: "",
    email: "",
    phoneno: "",
    termsAndConditions: false,
  };
  useEffect(()=>{

    if(web3.user.isPassenger){
      navigate("/Passenger")
    }
  },[])

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState({
    name: "",
    email: "",
    phoneno: "",
    termsAndConditions: false,
  });
  const onSubmit = async (values, event) => {
   let a = await console.log("Values:::", values);
    dispatch(
      registerRider(web3.rideSharingContractObj, web3.wallet.address, values)
    );
    navigate("/passenger")
    //event.target.reset();
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
    <Layout>
      <Heading text="Registeration Form" />
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
    </Layout>
  );
};

export default RegisterPassenger;
