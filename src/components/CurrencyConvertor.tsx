import { CurrencyDropdown, Spinner } from '@src/components'
import { Currency, useCurrencyData } from '@src/hooks'
import { useState } from 'react'

export const CurrencyConvertor: React.FC<{
    convertCurrency: (targetCurrency: Currency, amount: number) => void
}> = ({ convertCurrency }) => {
    const [amountToConvert, setAmountToConvert] = useState<number>()
    const {
        allCurrencies,
        isLoading,
        error,
        selectedCurrency,
        setSelectedCurrency,
    } = useCurrencyData()

    if (isLoading)
        return (
            <div className="flex w-full justify-center">
                <Spinner />
            </div>
        )

    if (error || !allCurrencies) return <span>error...</span>

    return (
        <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-xl lg:flex-row lg:items-end">
            <div className="flex w-full flex-col text-gray-400">
                Amount in CZK
                <input
                    type="number"
                    value={amountToConvert || ''}
                    step="any"
                    onChange={(event) =>
                        setAmountToConvert(Number(event.target.value))
                    }
                    className="rounded border-2 border-gray-200 py-2 px-4 text-xl font-semibold text-gray-700 shadow-sm focus:outline-gray-300"
                />
            </div>
            <div className="flex w-full flex-col text-gray-400">
                Convert to
                <CurrencyDropdown
                    allCurrencies={allCurrencies}
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                />
            </div>
            <button
                className="mt-2 w-44 rounded border border-blue-500 px-8 py-2 font-semibold text-blue-700 disabled:border-gray-300 disabled:text-gray-300 lg:mt-0 lg:mb-1"
                onClick={
                    selectedCurrency && amountToConvert
                        ? () =>
                              convertCurrency(selectedCurrency, amountToConvert)
                        : undefined
                }
                disabled={selectedCurrency === undefined || !amountToConvert}
            >
                Convert
            </button>
        </div>
    )
}
