import React, { useState } from 'react';
import './ShortCircuit.css';

function ShortCircuitExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section className="m-0 p-6 mx-5 text-white rounded-lg shadow-xl text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl mt-3 font-serif font-bold">
        Welcome to ShortCircuit Evaluation!
      </h1>

      {/* Conditional Rendering using short circuit evaluation */}
      {isLoggedIn && <p className="text-xl mt-4">You are logged in</p>}

      {/* Short circuit evaluation for user message */}
      <p className="text-lg mt-2">
        {user ? `Hello, ${user}` : "Please LogIn!"}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-500 hover:bg-blue-600 transition-colors transition-transform duration-200 ease px-4 py-2 rounded shadow text-lg"
        >
          Toggle Login State
        </button>
        <button
          onClick={() => setUser("Nikhil Pandey")}
          className="bg-blue-500 hover:bg-blue-600 transition-colors transition-transform duration-200 ease px-4 py-2 rounded shadow text-lg"
        >
          Set User
        </button>
        <button
          onClick={() => setUser("")}
          className="bg-blue-500 hover:bg-blue-600 transition-colors transition-transform duration-200 ease px-4 py-2 rounded shadow text-lg"
        >
          Clear User
        </button>
      </div>
    </section>
  );
}

export default ShortCircuitExample;
