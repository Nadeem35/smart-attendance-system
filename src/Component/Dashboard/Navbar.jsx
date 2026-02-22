import React from 'react'
import amsLogo from "../../assets/amsLogo.svg";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
        <img className="w-10" src={amsLogo} alt="logo image" />

        <div className="flex items-center space-x-4">
          <h3>Nadeem (Admin)</h3>
          <button className="bg-cyan-500 text-white px-4 py-1 rounded-md">
            Profile
          </button>
        </div>
      </nav>

    </>
  )
}

export default Navbar