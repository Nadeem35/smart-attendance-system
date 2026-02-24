import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"

const Layout = () => {
  // const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 bg-blue-400/20 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;