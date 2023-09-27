import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import {Home, Rooms, Favorite, About, OurTeam, Contact, Signin, Register, Recover} from './Components/index';


const App = () => {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Rooms' element={<Rooms/>}/>
      <Route path='/Favorite' element={<Favorite/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/OurTeam' element={<OurTeam/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Recover' element={<Recover/>}/>
      </Routes>
    </div>
  );
};

export default App;
