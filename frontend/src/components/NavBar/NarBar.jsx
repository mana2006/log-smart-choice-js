import logoLogrenove from "../../assets/mobile/LogRenove_logo.svg";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="flex items-center px-4 pt-5 pb-4">
      <div className="">
        <img src={logoLogrenove} alt="logo" className="w-[75%]"/>
      </div>
      <div className="ml-auto">
        <IoIosMenu size={"32px"} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
