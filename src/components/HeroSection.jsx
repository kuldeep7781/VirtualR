import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-8 lg:mt-10">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        VirtualR build tools <br /> <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">for developers</span>
      </h1>
      <p className="mt-5 px-2 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. <br /> Get started today and turn your imagination into immersive reality.
      </p>
      <div className="flex justify-center mt-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Start For free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md">
            Documentation
        </a>
      </div>
      <div className="flex md:flex-row flex-col mt-7 items-center justify-center">
        <video autoPlay loop muted className="rounded-lg md:w-1/3 w-80 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={video1} type="video/mp4" />
        Your Browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg md:w-1/3 w-80 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={video2} type="video/mp4" />
        Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
