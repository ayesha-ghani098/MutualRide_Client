import React from "react";
import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";

// Routers
import { authRouter } from "./route/AuthRoutes";
import { appRouter } from "./route/AppRoutes";

// Components
import Sidebar from "./components/Sidebar";

// Temporary
const web3 = false;
const user = false;

const App = () => {
  const router = appRouter();
  return web3 === false || user === false ? (
    <>
      <Container fluid className="app-container">
        <RouterProvider router={authRouter} />
      </Container>
    </>
  ) : (
    <>
      <Sidebar />
      <Container className="app-container">
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default App;
