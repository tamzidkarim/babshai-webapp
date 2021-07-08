import React, { useState } from "react";
import { Navbar } from "../../components";
import Logo from "../../assets/images.svg";
const FileUpload = () => {
  const [values, setValues] = useState({
    productName: "",
    image: "",
    catagory: "",
    budget: "",
    description:
      "",
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
      <div className="container md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto px-6  md:px-4 py-6 md:py-8 ">
        <h1 className="text-2xl lg:text-4xl lg:mt-8 font-bold tracking-wide leading-relaxed">
          Fill in the details below -
        </h1>

        <div className="">
          <form
            onSubmit={handleSubmit}
            className="mt-4 lg:mt-8 grid grid-cols-1  md:grid-cols-3"
            action=""
          >
            <div className="md:col-span-2">
              <label class="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                id=""
                value={values.productName}
                onChange={handleChange}
                placeholder="Golden Silk Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-5  md:row-span-3 ">
              <label className="flex flex-col rounded-lg border-4 border-dashed justify-center items-center md:w-full xl:w-11/12 md:h-40 lg:h-48 p-6 md:P-6 lg:space-y-2 xl:space-y-4 text-center">
                <img className="object-cover w-20 h-20" src={Logo} alt="logo" />
                <h1 className="pt-2">Drop product image here or browse</h1>
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="mt-4 md:col-span-2">
              <label class="block text-gray-700">Gatagory</label>
              <input
                type="text"
                name="catagory"
                id=""
                value={values.catagory}
                onChange={handleChange}
                placeholder="Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-4 md:col-span-1">
              <label class="block text-gray-700">Budget in BDT</label>
              <input
                type="number"
                name="budget"
                id=""
                value={values.budget}
                onChange={handleChange}
                placeholder="1500"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-2 md:py-3 lg:py-4  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
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
                className="w-full mt-2 outline-none px-4 py-2 md:py-4 lg:py-4 border border-light-theme focus:border-regular-theme "
                required
              ></textarea>
            </div>
            <div className="mt-7">
              <button className="bg-light-theme text-white font-semibold px-6 lg:px-10 py-2 lg:py-3 tracking-wide leading-relaxed">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
