
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ViewuseData from './pages/ViewuseData';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
   <Routes>   
   <Route path='/login' element={< Login />}></Route>
   <Route path='/signup' element={< Signup />}></Route>
   <Route path='/home' element={< Home/>}></Route>
   <Route path='/showuploads' element={< ViewuseData/>}></Route>
   </Routes>
   
   </BrowserRouter>
    </div>
    
  );
}

export default App;
