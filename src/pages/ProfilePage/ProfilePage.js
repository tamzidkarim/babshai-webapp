import React, { useState } from "react";

import { Navbar, Footer, Card, InputField } from "../../components/index";

const ProfilePage = () => {
  const [active, setActive] = useState("Edit profile");

  return (
    <div className="relative antialiased">
      {/* <div
        className="absolute top-0 z-0 w-full bg-light-theme "
        style={{ height: "450px" }}
      ></div> */}

      <Navbar />

      {/* <section className="antialiased relative z-10 w-full    flex flex-col md:flex-row  justify-center md:justify-start max-w-2xl lg:max-w-4xl xl:container xl:px-16 mx-auto items-center   ">
        <img
          className="w-40 h-40 mt-20 rounded-full relative"
          src="https://www.pinkvilla.com/files/styles/contentpreview/public/iron-man-star-robert-downey-jr-best-film.jpg?itok=QFDPnWbO"
          alt="tony"
        />

        <div className="py-3 md:py-0 md:pt-20 px-4 flex flex-col justify-center items-center ">
          <h1 className="text-xl font-semibold leading-relaxed text-white tracking-wide">
            Tony stack
          </h1>
          <p className="text-lg font-semibold tracking-wide text-white">
            Dhaka, Bangladesh
          </p>
        </div>
      </section> */}

      {/* details */}
      <section className="mt-16 md:mt-36">
        <div className="flex flex-row justify-center lg:justify-start items-center lg:container lg:px-24  mx-auto space-x-4 md:space-x-6 lg:space-x-8 p-4">
          <button
            onClick={() => setActive("Edit profile")}
            className={`text-md md:text-xl xl:text-2xl font-semibold leading-relaxed  py-2 ${
              active === "Edit profile" ? "text-red-500" : ""
            }`}
          >
            Edit profile
          </button>
          {/* <button
            onClick={() => setActive("Your requirements")}
            className={`text-md md:text-xl xl:text-2xl font-semibold leading-relaxed py-2  hover:text-regular-theme  hover:border hover:border-light-theme ${
              active === "Your requirements" ? "text-red-500" : ""
            }`}
          >
            Your requirements
          </button>
          <button
            onClick={() => setActive("Sent proposals")}
            className={`text-md md:text-xl xl:text-2xl  font-semibold leading-relaxed hover:text-regular-theme  hover:border hover:border-light-theme ${
              active === "Sent proposals" ? "text-red-500" : ""
            }`}
          >
            Sent proposals
          </button> */}
        </div>
        {/* card */}
        <div>
          {active === "Edit profile" && <InputField />}
          {active === "Your requirements" && <></>}
          {active === "Sent proposals" && <></>}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilePage;
