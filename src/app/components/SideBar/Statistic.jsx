import React from 'react';
import { FaChartLine } from "react-icons/fa6";


const Statistic = () => {
    return (
        <div className="w-1/5 min-w-[250px] mb-5 shadow-md">

            <div className="w-full bg-[#E0111A] text-white flex gap-2 items-center p-2 rounded-t-lg">
                <FaChartLine />
                <p className="font-bold">Статистика</p>
            </div>

            <div className="p-4 bg-white rounded-b-lg flex flex-col items-center text-center">
                <div className='bg-slate-100 p-2 py-4 rounded-[10px]'>
                    <div className="w-full h-1 bg-orange-400 mb-4"></div>

                    <p className="text-sm mb-2">1 ПОСЕТИТЕЛЬ НА САЙТЕ. ИЗ НИХ:</p>

                    <div className="flex justify-between w-full px-6">
                        <p className="text-orange-600 font-bold">Гости</p>
                        <p className="font-bold">1</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Statistic;
