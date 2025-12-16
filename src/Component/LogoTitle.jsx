import React from "react";
import amsLogo from "../assets/amsLogo.svg"

const LogoTitle = () => {
  return (
    <>
      <img
        src={amsLogo}
        alt="logo"
        className="mx-auto my-3 w-20"
      />
      <h1 className="font-bold text-3xl text-(--heading-1)">Welcome to AMS</h1>
    </>
  );
};

export default LogoTitle;
