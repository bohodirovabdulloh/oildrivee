import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#262f38] text-gray-400 py-8 px-4 md:px-20 font-montserrat">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-start">
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              Меню <FaChevronDown className="ml-2" />
            </h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Информация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              Меню <FaChevronDown className="ml-2" />
            </h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Правила и соглашения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Отзывы/Комментарии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              Меню <FaChevronDown className="ml-2" />
            </h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Реклама и сотрудничество
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Партнёры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              Меню <FaChevronDown className="ml-2" />
            </h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Бренды
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Под заказ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              Информация <FaChevronDown className="ml-2" />
            </h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white text-adaptive-sm">
                  Архив товаров
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-adaptive-sm">
                  О нас
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center text-center text-[14px]">
          <p className="text-white ml-4 mb-2 md:mb-0 cursor-pointer hover:border-b hover:border-b-white">
            Главная
          </p>
          <p className="text-white ml-4 mb-2 md:mb-0 cursor-pointer hover:border-b hover:border-b-white">
            О магазине
          </p>
          <p className="text-white ml-4 mb-2 md:mb-0 cursor-pointer hover:border-b hover:border-b-white">
            Оплата и заказ
          </p>
          <p className="text-white ml-4 mb-2 md:mb-0 cursor-pointer hover:border-b hover:border-b-white">
            Доставка
          </p>
          <p className="text-white ml-4 mb-2 md:mb-0 cursor-pointer hover:border-b hover:border-b-white">
            Контакты
          </p>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2020 - 2022. OilTrade.Uz - Всё идёт как по маслу.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
