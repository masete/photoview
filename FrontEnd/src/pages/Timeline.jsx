import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';


const Timeline = () => {
  return (
    <>
      
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
          <section>
            <SideBar />
          </section>

          <section className='col-span-2'>
            <NavBar />
            <Dashboard  />
          </section>
          
        </main>
      
    
    </>
  )
}

export default Timeline