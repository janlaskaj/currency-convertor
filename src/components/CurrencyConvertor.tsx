import { CurrencyDropdown, Spinner } from '@src/components'
import { useCurrencyData } from '@src/hooks'

export const CurrencyConvertor: React.FC<{}> = ({}) => {
    const { data, isLoading, error, selectedCurrency, setSelectedCurrency } =
        useCurrencyData()

    if (isLoading)
        return (
            <div className="flex w-full justify-center">
                <Spinner />
            </div>
        )

    if (error || !data) return <span>error...</span>

    return (
        <div className="flex flex-col w-full bg-white rounded-xl p-6">
            <label className="text-gray-500">
                Amount in CZK
                <input
                    type="number"
                    className="border-2 border-gray-200 shadow-sm rounded"
                />
            </label>
            <CurrencyDropdown
                allCurrencies={data.allCurrencies}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
            />
        </div>
    )
}
