/* eslint-disable react/jsx-key */
import { TrendingCoins } from "../../Config/api";
import { CryptoState } from "../../CryptoContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

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

  const items = trending.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link
        to={`/coins/${coin.id}`}
        className="flex flex-col items-center cursor-pointer uppercase text-white"
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          className="mb-2 h-16"
        />
        <span>
          {coin?.symbol}&nbsp;
          <span
            className={`font-semibold ${
              profit ? "text-green-500" : "text-red-500"
            }`}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span className="text-lg font-semibold">
          {symbol} {coin?.current_price.toFixed(2)}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="h-2/4 flex items-center">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
