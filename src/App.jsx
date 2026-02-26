import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Account/SignUp";
import ForgotPassword from "./components/Account/ForgotPassword";
import LoginAccount from "./components/Account/LoginAccount";
import ResetPasswordPage from "./components/Account/ResetPasswordPage";

import Layout from "./components/Dashboard/Layout";
import MainPage from "./components/Dashboard/MainPage";
import Class from "./components/Dashboard/Class";
import Teacher from "./components/Dashboard/Teacher";
import Subject from "./components/Dashboard/Subject";

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

