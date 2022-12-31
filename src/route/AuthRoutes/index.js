import { createBrowserRouter } from "react-router-dom";

import {
  ConnectWallet,
  RegisterDriver,
  RegisterPassenger,
  UserSelection,
} from "../../screens/Auth";

export const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <ConnectWallet />,
  },
  {
    path: "user-selection",
    element: <UserSelection />,
  },
  {
    path: "register-driver",
    element: <RegisterDriver />,
  },
  {
    path: "register-passenger",
    element: <RegisterPassenger />,
  },
]);
