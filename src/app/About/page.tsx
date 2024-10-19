"use client";
import Link from "next/link";
import Image from "next/image"; 
import {useState} from "react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


export default function NavBar2(){

const [isOpen, setIsOpen] = useState(false)

const onClickHandler = () => {
  setIsOpen(!isOpen)
};

return (
  <div className="px-2">
    
    <main>
      <header className="bg-slate-700 text-white font-semibold py-4 rounded-lg mt-4">
          <button title="button" onClick={onClickHandler}>
            {!isOpen ? <FaBars size = {20} className="md:hidden lg:hidden block ml-2 text-white"/> : <FaTimesCircle size = {20} className="md:hidden lg:hidden block text-white" />}
          </button>
          <nav className="hidden md:block lg:block ml-4">
            <ul className="flex flex-row justify-center gap-8 mb-4">
              <li>
              <Link href="/" className="text-white hover:text-yellow-300">Home</Link>
              </li>
              <li>
                About
              </li>
              <li>
                Projects
              </li>
              <li>
                Skills
              </li>
              <li>
                Contact
              </li>
            </ul>
          </nav>
          {isOpen &&
            <nav className="md:hidden lg:hidden">
              <ul className="flex flex-col justify-center gap-4">
                <li>
                  Home
                </li>
                <li>
                  About
                </li>
                <li>
                  Projects
                </li>
                <li>
                  Skills
                </li>
                <li>
                  Contact
                </li>
              </ul>
            </nav>
          }
          
      </header>
    </main>
    <p className="text-blue-400 text-center font-bold text-xl font-serif">This is a display page only.</p>
    <p className="text-green-400 text-center font-bold text-xl font-serif">In this page, I am practicing nav bar & grid.</p>
    <div className="grid grid-cols-3 gap-4 text-center bg-white p-6 rounded-lg mt-8">
    <div className="bg-blue-500 p-4 rounded-lg">01</div>
    <div className="bg-blue-500 p-4 rounded-lg">02</div>
    <div className="bg-blue-500 p-4 rounded-lg">03</div>
    <div className="bg-blue-500 p-4 rounded-lg">04</div>
    <div className="bg-blue-500 p-4 rounded-lg">05</div>
    <div className="bg-blue-500 p-4 rounded-lg">06</div>
    <div className="bg-blue-500 p-4 rounded-lg">07</div>
    <div className="bg-blue-500 p-4 rounded-lg">08</div>
    <div className="bg-blue-500 p-4 rounded-lg">09</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white mt-8 rounded-lg">
  <div className="bg-red-400 p-1 rounded-lg">
    <h4 className="text-white font-bold font-serif text-3xl md:text-5xl text-center">Hello World</h4>
  </div>
  <div className="bg-red-400 p-4 rounded-lg">
    <h4 className="text-white font-bold font-serif text-lg md:text-xl text-center">Prepared By: Azmat Ali</h4>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white mt-8 rounded-lg mb-5">
  <div className="bg-red-400 p-1 rounded-lg">
    <h4 className="text-white font-bold font-serif text-3xl md:text-5xl text-center">Sir Mubashir</h4>
  </div>
  <div className="bg-red-400 p-4 rounded-lg">
    <h4 className="text-white font-bold font-serif text-lg md:text-xl text-center">GIAIC Teacher</h4>
  </div>
</div>

<div className="flex justify-center items-center">
  <Image
    src="/thanks.png"
    alt="logo"
    width={300}  // Smaller size for mobile
    height={300} // Smaller size for mobile
    className="md:w-80 md:h-96 text-center rounded-md" // Larger size for laptop screens
    priority // Prioritize loading of the logo
  />
</div>




</div>




)


}