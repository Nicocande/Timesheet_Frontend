import { Route, Routes } from "react-router-dom";
import TimeSheet from "./pages/TimeSheet";
import AddTimeSheet from "./pages/AddTimeSheet";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/addtimesheet" element={<AddTimeSheet />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
