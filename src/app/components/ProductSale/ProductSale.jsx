"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '../Loading/Loading';
import NewsSkeleton from '../News/NewsSkeleton';

const ProductsOnSale = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://admin-dash-oil-trade.onrender.com/api/v1/card');
                const data = await response.json();
                const productsOnSale = data.filter(product => product.discount_price);
                setProducts(productsOnSale);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto py-4 w-full">
                <div className="border border-gray-300 bg-white shadow-lg w-full max-w-screen-xl p-6 rounded-lg">
                    <h2 className="text-black text-2xl font-montserrat mb-4">Новости:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array.from({ length: products.length || 9 }).map((_, index) => (
                            <NewsSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-4">
            <div className="relative border border-gray-300 bg-white shadow-lg w-full max-w-screen-xl p-6 rounded-lg">
                <h2 className="text-black text-2xl font-semibold mb-4">Товары на акции:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link href={`/productSale/${product._id}`} key={product._id} passHref>
                            <div className="group border border-gray-300 bg-white shadow-md transition-transform duration-300 flex flex-col p-4 mb-6 hover:scale-105 hover:shadow-2xl rounded-md">
                                <h1 className="ml-2 s-discount bg-[#FF8E0D] text-white text-center text-sm py-1 mb-2 w-20">
                                    Скидка
                                </h1>
                                <div className="overflow-hidden rounded-md mb-3">
                                    <img
                                        src={`http://localhost:5000/${product.image.main_images[0]}`}
                                        alt={product.name}
                                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-2 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                    <p className="text-gray-500">
                                        {product.discount_price ? (
                                            <span className="font-bold text-xl text-[#FF4C29]">{product.discount_price} сум</span>
                                        ) : (
                                            <span>{product.price} сум</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsOnSale;
