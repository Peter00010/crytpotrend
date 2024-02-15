import "../../../src/App.css";
import Carousell from "../Banner/Carousell"


const Banner = () => {
    return (
        <div className="banner relative  " >
            <h1 className="text-3xl  absolute inset-0 flex items-center justify-center md:text-5xl font-bold md:pb-8">CryptoCoin Trend</h1>
            <p className="absolute inset-x-0 bottom-40 text-center text-purple-500  ">Get all the info on all cryptocurrencies</p>
            
            <Carousell/>
        </div>
    
    );
    };

export default Banner;
