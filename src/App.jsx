import { useState } from 'react'
import './index.css'

function App() {
    const [results, setResults] = useState(null);
    const apiKey = import.meta.env.VITE_FINNHUB_API_KEY;

    async function searchSymbol(symbol) {
        console.log(import.meta.env.VITE_FINNHUB_API_KEY);
        try {
            const response = await fetch(
                `https://finnhub.io/api/v1/search?q=${symbol}&token=${apiKey}`
            )
            const data = await response.json();
            setResults(data || "No Data");
        } catch (error) {
            console.error("Error fetching symbol:", error)
       }
    }


  return (
      <>
          <h1>Stock Dashboard</h1>
          {/* <button
              onClick={getStockPrice}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >Get Stock Price</button> */}
           <button onClick={() => searchSymbol("AAPL")}>Search AAPL</button>
          
{results && results.result && (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-3">Search Results</h3>

    <div className="grid gap-3">
      {results.result.map((item) => (
        <div
          key={item.symbol}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-800">
                {item.displaySymbol}
              </h4>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
            <p className="text-sm font-medium text-gray-700">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


    </>
  )
}

export default App
