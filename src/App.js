import React from "react";
import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Routers
import { authRouter } from "./route/AuthRoutes";
import { appRouter } from "./route/AppRoutes";

// Components
import Sidebar from "./components/Sidebar";
import web3Ins from "./utils/web3";

// // Temporary
// const web3 = true;
// const user = true;

const App = () => {
  const web3 =  useSelector((state)=>state.web3);
  console.log("app js..")
  const router = appRouter();
  return web3.connected === false?  (
    <>
      <Container fluid className="app-container">
        <RouterProvider router={authRouter} />
      </Container>
    </>
  ) : (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
