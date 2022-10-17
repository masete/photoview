import {React, useEffect} from 'react'

const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard - PhotoView';
      }, []);
    
  return (
    <div className='flex justify-between items-center space-x-2 mt-[60px] p-10 text-black right-0 mx-1'>
        
            <p className='text-black'>photo area</p>
        
        
    </div>
  )
}

export default Dashboard