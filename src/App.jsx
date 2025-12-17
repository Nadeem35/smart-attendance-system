import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from "./Component/Home/Home";
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
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* <Route path="/Home" element={<Home />} /> */}
        {/* <Route path="/teacher-login" element={<TeacherLogin />} /> */}
        {/* <Route path="/student-login" element={<StudentLogin />} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
