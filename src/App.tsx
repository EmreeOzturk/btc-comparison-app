import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [amount, setAmount] = useState('')
  return (
    <main className=" max-w-3xl mx-auto p-8">
      <h1 className="uppercase text-6xl text-center font-bold
        bg-gradient-to-br from-indigo-400 to-purple-800 bg-clip-text text-transparent from-20%
      ">Find <b>cheapest</b> BTC </h1>
      <div className="flex justify-center mt-10">
        <Input
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
    </main>
  )
}

export default App
