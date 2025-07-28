import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto hero-content flex-col lg:flex-row gap-12">
        {/* النص على اليسار */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
         Have questions, ideas, or want to join a trip? Send us a message and we’ll get back to you soon!
          </p>
        </div>

        {/* الفورم على اليمين */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl lg:w-1/2">
          <div className="card-body space-y-4">
            <div>
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Ahmed Oueslati"
              />
            </div>

            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="oueslatiahmed38@gmail.com"
              />
            </div>

            <div>
              <label className="label font-semibold">Your Message</label>
              <textarea
                className="textarea textarea-bordered w-full h-24"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button className="btn btn-neutral w-full mt-4">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
