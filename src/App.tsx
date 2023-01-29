import { useCurrencyData } from '@src/hooks/useCurrencyData'
import { CurrencyDropdown } from '@src/components/CurrencyDropdown'

function App() {
    const { data, isLoading, error } = useCurrencyData()

    console.log(data)

    return (
        <div className="App">
            {data && <CurrencyDropdown options={data.exchangeRates} />}
        </div>
    )
}

export default App
