"use client";

import { motion } from "framer-motion";
import HeroCircles from "./HeroCircles";

export default function HeroCTA() {
  return (
    <section className="relative z-40 mt-32 px-6 xl:mx-auto xl:max-w-[1440px]">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-lapis/90 px-5 py-2 text-sm font-medium text-white shadow-inner backdrop-blur-sm">
            React • Next.js • Tailwind CSS • TypeScript
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Transforming ideas
            <br /> into impactful code
          </motion.h1>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black shadow-md transition duration-300 hover:bg-lapis hover:text-white"
            >
              Let’s Talk
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white px-6 py-3 text-center text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Browse Projects
            </a>
          </div>

          <p className="max-w-md text-sm text-white/70 font-sans">
            Passionate about building scalable web apps with a taste for clean
            design and thoughtful UX.
          </p>
        </div>

        {/* Right Section */}
        <HeroCircles />
      </div>
    </section>
  );
}
