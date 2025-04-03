"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Dictionary } from "../../config/i18n-config";

interface AboutProps {
  dictionary: Dictionary;
}

export const About: React.FC<AboutProps> = ({ dictionary }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            {dictionary.about.title}
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {dictionary.about.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-2 md:order-1"
          >
            {dictionary.about.paragraphs.map(
              (paragraph: string, index: number) => (
                <motion.p
                  key={index}
                  className="text-foreground/80 mb-6"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              )
            )}

            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                {dictionary.contact.title}
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-muted bg-background hover:bg-background/80 rounded-md transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative h-80 w-80 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Guillaume Broche"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
