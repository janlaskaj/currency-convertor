import { useState } from 'react'
import { useQuery } from 'react-query'

export type Currency = {
    country: string
    name: string
    amount: number
    code: string
    rate: number
}
type ExchangeData = { date: string; exchangeRates: Currency[] }

const proxyUrl = 'http://localhost:5001'
const currencyDataUrl =
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
const dateSeparator = '#'
const currencySeparator = '|'
const descriptionLineIndex = 1

const parseCurrencyData = (data?: string) => {
    if (data === undefined) return undefined

    return data.split('\n').reduce<ExchangeData>(
        (previous, current, currentIndex) => {
            // remove last empty line and description line
            if (current.length === 0 || currentIndex === descriptionLineIndex)
                return previous

            // first line with date
            if (currentIndex == 0) {
                previous.date = current.split(dateSeparator)[0]

                return previous
            }

            const [country, name, amount, code, rate] =
                current.split(currencySeparator)

            previous.exchangeRates.push({
                country,
                name,
                amount: Number(amount),
                code,
                rate: Number(rate),
            })
            return previous
        },
        { date: '', exchangeRates: [] }
    )
}

export const useCurrencyData = () => {
    const [selectedOption, setSelectedOption] = useState<Currency | undefined>()

    const { data, isLoading, error } = useQuery(['currencyData'], async () => {
        const response = await fetch(`${proxyUrl}/${currencyDataUrl}`)
        return await response.text()
    })

    return {
        data: parseCurrencyData(data),
        isLoading,
        error,
        selectedOption,
        setSelectedOption,
    }
}
