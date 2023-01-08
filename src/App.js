import React from "react";
import { RouterProvider } from "react-router-dom";

// Routers
import { appRouter } from "./route/AppRoutes";

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
