import React, { useState } from "react";
import amsLogo from "../../assets/amsLogo.svg";
import { Link } from "react-router-dom";


const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside
        className={`${collapsed ? "w-20" : "w-56"
          } bg-white p-4 transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h2 className="text-lg font-bold">Dashboard</h2>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-3xl hover:cursor-pointer"
          >
            <span className="ml-3 material-symbols-outlined">
              menu
            </span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-3 mx-auto">
          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/Index" className="flex">
              <span className="material-symbols-outlined mr-2">
                dashboard
              </span>
              {!collapsed && "Dashboard"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/Class" className="flex">
              <span className="material-symbols-outlined mr-2">
                format_list_bulleted_add
              </span>
              {!collapsed && "Class List"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/Subject" className="flex">
              <span className="material-symbols-outlined mr-2">
                topic
              </span>
              {!collapsed && "Subject List"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/Teacher" className="flex">
              <span className="material-symbols-outlined mr-2">
                account_circle
              </span>
              {!collapsed && "Teacher List"}
            </Link>
          </li>
        </ul>
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
          <img className="w-10" src={amsLogo} alt="" />

          <div className="flex items-center space-x-4">
            <h3>Aarfeen (Admin)</h3>
            <button className="bg-cyan-500 text-white px-4 py-1 rounded-md">
              Profile
            </button>
          </div>
        </nav>


        {/* Main Content */}
        <main className="flex-1 bg-blue-400/20 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* Card-1 */}
            <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition bg-linear-to-r from-indigo-400 to-indigo-200">
              <div className="w-1/2 ">
                <h3 className='font-semibold'> <span className='font-mono text-4xl'>11</span></h3>
                <p className='uppercase mt-3'>Classes</p>
              </div>
              <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
                <span className="text-indigo-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                  library_books
                </span>
              </div>
            </div>

            {/* Card-2 */}
            <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition bg-linear-to-r from-emerald-400 to-emerald-200">
              <div className="w-1/2 ">
                <h3 className='font-semibold'> <span className='font-mono text-4xl'>43</span></h3>
                <p className='uppercase mt-3'>Teachers</p>
              </div>
              <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
                <span className="text-emerald-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                  person_add
                </span>
              </div>
            </div>

            {/* Card-3 */}
            <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition bg-linear-to-r from-orange-400 to-orange-200">
              <div className="w-1/2 ">
                <h3 className='font-semibold'> <span className='font-mono text-4xl'>31</span></h3>
                <p className='uppercase mt-3'>Subjects</p>
              </div>
              <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
                <span className="text-orange-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                  dictionary
                </span>
              </div>
            </div>





          </div>
        </main>

      </div>
    </div >
  );
};

export default Index;

