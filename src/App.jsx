import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AdminLogin from "./Component/Admin/AdminLogin";
import StudentLogin from "./Component/Student/StudentLogin";
import TeacherLogin from "./Component/Teacher/TeacherLogin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
