import React from "react";
import LogoTitle from "../LogoTitle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Background wrapper */}
      <div
        className="
          bg-none 
          sm:bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')]
          bg-cover bg-center bg-no-repeat
          w-full min-h-screen
          flx items-center justify-center
        "
      >
        {/* Content box */}
        <div
          className="
            w-full sm:w-1/2
            min-h-screen sm:min-h-fit
            px-6 sm:px-10 py-12
            bg-white/80
            fle flex-col
            items-center sm:items-start
          "
        >
          <LogoTitle />

          <div className="my-10">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl">
              Login As
            </h1>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis unde architecto minima.
            </p>
          </div>

          <div className="w-[50%] sm:w-fit mx-auto text-center">
            <Link
              to="/admin-login"
              className="text-center bg-gray-300 hover:bg-blue-600 hover:text-white block px-8 sm:px-15 py-1 rounded"
            >
              Admin
            </Link>
            <Link
              to="/teacher-login"
              className="text-center bg-gray-300 hover:bg-blue-600 hover:text-white block px-8 sm:px-15 py-1 rounded my-4"
            >
              Teacher
            </Link>
            <Link
              to="/student-login"
              className="text-center bg-gray-300 hover:bg-blue-600 hover:text-white block px-8 sm:px-15 py-1 rounded"
            >
              Student
            </Link>
          </div>
          {/* <DontAccount /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
