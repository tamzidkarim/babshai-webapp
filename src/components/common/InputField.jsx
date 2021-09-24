import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const InputField = () => {
  const [profile, serProfile] = useState({
    display_name: '',
    email: '',
  });
  const getUserProfile = async () => {
    const user = supabase.auth.user();
    let {
      data: profile,
      error,
      status,
    } = await supabase.from('profile').select('*').eq('id', user.id).single();
    if (error && status !== 406) {
      throw error;
    }

    if (profile) {
      serProfile(profile);
    }
  };

  console.log(profile);

  useEffect(() => {
    getUserProfile();
    return () => {};
  }, []);
  return (
    <div className="mb-8 mt-4 lg:mt-12 px-6 container md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:space-x-12 ">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold">Information</h1>
        <form className="mt-4" action="">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name=""
              id=""
              defaultValue={profile.display_name}
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="tonny@gmail.com"
              defaultValue={profile.email}
              className="w-full md:w-4/5 xl:w-3/5 font-medium placeholder-black  px-4 py-3  mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700"> Address</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="address"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              required
            />
          </div>
        </form>
      </div>
      {/* 2nd row */}
      <div className=" md:w-1/2 mt-12 md:mt-0">
        <form className="mt-4" action="">
          <div>
            <label className="block text-gray-700">Factory Address</label>
            <input
              type="text"
              name="asdgasdghasdg"
              id=""
              placeholder="address"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Number</label>
            <input
              type="text"
              name="asdgasdghasdg"
              id=""
              placeholder="01822123456"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              required
            />
          </div>
        </form>
      </div>
      <div className=" ">
        <button className="bg-light-theme  font-lg text-white tracking-wide leading-relaxed px-8 lg:px-16 xl:px-20 py-2 lg:py-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputField;
