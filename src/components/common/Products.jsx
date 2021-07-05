/*
 * This component will show products and
 * user will be able to search products
 */

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Banner, Footer, Navbar } from "..";

const Products = () => {
  const [productName, setProductName] = useState("");

  // this function will search product based
  // on the name that will pass as parameter
  const searchProduct = (e, name) => {
    e.preventDefault();

    console.log(name);
    setProductName("");
  };

  return (
      <section className='min-h-screen  flex flex-col relative'>
          <Banner />
          <Navbar />

          {/* product search */}
          <form
              onSubmit={(e) => searchProduct(e, productName)}
              className='flex justify-center transform -translate-y-5'
          >
              <div className='flex justify-center items-stretch bg-white w-4/5 md:w-3/5 lg:w-2/5 rounded-md shadow-md'>
                  <input
                      type='text'
                      className=' flex-grow rounded-l-md px-5 py-5 '
                      placeholder='Find what you are looking for...'
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                  />
                  <button className='px-4 rounded-md text-white bg-light-theme'>
                      <MdSearch className='text-4xl' />
                  </button>
              </div>
          </form>
       

          <Footer />
      </section>
  );
};

export default Products;
