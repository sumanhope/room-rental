import { useLocation, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "../src/Components/Header";
import {Home, Rooms, Favorite, About, OurTeam, Contact, Signin, Register, Recover, Room, RoomInfo, Profile, EditPost, AddPost} from './Components/index';

const App = () => {
  const location = useLocation();

  return (
    <div id="" className=''>
      <Header/>
      <div>
      <Routes location ={location} key={location.path}>
      <Route path='/Signin' element={<Signin/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Rooms' element={<Rooms/>}/>
      <Route path='/Favorite' element={<Favorite/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/OurTeam' element={<OurTeam/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Recover' element={<Recover/>}/>
      <Route path='/Rooms/RoomInfo' element={<RoomInfo/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Profile/EditPost' element={<EditPost/>}/>
      <Route path='/Profile/AddPost' element={<AddPost/>}/>
      </Routes>
      </div>
    </div>
   
  );
};
export default App;
