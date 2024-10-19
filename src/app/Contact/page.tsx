"use client"
import { useRouter } from "next/navigation";
/* import NavBar from  "@/app/components/navbar"; */
import Link from "next/link";
// Import the Navbar and Footer components
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { GiRotaryPhone } from "react-icons/gi";


function  Home() {
  const rout = useRouter();
  
  return (

    <div className="app-container bg-black min-h-screen flex flex-col justify-between">
      {/* Include Navbar at the top */}
      <Navbar/>

      <main className="flex-grow px-4">
      <h1 className="title text-green-500 text-center text-2xl md:text-4xl mt-32 mb-10"><GiRotaryPhone />Welcome to Contact Web Page</h1>
      <p className="text-gray-100 text-sm md:text-lg leading-relaxed text-justify">
      We had love to hear from you! Whether you have questions, feedback, or suggestions, your thoughts are important to us. Feel free to reach out through any of our communication channels. Our dedicated support team is available to assist you with any inquiries you may have. You can contact us via email, phone, or by filling out the form on this page. 
        </p>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-4 mb-8">
        We strive to respond to all messages within 24-48 hours. If you prefer a more personal touch, you can visit us at our office during business hours. Stay connected with us on social media for the latest updates, announcements, and more. Your feedback helps us improve, so do not hesitate to share your thoughts. We look forward to connecting with you and building a strong relationship. Thank you for choosing us, and we are here to help in any way we can!
        </p>
        <p className="text-yellow-300 font-bold text-center text-2xl mb-10"> Visit us: Super Motors: P-81  PECHS  Khalid Bin Waleed Road Karachi</p>
        <ul className="ml-4 text-white">
          <li>Robert Peterson</li>
          <li>Director Marketing</li>
          <li>abc@supermotor.com</li>
          <li>00-01-777-235-1234</li>
        </ul>
        <br />
        <ul className="ml-4 text-white">
          <li>Michel Anthony</li>
          <li>Manager Marketing</li>
          <li>jkl@supermotor.com</li>
          <li>00-01-777-980-6532</li>
        </ul>
      <ul className="flex flex-wrap gap-x-4 justify-center mt-4 mb-8">
        
        <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl"><Link href="/">Home</Link></li>
        <li className=" text-green-300 hover:text-pink-400 text-sm md:text-2xl"><Link href="/Toyota">Toyota</Link></li>
        <li className=" text-green-300 hover:text-pink-400 text-sm md:text-2xl"><Link href="/Honda">Honda</Link></li>
        <li className=" text-green-300 hover:text-pink-400 text-sm md:text-2xl"><Link href="/Gallery">Gallery</Link></li>
      </ul>
      <button
          onClick={() => rout.push('/')}
          className="text-green-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Home
          </button>
          <br />
          <button
          onClick={() => rout.push('/Toyota')}
          className="text-green-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Toyota
          </button>
          <br />
          <button
          onClick={() => rout.push('/Honda')}
          className="text-green-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Honda
        </button>
        <br />
        <button
          onClick={() => rout.push('/Gallery')}
          className="text-green-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
        Gallery
        </button>
      
      <h4 className="ml-2 mt-2 mb-16 text-pink-400">Author: Azmat Ali</h4>
      </main>

      {/* Include Footer at the bottom */}
      <Footer />
    </div>
  );
  
}

export default Home;