import { useState } from "react";
import amsLogo from "../../assets/amsLogo.svg";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";


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
          <img className="w-10" src={amsLogo} alt="logo image" />

          <div className="flex items-center space-x-4">
            <h3>Nadeem (Admin)</h3>
            <button className="bg-cyan-500 text-white px-4 py-1 rounded-md">
              Profile
            </button>
          </div>
        </nav>

        <MainPage />
        <h1 className='text-center bg-black text-3xl text-green-400 p-3'>This is MainPage</h1>

      </div>

    </div >
  );
};

export default Index;

