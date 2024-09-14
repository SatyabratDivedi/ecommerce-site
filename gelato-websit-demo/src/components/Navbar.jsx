import {useState} from "react";
import {HiBars3} from "react-icons/hi2";
import {RxCross2} from "react-icons/rx";
import {TbWorld} from "react-icons/tb";
import {IoMdCart} from "react-icons/io";
import {IoPerson} from "react-icons/io5";
import {FaAngleDown} from "react-icons/fa6";
import {MdErrorOutline} from "react-icons/md";
import {FaAngleRight} from "react-icons/fa6";
import {MdHeadsetMic} from "react-icons/md";
import {FaArrowLeft} from "react-icons/fa6";
import navData from "./../NavbarLinks.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = useState({
    productSection: false,
    sellingSection: false,
    tools_App: false,
    pricing: false,
    resources: false,
    proSeller: false,
    gelatoConnect: false,
  });

  const [miniDeviceOpen, setMiniDeviceOpen] = useState({
    productSection: false,
    sellingSection: false,
    tools_App: false,
    pricing: false,
    resources: false,
    proSeller: false,
    gelatoConnect: false,
  });
  const isAnyOpen = Object.values(open).some((value) => value == true);

  const openHandlerToggle = (section) => {
    if (section == "proSeller") return;
    setOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };
  const miniDeviceOpenHandlerToggle = (section) => {
    if (section == "proSeller") return;
    setMiniDeviceOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };

  

  return (
    <>
      <div className="bg-black text-white font-thin w-full text-center py-2 border-b-2 border-white">
        <a className="flex text-[.7rem] lg:text-[1rem] sm:text-sm items-center justify-center underline">
          FREE SHIPPING for orders over $300. Order today <MdErrorOutline />
        </a>
      </div>
      <nav className=" sticky top-0 font-bold z-50  bg-white border">
        <div className=" px-[1rem] md:px-[6rem] py-3 lg:px-[8rem] flex justify-between items-center border-gray-200 border-b-2">
          <div className="flex justify-between items-center gap-4">
            <div className="lg:hidden ml-2 mt-2">
              <button onClick={() => setMenuOpen(true)} className="focus:outline-none hover:bg-slate-300 p-1 rounded-2xl">
                <HiBars3 className="size-6" />
              </button>
            </div>
            <img className=" w-20 sm:w-24 md:w-32" src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" alt="gelato_logo" />
          </div>
          <div className=" flex gap-2">
            <ul className="lg:flex hidden lg:items-center absolute lg:relative bg-white w-full lg:w-auto top-16 lg:top-auto left-0 lg:left-auto lg:z-auto shadow-lg lg:shadow-none">
              <li className="flex items-center gap-1 text-sm  hover:bg-[#dcdcdc] px-3 py-[.35rem] cursor-pointer rounded-3xl">
                <MdHeadsetMic className="text-2xl" /> Contact us
              </li>
              <li className="flex items-center gap-1 text-sm  hover:bg-[#dcdcdc] px-3 py-[.35rem] cursor-pointer rounded-3xl">
                <TbWorld className="text-2xl" /> IN/INR <FaAngleDown className="text-[.6rem] ml-2" />
              </li>
              <li className="flex items-center gap-1 text-sm  hover:bg-[#dcdcdc] px-3 py-[.35rem] cursor-pointer rounded-3xl">
                <IoMdCart className="text-2xl" /> Cart
              </li>
              <li className="flex items-center gap-1 text-sm  hover:bg-[#dcdcdc] px-3 py-[.55rem] cursor-pointer rounded-3xl">
                <IoPerson className="text-xl" /> Sign in
              </li>
            </ul>
            <button className="bg-black pb-2 text-white px-4 hover:text-gray-300 font-semibold text-[.8rem]  py-1 rounded-3xl">Sign up for free</button>
          </div>
        </div>
        <div className="lg:flex px-28 hidden">
          {navData.map((data) => (
            <div
              key={data.id}
              onMouseEnter={() => openHandlerToggle(data.secondName)}
              onMouseLeave={() => openHandlerToggle(data.secondName)}
              className=" relative p-2 xl:p-4 text-sm hover:bg-[#dcdcdc]"
            >
              <div className="flex items-center gap-2 cursor-pointer ">
                {data.mainSection} {data.Children.length > 0 && (open[data.secondName] ? <FaAngleDown className="rotate-180 duration-300" /> : <FaAngleDown className=" duration-300" />)}
              </div>
              {open[data.secondName] && (
                <div className="absolute topArrow z-50 top-12 left-0 bg-[#ffffff] w-[200px] rounded-bl-xl flex flex-col justify-evenly p-2">
                  {data.Children.map((child) => (
                    <div className="cursor-pointer duration-200 hover:bg-[#e9e9e9] rounded-md p-3 " key={child}>
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* mobile navbar slider start */}
        <div>
          <div
            className={`${menuOpen ? "block" : "hidden"} lg:hidden space-x-6 lg:items-center
             absolute lg:relative  w-[100%]  lg:w-auto top-0 lg:top-auto 
           left-0 lg:left-auto z-10 lg:z-auto shadow-lg lg:shadow-none transition duration-1000`}
          >
            <div className=" z-50 flex transition duration-1000">
              <div className=" w-[100%] sm:w-[60%] bg-white h-screen max-w-[400px]">
                <div className="flex  justify-between py-5 px-5">
                  <button onClick={() => setMenuOpen(false)} className="focus:outline-none hover:bg-gray-300 px-1 cursor-pointer rounded-2xl">
                    <RxCross2 className="size-6" />
                  </button>
                  <div className="flex items-center gap-1 text-sm  hover:bg-gray-300 px-2 cursor-pointer rounded-2xl">
                    <TbWorld className=" text-3xl" /> <span className="text-[.8rem] min-w-fit"> IN/INR</span> <FaAngleDown className="text-[.8rem] ml-2" />
                  </div>
                  <div className="w-px h-8 bg-gray-300  "></div>
                  <div className="flex items-center gap-1 text-sm hover:bg-gray-300 px-2 cursor-pointer rounded-2xl">
                    <IoMdCart className="text-xl" /> Cart
                  </div>
                </div>
                <hr />
                <div className="  flex justify-between py-5 px-3 ">
                  <button className="bg-black pb-2 text-white px-2 hover:text-gray-300 font-semibold text-[.6rem] md:text-sm  py-1 rounded-3xl">Sigh up for free</button>
                  <div className="w-px h-8 bg-gray-300 mr-4 "></div>
                  <div className="flex items-center gap-3 text-sm hover:bg-gray-300 px-2 cursor-pointer rounded-2xl">
                    <IoPerson className="text-[1.1rem]" /> Sign in
                  </div>
                </div>
                <hr />
                {/* miniDeviceOpen child page open section */}
                <div className="mt-3">
                  {navData.map((data) => (
                    <div key={data}>
                      <li
                        onClick={() => miniDeviceOpenHandlerToggle(data.secondName)}
                        className=" py-2 lg:py-0 lg:px-0 flex justify-between items-center cursor-pointer duration-200 text-sm hover:bg-gray-200 px-6 "
                      >
                        {data.mainSection} <FaAngleRight className="text-sm" />
                      </li>
                      {miniDeviceOpen[data.secondName] && (
                        <div className="absolute bg-white top-0 left-0 md:w-[50%] width h-full p-4">
                          <button
                            onClick={() => miniDeviceOpenHandlerToggle(data.secondName)}
                            className="
                          focus:outline-none hover:bg-gray-300 p-1 cursor-pointer rounded-full"
                          >
                            <FaArrowLeft onClick={() => setMenuOpen(true)} className="size-6" />
                          </button>
                          {data.Children.map((child) => (
                            <div key={child} className="hover:bg-gray-200 p-2 w-[200px]">
                              <div>{child}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div onClick={() => setMenuOpen(false)} className="w-full bg-slate-400 opacity-30 h-screen "></div>
            </div>
          </div>
        </div>
      </nav>
      {isAnyOpen && <div className="fixed top-12 h-screen w-screen bg-gray-700 opacity-20"></div>}
    </>
  );
};

export default Navbar;
