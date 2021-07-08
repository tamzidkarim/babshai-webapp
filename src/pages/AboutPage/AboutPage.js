import React, { useState } from "react";
import { Navbar } from "../../components";

const AboutPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="antialiased">
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 py-12 lg:py-20 flex flex-col lg:flex-row container mx-auto">
        {/* 1st row */}
        <div className="mt-2 xl:mt-12 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl  text-black font-bold leading-10">
            About
          </h1>
          <p className="mt-6 xl:mt-8 leading-relaxed font-medium xl:text-lg xl:tracking-wide  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <p className="mt-4 lg:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </p>
        </div>
        {/* 2nd row */}
        <div className="mt-4 lg:mt-0 lg:pl-20  xl:mt-12 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl mt-6 lg:mt-2 text-black font-bold leading-10">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" action="">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id=""
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-4/5 md:w-1/2 lg:w-4/5 xl:w-3/5 px-4 py-3  mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id=""
                value={values.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-4/5 md:w-1/2 lg:w-4/5 xl:w-3/5 px-4 py-3   my-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-4 md:col-span-3  ">
              <label class="block text-gray-700">Description</label>
              <textarea
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                id=""
                rows="6"
                className="w-full md:w-2/3 lg:w-full mt-2 outline-none px-4 py-2 md:py-4 lg:py-4 border border-light-theme focus:border-regular-theme "
                required
              ></textarea>
            </div>
            <div className=" ">
              <button className="bg-light-theme  font-lg text-white tracking-wide leading-relaxed px-8 lg:px-16 xl:px-20 py-2 lg:py-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
