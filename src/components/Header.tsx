import React, { useState } from "react";
import { MdLogin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Header: React.FC = () => {
  const [isHamburger, setIsHamburger] = useState<boolean>(false);
  const hambrugerHandler = () => {
    setIsHamburger(!isHamburger);
  };
  return (
    <header
      className="w-[100%] bg-black text-xl font-Montserrat font-semibold text-white
     p-[16px] md:px-[100px] md:flex justify-between items-center shadow-xl"
    >
      {!isHamburger &&<GiHamburgerMenu onClick={hambrugerHandler}/>}
      {isHamburger &&(
        <div className="flex justify-between">
          <div className="mx-auto">
      <nav>
        <ul className="lg:flex lg:space-x-8">
          <li>Community</li>
          <li>Books</li>
          <li>Recipe Index</li>
          <li>Popular</li>
        </ul>
      </nav>
      <div className="lg:space-x-8 lg:flex">
        <a href="#" className="flex items-center gap-1">
          <MdLogin className="text-[#509E2F]" /> Register
        </a>
        <a href="#" className="flex items-center gap-1">
          <IoPerson className="text-[#509E2F]" />
          Login
        </a>
      </div>
      </div>
      <RxCross1 onClick={hambrugerHandler}/>
      </div>)}
    </header>
  );
};

export default Header;
