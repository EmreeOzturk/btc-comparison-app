import { useState, useEffect } from "react"
import AmountInput from "./components/AmountInput"
import ResultRow from "./components/ResultRow"
import axios from 'axios'
import paybis from "./assets/paybis.png"
import banxa from "./assets/banxa.png"
import moonpay from "./assets/moonpay.png"
import transak from "./assets/transak.png"
import guardian from "./assets/guardian.svg"
import Header from "./components/Header"
function App() {
  const [amount, setAmount] = useState('')
  const [cached, setCached] = useState([])
  const [loading, setLoading] = useState(true)
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
    <main className={`max-w-3xl mx-auto p-8 ${!amount && 'h-screen' }`}>
      <Header />
      <AmountInput
        value={amount}
        onChange={
          (e) => setAmount(e.target.value)
        }
      />
      {
        !amount ? (
          <div className="flex justify-center my-6">
            <div className='bg-blue-950 border border-white/10 rounded-md'>
              <span className='text-white/60  px-4'>
                Enter Amount
              </span>
            </div>
          </div>
        ) : (
          loading ? (
            <div>
              <ResultRow loading={true} />
              <ResultRow loading={true} />
              <ResultRow loading={true} />
              <ResultRow loading={true} />
              <ResultRow loading={true} />
            </div>
          ) : <div>
            {
              cached.map((item: {
                id: string,
                provider: string,
                btc: string
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
        )
      }

    </main>
  )
}

export default App
