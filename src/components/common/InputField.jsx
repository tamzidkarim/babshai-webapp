import React from 'react'

const InputField = () => {
   return (
       <div className='mb-8 mt-4 lg:mt-12 px-6 container md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:space-x-12 '>
           <div className='md:w-1/2'>
               <h1 className='text-2xl font-bold'>Information</h1>
               <form className='mt-4' action=''>
                   <div>
                       <label class='block text-gray-700'>Name</label>
                       <input
                           type='text'
                           name=''
                           id=''
                           placeholder='Tony stark'
                           className='w-full md:w-4/5 xl:w-3/5 px-4 py-3  font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div>
                   <div className='mt-4'>
                       <label class='block text-gray-700'>Email</label>
                       <input
                           type='email'
                           name=''
                           id=''
                           placeholder='tonny@gmail.com'
                           className='w-full md:w-4/5 xl:w-3/5 font-medium placeholder-black  px-4 py-3  mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div>
                   <div className='mt-4'>
                       <label class='block text-gray-700'> Address</label>
                       <input
                           type='text'
                           name=''
                           id=''
                           placeholder='Gollamri, Khulna'
                           className='w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div>
               </form>
           </div>
           {/* 2nd row */}
           <div className=' md:w-1/2 mt-12 md:mt-0'>
               <h1 className='text-2xl font-bold'> Change password</h1>
               <form className='mt-4' action=''>
                   <div>
                       <label class='block text-gray-700'>Old password</label>
                       <input
                           type='password'
                           name='asdgasdghasdg'
                           id=''
                           placeholder='***********'
                           className='w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div>
                   <div className='mt-4'>
                       <label class='block text-gray-700'>New password</label>
                       <input
                           type='password'
                           name='asdgasdghasdg'
                           id=''
                           placeholder='***********'
                           className='w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div>
                   <div className='mt-4'>
                       <label class='block text-gray-700'>
                           Confirm new password
                       </label>
                       <input
                           type='password'
                           name='asdgasdghasdg'
                           id=''
                           placeholder='***********'
                           className='w-full md:w-4/5 xl:w-3/5 px-4 py-3 font-medium placeholder-black  mt-2 border border-light-theme focus:border-regular-theme focus:bg-white focus:outline-none'
                           autofocus
                           autocomplete
                           required
                       />
                   </div> 
               </form>
           </div>
       </div>
   );
}

export default InputField
