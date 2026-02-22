import { useState } from 'react'
import { Link } from 'react-router-dom';

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
            <Link to="/index" className="flex">
              <span className="material-symbols-outlined mr-2">
                dashboard
              </span>
              {!collapsed && "Dashboard"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/class" className="flex">
              <span className="material-symbols-outlined mr-2">
                format_list_bulleted_add
              </span>
              {!collapsed && "Class List"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/teacher" className="flex">
              <span className="material-symbols-outlined mr-2">
                topic
              </span>
              {!collapsed && "Subject List"}
            </Link>
          </li>

          <li className={`flex items-center p-2 rounded hover:bg-blue-400/20 cursor-pointer ${collapsed ? "justify-center" : ""}`}>
            <Link to="/subject" className="flex">
              <span className="material-symbols-outlined mr-2">
                account_circle
              </span>
              {!collapsed && "Teacher List"}
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar