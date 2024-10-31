"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewsSkeleton from "./NewsSkeleton";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_OILDRIVE_API;
  const imgUrl = process.env.NEXT_PUBLIC_OILDRIVE_IMG_API;

  const fetchNewsData = async () => {
    try {
      const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/news/');
      console.log("Статус ответа:", response.status);
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных: " + response.statusText);
      }
      const data = await response.json();
      const formattedNews = data.map((item) => ({
        id: item._id,
        title: item.title,
        description: item.description1,
        date: item.date,
        image: item.images[0],
      }));

      setNewsData(formattedNews);
      console.log(formattedNews);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-4 w-full">
        <div className="border border-gray-300 bg-white shadow-lg w-full max-w-screen-xl p-6 rounded-lg">
          <h2 className="text-black text-2xl font-montserrat mb-4">Новости:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: newsData.length || 6 }).map((_, index) => (
              <NewsSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Ошибка: {error}</div>;
  }

  if (!newsData.length) {
    return <div className="text-center">Нет доступных новостей.</div>;
  }

  return (
    <div className="container mx-auto py-4 w-full">
      <div className="border border-gray-300 bg-white shadow-lg w-full max-w-screen-xl p-6 rounded-lg">
        <h2 className="text-black text-2xl font-montserrat mb-4">Новости:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newsData.map((news) => (
  <a
    href={`/news/${news.id}`}
    key={news.id}
    className="border border-gray-300 bg-white shadow-lg transition-transform duration-200 flex flex-col p-4 mb-4 hover:scale-105 hover:shadow-2xl rounded-md"
  >
    <Image
      src={news.image ? `http://localhost:5000${news.image}` : '/path/to/default-image.jpg'} // Укажите путь к изображению по умолчанию
      alt={news.title}
      width={190}
      height={70}
      className="w-full h-[120px] object-cover mb-2"
    />
    <div className="p-2 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{news.title}</h3>
    </div>
  </a>
))}

        </div>
      </div>
    </div>
  );
};

export default News;
