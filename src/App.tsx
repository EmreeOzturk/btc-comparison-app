import { useState, useEffect } from "react"
import AmountInput from "./components/AmountInput"
import ResultRow from "./components/ResultRow"
import axios from 'axios'
function App() {
  const [amount, setAmount] = useState('')
  const [cached, setCached] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('https://hjidbztxxw.us.aircode.run/cachedValues').then((res) => {
      console.log(res.data)
      setCached(res.data)
      setLoading(false)
    }
    )
  }, [])
  return (
    <main className=" max-w-3xl mx-auto p-8">
      <h1 className="uppercase text-6xl text-center font-bold
        bg-gradient-to-br from-indigo-400 to-purple-800 bg-clip-text text-transparent from-20%
      ">Find <b>cheapest</b> BTC </h1>
      <div className="flex justify-center my-6">
        <AmountInput
          value={amount}
          onChange={
            (e) => setAmount(e.target.value)
          }
        />
      </div>
      {
        loading && (
          <div>
            <ResultRow loading={loading} />
            <ResultRow loading={loading} />
            <ResultRow loading={loading} />
            <ResultRow loading={loading} />
            <ResultRow loading={loading} />
          </div>
        )
      }
      <div>
        {
          cached.map((item: {
            id: string,
            provider: string,
            btc: number
          }) => {
            return (
              <ResultRow
                key={item.id}
                loading={loading}
                provider={item?.provider}
                btc={item?.btc}
              />
            )
          }
          )
        }
      </div>
    </main>
  )
}

export default App
