import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Authentication/LoginForm";





const Header = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleCloseLoginform = () => {
        setShowLoginForm(false);
    }

const handleLoginClick = () => {
    setShowLoginForm(true)
    }

    return (
        <div>
            <nav className="flex justify-between border-purple-500 border-2 pb-5 ">
                <Link to="/" className="text-xl ml-2 text-4xl text-purple-500 pt-4 font-bold cursor-pointer md:text-3xl md:ml-20">
                    CryptoCoin Trend
                </Link>
                <button onClick={handleLoginClick} className="bg-purple-500 mt-4 px-4 rounded-md hover:bg-purple-950 sm:mr-1 md:mr-20" >
                    Login
                </button>
            </nav>
            {showLoginForm && <LoginForm onClose={handleCloseLoginform}/>}
        </div>
    );
};

export default Header;
