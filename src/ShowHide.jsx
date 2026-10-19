import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello! Welcome to React.</p>}
    </div>
  );
}

export default ShowHide;