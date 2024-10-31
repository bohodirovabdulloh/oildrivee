import React, { useState, useEffect } from 'react';
import NewsItem from './NewItem';
import { FaRegNewspaper } from "react-icons/fa";

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/news');
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            setNews(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="bg-gray-100 w-1/5 min-w-[250px]">
            <div className="w-full bg-red-600 text-white flex gap-2 items-center p-2 mb-4 rounded-t-lg">
                <FaRegNewspaper />
                <h2 className="font-bold">Наши новости</h2>
            </div>
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                news.map((newsItem) => (
                    <NewsItem key={newsItem._id} newsItem={newsItem} />
                ))
            )}
        </div>
    );
};

export default NewsList;
