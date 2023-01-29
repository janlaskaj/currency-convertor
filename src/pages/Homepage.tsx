import { CurrencyDropdown } from '@src/components'
import { CurrencyConvertor } from '@src/components/'
import { useCurrencyData } from '@src/hooks'
import { useConvertedCurrencies } from '@src/hooks/useConvertedCurrencies'

export const Homepage = () => {
    const { convertCurrency, convertedCurrencyArray } = useConvertedCurrencies()
    return <CurrencyConvertor convertCurrency={convertCurrency} />
}
