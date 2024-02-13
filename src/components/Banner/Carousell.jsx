import { TrendingCoins } from "../../Config/api";
import { CryptoState } from "../../CryptoContext";
import { useEffect, useState } from "react";

const Carousell = () => {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(TrendingCoins(currency));
      const data = await response.json();
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  console.log(trending);

  return <div className="h-2/4 flex items-center "></div>;
};

export default Carousell;
