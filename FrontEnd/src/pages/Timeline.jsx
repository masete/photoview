import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';


const Timeline = () => {
  return (
    <>
    <div className="bg-gray-background">
      <NavBar />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <SideBar />
          {/* <Dashboard /> */}
        </div>
      
    </div>
    
    </>
  )
}

export default Timeline