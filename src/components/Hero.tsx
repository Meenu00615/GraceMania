"use client";
import { Mea_Culpa } from "next/font/google";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const meaCulpa = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('/images/on-model-as.jpg')] bg-cover bg-center h-screen flex items-end justify-center text-center px-2 sm:px-10">
        <div className="p-3 bg-opacity-90">

        <motion.h1
  className={`text-[100px] sm:text-[180px] md:text-[240px] lg:text-[250px] font-bold mb-5 sm:mb-8 ${meaCulpa.className}`}
  initial={{ 
    opacity: 0,
    scale: 1.5
  }}
  animate={{ 
    opacity: 1,
    scale: 1
  }}
  transition={{ 
    duration: 1,
    ease: [0.17, 0.67, 0.83, 0.67] 
  }}
  style={{
    paddingLeft: "0.1em",
    background: "linear-gradient(90deg, #000, #333)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent"
  }}
>
  <span style={{ 
    display: "inline-block",
    letterSpacing: "-0.001em" 
  }}>
    Grace Mania
  </span>

</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 text-sm sm:mb-8 sm:text-lg"
          >
            Discover your perfect fashion style -
          </motion.p>
        </div>
      </section>

      <section className="px-4 py-8 bg-white sm:px-6 md:px-12 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
          >
            CURATED BY THE HOUSE
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 place-items-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 md:gap-12">
            {[
              { img: "/images/Section3/model.jpg", title: "Women's Small Leathergoods" },
              { img: "/images/Section3/Gucci vintage.jpg", title: "Women's Shoes" },
              { img: "/images/Section3/Gucci bag.jpg", title: "Gucci" },
              { img: "/images/Section3/RenzoCosta.jpg", title: "Renzo Costa Bag" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="group w-full max-w-[400px]"
              >
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
              </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2
                }}
                className="relative w-full overflow-hidden bg-gray-100 shadow-xl group"
              >
                <div className="w-full aspect-[3/4] h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-20">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mb-4 text-2xl font-medium tracking-wider text-white sm:mb-6 md:mb-8 sm:text-3xl md:text-4xl"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 text-sm text-black transition duration-300 bg-white border border-black sm:px-8 md:px-10 sm:py-3 md:py-4 sm:text-base md:text-lg hover:bg-gray-100"
                  >
                    SHOP NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="px-4 py-12 bg-white sm:py-16 md:py-24">
  <div className="mx-auto max-w-7xl">

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 text-2xl font-light tracking-wider text-center sm:mb-12 md:mb-16 sm:text-3xl md:text-4xl"
    >
      SERVICES
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-1 gap-10 sm:grid-cols-3"
    >
      <div className="flex flex-col">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/images/services/Appointment.mp4" type="video/mp4" />
              <img 
                src="/images/services/Appointment.jpg" 
                alt="Book an appointment"
              />
            </video>
            <div className="absolute inset-0 transition-all duration-500 bg-black/20 group-hover:bg-black/10"></div>
          </div>
        </motion.div>
        <h5 className="mt-4 tracking-wider text-center font-sm medium text- sm:text-xl">
          BOOK AN APPOINTMENT
        </h5>
      </div>

      <div className="flex flex-col">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/images/services/personalization.mp4" type="video/mp4" />
              <img 
                src="/images/services/personalization.jpg" 
                alt="Personalization"
              />
            </video>
            <div className="absolute inset-0 transition-all duration-500 bg-black/20 group-hover:bg-black/10"></div>
          </div>
        </motion.div>
        <h5 className="mt-4 tracking-wider text-center font-sm medium text- sm:text-xl">
          PERSONALIZATION
        </h5>
      </div>

      <div className="flex flex-col">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src="/images/services/Gucci-store.jpg"
              alt="Collect in store"
              className="object-cover w-full h-full"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 transition-all duration-500 bg-black/20 group-hover:bg-black/10"></div>
          </div>
        </motion.div>
        <h5 className="mt-4 tracking-wider text-center font-sm medium text- sm:text-xl">
          COLLECT IN STORE
        </h5>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}
