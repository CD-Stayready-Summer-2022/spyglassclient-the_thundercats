import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import  { Dashboard} from "./pages/dashboard/Dashboard"; 
import { SignIn} from "./pages/SignIn"; 
import {SignUp} from "./pages/SignUp"; 
import { ForgotPassword } from './pages/page-links/ForgotPassword';
import ( ForgotPassword);

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
