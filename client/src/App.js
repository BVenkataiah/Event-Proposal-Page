import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import VendorSignup from './components/VendorSignup';
import VendorLogIn from './components/VendorLogIn';
import UserSignup from './components/UserSignup';
import UserLogIn from './components/UserLogIn';
import LogOut from './components/LogOut';
import Hero from './components/Hero';
 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/vendorSignup' element={<VendorSignup />}/>
        <Route path='/vendorlogin' element={<VendorLogIn/>}/>
        <Route path='/usersignup' element={<UserSignup />}/>
        <Route path='/userlogin' element={<UserLogIn />}/>
        <Route path='/logout' element={<LogOut />}/>
        <Route path='/hero' element={<Hero />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
