import "../../../src/App.css";
import Carousell from "../Banner/Carousell"


const Banner = () => {
    return (
        <div className="banner relative " >
            <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold">CryptoCoin Trend</h1>
            <p className="absolute inset-x-0 bottom-40 text-center text-purple-500">Get all the info on all cryptocurrencies</p>
            
            <Carousell/>
        </div>
    
    );
    };

export default Banner;
