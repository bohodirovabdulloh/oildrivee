"use client";

import { useEffect, useState } from 'react';
import LoadingError from '../Loading/LoadingError';
import { GiHamburgerMenu } from "react-icons/gi";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.NEXT_PUBLIC_OILDRIVE_API
    const imgUrl = process.env.NEXT_PUBLIC_OILDRIVE_IMG_API

    const fetchCategories = async () => {
        try {
            const response = await fetch(`https://admin-dash-oil-trade.onrender.com/api/v1/category`);
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryName) => {
        localStorage.setItem('category', categoryName);  // Update category in localStorage
        window.dispatchEvent(new Event("storage"));  // Force dispatch of the storage event in the same tab
    };

    if (loading) {
        return;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="xl:w-1/5 xl:min-w-[250px] h-screen lg:h-auto">
            <div className="w-full bg-[#E0111A] text-white flex gap-2 items-center lg:p-2 py-2 px-2 xl:rounded-t-lg">
                <GiHamburgerMenu />
                <p className="font-bold">Категории</p>
            </div>

            <ul className="w-full border border-gray-300">
                {categories.map((category) => (
                    <li
                        onClick={() => handleCategoryClick(category.category_name)}
                        key={category._id}
                        className="border-b border-gray-300 px-2 lg:p-2 lg:py-2 py-2 hover:bg-gray-200 cursor-pointer">
                        <a href="/">{category.category_name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
