import './App.css';
import { BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/timeline' element={<Timeline/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
