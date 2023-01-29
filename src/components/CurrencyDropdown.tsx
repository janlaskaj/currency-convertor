import { Menu, Transition } from '@headlessui/react'
import { Currency } from '@src/hooks'
import { ChevronDown } from '@src/icons'
import { Fragment } from 'react'

export const CurrencyDropdown: React.FC<{
    allCurrencies: Currency[]
    selectedCurrency?: Currency
    setSelectedCurrency: (option: Currency) => void
}> = ({ allCurrencies, selectedCurrency, setSelectedCurrency }) => (
    <Menu as="div" className="relative inline-block">
        <Menu.Button className="text-gray-700 inline-flex w-full justify-center items-center gap-2 rounded px-4 py-2 text-xl font-medium border-2 border-gray-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="w-14">{selectedCurrency?.code ?? 'Currency'}</span>
            <ChevronDown />
        </Menu.Button>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 mt-2 w-24 h-60 overflow-scroll origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    {allCurrencies.map((currency) => (
                        <Menu.Item key={currency.code}>
                            {({ active }) => (
                                <button
                                    className={`text-gray-700 ${
                                        active ? 'bg-blue-400' : ''
                                    } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                                    onClick={() =>
                                        setSelectedCurrency(currency)
                                    }
                                >
                                    {currency.code}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
)
