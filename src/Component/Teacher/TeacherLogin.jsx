import React from "react";
import teacherImg from "../../assets/teacherImg.png";

const TeacherLogin = () => {
  return (
    <>
      <img src={teacherImg} alt="Teacher" className="mx-auto w-lg mt-10" />
      <h1 className="font-extrabold text-center mt-4">This is Teacher page</h1>
    </>
  );
};

export default TeacherLogin;
