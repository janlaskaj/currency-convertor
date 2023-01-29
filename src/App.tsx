import { Homepage } from '@src/pages'

function App() {
    return (
        <div className="flex h-full min-h-screen w-full flex-col items-center bg-blue-600 py-10 px-6">
            <div className="w-full max-w-5xl">
                <h1 className="mb-4 text-5xl font-extrabold text-white">
                    Currency converter
                </h1>
                <h2 className="mb-4 text-white">
                    Learn the equivalent of any sum in Czech crowns in the
                    foreign currencies
                </h2>
                <Homepage />
            </div>
        </div>
    )
}

export default App
