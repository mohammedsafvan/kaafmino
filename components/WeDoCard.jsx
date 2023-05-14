import Image from "next/image";

const WeDoCard = ({ title, imgUrl, desc }) => {
  return (
    <a
      className="group rounded-xl border hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 overflow-hidden hover:scale-105 transition pb-4 shadow-md "
      href="/tech-solutions "
    >
      <div className="">
        <div className=" relative rounded-xl overflow-hidden w-full  h-44">
          <Image
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full top-0 left-0 object-cover rounded-xl"
            src={imgUrl}
            width={400}
            height={400}
            alt={title}
            quality={90}
          />
        </div>
        <div className="grow mt-2 mx-4">
          <h3 className="text-lg font-semibold  text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-gray-600 text-justify text-sm dark:text-gray-400">
            {desc}
          </p>
          {/* <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </p> */}
        </div>
      </div>
    </a>
  );
};

export default WeDoCard;
