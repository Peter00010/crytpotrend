/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { SingleCoin } from "../../Config/api";
import HTMLReactParser from "html-react-parser";

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
          <img
            className="mb-3 mt-10 h-44 "
            src={coin?.image.large}
            alt={coin?.name}
          />
          <h1 className="font-semibold text-3xl ml-12">{coin?.name}</h1>
        </div>
        <div className="px-5 py-7 md:px-20">
          {coin?.description.en &&
            HTMLReactParser(coin?.description.en, {
              transform: (node, index) => {
                if (node.type === "tag" && node.name === "p") {
                  return (
                    <p key={index} className="text-gray-600">
                      {node.children}
                    </p>
                  );
                }
                return node;
              },
            })}

          <div className="flex items-center flex-col justify-center text-2xl mt-9 md:text-3xl ">
            <div className="flex">
              <span className="text-purple-500">Rank:</span>
              <span> {coin?.market_cap_rank}</span>
            </div>
            <div>
              <span className="text-purple-500">Current Price: </span>
              <span>
                {symbol}
                {coin?.market_data.current_price[currency.toLowerCase()]}
              </span>
            </div>

            <div>
              <span className="text-purple-500">Market Cap:</span>{" "}
              <span>
                {coin?.market_data.market_cap[currency.toLowerCase()]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinpage;
