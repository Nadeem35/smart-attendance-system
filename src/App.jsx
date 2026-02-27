import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LoginAccount from "./pages/auth/LoginAccount";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

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

