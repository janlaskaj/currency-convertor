import { Homepage } from '@src/pages'

function App() {
    return (
        <div className="w-full h-screen bg-blue-600 p-6">
            <h1 className="text-white font-extrabold text-5xl mb-4">
                Currency converter
            </h1>
            <h2 className="text-white mb-4">
                Learn the equivalent of any sum in Czech crowns in the foreign
                currencies
            </h2>
            <Homepage />
        </div>
    )
}

export default App
