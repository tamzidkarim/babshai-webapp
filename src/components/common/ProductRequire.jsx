import React from 'react';
// import { useGlobalContext } from '../../context/Context';
// import { useParams, Link } from 'react-router-dom';
const ProductRequire = () => {
 
    return (
        <div>
            <div className='flex flex-col p-8 md:px-12 antialiased container mx-auto lg:max-w-4xl xl:max-w-6xl'>
                <h1 className='text-xl md:text-2xl lg:text-3xl py-3 font-semibold leading-relaxed  '>
                    Product requirements{' '}
                </h1>
                <img
                    className='px-3 md:px-12 py-2 md:py-6 w-full lg:w-3/5 lg:h-60 xl:h-80 rounder-lg  object-cover'
                    src='https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    alt=''
                />
                <p className='px-3 pt-2 md:pt-4  text-lg md:text-xl text-gray-500  '>
                    Product name
                </p>
                <div className='flex flex-col md:flex-row justify-between px-3 md:pt-2'>
                    <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold text-black leading-relaxed tracking-normal'>
                        Golden Silk Threads
                    </h1>
                    <p className='text-sm md:text-md lg:text-xl pt-1 font-bold tracking-wide text-regular-theme'>
                        Budget $150
                    </p>
                </div>
                <p className='px-3 pt-5 text-lg md:text-xl text-gray-500  tracking-wide'>
                    Description
                </p>
                <p className='px-3 pt-2 text-sm md:text-md text-black font-medium leading-5 tracking-wide'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>

                <div className='flex flex-col border border-white shadow-xl my-6 p-6'>
                    <p className='leading-relaxed tracking-wide text-md md:text-lg lg:text-xl text-black font-semibold'>
                        Send proposal
                    </p>

                    <textarea
                        className='border  lg:overflow-hidden placeholder-black text-md leading-relaxed tracking-wide my-4 p-4 pb-20 border-regular-theme flex flex-col break-all'
                        type='text'
                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    />
                </div>
                <div className=''>
                    <button className='text-left text-white tracking-wide text-sm lg:text-md font-semibold bg-light-theme px-8 lg:px-16 py-3 lg:py-3 hover:bg-regular-theme  '>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductRequire;

//  <div className='flex flex-col p-8 md:px-12 antialiased container mx-auto lg:max-w-4xl xl:max-w-6xl'>
//             <h1 className='text-xl md:text-2xl lg:text-3xl py-3 font-semibold leading-relaxed  '>
//                 Product requirements
//             </h1>
//             <img
//                 className='px-3 md:px-12 py-2 md:py-6 w-full lg:w-3/5 lg:h-60 xl:h-80 rounder-lg  object-cover'
//                 src='https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
//                 alt=''
//             />
//             <p className='px-3 pt-2 md:pt-4  text-lg md:text-xl text-gray-500  '>
//                 Product name
//             </p>
//             <div className='flex flex-col md:flex-row justify-between px-3 md:pt-2'>
//                 <h1 className=' text-xl md:text-2xl lg:text-3xl font-bold text-black leading-relaxed tracking-normal'>
//                     Golden Silk Threads
//                 </h1>
//                 <p className='text-sm md:text-md lg:text-xl pt-1 font-bold tracking-wide text-regular-theme'>
//                     Budget $150
//                 </p>
//             </div>
//             <p className='px-3 pt-5 text-lg md:text-xl text-gray-500  tracking-wide'>
//                 Description
//             </p>
//             <p className='px-3 pt-2 text-sm md:text-md text-black font-medium leading-5 tracking-wide'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>

//             <div className='flex flex-col border border-white shadow-xl my-6 p-6'>
//                 <p className='leading-relaxed tracking-wide text-md md:text-lg lg:text-xl text-black font-semibold'>
//                     Send proposal
//                 </p>

//                 <textarea
//                     className='border  lg:overflow-hidden placeholder-black text-md leading-relaxed tracking-wide my-4 p-4 pb-20 border-regular-theme flex flex-col break-all'
//                     type='text'
//                     placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
// magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//                 />
//             </div>
//             <div className=''>
//                 <button className='text-left text-white tracking-wide text-sm lg:text-md font-semibold bg-light-theme px-8 lg:px-16 py-3 lg:py-3 hover:bg-regular-theme  '>
//                     Send
//                 </button>
//             </div>
//         </div>
