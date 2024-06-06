import Link from "next/link";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[10vh] bg-slate-50">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">
            BurgerBite
          </h1>
        </div>
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-semibold hover:text-orange-400">
            <Link href="/">Главная</Link>
          </li>
          <li className="text-[20px] font-semibold hover:text-orange-400">
            <Link href="/">Магазин</Link>
          </li>
          <li className="text-[20px] font-semibold hover:text-orange-400">
            <Link href="/">О нас</Link>
          </li>
          <li className="text-[20px] font-semibold hover:text-orange-400">
            <Link href="/">Контакты</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center text-[14px] sm:text-[16px] text-white px-6 py-2 sm:px-8 sm:py-3
            bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out space-x-2 rounded-md"
          >
            <span>
              <BiCycling className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
            </span>
            <span className="font-bold">Доставка</span>
          </button>
          <button
            className="flex items-center px-6 py-2 sm:px-6 sm:py-3
            bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-md"
          >
            <BiShoppingBag className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-300" />
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
