import React from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../LogoTitle";

const AdminSignUp = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Background wrapper */}
        <div
          className="bg-none sm:bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')]
          bg-cover bg-center bg-no-repeat w-full min-h-screen flx items-center justify-center"
        >
          <div className="w-full sm:w-1/2 min-h-screen sm:min-h-fit px-6 sm:px-10 py-12 bg-white/80 fle flex-col items-center sm:items-start">
            <div className="px-15">
              <LogoTitle />
              <p className="font-semibold mt-3 text-(--text-gray) ">
                Lorem ipsum dolor sit amet.
              </p>
              <h2 className="font-bold text-2xl mt-8 ">
                Sign Up as <span className="text-(--heading-1)">Admin</span>
              </h2>
              <form className="mt-5 w-full">
                {/* Email */}
                <label className="text-(--text-gray) font-semibold ">
                  Employee ID
                </label>

                <input
                  type="text"
                  name="employeeId"
                  placeholder="e.g. RF9001"
                  pattern="[A-Za-z]+[0-9]+"
                  title="Start with letters followed by numbers"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mt-2 mb-5 outline-none"
                />

                <label className="text-(--text-gray) font-semibold ">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="e.g: Mohd Nadeem"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mt-2 mb-5 outline-none"
                />

                <label className="text-(--text-gray) font-semibold ">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="e.g: aarfeen@gmail.com"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mt-2 mb-5 outline-none"
                />

                {/* Password */}
                <label className="text-(--text-gray) font-semibold ">
                  Create Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mt-2 mb-5 outline-none"
                />

                {/* Password */}
                <label className="text-(--text-gray) font-semibold ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="bg-(--bg-dark) hover:bg-(--bg-dark)/90 w-full text-white rounded py-2 mt-2 font-sembold cursor-pointer "
                >
                  Sign Up
                </button>
              </form>
            </div>
            {/* <DontAccount /> */}
            <p className="my-10 text-(--text-gray) text-center">
              Don't have an account ?{" "}
              <span className="text-(--heading-1) hover:text-(--heading-1)/90 font-semibold">
                <Link to="/admin-login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;
