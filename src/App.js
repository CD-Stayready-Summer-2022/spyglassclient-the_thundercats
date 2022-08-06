import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Dashboard} from "./pages/Dashboard"; 
import { SignIn} from "./pages/SignIn"; 
import {SignUp} from "./pages/SignUp"; 
import { ForgotPassword } from './pages/page-links/ForgotPassword';
import { SeeAllGoals } from './pages/SeeAllGoals';
import { UpdateGoal} from './pages/UpdateGoal';
import ( ForgotPassword)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/allgoals" element={<SeeAllGoals/>} />
            <Route path="/updategoal" element={<UpdateGoal/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
