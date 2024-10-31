import React, { useState, useEffect } from 'react';
import { IoRocket } from "react-icons/io5";

const Anons = () => {
    const [annons, setAnnons] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchAnnons = async () => {
        try {
            const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/banner');
            if (!response.ok) {
                throw new Error('Failed to fetch advertisements');
            }
            const data = await response.json();
            setAnnons(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnnons();
    }, []);

    return (
        <div className="w-full sm:w-1/5 min-w-[250px] p-4">
            {loading ? (
                <p className="text-center text-gray-500">Загрузка...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                annons.map((ad, index) => (
                    <div className='mt-6' key={ad._id}>
                        <div className="w-full bg-[#E0111A] text-white flex gap-2 items-center p-2 rounded-t-lg">
                            <IoRocket />
                            <p className="font-bold">Реклама</p>
                        </div>
                        <div className="w-full flex flex-col items-center border p-2 shadow-lg bg-white rounded-b-lg">
                            {ad.image_url ? (
                                <img
                                    src={`http://localhost:5000${ad.image_url}`} // Используем правильный путь к изображению
                                    alt={`Advertisement ${index}`}
                                    className="h-auto max-w-full rounded-lg"
                                />
                            ) : (
                                <p className="text-gray-500">Нет изображения</p>
                            )}
                            <p className="text-center mt-2 text-sm text-gray-700">{ad.description || 'Нет описания'}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Anons;
