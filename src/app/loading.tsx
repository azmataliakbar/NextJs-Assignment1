// src/app/loading.tsx
export default function Loading() {
  console.log("Custom loading...");
  return (
    <div className="text-center p-10 md:p-20 bg-black min-h-screen">
      <h2 className="text-yellow-300 text-3xl md:text-5xl mt-10 md:mt-20">
        Loading, please wait...
      </h2>
      <p className="text-green-400 text-lg md:text-2xl mt-4">
        We are preparing the page for you.
      </p>
      <p className="text-blue-400 text-lg md:text-2xl mt-4">
        Idea given by: Sir.Mubashir.
      </p>
      <p className="text-white text-lg md:text-2xl mt-4">
        Prepared by: Azmat Ali.
      </p>
    </div>
  );
}

