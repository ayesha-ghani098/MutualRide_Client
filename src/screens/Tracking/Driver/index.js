import React, { useState } from "react";

// Components
import AlertMessage from "../../../components/Alert";

const DriverTracking = () => {
  const [status, setStatus] = useState("");
  // routes bh add krdiye hyn tracking k dekhlena 
  return (
    <div>
      {status !== "" && <AlertMessage message={status} />}
      {/* button change krny hun tu krdena style */}
      <button>Complete</button>
    </div>
  );
};

export default DriverTracking;
