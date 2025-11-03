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
          
          {results && 
            <div>
                <h3>Results:</h3>
                <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
           }

    </>
  )
}

export default App
