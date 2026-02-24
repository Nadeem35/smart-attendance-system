import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-56"} 
      h-full overflow-y-auto bg-white p-4 transition-all duration-300`}
    >

      {/* Sidebar Header */}
      <div className={`flex items-center mb-6 ${collapsed ? "justify-center" : "justify-between"
        }`}>
        {!collapsed && (
          <h2 className="text-lg font-bold">Dashboard</h2>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-3xl cursor-pointer"
        >
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-2">

        {/* Dashboard */}
        <li>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `flex items-center w-full p-2 rounded 
              hover:bg-blue-400/20 transition-all duration-200
              ${collapsed ? "justify-center" : ""}
              ${isActive ? "bg-blue-500/20 text-blue-600 " : ""}`
            }
          >
            <span className="material-symbols-outlined">
              dashboard
            </span>
            {!collapsed && <span className="ml-1">Dashboard</span>}
          </NavLink>
        </li>

        {/* Class */}
        <li>
          <NavLink
            to="class"
            className={({ isActive }) =>
              `flex items-center w-full p-2 rounded 
              hover:bg-blue-400/20 transition-all duration-200
              ${collapsed ? "justify-center" : ""}
              ${isActive ? "bg-blue-500/20 text-blue-600 " : ""}`
            }
          >
            <span className="material-symbols-outlined">
              format_list_bulleted_add
            </span>
            {!collapsed && <span className="ml-1">Class List</span>}
          </NavLink>
        </li>

        {/* Teacher */}
        <li>
          <NavLink
            to="teacher"
            className={({ isActive }) =>
              `flex items-center w-full p-2 rounded 
              hover:bg-blue-400/20 transition-all duration-200
              ${collapsed ? "justify-center" : ""}
              ${isActive ? "bg-blue-500/20 text-blue-600 " : ""}`
            }
          >
            <span className="material-symbols-outlined">
              person
            </span>
            {!collapsed && <span className="ml-1">Teacher List</span>}
          </NavLink>
        </li>

        {/* Subject */}
        <li>
          <NavLink
            to="subject"
            className={({ isActive }) =>
              `flex items-center w-full p-2 rounded 
              hover:bg-blue-400/20 transition-all duration-200
              ${collapsed ? "justify-center" : ""}
              ${isActive ? "bg-blue-500/20 text-blue-600 " : ""}`
            }
          >
            <span className="material-symbols-outlined">
              book
            </span>
            {!collapsed && <span className="ml-1">Subject List</span>}
          </NavLink>
        </li>

      </ul>
    </aside>
  )
}

export default Sidebar