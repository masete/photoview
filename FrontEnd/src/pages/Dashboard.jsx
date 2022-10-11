import {React, useEffect} from 'react'

const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard - PhotoView';
      }, []);
    
  return (
    <div className='flex justify-between items-center space-x-2 mt-10 p-10 text-black right-0 border mx-1'>
        
            <p className='text-black'>Dashboard</p>
        
        
    </div>
  )
}

export default Dashboard