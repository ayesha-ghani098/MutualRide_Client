import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { requestRide } from "../../../redux/web3/actions";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";
import { useDispatch, useSelector } from "react-redux";

const RequestRide = (props) => {
  // will display these props in passenger request form below
  // extract rideId from here
 // let { rideId } = useParams();

  const [searchparams] = useSearchParams();
  console.log("aya data", searchparams.get("rideId"));
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const web3 = useSelector(state=>state.web3)
  const initState = {
    requiredseats: "",
  };
  console.log(web3)

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit =  async (values, event) => {
    console.log("Values:::", values);
   const tx = await web3.rideSharingContractObj.methods.joinRide(searchparams.get("rideId"),web3.user.riderinfo.id).send({from:web3.wallet.address})
     console.log(tx);
    //joinRide(uint rideId, uint riderId)
    // name,image would be taken from user account
    // source and destination would be taken from maps work
    // source:{latitude:"",longitude:""}
    // destination:{latitude:"",longitude:""}
    event.target.reset();
    navigate("/passenger")

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
            Join this Ride
          </Button>
        </Form>
      </Layout>
    </>
  );
};

export default RequestRide;
