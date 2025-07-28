import Search from "../components/Search";

import Slide from "../components/Slide";
import Booking from "../components/Booking";

const Home = () => {
  return (
    <>
      <div className="p-4">
        <Search />
        <Booking />
        <Slide />
      </div>
    </>
  );
};

export default Home;
