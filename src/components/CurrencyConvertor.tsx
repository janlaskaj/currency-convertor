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
        <div className="flex flex-col gap-4 w-full bg-white rounded-xl p-6 items-center">
            <div className="text-gray-400 flex flex-col w-full">
                Amount in CZK
                <input
                    type="number"
                    className="text-gray-700 border-2 border-gray-200 shadow-sm rounded py-2 px-4 text-xl font-semibold focus:outline-gray-300"
                />
            </div>
            <div className="text-gray-400 flex flex-col w-full">
                Convert to
                <CurrencyDropdown
                    allCurrencies={data.allCurrencies}
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                />
            </div>
            <button className="text-blue-700 font-semibold border border-blue-500 px-8 py-2 mt-2 w-44 rounded">
                Convert
            </button>
        </div>
    )
}
