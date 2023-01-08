import React from "react";
import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";

// Routers
import { appRouter } from "./route/AppRoutes";

// Components
import Sidebar from "./components/Sidebar";
import web3Ins from "./utils/web3";

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
