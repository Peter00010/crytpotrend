/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CoinList } from "../../Config/api";
import { CryptoState } from "../../CryptoContext";
// import { useHistory } from "react-router-dom";

export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const { currency, symbol } = CryptoState();
  // const history = useHistory();

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(CoinList(currency));
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    return currentCoins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredCoins = search ? handleSearch() : currentCoins;

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl md:text-4xl font-semibold my-8">Cryptocurrency Prices by Market Cap</h1>
      <div className="mb-8 w-full">
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Search For a Crypto Currency.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <div className="w-full h-2">
          <div className="h-2 bg-purple-500 animate-pulse"></div>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="bg-purple-500">
              <th className="bg-purple-500 text-black">Coin</th>
              <th className="py-2 bg-purple-500 text-black">Price</th>
              <th className="py-2 bg-purple-500 text-black">24h Change</th>
              <th className="py-2 bg-purple-500 text-black">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <tr
                key={coin.id}
                onClick={() => history.push(`/coins/${coin.id}`)}
                className="cursor-pointer hover:bg-gray-800"
              >
                <td className="flex items-center gap-3">
                  <img 
                    src={coin.image}
                    alt={coin.name}
                    className="w-10 h-10"
                  />
                  <div className="mb-5">
                    <span className="text-lg font-semibold uppercase">{coin.symbol}</span>
                    <br />
                    <span className="text-gray-500">{coin.name}</span>
                  </div>
                </td>
                <td>{symbol} {coin.current_price.toFixed(2)}</td>
                <td className={coin.price_change_percentage_24h > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                  {coin.price_change_percentage_24h > 0 ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>{symbol} {coin.market_cap.toString().slice(0, -6)}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-12 mb-5">
        {Array.from({ length: Math.ceil(coins.length / coinsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 rounded-lg ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-gray-800 hover:bg-purple-400 hover:text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
