import { useParams } from "react-router-dom";

const destinations = [
  {
    slug: "london",
    title: "London",
    image: "/london.jpg",
    description: "Explore the romantic city of lights.",
    moreInfo: "London is the capital of England. Visit Big Ben and the London Eye...",
  },
  {
    slug: "tokyo",
    title: "Tokyo",
    image: "/tokyo.jpg",
    description: "Discover modern tech and ancient temples.",
    moreInfo: "Tokyo combines the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
  },
  {
    slug: "tunis",
    title: "Tunis",
    image: "/tunis.jpg",
    description: "Culture and history in North Africa.",
    moreInfo: "Tunis is the capital of Tunisia. You can visit the Medina and Carthage ruins.",
  },
  {
    slug: "barcelona",
    title: "Barcelona",
    image: "/spain.jpg",
    description: "A city full of art and architecture.",
    moreInfo: "Barcelona is known for Gaudí’s architecture and Mediterranean beaches.",
  },
  {
    slug: "new-york",
    title: "New York",
    image: "/newyork.jpg",
    description: "The city that never sleeps.",
    moreInfo: "New York offers Times Square, Central Park, and the Statue of Liberty.",
  },
  {
    slug: "rome",
    title: "Rome",
    image: "/rome.jpg",
    description: "The Eternal City of ancient wonders.",
    moreInfo: "Rome is home to the Colosseum, Roman Forum, and Vatican City.",
  },
];
const DestinationsDetails = () => {
  const { slug } = useParams();
  console.log("slug from URL:", slug);
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <div className="p-4">Destination not found</div>;
  }

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{destination.title}</h1>
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-auto object-cover rounded-xl shadow-lg mb-6"
        />
        <p className="text-lg text-gray-700">{destination.moreInfo}</p>
      </div>
    </div>
  );
};

export default DestinationsDetails;
