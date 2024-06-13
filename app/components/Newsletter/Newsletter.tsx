import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
          Подпишись на нашу рассылку
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Здесь нужно красиво расписать, почему нужно подписаться на нашу
          рассылку
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          <input
            type="email"
            placeholder="Ваша почта"
            className="px-5 py-4 bg-gray-400 w-[40%] otline-none rounded-lg placeholder:text-black"
          />
          <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-lg">
            Подпишись!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
