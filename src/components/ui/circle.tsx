"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircleProps {
  size: number;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  color: "primary" | "secondary" | "muted";
  delay?: number;
  duration?: number;
  className?: string;
}

export const Circle: React.FC<CircleProps> = ({
  size,
  position,
  color,
  delay = 0,
  duration = 1.2,
  className = "",
}) => {
  // Définir la classe de couleur en fonction du paramètre
  const colorClass = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    muted: "bg-muted",
  }[color];

  const variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colorClass} ${className}`}
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        ...position,
      }}
    />
  );
};

export default Circle;
