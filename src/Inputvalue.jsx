import { useState } from "react";

function Inputvalue() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default Inputvalue