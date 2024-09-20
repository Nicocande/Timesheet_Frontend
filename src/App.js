
import './App.css';
import Home from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TimeSheet from './pages/TimeSheet';
import AddTimeSheet from './pages/AddTimeSheet';
import Component from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element = {<Navbar/>}/> 

        <Route index element = {<Home/>}/>
        
        <Route path='/timesheet' element ={<TimeSheet/>}/>

        <Route path='/addtimesheet' element= {<AddTimeSheet/>}/>

        <Route path='/'element= {<Component/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
