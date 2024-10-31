"use client";
import React from "react";

const NewsSkeleton = () => {
  return (
    <div className="border border-gray-300 bg-white shadow-lg transition-transform duration-200 flex flex-col p-4 mb-4 rounded-md">
      <div className="w-full h-[120px] bg-gray-200 skeleton rounded-md mb-2"></div>
      <div className="p-2 text-center">
        <div className="h-6 w-3/4 bg-gray-200 skeleton rounded mb-1 mx-auto"></div>
        <div className="h-4 w-1/2 bg-gray-200 skeleton rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
