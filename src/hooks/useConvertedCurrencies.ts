import { Currency } from '@src/hooks/useCurrencyData'
import { useState } from 'react'

export type ConvertedCurrency = {
    targetCurrency: Currency
    amount: number
    ts: string // timestamp used for ID in mapping
}

export const useConvertedCurrencies = () => {
    const [convertedCurrencyArray, setConvertedCurrencyArray] = useState<
        ConvertedCurrency[]
    >([])

    return {
        convertedCurrencyArray,
        addConvertedCurrency: (convertedCurrency: ConvertedCurrency) =>
            setConvertedCurrencyArray([
                ...convertedCurrencyArray,
                convertedCurrency,
            ]),
    }
}
