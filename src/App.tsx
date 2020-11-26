import React from 'react'

function App() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src="http://placemorty.us/300/200"
                alt="Display"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-green-500 text-xl mb-2">
                    New User
                </div>
                <p className="text-yellow-700 text-base">
                    Codez the things <span></span>😜
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #Software Engineer
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #Music
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">
                    #CallOFDuty?
                </span>
            </div>
        </div>
    )
}

export default App
