import React, { useState } from "react";

const DriverTracking = () => {
  const [status, setStatus] = useState("");
  return (
    <div>
      {status !== "" && <h1>status</h1>}
      {/* button change krny hun tu krdena style */}
      <button>Complete</button>
    </div>
  );
};

export default DriverTracking;
