import Image from "next/image";

const WeDoCard = ({ title, imgUrl, desc }) => {
  return (
    <a class="group rounded-xl overflow-hidden hover:scale-105 transition border border-gray-500 "  href="/tech-solutions ">
      <div class="">
        <div class=" relative rounded-xl overflow-hidden w-full  h-44">
          <Image
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full top-0 left-0 object-cover rounded-xl"
            src={imgUrl}
            width={200}
            height={200}
            alt={title}
            quality={90}
          />
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p class="mt-3 text-gray-600 dark:text-gray-400">{desc}</p>
          {/* <p class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg
              class="w-2.5 h-2.5"
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