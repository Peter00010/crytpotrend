// Navbar.jsx
import { useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [currency, setCurrency] = useState("USD");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleChangeCurrency = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <nav
        className={
            ("flex",
            "justify-between",
            "items-center",
            "p-4",
            { "bg-white": theme === "light", "bg-gray-800": theme === "dark" })
        }
        >
        <div className="flex justify-between">
            <div className="text-purple-500 font-bold text-3xl ml-24 pt-6 ">
            CryptoCoin Trend
            </div>
            <div className="flex items-center mr-24 mt-6">
            <button
                className="bg-purple-500 text-white px-4 py-2 rounded mr-10"
                onClick={toggleTheme}
            >
                {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <div className="relative ml-4">
                <select
                className="bg-transparent border border-white text-white px-4 py-2 rounded mr-12"
                value={currency}
                onChange={handleChangeCurrency}
                >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                </select>
            </div>
            <button className="bg-purple-500 text-white px-4 py-2 ml-4 rounded mr-11">
                Login
            </button>
            </div>
        </div>
        </nav>
    );
    };

export default Navbar;
