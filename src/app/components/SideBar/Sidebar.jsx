"use client";
import React, { useState, useEffect } from 'react';
import Category from './Category';
import PopularProducts from './PopularProduct';
import Anons from './Anons';
import NewsList from './NewsList';
import Feedback from './Feedback';
import SidebarSkeleton from './SidebarSkeleton'; // Import the skeleton component

const Sidebar = () => {
    const [loading, setLoading] = useState(true);

    // Simulate data fetching for the sidebar components
    useEffect(() => {
        const fetchData = async () => {
            // Simulate loading delay (replace with actual data fetching logic)
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false);
        };
        
        fetchData();
    }, []);

    if (loading) {
        // Show the sidebar skeleton while loading
        return <SidebarSkeleton />;
    }

    return (
        <aside className="flex flex-col gap-7 xl:max-w-[250px] md:max-w-[40%] w-full">
            <Category />
            <PopularProducts />
            <Anons />
            <NewsList />
            <Feedback />
        </aside>
    );
};

export default Sidebar;
