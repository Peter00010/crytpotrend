/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { SingleCoin } from "../../Config/api";
import Coininfo from "../Banner/Coininfo";

const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    try {
      const response = await fetch(SingleCoin(id));
      const data = await response.json();
      setCoin(data);
    } catch (error) {
      console.error("Error fetching coin:", error);
    }
  };
  

console.log(coin);

useEffect(() => {
  fetchCoin();
}, []);


  return (
    <div>
      <div className=" flex flex-col items-center">
        <div>
          <img className="mb-20 mt-10 h-48 "
          src={coin?.image.large}
           alt={coin?.name}
          />
        </div>

      </div>
      <Coininfo coin={coin}/>
    </div>
  )
};

export default Coinpage;
