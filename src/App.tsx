import { useState, useEffect } from "react"
import AmountInput from "./components/AmountInput"
import ResultRow from "./components/ResultRow"
import axios from 'axios'
import Header from "./components/Header"
import { Fade } from "react-awesome-reveal";
import { Cached } from "../types";
import { LOGOS, CACHED_URL } from "./consts.ts"

function App() {
  const [amount, setAmount] = useState('')
  const [cached, setCached] = useState<Cached[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(CACHED_URL).then((res) => {
      console.log(res.data)
      setCached(res.data)
      setLoading(false)
    }
    )
  }, [])
  return (
    <main className={`max-w-3xl mx-auto p-8 ${!amount && 'h-screen'}`}>
      <Fade cascade>
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
                cached.sort((a: Cached, b: Cached) => parseFloat(b.btc) - parseFloat(a.btc)).map((item: Cached) => {
                  return (
                    <Fade cascade key={item.id}>
                      <ResultRow
                        logo={LOGOS[item.provider] as string}
                        key={item.id}
                        loading={loading}
                        provider={item?.provider}
                        btc={
                          (+amount * parseFloat(item.btc) / 100).toString()
                        }
                      />
                    </Fade>
                  )
                }
                )
              }
            </div>
          )
        }
      </Fade>
    </main>
  )
}

export default App
