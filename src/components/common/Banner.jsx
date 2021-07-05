import React from "react";

const Banner = ({ children = "" }) => {
  return (
      <section
          className='absolute top-0 z-0 object-cover  w-full bg-cloth-preview bg-cover'
          style={{ height: '420px' }}
      >
          <img className="object-cover h-full w-full"
              src='https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              alt='asdfg'
          />
      </section>
  );
};

export default Banner;
