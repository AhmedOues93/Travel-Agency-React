import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destinations from "./pages/Destinations";
import DestinationsDetails from "./pages/DestinationsDetails";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destinations" element={<Destinations />} />
          {}
          <Route path="destinations/:slug" element={<DestinationsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;