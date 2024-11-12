
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TimeSheetList from './pages/TimeSheetList';
import AddTimeSheet from './pages/AddTimeSheet';
import LoginPage from './pages/LoginPage';
import Tecnologia from './pages/Tecnologia';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />

        <Route path='/timesheetlist' element={<TimeSheetList />} />

        <Route path='/addtimesheet' element={<AddTimeSheet />} />

        <Route path='/tecnologia' element={<Tecnologia />} />

      </Routes>
    </div>
  );
}

export default App;
