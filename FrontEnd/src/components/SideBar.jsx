import React from 'react';

const SideBar = () => {
  return (
    <>
    <div className='flex flex-col top-0 left-0 fixed w-1/4 h-full'>
        <p className='font-bold inline my-10 mx-4 text-4xl'>PhotoView</p>
        <div className='border border-gray-500'>
            <ul>
                <li>Home</li>
                <li>Photographer</li>
                <li>User</li>
                <li>Admin</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SideBar