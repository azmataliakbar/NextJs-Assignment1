"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

function Home() {
  const rout = useRouter();

  return (
    <div className="app-container bg-black min-h-screen flex flex-col justify-between">
      {/* Navbar at the top */}
      <Navbar />
      <main className="flex-grow px-4">
        <h1 className="title text-fuchsia-400 text-center text-2xl md:text-4xl mt-32">
          Welcome to Web Page of Toyota
        </h1>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed text-justify">
          Toyota Motor Corporation is a Japanese multinational automotive manufacturer, Date founded, August 28, 1937.
          Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.
        </p>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-4">
          We deal cars and its spare parts.
        </p>

        {/* Adjusted image size for responsiveness */}
        <div className="flex items-center justify-center mt-2">
          <Image
            src="/crl1.png" // The correct image path
            alt="Toyota Image" // Descriptive alt text
            width={800} // Set width for the image
            height={500} // Set height for the image
            className="object-cover rounded-lg mb-8"
          />
        </div>

        <ul className="flex flex-wrap gap-x-4 justify-center mb-8">
          <li className="text-green-300 text-sm md:text-2xl"><Link href="/">Home</Link></li>
          <li className="text-green-300 text-sm md:text-2xl"><Link href="/Toyota/Spareparts">SpareParts</Link></li>
          <li className="text-green-300 text-sm md:text-2xl"><Link href="/Contact">Contact</Link></li>
          <li className="text-green-300 text-sm md:text-2xl"><Link href="/Gallery">Gallery</Link></li>
        </ul>

        <button
          onClick={() => rout.push('/')}
          className="text-fuchsia-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Home
        </button>
        <br />
        <button
          onClick={() => rout.push('/Toyota/Spareparts')}
          className="text-fuchsia-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          SpareParts
        </button>
        <br />
        <button
          onClick={() => rout.push('/Contact')}
          className="text-fuchsia-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Contact
        </button>
        <br />
        <button
          onClick={() => rout.push('/Gallery')}
          className="text-fuchsia-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Gallery
        </button>

        <h4 className="ml-2 mt-2 mb-16 text-green-400 text-center">Author: Azmat Ali</h4>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;
