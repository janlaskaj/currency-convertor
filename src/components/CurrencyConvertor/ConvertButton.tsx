import { Currency } from '@src/hooks'

export const ConvertButton: React.FC<{
    selectedCurrency: Currency | undefined
    amountToConvert: number | undefined
    convertCurrency: (targetCurrency: Currency, amount: number) => void
}> = ({ amountToConvert, convertCurrency, selectedCurrency }) => {
    return (
        <button
            className="mt-2 w-44 rounded border border-blue-500 px-8 py-2 font-semibold text-blue-700 disabled:border-gray-300 disabled:text-gray-300 lg:mt-0 lg:mb-1"
            onClick={
                selectedCurrency && amountToConvert
                    ? () => convertCurrency(selectedCurrency, amountToConvert)
                    : undefined
            }
            disabled={selectedCurrency === undefined || !amountToConvert}
        >
            Convert
        </button>
    )
}
