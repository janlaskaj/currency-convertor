import { CurrencyConvertor } from '@src/components/'
import { ConvertedCurrencyComponent } from '@src/components/'
import { useConvertedCurrencies } from '@src/hooks/'

export const Homepage = () => {
    const { convertCurrency, removeConvertedCurrency, convertedCurrencyArray } =
        useConvertedCurrencies()

    return (
        <div className="flex flex-col gap-6">
            <CurrencyConvertor convertCurrency={convertCurrency} />
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                {convertedCurrencyArray.map((convertedCurrency) => (
                    <ConvertedCurrencyComponent
                        key={convertedCurrency.ts}
                        convertedCurrency={convertedCurrency}
                        removeConvertedCurrency={removeConvertedCurrency}
                    />
                ))}
            </div>
        </div>
    )
}
