"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { GrGallery } from "react-icons/gr";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Correctly import the modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import the Image component from Next.js
import Image from "next/image";

function Home() {
  const rout = useRouter();

  // Array of car images (replace with your actual image paths)
  const carImages = [
    "/toyo1.png",
    "/toyo2.png",
    "/toyo3.png",
    "/hond1.png",
    "/hond2.png",
    "/hond3.png",
  ];

  return (
    <div className="app-container bg-black min-h-screen flex flex-col justify-between">
      {/* Include Navbar at the top */}
      <Navbar />

      <main className="flex-grow px-4">
        <h1 className="title text-pink-500 text-center text-2xl md:text-4xl mt-32 mb-10">
          <GrGallery /> Welcome to Gallery Web Page
        </h1>
        <p className="text-gray-100 text-sm md:text-lg leading-relaxed text-justify">
          Welcome to our Gallery! This space showcases a curated collection of
          images that capture the essence of our work, projects, and
          achievements. Every picture tells a story...
        </p>

        {/* Swiper Image Slider */}
        <div className="my-10 flex justify-center w-full"> {/* Centering the Swiper and making it responsive */}
  <Swiper
    spaceBetween={30}
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Navigation, Pagination]} // Include Navigation and Pagination modules
    className="mySwiper"
  >
    {carImages.map((image, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center"> {/* Centering each slide */}
        <div className="relative w-full h-[150px] lg:w-[800px] lg:h-[400px] flex justify-center items-center mx-auto">
          <Image
            src={image}
            alt={`Car ${index + 1}`}
            className="object-cover rounded-lg"
            layout="fill" // Use fill layout for better control with a wrapper
            objectFit="cover" // Ensures the image covers the space without distortion
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



        <ul className="flex flex-wrap gap-x-4 justify-center mt-4 mb-8">
          <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
            <Link href="/">Home</Link>
          </li>
          <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
            <Link href="/Toyota">Toyota</Link>
          </li>
          <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
            <Link href="/Honda">Honda</Link>
          </li>
          <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <button
          onClick={() => rout.push("/")}

          className="text-pink-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Home
        </button>
        <br />
        <button
          onClick={() => rout.push("/Toyota")}
          className="text-pink-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Toyota
        </button>
        <br />
        <button
          onClick={() => rout.push("/Honda")}
          className="text-pink-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Honda
        </button>
        <br />
        <button
          onClick={() => rout.push("/Contact")}
          className="text-pink-500 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
        >
          Contact
        </button>
        <h4 className="ml-2 mt-2 mb-16 text-blue-400">Author: Azmat Ali</h4>
      </main>

      {/* Include Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;
