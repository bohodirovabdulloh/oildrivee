import React, { useEffect, useState } from 'react';
import { TiMessageTyping } from "react-icons/ti";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Async function to fetch feedbacks
    const fetchFeedbacks = async () => {
        try {
            const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/otziv');
            if (!response.ok) {
                throw new Error('Failed to fetch feedbacks');
            }
            const data = await response.json();
            setFeedbacks(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch feedbacks when the component mounts
    useEffect(() => {
        fetchFeedbacks();
    }, []);

    if (loading) {
        return <p>Loading feedbacks...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="w-1/5 min-w-[250px] mb-5, shadow-md mb-4">
            <div className="w-full bg-[#E0111A] text-white flex gap-2 items-center p-2 rounded-t-lg">
                <TiMessageTyping />
                <p className="font-bold">Отзывы</p>
            </div>

            {feedbacks.map((feedback) => (
                <div key={feedback._id} className="chat chat-end flex flex-col gap-2 mt-3 mr-4">
                    <div className="chat-bubble bg-slate-300 text-black ">
                        {feedback.comment}
                    </div>
                    <div>
                        <p className='text-black'>{feedback.name}</p>
                    </div>
                    <div className="chat-footer opacity-50">
                        Seen on {feedback.date} - Rating: {feedback.rating}/5
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feedback;
