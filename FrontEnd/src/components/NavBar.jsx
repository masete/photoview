import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-2/3 right-0 p-4 h-20 fixed text-black border border-gray-500'>
      <div>
          <h1 className='text-6xl font-signature ml-4'>PhotoView</h1>
      </div>
      <div className=''>
        <button>Create</button>
      </div>
      <div>
        <p>profile</p>
      </div>
    </div>
  )
}

export default NavBar