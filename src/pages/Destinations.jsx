// src/pages/Destinations.jsx
import DestinationCard from "../components/DestinationCard";
import { Link } from "react-router-dom";

const destinations = [
  {
    slug: "london",
    title: "London",
    image: "/london.jpg",
    description: "Explore the romantic city of lights.",
  },
  {
    slug: "tokyo",
    title: "Tokyo",
    image: "/tokyo.jpg",
    description: "Discover modern tech and ancient temples.",
  },
  {
    slug: "tunis",
    title: "Tunis",
    image: "/tunis.jpg",
    description: "Discover modern tech and ancient temples.",
  },
  {
    slug: "barcelone",
    title: "Barcelone",
    image: "/spain.jpg",
    description: "Discover modern tech and ancient temples.",
  },
  {
    slug: "new-york",
    title: "New York",
    image: "/newyork.jpg",
    description: "Discover modern tech and ancient temples.",
  },
  {
    slug: "rome",
    title: "Rome",
    image: "/rome.jpg",
    description: "Discover modern tech and ancient temples.",
  },
];

const Destinations = () => {
  return (
    <div className="p-4">
      <h1 className="text-5xl text-center mt-15 mb-20 font-bold mb-4">Our Destinations</h1>
      <div className="grid grid-cols-3 md:grid-cols gap-2">
        {destinations.map((dest, index) => (
          <Link to={`/destinations/${dest.slug}`} key={index}>
            <DestinationCard
              title={dest.title}
              image={dest.image}
              description={dest.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
