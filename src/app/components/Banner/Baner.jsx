"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Baner = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_OILDRIVE_API;
  const imgUrl = process.env.NEXT_PUBLIC_OILDRIVE_IMG_API;

  const fetchSlides = async () => {
    setIsLoading(true); // Начало загрузки
    try {
      const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/banner');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSlides(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setIsLoading(false); // Завершение загрузки
    }
  };

  useEffect(() => {
    fetchSlides();

    const timer = setInterval(() => {
      setIsDescriptionVisible(true);
      setIsImageVisible(true);

      setTimeout(() => {
        setIsDescriptionVisible(false);
        setTimeout(() => {
          setIsImageVisible(false);
          setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsImageVisible(true);
          }, 500);
        }, 500);
      }, 4000);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setIsImageVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsImageVisible(true);
    }, 500);
  };

  const handleNextSlide = () => {
    setIsImageVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsImageVisible(true);
    }, 500);
  };

  return (
    <div className="container px-7 relative h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px] xl:h-[500px] max-w-7xl mx-auto overflow-hidden bg-blue-600 rounded-lg"> {/* Установите синий фон */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <p>Загрузка...</p>
        </div>
      ) : (
        slides.length > 0 && (
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide._id} // Используем уникальный идентификатор для ключа
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={`http://localhost:5000${slide.image_url}`} // Используем правильную переменную
                  alt={`Слайд ${slide._id}`}
                  height={500} // Измените высоту по необходимости
                  width={500} // Измените ширину по необходимости
                  className="w-full h-full object-container"
                />

                <div
                  className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ${
                    currentSlide === index && isDescriptionVisible ? 'opacity-100' : 'opacity-0'
                  } bg-red-500 text-white p-4 md:p-6 rounded text-xs sm:text-sm md:text-lg w-[250px] sm:w-[300px] lg:w-[400px] h-[50px] sm:h-[70px] lg:h-[90px]`}
                  style={{
                    opacity: 0.7,
                  }}
                >
                  <div className="border-y-cyan-50 border-l-stone-50">
                    {slide.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      <button
        onClick={handlePrevSlide}
        className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 p-0 rounded-full transition duration-300"
      >
        <span className="m-3 sm:m-5 text-2xl sm:text-4xl text-black hover:text-white">
          &#10094;
        </span>
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 p-0 rounded-full transition duration-300"
      >
        <span className="m-3 sm:m-5 text-2xl sm:text-4xl text-black hover:text-white">
          &#10095;
        </span>
      </button>
    </div>
  );
};

export default Baner;
