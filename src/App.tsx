import { useState, useEffect } from "react"
import AmountInput from "./components/AmountInput"
import ResultRow from "./components/ResultRow"
import axios from 'axios'
import paybis from "./assets/paybis.png"
import banxa from "./assets/banxa.png"
import moonpay from "./assets/moonpay.png"
import transak from "./assets/transak.png"
import guardian from "./assets/guardian.svg"
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
  const logos: { [key: string]: string } = {
    paybis,
    banxa,
    moonpay,
    transak,
    guardian
  }
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
                logo={logos[item.provider]}
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
