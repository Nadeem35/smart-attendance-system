import { Link } from "react-router-dom";
import attendanceBg from "../../assets/attendanceBg.jpg"
import LogoTitle from "../LogoTitle";

const AdminLogin = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Background wrapper */}
        {/* sm:bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')] */}
        <div
          style={{ backgroundImage: `url(${attendanceBg})` }}
          className="bg-none 
           bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-stretch justify-center"
        >
          <div className="w-full sm:w-1/2 min-h-screen px-6 sm:px-10 py-8 bg-white/80 flex flex-col items-center sm:items-start mx-auto">
            <div className="px-10 mx-auto">
              <LogoTitle />
              <p className="font-normal sm:font-semibold text-base sm:text-sm mt-1 text-(--text-gray)">
                Welcome back into your Account</p>
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
                  className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm outline-none"
                />
                <p className="mb-5 pt-[-5px] text-right text-(--heading-1) hover:text-(--heading-1)/90 font-medium text-sm  ">
                  <Link to="/forgot-password">Forgot Password ?</Link>
                </p>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-(--bg-dark) hover:bg-(--bg-dark)/90 w-full text-white rounded py-2 font-sembold cursor-pointer  "
                >
                  Login
                </button>
              </form>
            </div>
            {/* <DontAccount /> */}
            <p className="my-8 text-(--text-gray) mx-auto">
              Don't have an account ?{" "}
              <span className="text-(--heading-1) hover:text-(--heading-1)/90 font-semibold">
                <Link to="/sign-up">Sign Up</Link>
              </span>
            </p>
            <p className="mx-auto">
              <Link to="/employee-profile">Employee</Link>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
