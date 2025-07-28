
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
  
    navigate("/destinations");
  };

  return (
    <div className="p-2 bg-base-200 rounded-xl shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Find Your Perfect Trip</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
        />
          <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full"
        />
        <button onClick={handleSearch} className="btn btn-primary w-full md:w-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;