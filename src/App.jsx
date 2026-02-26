import { Route, Routes } from "react-router-dom";
import SignUp from "./component/Account/SignUp";
import ForgotPassword from "./component/Account/ForgotPassword";
import LoginAccount from "./component/Account/LoginAccount";
import ResetPasswordPage from "./component/Account/ResetPasswordPage";

import Layout from "./component/Dashboard/Layout";
import MainPage from "./component/Dashboard/MainPage";
import Class from "./component/Dashboard/Class";
import Teacher from "./component/Dashboard/Teacher";
import Subject from "./component/Dashboard/Subject";

const App = () => {
  return (
    <Routes>
      {/* Authentication Pages */}
      <Route path="/" element={<LoginAccount />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login-account" element={<LoginAccount />} />
      <Route path="/reset-password-page" element={<ResetPasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard with Nested Routes */}
      <Route path="layout" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="class" element={<Class />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="subject" element={<Subject />} />
      </Route>
    </Routes>
  );
};

export default App;

