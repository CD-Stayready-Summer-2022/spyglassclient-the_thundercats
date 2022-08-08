import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/page-links/ForgotPassword';
import { SeeAllGoals } from './pages/SeeAllGoals';
import { UpdateGoal } from './pages/UpdateGoal';
import { TestFunctions } from './pages/TestFunctions';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import(ForgotPassword);

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/" element={<SignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/allgoals" element={<SeeAllGoals />} />
                    <Route path="/updategoal" element={<UpdateGoal />} />
                    <Route path="/test" element={<TestFunctions />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
