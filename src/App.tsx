import { Homepage } from '@src/pages'

function App() {
    return (
        <div className="h-screen w-full bg-blue-600 p-6">
            <h1 className="mb-4 text-5xl font-extrabold text-white">
                Currency converter
            </h1>
            <h2 className="mb-4 text-white">
                Learn the equivalent of any sum in Czech crowns in the foreign
                currencies
            </h2>
            <Homepage />
        </div>
    )
}

export default App
