import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">----</h1>
            <p className="py-6">......</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Ahmed Oueslati"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="oueslatiahmed38@gmail.com"
                />

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Your Message</legend>
                  <textarea
                    className="textarea h-24"
                    placeholder="Bio"
                  ></textarea>
                 
                </fieldset>
                <button className="btn btn-neutral mt-4">Send</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
