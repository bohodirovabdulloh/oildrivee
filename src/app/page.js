"use client"

import React, { useEffect, useState } from "react";  
import dynamic from "next/dynamic";
import News from "./components/News/News";
import ProductsOnSale from "./components/ProductSale/ProductSale";
import BannerSkeleton from "./components/Banner/BannerSkeleton";
import HomeContent from "./components/HomeContent/HomeContent";

const Baner = dynamic(() => import("./components/Banner/Baner"), {
  ssr: false,
  loading: () => <BannerSkeleton/>
});

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="flex container mx-auto w-full">
        
        <div className="flex-1">
          <Baner />
          <HomeContent />
          <News />
          <ProductsOnSale />
        </div>
      </main>

    </>
  );
}