import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/Account/SignUp";
import ForgotPassword from "./Component/Account/ForgotPassword";
import LoginAccount from "./Component/Account/LoginAccount";
import ResetPasswordPage from "./Component/Account/ResetPasswordPage";
import EmployeeProfile1 from "./Component/EmployeeProfile1";
import EmployeeProfile2 from "./Component/EmployeeProfile2";

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
        <Route path="/employee-profile1" element={<EmployeeProfile1 />} />
        <Route path="/employee-profile2" element={<EmployeeProfile2 />} />

        {/* <Route path="/Home" element={<Home />} /> */}
        {/* <Route path="/teacher-login" element={<TeacherLogin />} /> */}
        {/* <Route path="/student-login" element={<StudentLogin />} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
