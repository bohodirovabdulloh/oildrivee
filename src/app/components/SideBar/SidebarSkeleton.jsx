"use client";
import React from "react";

const SidebarSkeleton = () => {
  return (
    <aside className="flex flex-col gap-7 xl:min-w-[250px] md:max-w-[40%] w-full">
      {/* Skeleton for Category */}
      <div className="w-full bg-gray-200 rounded-lg skeleton h-10 mb-4"></div>
      <ul className="w-full bg-white border border-gray-300 rounded-lg p-2 space-y-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <li key={index} className="h-6 bg-gray-200 rounded skeleton"></li>
        ))}
      </ul>

      {/* Skeleton for Popular Products */}
      <div className="w-full bg-gray-200 rounded-lg skeleton h-10 mb-4"></div>
      <div className="w-full bg-white p-[15px] flex gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="w-[50%] h-[140px] bg-gray-200 skeleton rounded-md"></div>
        ))}
      </div>

      {/* Skeleton for Anons */}
      <div className="w-full bg-gray-200 rounded-lg skeleton h-10 mb-4"></div>
      <div className="w-full h-[200px] bg-gray-200 skeleton rounded-md"></div>

      {/* Skeleton for News List */}
      <div className="w-full bg-gray-200 rounded-lg skeleton h-10 mb-4"></div>
      <ul className="w-full bg-white border border-gray-300 rounded-lg p-2 space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="h-6 bg-gray-200 rounded skeleton"></li>
        ))}
      </ul>

      {/* Skeleton for Feedback */}
      <div className="w-full bg-gray-200 rounded-lg skeleton h-10 mb-4"></div>
      <div className="w-full bg-white p-2 space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full h-[60px] bg-gray-200 skeleton rounded-md"></div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
