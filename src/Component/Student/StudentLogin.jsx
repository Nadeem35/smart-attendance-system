import React from "react";
import student from "../../assets/student.png";

const StudentLogin = () => {
  return (
    <>
      <img src={student} alt="Teacher" className="mx-auto w-lg mt-10" />
      <h1 className="font-extrabold text-center">This is Student page</h1>
    </>
  );
};

export default StudentLogin;
