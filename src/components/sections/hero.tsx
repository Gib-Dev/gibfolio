"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Circle } from "@/components/ui/circle";
import { Dictionary } from "../../config/i18n-config";

interface HeroProps {
  dictionary: Dictionary;
}

export const Hero: React.FC<HeroProps> = ({ dictionary }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Cercles décoratifs */}
      <Circle
        size={30}
        position={{ top: "10%", right: "-10%" }}
        color="primary"
        delay={0.2}
      />
      <Circle
        size={20}
        position={{ bottom: "10%", left: "-5%" }}
        color="secondary"
        delay={0.4}
      />
      <Circle
        size={15}
        position={{ top: "30%", left: "5%" }}
        color="muted"
        delay={0.6}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="text-primary font-medium mb-4" variants={item}>
            Frontend & Backend Developer
          </motion.p>

          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6"
            variants={item}
          >
            {dictionary.hero.title}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-foreground/80 mb-8"
            variants={item}
          >
            {dictionary.hero.subtitle}
          </motion.h2>

          <motion.div variants={item}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              {dictionary.hero.cta}
              <FiArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
