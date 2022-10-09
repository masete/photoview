import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';


const Timeline = () => {
  return (
    <>
    <div className="bg-gray-background">
      <NavBar />
        <div className="grid grid-cols-3 justify-between mx-auto max-w-screen-lg">
          <section>
            <SideBar />
          </section>
          
          <section className='col-span-3'>
            <Dashboard />
          </section>
          
        </div>
      
    </div>
    
    </>
  )
}

export default Timeline