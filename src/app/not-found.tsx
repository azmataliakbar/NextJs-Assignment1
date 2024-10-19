export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8 md:p-12 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-green-400 font-bold">
        We could not find the page you are looking for.
      </p>
      <a
        href="/"
        className="mt-6 text-lg md:text-xl text-blue-500 underline hover:text-red-500"
      >
        Go back home
      </a>
      <p className="text-lg md:text-2xl mt-4 text-pink-400">
        Idea given by: Sir.Mubashir.
      </p>
      <p className="text-xl md:text-2xl mt-4 text-white">
        Prepared by: Azmat Ali.
      </p>
    </div>
  );
}

