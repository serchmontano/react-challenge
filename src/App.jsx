import React from "react";

function App() {
  return (
    <div className="bg-black flex h-screen items-center justify-center w-screen">
      <div className="flex flex-col gap-8 items-center justify-center max-w-lg p-8 w-full">
        <div className="flex flex-col gap-4 text-center" id="result">
          <h1 className="font-bold text-6xl text-white tracking-widest">
            <span className="bg-green-700 mx-0.5 px-1">Br</span>eaking
          </h1>
          <h1 className="font-bold text-6xl text-white tracking-wider">
            <span className="bg-green-700 mx-0.5 px-1">Ba</span>d
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-full" id="form">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div>
                <label htmlFor="first-name" className="font-bold text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="bg-gray-800 mt-2 p-2 rounded-md text-white w-full"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="font-bold text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="bg-gray-800 mt-2 p-2 rounded-md text-white w-full"
                />
              </div>
            </div>
          </div>

          <button className="bg-green-700 hover:opacity-75 py-1 rounded-md text-white w-full">
            Breakify
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
