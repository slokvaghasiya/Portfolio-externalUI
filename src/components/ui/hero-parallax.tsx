"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    description: string;
    link: string;
    thumbnail: string;
    icon: ReactNode;
  }[];
}) => {
  const ref = React.useRef(null);
  const productsPerRow = 3; // For desktop view
  const totalRows = Math.ceil(products.length / productsPerRow);
  
  // Calculate rows
  const rows = Array.from({ length: totalRows }, (_, i) => {
    const start = i * productsPerRow;
    const end = start + productsPerRow;
    return products.slice(start, end);
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 4], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 4], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Calculate dynamic height based on number of products
  const productsPerRowCount = 3; // For desktop view
  const rowHeight = 400; // Height in pixels per row
  const headerHeight = 200; // Height for header section
  const padding = 160; // Total padding (py-40 = 2 * 40 = 80px * 2 = 160px)
  const numberOfRows = Math.ceil(products.length / productsPerRowCount);
  const totalHeight = numberOfRows * rowHeight + headerHeight + padding;

  return (
    <div
      ref={ref}
      style={{ height: `${totalHeight * 1.4}px` }}
      className="overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {rows.map((row, rowIndex) => 
            row.map((product, index) => (
              <ProductCard
                product={product}
                translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
                key={product.title}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 md:py-24 px-4 text-center">
      <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
        My Projects Portfolio
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300">
        Explore my collection of projects and open-source contributions. Each
        project represents a unique challenge and solution in the world of web
        development.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    description: string;
    link: string;
    thumbnail: string;
    icon: ReactNode;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group/product bg-black/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
    >
      <Link
        to={product.link}
        className="block relative aspect-[16/9] overflow-hidden"
      >
        <img
          src={product.thumbnail}
          className="object-cover w-full h-full transition-transform group-hover/product:scale-105"
          alt={product.title}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/product:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-white text-2xl">{product.icon}</div>
        </div>
      </Link>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-3">
          {product.title}
        </h2>
        <p className="text-base text-gray-300">{product.description}</p>
      </div>
    </motion.div>
  );
};
