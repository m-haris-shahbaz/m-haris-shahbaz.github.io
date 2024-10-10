import Image from "next/image";
import AboutSection from "./components/aboutsection";
import {FaLocationDot} from "react-icons/fa6";
import Social from "./components/social";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 bg-primary rounded-full flex justify-end">
          <Image
            width={250}
            height={250}
            src="/images/profile.png"
            alt="Profile Image"
            className="w-full h-full top-0 bottom-0 right-0 left-0 rounded-full object-cover border-4 border-transparent shadow-lg transition duration-300 ease-in-out"
          />
        </div>

        <h1 className="mt-4 text-3xl font-bold text-center text-white">
          Muhammad Haris Shahbaz
        </h1>
        <span className="bg-primary text-black text-sm px-2 py-0.5 mt-2 font-bold uppercase rounded-full">Web Developer</span>
        <p className='text-sm mt-2 flex items-center'> <FaLocationDot className="w-3 h-3 mr-1 text-primary" /> Abu Dhabi, United Arab Emirates</p>
      </div>
      <AboutSection />
      <Social />
    </div>
  );
}
