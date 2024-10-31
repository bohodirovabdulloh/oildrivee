"use client";

import React from 'react';

const BannerSkeleton = () => {
  return (
    <div className="container px-7 relative h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px] xl:h-[500px] max-w-7xl mx-auto overflow-hidden rounded-lg">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="skeleton w-full h-full"></div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[300px] lg:w-[400px] h-[50px] sm:h-[70px] lg:h-[90px] rounded bg-gray-200 skeleton"></div>

      <button className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 p-0 rounded-full skeleton w-10 h-10"></button>
      <button className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 p-0 rounded-full-200 skeleton w-10 h-10"></button>
    </div>
  );
};

export default BannerSkeleton;
