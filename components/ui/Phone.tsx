"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface PhoneProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
  showNotch?: boolean;
  unoptimized?: boolean;
}

/**
 * iPhone-shaped frame around a static screenshot or GIF.
 * Width is the bezel width; height follows 9:19.5.
 */
export function Phone({
  src,
  alt,
  width = 280,
  className = "",
  priority,
  showNotch = true,
  unoptimized,
}: PhoneProps) {
  return (
    <div
      className={`iphone-frame relative ${className}`}
      style={{ width, maxWidth: "100%" }}
    >
      <div className="iphone-screen">
        {showNotch && <div className="iphone-notch" />}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          className="object-cover"
          priority={priority}
          unoptimized={unoptimized}
        />
      </div>
    </div>
  );
}

export function PhoneFloat({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
