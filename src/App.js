import { Route, Routes } from "react-router-dom";
import TimeSheet from "./pages/TimeSheet";
import AddTimeSheet from "./pages/AddTimeSheet";
import Tecnologia from "./pages/Tecnologia";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element= {<LoginPage/>}/>
        <Route path="/signuppage" element={<SignUpPage/>}/>
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/addtimesheet" element={<AddTimeSheet />} />
        <Route path="/tecnologia" element={<Tecnologia/>} />
      </Routes>
    </div>
  );
}

export default App;
