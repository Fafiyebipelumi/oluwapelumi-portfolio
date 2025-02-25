import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// define props type
type NavProps = {
  showNav: boolean;
  closeNav: () => void
}

const MobileNav: React.FC<NavProps> = ({showNav, closeNav}) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      {/* Nav Links */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[50%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
          {navLinks.map((nav) => (
            <Link href={nav.url} key={nav.id}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{nav.label}</p>
            </Link>
          ))}
          {/* Close Button */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer' />
          {/* <button onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'>X</button> */}
      </div>
    </div>
  );
};

export default MobileNav;
