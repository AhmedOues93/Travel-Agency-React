import React from "react";

const About = () => {
  return (
    <div className="bg-base-200 min-h-screen py-10">
  
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-4 px-4  text-xl max-w-3xl mx-auto">
          Welcome to Travel Agency — your gateway to unforgettable experiences!
          We specialize in affordable, student-friendly travel packages tailored
          for Software Engineering students.
        </p>
      </div>

      
      <div className="container mx-auto px-4 flex flex-row lg:flex-row items-center justify-between gap-10 mb-16">
      
        <img
          src="/reise.jpg"
          alt="Travel"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div className="lg:w-1/2">
          <h2 className="text-3xl text-5xl font-bold mb-4">Why Travel With Us?</h2>
          <ul className="text-xl list-disc list-inside space-y-2 text-lg">
            <li>Affordable, curated student trips</li>
            <li>Group packages to tech hubs & hackathons</li>
            <li>Safe, reliable, and fun experiences</li>
            <li>Led by students, for students</li>
          </ul>
        </div>
      </div>


      <div className="hero   bg-base-200 py-16   ">
        <div className="hero-content rounded-b-3xl bg-gray-300 text-center">
          <div className= "max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
            <p className="py-4  text-xl text-bold">
              To connect SE students through shared travel adventures, fostering
              learning, friendships, and unforgettable memories — all while staying
              budget-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

