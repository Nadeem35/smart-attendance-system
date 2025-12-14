import React, { useState } from "react";

const SelfMap = () => {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <div
        className={`h-32 w-32 border-2 mx-auto mt-10 "
        ${theme ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <h1>Theme switching</h1>
      </div>
      <button onClick={() => setTheme(!theme)} className="border-2 px-5">
        {theme ? "Dark 🌙" : "Light 🌞"}
      </button>
    </>
  );
};

export default SelfMap;

// style={{
//   backgroundColor: theme ? "black" : "white",
//   color: theme ? "White" : "black",
// }}
