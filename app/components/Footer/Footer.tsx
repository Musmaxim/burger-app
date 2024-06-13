import React from "react";
import { FaBurger, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        <div>
          <div className="flex items-center space-x-2 text-white">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BurgerBite
            </h1>
          </div>
          <p className="text-white text-opacity-50 mt-[0.4rem]">
            Здесь нужен слоган!
          </p>
          <p className="mt-[1rem] text-white">BurgerBite@example.ru</p>
          <p className="text-red-300 text-19px font bold">1 (123) 456-789</p>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Кушанья
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Филе Куры
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Говяжий вупсень
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Панини армянский
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Шавуха веганская
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Сюрприз от шефа
          </p>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Разделы
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Главная
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Магазин
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            О нас
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            Контакты
          </p>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Часы работы
          </h1>
          <p className="text-white text-[14px] opacity-60">
            Понедельник - Пятница :{" "}
            <span className="text-yellow-400">08:00 - 16:00</span>
          </p>
          <p className="text-white text-[14px] opacity-60 mt-[1rem]">
            Суббота: <span className="text-yellow-400">09:00 - 12:00</span>
          </p>
          <div className="flex mt-[2rem] items-center space-x-3">
            <FaTelegram className="w-[1.5rem] h-[1.5rem] text-blue-300" />
            <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-300" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-white opacity-50 mt-[1.5rem]">
          MusMaxim.2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
