import { useCurrencyData } from '@src/hooks'
import { CurrencyDropdown } from '@src/components'

function App() {
    const { data, isLoading, error, selectedOption, setSelectedOption } =
        useCurrencyData()

    console.log(data)

    return (
        <div className="App">
            {data && (
                <CurrencyDropdown
                    options={data.exchangeRates}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            )}
        </div>
    )
}

export default App
