export const AmountInput: React.FC<{
    amountToConvert: number | undefined
    setAmountToConvert: (amount: number) => void
}> = ({ amountToConvert, setAmountToConvert }) => {
    return (
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
    )
}
