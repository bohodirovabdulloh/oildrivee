'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Loading from '@/app/components/Loading/Loading';

const Page = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/dastavka/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log('Fetched data:', result); // Проверяем данные
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dastavka </h1>
      {data && data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div key={item._id} className="border p-4 rounded-md shadow-md mb-4">
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="mb-4 break-words">{item.description}</p>

              {/* Проверяем и отображаем изображение */}
              {item.images && item.images.length > 0 ? (
                <div className="flex justify-center">
                  <Image
                    src={`http://localhost:5000/${item.images[0]}`}  // Используем массив images
                    alt={item.name}
                    width={400}
                    height={300}
                    className="object-contain"
                  />
                </div>
              ) : item.image ? (  // Если есть только поле image
                <div className="flex justify-center">
                  <Image
                    src={`http://localhost:5000/${item.image}`}  // Используем поле image
                    alt={item.name}
                    width={400}
                    height={300}
                    className="object-contain"
                  />
                </div>
              ) : (
                <p>No image available</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Page;
