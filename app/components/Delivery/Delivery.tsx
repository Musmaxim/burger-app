import Image from "next/image";
import React from "react";
import DeliveryImage from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div>
          <Image src={DeliveryImage} alt="delivery" />
        </div>
        <div>
          <h1 className="uppercase text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Ваш <span className="text-red-600">любимый бургер</span> уже в пути!
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Здесь мы рассказываем о том, какая замечательная у нас доставка.Она
            у нас очень быстрая и сотрудники никогда не опаздывают. Но если вот
            прям опоздают, значит еда будет за наш счет!
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Доставка за 30 минут!
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              От 3000 рублей доставим бесплатно!
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Доставим до двери в любой район!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
