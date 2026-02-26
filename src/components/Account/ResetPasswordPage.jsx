import attendanceBg from "../../assets/attendanceBg.jpg"
import { Link } from "react-router-dom";
import LogoTitle from "../LogoTitle";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Background wrapper */}
        <div
          style={{ backgroundImage: `url(${attendanceBg})` }}

          className="bg-none 
           bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-stretch justify-center"
        >
          <div className="w-full sm:w-1/2 min-h-screen px-6 sm:px-10 py-8 bg-white/80 flex flex-col items-center sm:items-start mx-auto">
            <div className="px-10 mx-auto">
              <LogoTitle />
              <form className="mt-10 w-full">
                {/* Email */}
                <label className="text-(--text-gray) font-semibold  ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="e.g: aarfeen@gmail.com"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                />
                {/* Password */}
                <label className="text-(--text-gray) font-semibold  ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 mb-5 text-sm outline-none"
                />

                {/* Password */}
                <label className="text-(--text-gray) font-semibold  ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 mb-6 text-sm outline-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="bg-(--bg-dark) hover:bg-(--bg-dark)/90 w-full text-white rounded py-2 font-sembold cursor-pointer  "
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
