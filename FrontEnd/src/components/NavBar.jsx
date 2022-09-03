import React from 'react';
import profileImage from '../assets/heroimage1.jpg';
import {AiTwotoneBell} from 'react-icons/ai';
import {CgCross} from 'react-icons/cg';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-3/4 right-0 p-4 h-20 fixed text-black border border-gray-500'>
      <form>

      <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className='relative'>
            <div className='flex absolute inset-y-0 items-center pl-3 pointer-events-none'>
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block p-4 pl-10 w-[400px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-500" placeholder="search something" required />
            <button type='submit' className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</button>
        </div>

      </form>
      
      <div>
        <ul className='md:flex'>
          <li><button className='px-8 py-3 mx-6 my-2 border border-gray-200 rounded-xl bg-gray-100'>
            
                                                 
            <p>Upload</p>
              </button>
          </li>
          <li>
             <AiTwotoneBell size={30} className='mx-6 my-4'/>
          </li>
          <li>
            <img className='rounded-lg h-10 mx-6 my-4' src={profileImage} />
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default NavBar