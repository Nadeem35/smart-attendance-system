import React from "react";
import attendanceBg from "../../assets/attendanceBg.jpg"
import LogoTitle from "../LogoTitle";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>

      <div className="min-h-screen flex items-center justify-center">
        {/* Background wrapper */}
        <div
          // sm:bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')]
          style={{ backgroundImage: `url(${attendanceBg})` }}
          className="bg-none 
           bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-stretch justify-center"
        >
          <div className="w-full sm:w-1/2 min-h-screen px-5 sm:px-10 py-8 bg-white/80 flex flex-col items-center sm:items-start mx-auto">

            <div className="px-10 mx-auto">
              <LogoTitle />
              <p className="font-semibold mt-1 text-(--text-gray) ">
                Lorem ipsum dolor sit amet.
              </p>
              <h2 className="font-bold text-[18px] sm:text-xl mt-8">
                Sign Up your <span className="text-(--heading-1)">Account</span>
              </h2>
              <form className="mt-5 w-full">

                {/* FName */}
                <label className="text-(--text-gray) font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g: Mohd"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />

                {/* LName */}
                <label className="text-(--text-gray) font-semibold ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g: Nadeem"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />

                {/* Phone */}
                <label className="text-(--text-gray) font-semibold ">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="e.g: 9876543210"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />

                <label className="text-(--text-gray) font-semibold ">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="e.g: aarfeen@gmail.com"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />

                {/* Password */}
                <label className="text-(--text-gray) font-semibold ">
                  Create Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
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
            <p className="my-8 text-(--text-gray) mx-auto">
              Already have an account ?{" "}
              <span className="text-(--heading-1) hover:text-(--heading-1)/90 font-semibold">
                <Link to="/login-account">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
