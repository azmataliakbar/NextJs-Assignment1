
'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error; // Type for the error object
  reset: () => void; // Function to reset the error state
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error); // Log the error to console for debugging
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 bg-red-50 text-red-500">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold hover:bg-blue-200 text-center">
        Oops! Something went wrong.
      </h1>
      <p className="mt-4 text-base sm:text-lg lg:text-xl text-center">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button 
        onClick={reset} 
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-pink-500 transition duration-200 font-bold text-sm sm:text-base lg:text-lg"
      >
        Try Again, Find & Remove errors and check again.
      </button>
      <p className="mt-4 text-sm sm:text-xl lg:text-2xl text-red-500 font-bold text-center hover:bg-blue-200">
        If the problem persists, please contact <u>support</u>.
      </p>
      <p className="text-green-500 text-sm sm:text-xl lg:text-2xl mt-4 text-center">
        Idea given by: Sir. Mubashir.
      </p>
      <p className="text-black text-sm sm:text-xl lg:text-2xl mt-4 text-center">
        Prepared by: Azmat Ali.
      </p>
    </div>
  );
}
