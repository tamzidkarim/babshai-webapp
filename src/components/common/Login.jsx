import React, { useState } from 'react';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
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
        <section className='flex flex-col md:flex-row h-screen items-center antialiased'>
            <div className=' hidden lg:block w-full md:w-1/2 lg:w-1/2 xl:w-1/3 h-screen'>
                <img
                    src='https://source.unsplash.com/random'
                    alt=''
                    className='w-full h-full object-cover'
                />
                <div className='absolute z-0 inset-0 bg-red-800 bg-opacity-40  w-full md:w-1/2 lg:w-1/2 xl:w-1/3 '></div>
            </div>

            <div className='bg-white w-full md:max-w-md lg:max-w-full xl:w-2/3 md:mx-auto  md:w-1/2 lg:w-1/2 h-screen px-6 lg:px-16 xl:px-20  flex items-center justify-center'>
                <div className='w-full h-100'>
                    <h1 className='text-xl md:text-2xl font-bold leading-tight mt-12'>
                        Sign in to your account
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className='mt-6 xl:w-2/5'
                        action='#'
                        method='POST'
                    >
                        <div>
                            <label className='block text-gray-700'>
                                Email Address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id=''
                                value={values.email}
                                onChange={handleChange}
                                placeholder='Enter Email Address'
                                className='w-full px-4 py-3  mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                                autofocus
                                autocomplete
                                required
                            />
                        </div>

                        <div className='mt-4'>
                            <label className='block text-gray-700'>
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id=''
                                value={values.password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                minlength='6'
                                className='w-full  px-4 py-3  mt-2 border  border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                                required
                            />
                        </div>

                        <div className='text-left mt-2'>
                            <a
                                href='/'
                                className='text-sm font-semibold text-light-theme hover:text-regular-theme'
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type='submit'
                            className='w-full xl:w-32 rounded-lg	 block bg-light-theme hover:bg-regular-theme  text-white font-semibold
              px-4  py-3 xl:py-2 mt-6'
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className='my-6 border-gray-300 w-full'>
                        <p className='mt-8 tracking-wide leading-relaxed '>
                            Don't have an account?
                            <a
                                href='/'
                                className='text-light-theme underline  font-bold'
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
