import Link from "next/link";
import { ImCross } from "react-icons/im";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navStyle} top-0 bottom-0 left-0 right-0 transition-all duration-500 
    h-[100vh] bg-[#363030da] z-[1002]`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white"
      />
      <div
        className={`flex ${navStyle} flex-col items-center justify-center w-[70%] h-[100%] bg-[#4485d5b5] transition-all duration-500 delay-200`}
      >
        <ul className="space-y-10">
          <li className="text-[35px] font-semibold hover:text-orange-400">
            <Link href="/">Главная</Link>
          </li>
          <li className="text-[35px] font-semibold hover:text-orange-400">
            <Link href="/">Магазин</Link>
          </li>
          <li className="text-[35px] font-semibold hover:text-orange-400">
            <Link href="/">О нас</Link>
          </li>
          <li className="text-[35px] font-semibold hover:text-orange-400">
            <Link href="/">Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
