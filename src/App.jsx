import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Coinpage from "./components/Pages/Coinpage";
import Header from "./components/Header";

const App = () => {
    
    return (
        <BrowserRouter>
        <Header/> 
            <Routes>
                <Route path="/" element={<Homepage />}  exact/>
                <Route path="/coins/:id" element={<Coinpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
