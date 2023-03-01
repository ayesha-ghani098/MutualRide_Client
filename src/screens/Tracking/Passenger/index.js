import React, { useState } from "react";

const PassengerTracking = () => {
  const [status, setStatus] = useState("");

// routes bh add krdiye hyn tracking k dekhlena 
  return (
    <div>
      {status !== "" && <h1>status</h1>}
      {/* button change krny hun tu krdena style */}
      <button>Complete</button>
    </div>
  );
};

export default PassengerTracking;
