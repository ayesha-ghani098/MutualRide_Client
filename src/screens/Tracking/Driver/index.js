import React, { useState } from "react";

// Components
import AlertMessage from "../../../components/Alert";
import DriverMap from "../../../components/SharedRideScreen/DriverScreen";

const DriverTracking = () => {
  const [status, setStatus] = useState("");
  // routes bh add krdiye hyn tracking k dekhlena 
  return (
    <div>
      <DriverMap/>
      {status !== "" && <AlertMessage message={status} />}
      {/* button change krny hun tu krdena style */}
      <button>Complete</button>
    </div>
  );
};

export default DriverTracking;
