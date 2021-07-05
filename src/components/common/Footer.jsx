import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
const Footer = () => {
  const [email, setEmail] = useState("");

  // will execute when mail send button pressed
  const sendMail = () => {
    console.log("mail sent");
  };

  return (
    <footer className=" content-padding bg-dark-theme py-6 md:py-10 mt-auto ">
      <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
        <div>
          <h1 className=" text-light-theme text-4xl font-bold">Bebshai</h1>
        </div>
        {/* address */}
        <address>
          <ul className="flex flex-col">
            <li className="flex items-center text-gray-200 not-italic py-2">
              <MdMailOutline className="mr-2" />
              <span>babshai@gmail.com</span>
            </li>
            <li className="flex items-center text-gray-200 not-italic py-2">
              <MdLocationOn className="mr-2" />
              <span>268, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center text-gray-200 not-italic py-2">
              <MdPhone className="mr-2" />
              <span>0123456789</span>
            </li>
          </ul>
        </address>

        {/* subscribe */}
        <div>
          <div className="mt-6 md:mt-0">
            <label htmlFor="subscribe" className="text-gray-200 ">
              Subscribe to newsletter
            </label>
            <div className="flex mt-3 rounded-md bg-white ">
              <input
                type="email"
                id="subscribe"
                placeholder="Enter you email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-1 py-3 rounded-l-md w-full"
              />
              <button
                onClick={sendMail}
                className=" text-black px-4 rounded-md "
              >
                Send
              </button>
            </div>
          </div>
        </div>
        {/* follow */}
        <div className="flex justify-start lg:justify-center mt-6 md:mt-0">
          <div>
            <p className="text-gray-200">Follow us</p>
            <ul className="flex justify-center">
              <li className="flex items-center text-gray-200 not-italic py-2">
                <a href="fb.com" target="_blank">
                  <FaFacebook className="mr-3 text-xl" />
                </a>
              </li>
              <li className="flex items-center text-gray-200 not-italic py-2">
                <a href="fb.com" target="_blank">
                  <FaInstagram className="mx-3 text-xl" />
                </a>
              </li>
              <li className="flex items-center text-gray-200 not-italic py-2">
                <a href="fb.com" target="_blank">
                  <FaTwitter className="ml-3 text-xl  " />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-200 mt-10">
        Copyright © 2010-2021 Babshai Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
