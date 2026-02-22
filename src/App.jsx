import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/Account/SignUp";
import ForgotPassword from "./Component/Account/ForgotPassword";
import LoginAccount from "./Component/Account/LoginAccount";
import ResetPasswordPage from "./Component/Account/ResetPasswordPage";
import EmployeeProfile1 from "./Component/EmployeeProfile1";
import EmployeeProfile2 from "./Component/EmployeeProfile2";
import Index from "./Component/Dashboard/Index";
import Class from "./Component/Dashboard/Class";
import Teacher from "./Component/Dashboard/Teacher";
import Subject from "./Component/Dashboard/Subject";

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
        {/* <Route path="/employee-profile1" element={<EmployeeProfile1 />} /> */}
        {/* <Route path="/employee-profile2" element={<EmployeeProfile2 />} /> */}

        {/* DashBoard Pages */}
        <Route index element={<Index />} />
        <Route path="class" element={<Class />} />
        <Route path="subject" element={<Subject />} />
        <Route path="teacher" element={<Teacher />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
