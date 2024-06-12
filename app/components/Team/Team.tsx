import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Познакомтесь с нашей <span className="text-red-600">командой</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] item-center">
        <TeamCard
          image="/images/t1.jpg"
          name="Андрей Иванов"
          position="Главный супер шеф"
        />
        <TeamCard
          image="/images/t2.jpg"
          name="Василиcа Иванова"
          position="Главная по картошечке фри"
        />
        <TeamCard
          image="/images/t3.jpg"
          name="Петр Иванов"
          position="Просто сын супер шефа"
        />
      </div>
    </div>
  );
};

export default Team;
