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
                result: (amount / targetCurrency.rate) * targetCurrency.amount,
                ts: new Date().toISOString(),
            },
            ...convertedCurrencyArray,
        ])
    }

    const removeConvertedCurrency = (ts: string) => {
        setConvertedCurrencyArray(
            convertedCurrencyArray.filter(
                (convertedCurrency) => convertedCurrency.ts !== ts
            )
        )
    }

    return {
        convertedCurrencyArray,
        removeConvertedCurrency,
        convertCurrency,
    }
}
