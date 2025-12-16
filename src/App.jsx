import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AdminLogin from "./Component/Admin/AdminLogin";
import StudentLogin from "./Component/Student/StudentLogin";
import TeacherLogin from "./Component/Teacher/TeacherLogin";
import SignUp from "./Component/Account/SignUp";
import ForgotPassword from "./Component/Account/ForgotPassword";
import LoginAccount from "./Component/Account/LoginAccount";
import ResetPasswordPage from "./Component/Account/ResetPasswordPage";

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<LoginAccount />} /> {/*---- Home page ----*/}
        <Route path="/sign-up" element={<SignUp />} />{/*---- SignUp page ----*/}
        <Route path="/login-account" element={<LoginAccount />} /> {/*---- Home page ----*/}
        <Route path="/reset-password-page" element={<ResetPasswordPage />} /> {/*---- Home page ----*/}

        <Route path="/Home" element={<Home />} />
        {/* <Route path="/" element={<AdminLogin />} /> ---- Home page ---- */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        {/* <Route path="/admin-sign-up" element={<AdminSignUp />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
