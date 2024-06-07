"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={6000}
      centerMode={false}
      infinite
      itemClass="item"
      showDots={true}
    >
      <div className="w-[100%] h-[60vh] flex items-center justify-center flex-col bg-green-700 clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={BurgerImg1} alt="Burger 1" className="hidden md:block" />
          <div>
            <h1 className="text-[30px] lg:text-[40px] font-semibold text-yellow-400 mb-[1rem]">
              Сезонная Пушка
            </h1>
            <h1 className="text-[60px] lg:text-[90px] leading-[4rem] lg:leading-[5rem] font-bold text-white">
              Супер <br /> бургер
            </h1>
            <p className="mt-[2rem] text-white text-opacity-80 text-[18px]">
              Приготовлен из самых лучших ингридиентов, отборного мяса и свежих
              овощей. Популярные соусы на Ваш выбор добавят уникальный вкус!
            </p>
            <button
              className="flex items-center text-[14px] text-white px-8 mt-[2rem] py-2
            bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out space-x-2 rounded-md"
            >
              <span>
                <BiCycling className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
              </span>
              <span className="font-bold">Доставка</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[60vh] flex items-center justify-center flex-col bg-yellow-700 clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={BurgerImg2} alt="Burger 2" className="hidden md:block"/>
          <div>
            <h1 className="text-[30px] lg:text-[40px] font-semibold text-yellow-400 mb-[1rem]">
              Премиальный продукт
            </h1>
            <h1 className="text-[60px] lg:text-[90px] leading-[4rem] lg:leading-[5rem] font-bold text-white">
              Лучший <br /> чизбургер
            </h1>
            <p className="mt-[2rem] text-white text-opacity-80 text-[18px]">
              Стоит один раз попробовать, чтобы понять, вкуснее вы еще ничего не ели. Второй чизбургер бесплатно!
            </p>
            <button
              className="flex items-center text-[14px] text-white px-8 mt-[2rem] py-2
            bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out space-x-2 rounded-md"
            >
              <span>
                <BiCycling className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
              </span>
              <span className="font-bold">Доставка</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
