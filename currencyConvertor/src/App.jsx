import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to, setTo] = useState('eur')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo) 

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    //  const rate = currencyInfo[to]
    // if (!rate || isNaN(parseFloat(amount))) {
    //   alert("Conversion rate not available or invalid amount.")
    //   return
    // }
    // setConvertedAmount((parseFloat(amount) * rate).toFixed(2))
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1661674291/photo/1-2-5-10-100-different-dollar-bills-in-a-pile-as-background.jpg?s=612x612&w=0&k=20&c=YDZk5sckdtgkQbQYESUN_SWsUx38ZCg0kvOITnxFX4k=')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectedCurrency={from}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectedCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                    
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
