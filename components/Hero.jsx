import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden dark  ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10  ">
        <div className="grid justify-items-center">
          <Image
            src={"/kaafmino logo.svg"}
            height={300}
            width={300}
            priority={true}
            alt="Kaafmino logo"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-poppins font-bold text-gray-800 dark:text-gray-200">
            KAAFMINO
          </h1>

          <p className="font-poppins text-xl text-gray-600 dark:text-gray-300">
            ENTERPRISES LLP
          </p>

          {/* <p className="mt-3 font-poppins text-gray-600 dark:text-gray-400">
            We do with which is the best
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
