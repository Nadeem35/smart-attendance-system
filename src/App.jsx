import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/Account/SignUp";
import ForgotPassword from "./Component/Account/ForgotPassword";
import LoginAccount from "./Component/Account/LoginAccount";
import ResetPasswordPage from "./Component/Account/ResetPasswordPage";

import Layout from "./Component/Dashboard/Layout";
import MainPage from "./Component/Dashboard/MainPage";
import Class from "./Component/Dashboard/Class";
import Teacher from "./Component/Dashboard/Teacher";
import Subject from "./Component/Dashboard/Subject";

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
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="class" element={<Class />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="subject" element={<Subject />} />
      </Route>
    </Routes>
  );
};

export default App;

