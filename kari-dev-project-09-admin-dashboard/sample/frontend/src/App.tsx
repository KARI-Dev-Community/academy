import { useState } from 'react'
import axios from 'axios'

const API = '/api'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<any>(null)

  const callApi = async () => {
    try {
      const res = await axios.get(API)
      setData(res.data)
    } catch (e) {
      setData({ error: 'API not reachable' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          React dashboard with charts
        </h1>
        <p className="text-gray-600 mb-6">
          Stats cards, revenue chart, and user table.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCount((c: number) => c + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Count is {count}
          </button>
          <button
            onClick={callApi}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Call API
          </button>
        </div>
        {data && (
          <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <p className="mt-4 text-xs text-gray-400">
          Frontend: React + TypeScript + TailwindCSS
        </p>
      </div>
    </div>
  )
}

export default App
