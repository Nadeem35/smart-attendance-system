import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${collapsed ? "w-20" : "w-56"
          } bg-white p-4 transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center text-center justify-between mb-6">
          {!collapsed && (
            <h2 className="text-lg font-bold">Dashboard</h2>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-3xl text-center cursor-pointer"
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-3">

          {/* Dashboard */}
          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 ${collapsed ? "justify-center" : ""}`}>
            <NavLink to="" end className="flex items-center w-full">
              <span className="material-symbols-outlined">
                dashboard
              </span>
              {!collapsed && "Dashboard"}
            </NavLink>
          </li>

          {/* Class */}
          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 ${collapsed ? "justify-center" : ""}`}>
            <NavLink to="class" className="flex items-center w-full">
              <span className="material-symbols-outlined">
                format_list_bulleted_add
              </span>
              {!collapsed && "Class List"}
            </NavLink>
          </li>

          {/* Teacher */}
          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 ${collapsed ? "justify-center" : ""}`}>
            <NavLink to="teacher" className="flex items-center w-full">
              <span className="material-symbols-outlined">
                person
              </span>
              {!collapsed && "Teacher List"}
            </NavLink>
          </li>

          {/* Subject */}
          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 ${collapsed ? "justify-center" : ""}`}>
            <NavLink to="subject" className="flex items-center w-full">
              <span className="material-symbols-outlined">
                book
              </span>
              {!collapsed && "Subject List"}
            </NavLink>
          </li>

        </ul>
      </aside>

    </>
  )
}

export default Sidebar