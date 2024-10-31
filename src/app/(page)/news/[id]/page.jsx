"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '@/app/components/Loading/Loading';

const NewsItem = ({ params }) => {
  const { id } = params;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Используем переменные окружения для API URL
  const apiUrl = process.env.NEXT_PUBLIC_OILDRIVE_API || 'https://admin-dash-oil-trade.onrender.com/api/v1/news';
  const imgUrl = process.env.NEXT_PUBLIC_OILDRIVE_IMG_API || 'https://admin-dash-oil-trade.onrender.com/';

  const fetchNewsItem = async () => {
    if (!id) return;

    try {
      const response = await fetch(`${'https://admin-dash-oil-trade.onrender.com/api/v1/news'}/${id}`); // Запрос конкретной новости по id
      if (!response.ok) {
        if (response.status === 404) {
          setError('Новость не найдена.');
        } else {
          throw new Error('Ошибка загрузки данных: ' + response.statusText);
        }
      }
      const data = await response.json();
      setNewsItem(data);
    } catch (error) {
      console.error('Ошибка при получении новости:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500 text-center">Ошибка: {error}</div>;
  }

  if (!newsItem) {
    return <div className="text-center">Новость отсутствует</div>;
  }

  return (
    <>
      <div className="container mx-auto mt-8"> {/* Убираем min-h-screen и добавляем отступ сверху */}
        <div className="bg-white shadow-md p-6 max-w-7xl mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{newsItem.title}</h1>

          {/* Проверяем наличие изображения */}
          {newsItem.images && newsItem.images.length > 0 ? (
            <Image
              src={`http://localhost:5000${newsItem.images[0]}`} // Используем imgUrl для формирования пути к изображению
              alt={newsItem.title}
              width={700}
              height={400}
              className="object-cover mb-4"
            />
          ) : (
            <p>Изображение для этой новости отсутствует.</p>
          )}

          <p className="text-lg text-gray-700 mb-4 break-words">{newsItem.description1}</p>
          <p className="text-lg text-gray-700 mb-4 break-words">{newsItem.description2}</p>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
