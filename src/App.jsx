import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMatchingElements } from "./redux/challengeSlice";

function App() {
  const dispatch = useDispatch();
  const firstWord = useSelector((state) => state.challenge.firstWord);
  const secondWord = useSelector((state) => state.challenge.secondWord);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormat = () => {
    dispatch(
      findMatchingElements({ firstWord: firstName, secondWord: lastName })
    );
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="bg-black flex h-screen items-center justify-center w-screen">
      <div className="flex flex-col gap-8 items-center justify-center max-w-lg p-8 w-full">
        <div className="flex flex-col gap-4 text-center" id="result">
          <h1 className="font-bold text-6xl text-white tracking-widest">
            {firstWord.map((letter, index) => {
              if (letter[1]) {
                return (
                  <span key={index} className="bg-green-700 mx-0.5 px-1">
                    {letter[0]}                    
                  </span>
                );
              } else {
                return <span key={index}>{letter[0]}</span>;
              }
            })}
          </h1>
          <h1 className="font-bold text-6xl text-white tracking-wider">
            {secondWord.map((letter, index) => {
              if (letter[1]) {
                return (
                  <span key={index} className="bg-green-700 mx-0.5 px-1">
                    {letter[0]}
                  </span>
                );
              } else {
                return <span key={index}>{letter[0]}</span>;
              }
            })}
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-gray-800 mt-2 p-2 rounded-md text-white w-full"
                />
              </div>
            </div>
          </div>

          <button
            className="bg-green-700 hover:opacity-75 py-1 rounded-md text-white w-full"
            onClick={handleFormat}
          >
            Breakify
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
