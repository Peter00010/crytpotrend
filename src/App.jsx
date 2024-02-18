import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Coinpage from "./components/Pages/Coinpage";
import Header from "./components/Header";
import SignupForm from "./components/Authentication/SignupForm";
import LoginForm from "./components/Authentication/LoginForm";

const App = () => {
    
    return (
        <BrowserRouter>
        <Header/> 
            <Routes>
                <Route path="/" element={<Homepage />}  exact/>
                <Route path="/coins/:id" element={<Coinpage />} />
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
