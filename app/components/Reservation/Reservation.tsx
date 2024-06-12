import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="pr-[5rem] relative pb-[5rem] mb[4rem] bg-[url(/images/bg-black.jpg)] bg-coverbg-center">
      <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
      <div className="w-[80%] relative z-[20] mx-auto grid grid-cols 1 lg:grid-cols-2 items-center pag-[3rem]">
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            Хотите вкусно подкрепиться? Вы знаете куда обратиться!
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
            Здесь идет описание того, почему у нас легко и просто заказать
            доставку еды и почему это нужно сделать прямо здесь и сейчас.
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex justify-center items-center flex-col">
              <BiPhone className="w-[2rem] h-[2rem] text-white" />
            </div>
            <div>
              <h1 className="text-[25px] text-white font-semibold">
                Доставка круглосуточно!
              </h1>
              <h2 className="text-yellow-600 text-[30px] font bold">
                8 (123) 456-789
              </h2>
            </div>
          </div>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
