
import Card from './component/Card';
import Header from './component/Header';
import './index.css';
import TodoContainer from './component/TodoContainer';
import { useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter, Route,Routes} from "react-router-dom"




function App()
{
    const [user, setUser] = useState([{ username: "mahe", password: "123" }]);
    return(
<div>
 <BrowserRouter>
 <Routes>
  <Route path='/'element={<Login user={user} setUser={setUser} />}></Route>
  <Route path='/Signup'element={<Signup user={user} setUser={setUser} />}></Route>
  <Route path='/Landing'element={<Landing/>}></Route>
 </Routes>
 </BrowserRouter>
</div>
    )
}

export default App;
