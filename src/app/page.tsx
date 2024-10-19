"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Loading from "./loading";
import ErrorComponent from "./error";
import NotFound from "./not-found";

function MyHome() {
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<Error | null>(null); // Change to Error | null
    const rout = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated delay
                
                // Replace this with real data fetching logic
                const isDataAvailable = true; // For testing, change to false to simulate not found

                if (isDataAvailable) {
                    setData("Page content loaded");
                } else {
                    setNotFound(true);
                }
            } catch (err) {
                console.error(err);
                setError(new Error("An unexpected error occurred! Please try again.")); // Create an instance of Error
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorComponent error={error} reset={() => setError(null)} />; // Pass the error directly
    }

    if (notFound) {
        return <NotFound />;
    }

    return (
        <div className="app-container bg-black min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow px-4">
                {data ? (
                    <>
                        <h1 className="title text-blue-400 text-center text-2xl md:text-4xl mt-32 mb-10">
                            This Main Web Page Describes Details Of All Routes
                        </h1>
                        <p className="text-gray-100 text-sm md:text-lg leading-relaxed text-justify">
                            Main page is the front page of any given website.
                        </p>
                        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-4 mb-4">
                            In contact, it is defined to whom we have to contact.
                        </p>
                        <p className="text-gray-100 text-sm md:text-lg leading-relaxed mt-4 mb-8">
                            The gallery will show some images.
                        </p>
                        <p className="text-3xl text-yellow-300 text-center font-bold font-serif">
                            <u>Super Motors</u>
                        </p>
                        <p className="text-center text-2xl font-bold font-serif text-pink-400 mt-10">
                            This page defines that we deal Toyota & Honda products.
                        </p>
                        <ul className="flex flex-wrap gap-x-4 justify-center mt-4 mb-8">
                            <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
                                <Link href="/Toyota">Toyota</Link>
                            </li>
                            <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
                                <Link href="/Honda">Honda</Link>
                            </li>
                            <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li className="text-green-300 hover:text-pink-400 text-sm md:text-2xl">
                                <Link href="/Gallery">Gallery</Link>
                            </li>
                        </ul>
                        <button
                            onClick={() => rout.push("/Toyota")}
                            className="text-blue-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
                        >
                            Toyota
                        </button>
                        <br />
                        <button
                            onClick={() => rout.push("/Honda")}
                            className="text-blue-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
                        >
                            Honda
                        </button>
                        <br />
                        <button
                            onClick={() => rout.push("/Contact")}
                            className="text-blue-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
                        >
                            Contact
                        </button>
                        <br />
                        <button
                            onClick={() => rout.push("/Gallery")}
                            className="text-blue-400 border border-white rounded-lg py-1 px-2 text-sm hover:bg-white mb-2"
                        >
                            Gallery
                        </button>
                        <div className="mt-4"></div>
                        <h4 className="ml-2 mt-2 mb-16 text-pink-400">Author: Azmat Ali</h4>
                    </>
                ) : (
                    <p>Loading content...</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default MyHome;

