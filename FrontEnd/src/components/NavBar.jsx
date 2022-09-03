import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-2/3 right-0 p-4 h-20 fixed text-black border border-gray-500'>
      <form>
      <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className='relative'>
            <div className='flex absolute inset-y-0 items-center pl-3 pointer-events-none'>
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </div>
      </form>
      
      <div>
        <button>Create</button>
        <p>profile</p>
      </div>
    </div>
  )
}

export default NavBar