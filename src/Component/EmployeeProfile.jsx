import React from 'react'
// import attendanceBg from "../../assets/attendanceBg.jpg"
import attendanceBg from "../assets/attendanceBg.jpg"
import LogoTitle from './LogoTitle'
import { Link } from 'react-router-dom'

// API Integration (Dome):
// Employee Profile Page:
// Id
// FullName
// Age
// Mobile
// Address
// Photo
const EmployeeProfile = () => {
  return (
    <>
      <>

        <div className="min-h-screen flex items-center justify-center">
          {/* Background wrapper */}
          <div
            style={{ backgroundImage: `url(${attendanceBg})` }}
            className="bg-none bg-cover bg-center bg-no-repeat w-full min-h-screen flex items-stretch justify-center"
          >
            <div className="w-full sm:w-1/2 min-h-screen px-5 sm:px-10 py-8 bg-white/80 flex flex-col items-center sm:items-start mx-auto">

              <div className="px-10 mx-auto">
                <LogoTitle />
                <p className="font-semibold mt-1 text-(--text-gray) ">
                  Lorem ipsum dolor sit amet.
                </p>
                <h2 className="font-bold text-[18px] sm:text-xl mt-8">
                  Employee Profile page
                </h2>
                <form className="mt-5 w-full">

                  {/* FName */}
                  <label className="text-(--text-gray) font-semibold ">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g: EMP321"
                    className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                  />

                  {/* LName */}
                  <label className="text-(--text-gray) font-semibold ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g: Mohd Nadeem"
                    className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                  />

                  {/* Phone */}
                  <label className="text-(--text-gray) font-semibold ">
                    Age
                  </label>
                  <input
                    type="num"
                    placeholder="e.g: 43"
                    className="bg-(--bg-light) block w-full rounded px-3 py-2 text-sm mb-5 outline-none"
                  />

                  {/* Picture */}
                  <label className="text-(--text-gray) font-semibold ">
                    photo
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    placeholder="e.g: 43"
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

                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-(--bg-dark) hover:bg-(--bg-dark)/90 w-full text-white rounded py-2 mt-2 font-sembold cursor-pointer "
                  >
                    Siubmit
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
    </>
  )
}

export default EmployeeProfile
