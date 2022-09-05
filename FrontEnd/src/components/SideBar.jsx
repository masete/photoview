import React from 'react';

const SideBar = () => {
  return (
    <>
    <div className='flex flex-col top-0 left-0 fixed w-1/4 h-full'>
        <p className='font-bold inline my-10 mx-4 text-6xl font-signature'>PhotoView</p>
        <div className='border border-gray-500'>
            <ul className='pl-10 my-4 text-xl'>
                <li className='my-4'>Home</li>
                <li className='my-4'>Photographer</li>
                <li className='my-4'>User</li>
                <li className='my-4'>Admin</li>
                <li className='top-[80%]'>Logout</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SideBar