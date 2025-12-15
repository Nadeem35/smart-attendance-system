import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AdminLogin from "./Component/Admin/AdminLogin";
import StudentLogin from "./Component/Student/StudentLogin";
import TeacherLogin from "./Component/Teacher/TeacherLogin";
import Forgot from "./Component/Account/Forgot";
import AdminSignUp from "./Component/Admin/AdminSignUp";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
