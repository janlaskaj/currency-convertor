import { CurrencyDropdown } from '@src/components'
import { useCurrencyData } from '@src/hooks'

export const Homepage = () => {
    const { data, isLoading, error, selectedCurrency, setSelectedCurrency } =
        useCurrencyData()

    if (error) return <span>error...</span>

    if (isLoading) return <span>loading...</span>

    return data ? (
        <CurrencyDropdown
            allCurrencies={data.allCurrencies}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
        />
    ) : null
}
