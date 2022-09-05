import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <div className='bg-gray-100'>
      <NavBar />
      <SideBar />
      <Dashboard />
    </div>
    
    </>
    
  );
}

export default App;
