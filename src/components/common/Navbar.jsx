import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu, MdPersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const user = supabase.auth.user();
  const getUserProfile = async () => {
    const user = supabase.auth.user();

    if (user) {
      let {
        data: profile,
        error,
        status,
      } = await supabase
        .from('profile')
        .select('display_name')
        .eq('id', user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        setUsername(profile.display_name);
      }
    }
  };

  useEffect(() => {
    getUserProfile();
    return () => {};
  }, [user]);

  console.log(username);

  return (
    <header className="relative bg-black bg-opacity-50  w-full">
      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16  py-12 container mx-auto  h-20  w-full ">
        <div>
          <Link to="/">
            <h1 className="text-light-theme text-xl lg:text-5xl text-center  font-bold">
              Babshai.com
            </h1>
          </Link>
        </div>

        <div>
          <Link to="/post">
            <button
              className={`bg-light-theme text-white px-2 lg:px-3 py-2 lg:py-4 rounded-md`}
            >
              Post A Requirement
            </button>
          </Link>
        </div>

        <ul
          className={`flex flex-col md:flex-row md:items-center bg-black md:bg-transparent divide-y-2 
        md:divide-y-0 divide-gray-400 min-h-screen md:min-h-0 absolute z-50
        md:static top-0 left-0 w-full md:w-auto transform transition-transform md:translate-x-0 ${
          isMobileNavOpen ? '' : '-translate-x-full'
        } `}
        >
          <li className="md:hidden pl-3 md:pl-0 py-3 md:py-0 md:mx-4">
            <span className="text-gray-200 text-4xl flex ">
              <MdClose
                className="ml-auto cursor-pointer"
                onClick={() => setIsMobileNavOpen(false)}
              />
            </span>
          </li>
          <li className="w-full xl:px-4 md:w-auto pl-3 md:pl-0 text-white py-3 md:py-0  hover:text-light-theme  md:mx-4">
            <Link to="/" className="text-gray-200">
              Home
            </Link>
          </li>
          <li className="w-full xl:px-4 md:w-auto pl-3 md:pl-0 py-3 md:py-0 text-white hover:text-light-theme  md:mx-4">
            <Link to="/about" className="text-gray-200">
              About
            </Link>
          </li>
          <li className="w-full xl:px-4 md:w-auto pl-3 md:pl-0 py-3 md:py-0 text-white hover:text-light-theme  md:mx-4">
            <Link to="/products" className="text-gray-200">
              Products
            </Link>
          </li>

          <li className="w-full xl:px-4 md:w-auto pl-3 md:pl-0 py-3 md:py-0 text-white hover:text-light-theme  md:mx-2">
            {username ? (
              <Link to="/profile" className="text-gray-200 text-xl">
                {username}
              </Link>
            ) : (
              <Link to="/login" className="text-gray-200 text-4xl">
                <MdPersonOutline />
              </Link>
            )}
          </li>
        </ul>
        {/* hamburger visible on mobile only */}
        <div className="block  md:hidden">
          <span className="text-gray-200 text-4xl">
            <MdMenu onClick={() => setIsMobileNavOpen(true)} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
