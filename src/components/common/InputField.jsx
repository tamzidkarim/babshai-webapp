import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { supabase } from '../../supabaseClient';

const InputField = () => {
  const history = useHistory();
  const [profile, serProfile] = useState({
    address: '',
    factory_address: '',
    number: '',
  });

  const [values, setValues] = useState({
    address: '',
    factory_address: '',
    number: '',
  });
  const user = supabase.auth.user();
  const getUserProfile = async () => {
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

  const updateUserProfile = async () => {
    const user = supabase.auth.user();
    const { data, error, status } = await supabase
      .from('profile')
      .update(values)
      .eq('id', user.id)
      .single();

    console.log(data, error, status);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (user) {
      getUserProfile();
    } else {
      history.push('/');
    }
    return () => {};
  }, [user]);

  console.log(user);
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
              disabled
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
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700"> Address</label>
            <input
              type="text"
              name="address"
              id=""
              defaultValue={profile.address}
              placeholder="Enter your address"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              onChange={handleChange}
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
              name="factory_address"
              id=""
              defaultValue={profile.factory_address}
              placeholder="Enter your factory address"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Number</label>
            <input
              type="number"
              name="number"
              id=""
              defaultValue={profile.number}
              placeholder="Enter your phone number"
              className="w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className=" ">
        <button
          className="bg-light-theme  font-lg text-white tracking-wide leading-relaxed px-8 lg:px-16 xl:px-20 py-2 lg:py-3"
          onClick={updateUserProfile}
        >
          Submit
        </button>
        <button
          className="bg-light-theme mt-3  font-lg text-white tracking-wide leading-relaxed px-8 lg:px-16 xl:px-20 py-2 lg:py-3"
          onClick={() => {
            supabase.auth.signOut();
            history.push('/');
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default InputField;
