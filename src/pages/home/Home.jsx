import React from "react";
import LogoTitle from "../../components/LogoTitle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center">
      {/* Background wrapper */}
      <div
        className="bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')]
          bg-cover bg-center bg-no-repeat w-full min-h-screen flx items-center justify-center"
      >
        {/* Content box */}
        <div className="w-full sm:w-1/2 min-h-screen sm:min-h-fit px-6 sm:px-10 py-12 bg-white/50 flex-col items-center sm:items-start">
          <div className="w-fit mx-auto text-center">
            <LogoTitle />
          </div>
          <div className="my-10 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl">Login As</h1>
            <p className="mt-3 text-(--text-gray)">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis unde architecto minima.
            </p>
          </div>

          <div className="w-[50%] sm:w-fit mx-auto text-center">
            <Link
              to="/admin-login"
              className="text-center bg-(--bg-light) hover:bg-(--bg-dark) hover:text-white block px-8 sm:px-15 py-1 rounded"
            >
              Admin
            </Link>
            <Link
              to="/teacher-login"
              className="text-center bg-(--bg-light) hover:bg-(--bg-dark) hover:text-white block px-8 sm:px-15 py-1 rounded my-4"
            >
              Teacher
            </Link>
            <Link
              to="/student-login"
              className="text-center bg-(--bg-light) hover:bg-(--bg-dark) hover:text-white block px-8 sm:px-15 py-1 rounded"
            >
              Student
            </Link>
          </div>
          {/* <DontAccount /> */}
          <p className="my-10 text-(--text-gray) text-center">
            Don't have an account ?{" "}
            <span className="text-(--heading-1) font-semibold">
              <Link to="/SignUp">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
