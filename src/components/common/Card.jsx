import React from 'react';
import { useGlobalContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const Card = () => {
    const { cart } = useGlobalContext();

    return (
        <div>
            {cart.map((item) => {
                return (
                    <div className='m-4 md:m-6 mb-12 lg:my-16 flex flex-col lg:flex-row  p-6 lg:p-0 md:p-7 lg:max-w-4xl xl:max-w-7xl xl:tracking-wide lg:mx-auto  lg:h-80 xl:h-72 lg:space-x-8 shadow-lg rounded-lg '>
                        <img
                            src={item.img}
                            alt='images'
                            className='object-cover h-full w-full'
                        />
                        <div className='flex py-6 lg:py-3 lg:px-2  flex-col'>
                            <h1 className='text-2xl font-bold leading-relaxed'>
                                {item.title}
                            </h1>
                            <h1 className=' text-xl font-semibold tracking-wide leading-relaxed text-regular-theme'>
                                {item.price}
                            </h1>
                            <p className='pt-4 lg:pt-2 xl:pt-4 text-black  lg:text-sm tracking-wide lg:tracking-none'>
                                {item.description}
                            </p>
                            <div className='mt-8 lg:mt-1 xl:mt-7 xl:mx-3 mb-4 flex justify-end'>
                                <Link to={`/products/${item.id}`}>
                                    <button className='bg-light-theme px-6 py-1 text-white tracking-wide leading-relaxed'>
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
