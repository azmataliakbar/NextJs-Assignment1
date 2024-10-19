import Link from "next/link";
import Image from "next/image";  // Import Image from next/image

const Navbar = () => {
  return (
    <div className="nav-container bg-orange-300 p-2 flex justify-between items-center w-full fixed top-0 left-0 z-1000 rounded-b-lg">
      <Image
        src="/bird.png"
        alt="logo"
        width={48}  // Adjusted smaller logo size for mobile
        height={48} // Adjusted smaller logo size for mobile
        className="sidebar-image object-cover rounded-full ml-1"
        priority // Prioritize the logo loading
      />
      <div className="nav-text flex flex-wrap space-x-1 text-[10px] sm:text-xs md:text-sm lg:text-base ml-1">
        <Link href="/" className="text-black hover:text-white">Home</Link>
        <Link href="/Toyota" className="text-black hover:text-white">Toyota</Link>
        <Link href="/Honda" className="text-black hover:text-white">Honda</Link>
        <Link href="/Contact" className="text-black hover:text-white">Contact</Link>
        <Link href="/Gallery" className="text-black hover:text-white">Gallery</Link>
        <Link href="/About" className="text-black hover:text-white">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
