import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

import Footer from "./Footer";
const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
     
      </header>

      <main className="min-h-screen">
        <Outlet /> 
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout; 
