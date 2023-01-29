import { Menu, Transition } from '@headlessui/react'
import { Currency } from '@src/hooks'
import { ChevronDown } from '@src/icons'
import { Fragment } from 'react'

export const CurrencyDropdown: React.FC<{
    allCurrencies: Currency[]
    selectedCurrency?: Currency
    setSelectedCurrency: (option: Currency) => void
}> = ({ allCurrencies, selectedCurrency, setSelectedCurrency }) => (
    <div className="text-right">
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="w-14">
                        {selectedCurrency?.code ?? 'Currency'}
                    </span>
                    <ChevronDown />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-16 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {allCurrencies.map((currency) => (
                            <Menu.Item key={currency.code}>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-gray-900'
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
    </div>
)
