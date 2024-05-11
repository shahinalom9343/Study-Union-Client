import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="font-nunito">
      <div className="max-w-[1200px] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-340px)] max-w-[1200px] mx-auto my-2">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
