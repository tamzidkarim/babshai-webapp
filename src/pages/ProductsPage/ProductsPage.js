import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navbar, Card } from "../../components";
import { supabase } from "../../supabaseClient";

const ProductsPage = () => {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);

  const searchProduct = (e, name) => {
    e.preventDefault();

    console.log(name);
    setProductName("");
  };

  const fetchData = async () => {
    let { data: posts, error } = await supabase.from("posts");
    console.log(posts);
    setProducts(posts);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
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

        <div>
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="m-4 md:m-6 mb-12 lg:my-16 flex flex-col lg:flex-row  p-6 lg:p-0 md:p-7 lg:max-w-4xl xl:max-w-7xl xl:tracking-wide lg:mx-auto  lg:h-80 xl:h-72 lg:space-x-8 shadow-lg rounded-lg "
              >
                <img
                  src={
                    item.image ||
                    "https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                  }
                  alt="images"
                  className="object-cover h-full w-80"
                />
                <div className="flex py-6 lg:py-3 lg:px-2  flex-col">
                  <h1 className="text-2xl font-bold leading-relaxed">
                    {item.product_name}
                  </h1>
                  <h1 className=" text-xl font-semibold tracking-wide leading-relaxed text-regular-theme">
                    {item.estimated_budget}
                  </h1>
                  <p className="pt-4 lg:pt-2 xl:pt-4 text-black  lg:text-sm tracking-wide lg:tracking-none">
                    {item.description}
                  </p>
                  <div className="mt-8 lg:mt-1 xl:mt-7  mb-4 flex">
                    <Link to={`/products/${item.id}`}>
                      <button className="bg-light-theme px-6 py-1 text-white tracking-wide leading-relaxed">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Card /> */}
      </section>
    </div>
  );
};

export default ProductsPage;
