
import './App.css';
import Home from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import TimeSheet from './pages/TimeSheet';
import AddTimeSheet from './pages/AddTimeSheet';
import Component from './components/Footer';
import LoginPage from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/login" element = {<LoginPage />}/> 

        <Route index element = {<Home/>}/>
        
        <Route path='/timesheet' element ={<TimeSheet/>}/>

        <Route path='/addtimesheet' element= {<AddTimeSheet/>}/>

        <Route path='/footer'element= {<Component/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
