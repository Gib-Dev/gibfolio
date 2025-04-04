"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCircles() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative z-0 flex items-center justify-center"
    >
      {/* Cercles SVG décoratifs */}
      <Image
        src="/images/svg/HeroCircles.svg"
        alt="Hero Circles"
        width={600}
        height={600}
        className="relative z-0 opacity-70"
      />

      {/* Image Magib centrée */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-1/2 top-1/2 z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-lapis"
      >
        <Image
          src="/images/jpeg/idSelfie.jpg"
          alt="Photo Magib"
          width={176}
          height={176}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
