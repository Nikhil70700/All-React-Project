import React, { useState } from 'react';

function ShortCircuitExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    // Outer wrapper to center the card
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Card structure */}
      <section className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Welcome to ShortCircuit Evaluation!</h1>

        {/* Conditional Rendering using short circuit evaluation */}
        {isLoggedIn && <p className="text-lg mb-3">You are logged in</p>}

        {/* Short circuit evaluation for user message */}
        <p className="text-lg mb-5">
          {user ? `Hello, ${user}` : "Please LogIn!"}
        </p>

        {/* Buttons container */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 px-4 py-2 rounded shadow text-lg"
          >
            Toggle Login
          </button>
          <button
            onClick={() => setUser("Nikhil Pandey")}
            className="bg-green-500 hover:bg-green-600 transition-colors duration-200 px-4 py-2 rounded shadow text-lg"
          >
            Set User
          </button>
          <button
            onClick={() => setUser("")}
            className="bg-red-500 hover:bg-red-600 transition-colors duration-200 px-4 py-2 rounded shadow text-lg"
          >
            Clear User
          </button>
        </div>
      </section>
    </div>
  );
}

export default ShortCircuitExample;
