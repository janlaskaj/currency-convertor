import { Currency } from '@src/hooks/useCurrencyData'
import { useState } from 'react'

export type ConvertedCurrency = {
    targetCurrency: Currency
    amount: number
    result: number
    ts: string // timestamp used for ID in mapping
}

export const useConvertedCurrencies = () => {
    const [convertedCurrencyArray, setConvertedCurrencyArray] = useState<
        ConvertedCurrency[]
    >([])

    const convertCurrency = (targetCurrency: Currency, amount: number) => {
        setConvertedCurrencyArray([
            {
                targetCurrency,
                amount,
                result: (targetCurrency.rate * amount) / targetCurrency.amount,
                ts: new Date().toISOString(),
            },
            ...convertedCurrencyArray,
        ])
    }

    return {
        convertedCurrencyArray,
        convertCurrency,
    }
}
