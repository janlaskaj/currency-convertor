import { CurrencyDropdown, Spinner } from '@src/components'
import { Currency, useCurrencyData } from '@src/hooks'
import { useState } from 'react'
import { AmountInput } from './AmountInput'
import { ConvertButton } from './ConvertButton'

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
            <AmountInput
                amountToConvert={amountToConvert}
                setAmountToConvert={setAmountToConvert}
            />
            <div className="flex w-full flex-col text-gray-400">
                Convert to
                <CurrencyDropdown
                    allCurrencies={allCurrencies}
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                />
            </div>
            <ConvertButton
                amountToConvert={amountToConvert}
                convertCurrency={convertCurrency}
                selectedCurrency={selectedCurrency}
            />
        </div>
    )
}
