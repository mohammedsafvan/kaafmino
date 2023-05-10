"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WeDoCard from "@/components/WeDoCard";
import { whatWeDo } from "@/helpers/data";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Head>
        <title>KAAFMINO</title>
        <meta name="description" content="Kaafmino LLP" />
        <link rel="icon" href="/kaafmino logo.svg" />
      </Head>
      <NavBar />
      {/* Hero */}
      <Hero />
      {/*  End of hero */}

      <div class="max-w-2xl mx-auto text-center mt-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl   text-gray-800 dark:text-gray-200">
          What we do
        </h2>
      </div>

      {/*What we do  Card */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
        {/* Grid */}
        <div class="grid lg:grid-cols-3 lg:gap-y-4 gap-10 ">
          {/* Card */}
          {whatWeDo.map((element, index) => (
            <WeDoCard
              title={element.name}
              imgUrl={element.imgUrl}
              desc={element.desc}
              key={index}
            />
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
      <Footer/>
    </>
  );
}
