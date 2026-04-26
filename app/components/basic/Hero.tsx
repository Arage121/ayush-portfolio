import Image from "next/image";
import Profile from "@/public/assets/profile.jpeg";
const Hero = () => {
  return (
    <div id="home" className="h-full w-full flex items-center justify-center">
      <Image
        alt="profile"
        src={Profile}
        className="rounded-full w-40 h-40 object-cover border shadow-lg"
      />
      <div>
        <div className="text-7xl font-bold">
          <h1 className="pl-5">Hi, I am Ayush,</h1>
          <h1 className="pl-8">a Frontend Developer.</h1>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 pl-4">
          I build modern, scalable, and user-friendly web applications.
        </p>
        <div className="mt-4 pl-4 flex gap-4">
          <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg cursor-pointer">
            View Projects
          </button>
          <button className="px-4 py-2 border rounded-lg cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
