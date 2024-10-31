import React from 'react';

const NewsItem = ({ newsItem }) => {
    const { title, description1, date, images } = newsItem;

    const imageUrl = images && images.length > 0 ? `http://localhost:5000${encodeURI(images[0])}` : null;

    return (
        <div className="bg-white shadow-md mb-4 p-4">
            {imageUrl && (
                <div className="mb-4">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                </div>
            )}

            <p className="text-xs text-gray-500 mb-2">{date}</p>

            <h3 className="text-lg font-bold text-red-600 mb-2">{title}</h3>

            <p className="text-sm text-gray-700 mb-4">{description1.substring(0, 35)}...</p>

            <a href="#" className="text-blue-600 text-sm font-semibold">
                Подробнее
            </a>
        </div>
    );
};

export default NewsItem;
