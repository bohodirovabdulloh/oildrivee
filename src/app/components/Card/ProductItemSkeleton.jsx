"use client";
import React from "react";

const ProductItemSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
        <div className="w-[150px] h-[150px] bg-gray-200 skeleton rounded-lg"></div>
      </div>
      <div className="mt-4 flex flex-col justify-between h-full">
        <div className="h-4 w-3/4 bg-gray-200 skeleton rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 skeleton rounded mb-4"></div>
        <div className="flex items-center py-2 mt-2">
          <div className="h-4 w-1/3 bg-gray-200 skeleton rounded"></div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-6 w-1/2 bg-gray-200 skeleton rounded"></div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="h-4 w-1/4 bg-gray-200 skeleton rounded"></div>
          <div className="h-4 w-1/3 bg-gray-200 skeleton rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
