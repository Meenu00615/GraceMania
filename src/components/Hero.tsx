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

      <section className="bg-[url('/images/on-model-as.jpg')] bg-cover bg-center h-screen flex items-end justify-center text-center px-4 sm:px-10">
        <div className="p-3 bg-opacity-90">
          <h1 className={`text-[80px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-bold mb-6 sm:mb-10 ${meaCulpa.className}`}>
            Grace Mania
          </h1>
          <p className="mb-6 text-sm sm:mb-8 sm:text-lg">
            Discover your perfect fashion style -
          </p>
        </div>
      </section>

<section className="px-4 py-8 bg-white sm:px-6 md:px-12 sm:py-12 md:py-16">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl">
      CURATED BY THE HOUSE
    </h2>
    <div className="grid grid-cols-1 gap-8 place-items-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 md:gap-12">
      {[
        { img: "/images/Section3/model.jpg", title: "Women's Small Leathergoods" },
        { img: "/images/Section3/Gucci vintage.jpg", title: "Women's Shoes" },
        { img: "/images/Section3/Gucci bag.jpg", title: "Gucci" },
        { img: "/images/Section3/RenzoCosta.jpg", title: "Renzo Costa Bag" }
      ].map((item, index) => (
        <div key={index} className="group w-full max-w-[400px]">
          <div className="mx-auto mb-3 overflow-hidden aspect-[3/4] h-[300px] sm:mb-4 sm:h-[350px] md:h-[400px]">
            <img 
              src={item.img} 
              alt={item.title}
              className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mb-2 text-base font-medium text-center sm:mb-3 sm:text-lg">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="px-2 py-4 bg-white sm:px-4 md:px-12 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 sm:gap-6 md:space-y-0">
            {[
              { img: "/images/Collection/Needles.jpg", title: "MEN'S COLLECTION" },
              { img: "/images/Collection/Cara Cara Fall.jpg", title: "WOMEN'S COLLECTION" }
            ].map((item, index) => (
              <div key={index} className="relative w-full overflow-hidden bg-gray-100 shadow-xl group">
                <div className="w-full aspect-[3/4] h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-20">
                  <h3 className="mb-4 text-2xl font-medium tracking-wider text-white sm:mb-6 md:mb-8 sm:text-3xl md:text-4xl">
                    {item.title}
                  </h3>
                  <button className="px-6 py-2 text-sm text-black transition duration-300 bg-white border border-black sm:px-8 md:px-10 sm:py-3 md:py-4 sm:text-base md:text-lg hover:bg-gray-100">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
