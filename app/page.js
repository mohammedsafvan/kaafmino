"use client";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WeDoCard from "@/components/WeDoCard";
import { whatWeDo } from "@/helpers/data";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import NewNavBar from "@/components/NewNavBar";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Head>
        <title>KAAFMINO</title>
        <meta name="description" content="Kaafmino LLP" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <div className="dark bg-slate-900">
        <NewNavBar />

        <div id="scrollspy">
          <Hero />
          {/*  End of hero */}
          <div id="whatwedo">
            <div className="max-w-2xl mx-auto text-center mb-5 ">
              <h2 className="text-2xl font-bold  md:text-4xl   text-gray-800 dark:text-gray-200">
                What We Do
              </h2>
            </div>
            {/*What we do  Card */}
            {/* Grid */}
            <div className="grid px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-4 gap-10 ">
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
          </div>

          <ContactUs />
        </div>

        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}
