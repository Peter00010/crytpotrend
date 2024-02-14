import { CryptoState } from "../CryptoContext";

const Header = () => {

    const { currency, setCurrency } = CryptoState();

    return (
        <div>
        <nav className="flex justify-between border-purple-500 border-2 pb-5 ">
            <h1 className=" text-xl ml-2 text-4xl text-purple-500 pt-4 font-bold cursor-pointer md:text-3xl md:ml-20">
            CryptoCoin Trend
            </h1>
            <select className="bg-transparent mt-4 mr-20"
            value={currency} onChange={ (e) => setCurrency(e.target.value)}
            >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            </select>
            <button className="bg-purple-500 mt-4 px-4 rounded-md hover:bg-purple-950 sm: mr-1 md:mr-20">
            Login
            </button>
        </nav>
        </div>
    );
    };

export default Header;
