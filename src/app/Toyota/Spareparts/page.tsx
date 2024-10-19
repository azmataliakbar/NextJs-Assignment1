"use client"
import { useRouter } from "next/navigation";
/* import NavBar from  "@/app/components/navbar"; */
import Link from  "next/link";
// Import the Navbar and Footer components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";



function  Home() {
  const rout = useRouter();
  
  return (

    <div className="app-container bg-black min-h-screen flex flex-col justify-between">
    {/* Included Navbar at the top */}
    <Navbar />
    <main className="flex-grow px-4">
        <h1 className="title text-fuchsia-400 text-center text-2xl md:text-4xl mt-32">Welcome to Web Page of Toyota</h1>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed text-justify">
            Toyota Motor Corporation is a Japanese multinational automotive manufacturer, Date founded , August 28, 1937.Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.
        </p>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-4">
            We deal cars and its spare parts.
        </p>
        
        {/* Reduced space between text and image */}
        <div className="flex items-center justify-center mt-2">
          <Image
            src="/prt1.png" // The correct image path
            alt="Toyota Image" // Descriptive alt text
            width={500} // Set width for the image
            height={200} // Set height for the image
            className="object-cover rounded-lg mb-8"
          />
        </div>
      <ul className="flex flex-wrap gap-x-4 justify-center mb-8">
        <li className="text-green-300 text-sm md:text-2xl"><Link href="/">Main</Link></li>
        <li className=" text-green-300 text-sm md:text-2xl"><Link href="/Toyota">Toyota</Link></li>
        <li className=" text-green-300 text-sm md:text-2xl"><Link href="/Contact">Contact</Link></li>
        <li className=" text-green-300 text-sm md:text-2xl"><Link href="/Gallery">Gallery</Link></li>
      </ul>
      

      <button
          onClick={() => rout.push('/')}
          className="text-fuchsia-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Home
          </button>
          <br />
          <button
          onClick={() => rout.push('/Toyota')}
          className="text-fuchsia-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Toyota
          </button>
          <br />
          <button
          onClick={() => rout.push('/Contact')}
          className="text-fuchsia-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Contact
        </button>
        <br />
        <button
          onClick={() => rout.push('/Gallery')}
          className="text-fuchsia-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Gallery
        </button>

      <h4 className="ml-2 mt-2 mb-16 text-blue-400 text-center">Author: Azmat Ali</h4>

      </main>

      {/* Included Footer at the bottom */}
      <Footer />
    </div>
  );
  
}

export default Home;

