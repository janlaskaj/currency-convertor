import { CurrencyDropdown } from '@src/components'
import { useCurrencyData } from '@src/hooks'

export const Homepage = () => {
    const { data, isLoading, error, selectedOption, setSelectedOption } =
        useCurrencyData()

    if (error) return <span>error...</span>

    if (isLoading) return <span>loading...</span>

    return data ? (
        <CurrencyDropdown
            options={data.exchangeRates}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
    ) : null
}
