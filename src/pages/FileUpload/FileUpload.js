import React from "react";
import { Navbar, InputField } from "../../components";
import Logo from "../../assets/images.svg";
const FileUpload = () => {
  return (
    <div className="antialiased">
      <Navbar />
      <div className="container mx-auto flex flex-col px-8 py-8 ">
        <h1 className="text-2xl font-bold tracking-wide leading-relaxed">
          Fill in the details below -
        </h1>
        <div>
          <form className="mt-4" action="">
            <div>
              <label class="block text-gray-700">Product Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Golden Silk Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-3  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-4">
              <label class="block text-gray-700">Gatagory</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Threads"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-3  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-4">
              <label class="block text-gray-700">Budget in BDT</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="1500"
                className="w-full md:w-4/5 xl:w-3/5 px-4 py-3  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div className="mt-4">
              <label class="block text-gray-700">Description</label>
              <textarea
                type="text"
                name=""
                id=""
                className="w-full  md:w-4/5  xl:w-3/5 px-4 py-3  mt-2 pb-60 flex flex-col font-medium placeholder-black border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </textarea>
            </div>
          </form>
        </div>
        {/* row 2 */}
        <div className="mt-4  flex justify-center">
          <form action="">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <h1>sdlkaflksa</h1>
              <input type="file" className="hidden" />
            </label>
          </form>
        </div>
        <div className="mt-6">
          <button className="bg-light-theme text-white font-semibold px-6 py-2 tracking-wide leading-relaxed">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
