import { useState } from 'react'
import { useQuery } from 'react-query'

export type Currency = {
    country: string
    name: string
    amount: number
    code: string
    rate: number
}

const proxyUrl = 'http://localhost:5001'
const exchangeDataUrl =
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
const dateSeparator = '#'
const exchangeDataSeparator = '|'
const dateLineIndex = 0
const descriptionLineIndex = 1

const parseExchangeData = (data?: string) => {
    if (data === undefined) return undefined

    return data
        .split('\n')
        .reduce<Currency[]>((previous, current, currentIndex) => {
            // remove last empty line, description line and date line
            if (
                current.length === 0 ||
                currentIndex === descriptionLineIndex ||
                currentIndex === dateLineIndex
            )
                return previous

            const [country, name, amount, code, rate] = current.split(
                exchangeDataSeparator
            )

            previous.push({
                country,
                name,
                amount: Number(amount),
                code,
                rate: Number(rate),
            })
            return previous
        }, [])
}

export const useCurrencyData = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<
        Currency | undefined
    >()

    const { data, isLoading, error } = useQuery(['currencyData'], async () => {
        const response = await fetch(`${proxyUrl}/${exchangeDataUrl}`)
        return await response.text()
    })

    return {
        allCurrencies: parseExchangeData(data),
        isLoading,
        error,
        selectedCurrency,
        setSelectedCurrency,
    }
}
