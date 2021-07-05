import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Navbar, Banner, Footer } from "../../components";

const Product = () => {
  const [productName, setProductName] = useState("");

  // this function will search product based
  // on the name that will pass as parameter
  const searchProduct = (e, name) => {
    e.preventDefault();

    console.log(name);
    setProductName("");
  };
  return (
    <div className="relative antialiased">
      <div
        className="   "
        style={{
          height: "500px",
          backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
      </div>
      {/* <div
        className="absolute top-0 z-0 w-full bg-light-theme"
        style={{ height: "420px" }}
      ></div> */}
      {/* <Banner /> */}

      <div className=" -mt-8  ">
        <form
          onSubmit={(e) => searchProduct(e, productName)}
          className="flex justify-center  "
        >
          <div className="flex justify-center items-stretch bg-white w-4/5 md:w-3/5 lg:w-2/5 rounded-md shadow-md">
            <input
              type="text"
              className=" flex-grow rounded-l-md px-5 py-5 "
              placeholder="Find what you are looking for..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <button className="px-4 rounded-md text-white bg-light-theme">
              <MdSearch className="text-4xl" />
            </button>
          </div>
        </form>
      </div>

      <section className="mt-8  md:mt-16  ">
        <div className="flex flex-row justify-start lg:justify-start items-center lg:container lg:px-24  mx-auto space-x-4 md:space-x-6 lg:space-x-8 p-4    ">
          <h1 className="text-md md:text-xl lg:text-2xl font-semibold leading-relaxed  py-2    ">
            Showing results for "Golden Silk" -
          </h1>
        </div>
        {/* card */}
        <div className="m-4 md:m-6 mb-12 lg:my-6 flex flex-col lg:flex-row  p-6 lg:p-0 md:p-7 lg:max-w-4xl xl:max-w-7xl xl:tracking-wide lg:mx-auto  lg:h-72 xl:h-72 lg:space-x-8 shadow-xl rounded-lg ">
          <img
            className="lg:w-2/5 object-cover"
            src="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="images"
          />
          <div className="flex py-6 lg:py-3 lg:px-2  flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold leading-relaxed">
              Golden Silk Threads
            </h1>
            <h1 className=" text-xl lg:pt-2 lg:text-3xl font-semibold tracking-wide leading-relaxed text-regular-theme">
              $150
            </h1>
            <p className="pt-4 lg:pr-1 lg:pt-2 xl:pt-4 text-black lg:font-medium  lg:text-sm tracking-wide lg:tracking-none">
              Need high quality threads which are made of Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in
            </p>
            <div className="mt-8 lg:mt-4 xl:mt-7 lg:mx-3 mb-4  flex justify-end">
              <button className="bg-light-theme px-6 py-1 text-white rounded-lg tracking-wide leading-relaxed">
                View
              </button>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="m-4 md:m-6 mb-12 lg:my-6 flex flex-col lg:flex-row  p-6 lg:p-0 md:p-7 lg:max-w-4xl xl:max-w-7xl xl:tracking-wide lg:mx-auto  lg:h-80 xl:h-72 lg:space-x-8 shadow-xl rounded-lg ">
          <img
            src="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="images"
          />
          <div className="flex py-6 lg:py-3 lg:px-2  flex-col">
            <h1 className="text-2xl font-bold leading-relaxed">
              Golden Silk Threads
            </h1>
            <h1 className=" text-xl font-semibold tracking-wide leading-relaxed text-regular-theme">
              $150
            </h1>
            <p className="pt-4 lg:pt-2 xl:pt-4 text-black  lg:text-sm tracking-wide lg:tracking-none">
              Need high quality threads which are made of Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in
            </p>
            <div className="mt-8 lg:mt-1 xl:mt-7 xl:mx-3 mb-4 flex justify-end">
              <button className="bg-light-theme px-6 py-1 text-white tracking-wide leading-relaxed">
                View
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
