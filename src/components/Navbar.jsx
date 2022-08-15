import Avatar from "./nav-Comp/Avatar";
import Socials from "./nav-Comp/Socials";
import { Link } from "react-scroll";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { useEffect } from "react";

function Navbar({ active, onClick, Menus }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  useEffect(() => {
    if (nav === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [nav]);
  const handleCLick = (i) => {
    onClick(i);
    setNav(false);
  };
  return (
    <div className=" lg:w-[20%] lg:fixed bg-primary h-screen">
      {/* mobile menu */}
      <div className="lg:hidden absolute pl-4 pt-4 z-20">
        <label class="btn btn-circle bg-primary hover:bg-primary swap swap-rotate ring-1 ring-white">
          <input type="checkbox" onClick={handleNav} checked={nav} />
          <VscMenu className="swap-off fill-white w-6 h-6" />
          <VscChromeClose className="swap-on fill-white w-6 h-6" />
        </label>
      </div>
      <ul
        className={
          !nav
            ? "lg:hidden translate-y-full text-white bg-primary fixed duration-500 w-full h-screen top-0 left-0 flex flex-col justify-center items-center px-auto z-10"
            : "lg:hidden translate-y-0 text-white bg-primary fixed duration-500 w-full h-screen top-0 left-0 flex flex-col justify-center items-center px-auto z-10"
        }
      >
        <div>
          {Menus.map((menu, i) => (
            <Link
              to={menu.name}
              smooth={true}
              duration={700}
              onClick={() => handleCLick(i)}
            >
              <li key={i} className="py-7 cursor-pointer">
                <span className="text-2xl pr-4">
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span className="text-2xl">{" " + menu.name}</span>
              </li>
            </Link>
          ))}
        </div>
      </ul>
      <Avatar />
      <Socials />
      {/* large screen menu */}
      <ul className="hidden lg:text-white lg:flex lg:flex-col lg:h-fit lg:my-auto">
        {/* indicator */}
        <span
          className={`bg-white border-4 border-white indicator absolute rounded-lg ${Menus[active].dis} duration-500`}
        >
          <span className="w-6 h-6 bg-transparent absolute -top-[28px] -right-[4px] rounded-br-lg shadow-myShadow1"></span>
          <span className="w-6 h-6 bg-transparent absolute top-[44px] -right-[4px] rounded-tr-lg shadow-myShadow2"></span>
        </span>
        {/* menu items */}
        {Menus.map((menu, i) => (
          <Link
            to={menu.name}
            smooth={true}
            duration={700}
            onClick={() => onClick(i)}
          >
            <li key={i} className="cursor-pointer flex pl-[85px] w-full my-3">
              <a className="flex justify-center align-center text-center">
                <span
                  className={`text-2xl duration-500 ${
                    i === active && "-ml-6 text-primary"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span
                  className={`${
                    active === i
                      ? "translate-x-4 duration-700 opacity-100 text-primary"
                      : "opacity-100 translate-x-8"
                  }`}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
