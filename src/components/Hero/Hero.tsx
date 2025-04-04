"use client";

import HeroCTA from "./HeroCTA";
import SVGGradientBg from "./SVGGradientBg";

export default function Hero() {
  return (
    <div className="relative z-0 w-full overflow-hidden">
      <SVGGradientBg /> {/* fond SVG décoratif */}
      <HeroCTA /> {/* contenu du hero */}
    </div>
  );
}
