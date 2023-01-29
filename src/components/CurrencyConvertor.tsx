import { CurrencyDropdown, Spinner } from '@src/components'
import { useCurrencyData } from '@src/hooks'

export const CurrencyConvertor: React.FC<{}> = ({}) => {
    const { data, isLoading, error, selectedCurrency, setSelectedCurrency } =
        useCurrencyData()

    if (error) return <span>error...</span>

    if (isLoading)
        return (
            <div className="flex w-full justify-center">
                <Spinner />
            </div>
        )

    return data ? (
        <CurrencyDropdown
            allCurrencies={data.allCurrencies}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
        />
    ) : null
}
