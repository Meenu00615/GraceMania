"use client";

import { Mea_Culpa } from "next/font/google";
import Navbar from "./Navbar"; 

const meaCulpa = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div>
      <Navbar />

      <section
        className="bg-[url('/images/on-model-as.jpg')] bg-cover bg-center h-screen flex items-end justify-center text-center px-10"
      >
        <div className="p-3 bg-opacity-90">
          <h1
            className={`text-[250px] font-bold mb-10 ${meaCulpa.className}`}
          >
            Grace Mania
          </h1>

          <p className="mb-8 font-sans text-lg">
            Discover your perfect fashion style -
          </p>
        </div>
      </section>

  
<section className="px-12 py-16 bg-white">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-16 text-4xl font-light tracking-wider text-center">
      CURATED BY THE HOUSE
    </h2>
    
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="group">
        <div className="mb-4 overflow-hidden aspect-[3/4] h-[400px]"> 
          <img 
            src="/images/Section3/model.jpg" 
            alt="Women's Small Leathergoods"
            className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="mb-3 text-lg font-medium text-center">Women's Small Leathergoods</h3>
      </div>
      
      <div className="group">
        <div className="mb-6 overflow-hidden aspect-[3/4] h-[400px]">
          <img 
            src="/images/Section3/Gucci vintage.jpg" 
            alt="Women's Shoes"
            className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="mb-3 text-lg font-medium text-center">Women's Shoes</h3>
      </div>
      
      <div className="group">
        <div className="mb-6 overflow-hidden aspect-[3/4] h-[400px]"> 
          <img 
            src="/images/Section3/Gucci bag.jpg" 
            alt="Men's Bags"
            className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
          />
        </div>
        <h6 className="mb-3 text-lg font-medium text-center">Gucci</h6>
      </div>
      
      <div className="group">
        <div className="mb-6 overflow-hidden aspect-[3/4] h-[400px]"> 
          <img 
            src="/images/Section3/RenzoCosta.jpg" 
            alt="Men's Shoes"
            className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="mb-3 text-lg font-medium text-center">Renzo Costa Bag</h3>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-6 bg-white sm:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2">

      <div className="relative overflow-hidden bg-gray-100 shadow-xl group">
        <div className="aspect-[3/4] h-[800px] overflow-hidden"> 
          <img 
            src="/images/Collection/Needles.jpg" 
            alt="Men's Collection"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20"> 
          <h3 className="mb-8 text-4xl font-medium tracking-wider text-white">MEN'S COLLECTION</h3> 
          <button className="px-10 py-4 text-lg text-black transition duration-300 bg-white border border-black hover:bg-gray-100">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gray-100 shadow-xl group">
        <div className="aspect-[3/4] h-[800px] overflow-hidden">
          <img 
            src="/images/Collection/Cara Cara Fall.jpg" 
            alt="Women's Collection"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
          <h3 className="mb-8 text-4xl font-medium tracking-wider text-white">WOMEN'S COLLECTION</h3>
          <button className="px-10 py-4 text-lg text-black transition duration-300 bg-white border border-black hover:bg-gray-100">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}


