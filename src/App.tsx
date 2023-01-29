import { useCurrencyData } from '@src/hooks'
import { CurrencyDropdown } from '@src/components'

function App() {
    const { data, isLoading, error, selectedOption, setSelectedOption } =
        useCurrencyData()

    if (error) return <span>error...</span>

    if (isLoading) return <span>loading...</span>

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
