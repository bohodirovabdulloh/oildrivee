'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/about');
        const result = await response.json();

        if (result.length > 0) {
          setData(result); // Получаем весь массив данных
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  const formatDescription = (description) => {
    // Разделяем текст на предложения по точкам
    return description.split('.').map((sentence, index) => (
      sentence.trim() ? (
        <span
          key={index}
          className="block mb-[35px]" // Отступ между предложениями (35px)
        >
          {sentence.trim() + '.'}
        </span>
      ) : null
    ));
  };

  return (
    <div className="container mx-auto p-6">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item._id} className="border p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-4 ">{item.name}</h2>
            <p className="text-lg leading-relaxed text-justify mb-6">
              {formatDescription(item.description)}
            </p>
            {item.images && item.images.length > 0 && (
              <div className="flex justify-center">
                <img
                  src={`http://localhost:5000/${item.images[0]}`} 
                  alt={item.name}
                  width={400}
                  height={300}
                  className="object-contain rounded-md"
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-lg font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default Page;
