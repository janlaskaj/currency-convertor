import { useState } from 'react'
import { useCurrencyData } from '@src/hooks/useCurrencyData'

function App() {
    const { data, isLoading, error } = useCurrencyData()

    console.log(data)

    return <div className="App">hello</div>
}

export default App
