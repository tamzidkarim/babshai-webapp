import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Navbar, Card } from "../../components";

const ProductsPage = () => {
  const [productName, setProductName] = useState("");

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
          <h1 className="text-md md:text-xl lg:text-2xl font-semibold leading-relaxed  py-2 "></h1>
        </div>

        <Card />
      </section>
    </div>
  );
};

export default ProductsPage;
