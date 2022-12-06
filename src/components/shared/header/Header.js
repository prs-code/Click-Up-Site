import React from 'react';
//icons
import clickIcon from "../../../icons/Header-click-up-icon.svg.svg";
const downArrow = 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-3 h-3 ml-2 align-baseline">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
const hamberMenu = 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>



const Header = () => {
  return (
    <div className="h-[100px] w-full border-b-2 flex">
        <div className="h-full w-3/5 flex justify-evenly items-center pl-10">
            <div>
                <img 
                    src={clickIcon} 
                    alt="icon"
                    className="cursor-pointer w-36 h-9"
                />
            </div>
            <ul className="h-full font-TEXT font-bold text-sm hidden md:flex md:justify-center md:items-center">
                <li className="liNav">
                    Product
                    {downArrow}
                </li>
                <li className="liNav">
                    Solutions
                    {downArrow}
                </li>
                <li className="liNav">
                    Learn
                    {downArrow}
                </li>
                <li className="mx-3 cursor-pointer">
                    Pricing
                </li>
                <li className="mx-3 cursor-pointer">
                    Enterprise
                </li>
            </ul>
        </div>
        <div className="w-2/5 font-TEXT text-sm leading-4 font-extrabold pr-5 hidden md:flex md:justify-center md:items-center">
            <button className="btnNav">
                Contact Sales
            </button>
            <button className="btnNav bg-white text-[#a55eaa] shadow-[0px_12px_25px_0px_rgba(98, 57, 121, 0.3)] rounded-lg py-3 px-4">
                Sign Up
            </button>
            <button className="btnNav text-white bg-[#B23DED] shadow-[0px_12px_25px_0px_rgba(98, 57, 121, 0.3)] rounded-lg py-3 px-4">
                Log in
            </button>
        </div>
    </div>
  )
}

export default Header;