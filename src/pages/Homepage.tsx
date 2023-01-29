import { CurrencyConvertor } from '@src/components/'
import { useConvertedCurrencies } from '@src/hooks/useConvertedCurrencies'
import { Trash } from '@src/icons'

export const Homepage = () => {
    const { convertCurrency, removeConvertedCurrency, convertedCurrencyArray } =
        useConvertedCurrencies()
    return (
        <div className="flex flex-col gap-6">
            <CurrencyConvertor convertCurrency={convertCurrency} />
            <div className="flex flex-col gap-4">
                {convertedCurrencyArray.map((convertedCurrency) => (
                    <div
                        key={convertedCurrency.ts}
                        className="relative flex flex-col items-center gap-3 rounded-xl bg-white p-2 text-gray-500"
                    >
                        <button
                            className="absolute top-2 right-2 rounded p-1 hover:bg-gray-200"
                            onClick={() =>
                                removeConvertedCurrency(convertedCurrency.ts)
                            }
                        >
                            <Trash />
                        </button>

                        <span>{convertedCurrency.amount} CZK</span>
                        <span className="text-3xl font-extrabold text-blue-500">
                            {convertedCurrency.result.toFixed(3)}{' '}
                            {convertedCurrency.targetCurrency.code}
                        </span>
                        <span>
                            1 CZK ={' '}
                            {(
                                1 / convertedCurrency.targetCurrency.rate
                            ).toFixed(3)}{' '}
                            {convertedCurrency.targetCurrency.code}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
