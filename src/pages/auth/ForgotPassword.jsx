import attendanceBg from "../../assets/attendanceBg.jpg"
import { Link } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";

const ForgotPassword = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* Background wrapper */}
        <div
          style={{ backgroundImage: `url(${attendanceBg})` }}
          // sm:bg-[url('https://agevole.in/wp-content/uploads/2023/07/wd-scaled.jpg')]
          className="bg-none 
           bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-stretch justify-center"
        >
          <div className="w-full sm:w-1/2 min-h-screen px-6 sm:px-10 py-8 bg-white/80 flex flex-col items-center sm:items-start mx-auto">
            <div className="px-10 mx-auto">
              <LogoTitle />
              <p className="font-semibold mt-1 text-(--text-gray)  ">
                Reset your password</p>
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

                {/* Button */}
                <button
                  type="submit"
                  className="bg-(--bg-dark) hover:bg-(--bg-dark)/90 w-full text-white rounded py-2 font-sembold cursor-pointer  "
                >
                  Send reset link
                </button>
                <p className="mx-auto"><Link to="/reset-password-page">Reset Link</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
