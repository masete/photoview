import {React, useEffect} from 'react'

const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard - PhotoView';
      }, []);
    
  return (
    <div className='pl-[350px] pt-[100px]'>
        <div className='w-full h-full bg-gray-100'>
            <p>Dashboard</p>
        </div>
        
    </div>
  )
}

export default Dashboard