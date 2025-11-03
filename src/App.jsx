import { useState } from 'react'
import './index.css'

function App() {

    function handleClick() {
        console.log("in click")
    }

  return (
      <>
          <h1>Stockn Dashboard</h1>
          <button
              onClick={handleClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >Fetch Data</button>

          <div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
          </div>
           
          <div>
              <div className="flex items-center gap-1.5 sm:flex-col"><div className="bg-sky-100"></div><p className="text-center font-mono text-xs text-gray-600 dark:text-gray-400">100</p></div>
  <div className="bg-sky-50">x</div>
  <div className="bg-sky-100"></div>
  <div className="bg-sky-200"></div>
  <div className="bg-sky-300"></div>
  <div className="bg-sky-400"></div>
  <div className="bg-sky-500"></div>
  <div className="bg-sky-600"></div>
  <div className="bg-sky-700"></div>
  <div className="bg-sky-800"></div>
  <div className="bg-sky-900"></div>
  <div className="bg-sky-950"></div>
          </div>
          
<div className="w-6 h-6 bg-red-500">xxx</div>


    </>
  )
}

export default App
