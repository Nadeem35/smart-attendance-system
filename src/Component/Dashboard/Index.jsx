import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const Index = () => {

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* This is where pages change */}
        <MainPage />



      </div>

    </div >
  );
};

export default Index;

